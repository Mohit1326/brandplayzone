// ============================================================
//  BrandPlayzone — App State + Router + Game Logic
// ============================================================
window.BPZ = window.BPZ || {};

// ── DEFAULT STATE ────────────────────────────────────────────
BPZ.state = {
  screen: 'landing',
  player: { name: '', experienceLevel: '' },
  world:  { country: 'India', category: 'Personal Care', subCategory: '' },
  brand:  { name: '', companyArchetype: '', track: '', positioning: '', budgetTier: '', budgetCrore: 0 },
  targetSegmentId: null,
  selectedChannels: [],          // [{id, budgetPct}]
  marketingMix: { tv: 30, digital: 30, trade: 30, pr: 10 },
  launchedSKUs: [],
  currentYear: 0,
  maxYears: 3,
  currentEvent: null,
  eventResponse: null,
  usedEventIds: [],
  history: [],                   // metrics snapshot per year
  metrics: {
    awareness: 5, distribution: 0, trial: 0, repeat: 0,
    marketShare: 0, revenue: 0, grossMarginCrore: 0,
    aAndPCrore: 0, ebitdaCrore: 0,
    brandEquity: { relevance: 20, differentiation: 30, esteem: 15, knowledge: 5 },
    brandEquityIndex: 17, nps: 0,
  },
  coachMessage: '',
  topicId: null,
  caseId: null,

  // ── RATIONALE GATE STATE ─────────────────────────────────
  pendingEventOption: null,      // option object player has highlighted but not confirmed
  rationaleStep: 0,              // 0=picking, 1=Q1 shown, 2=Q2 shown, 3=ready to lock
  rationaleScore: 0,             // correct answers (0–2)
  rationaleLastAnswer: null,     // {questionNum, answerId, correct}

  // ── DEBRIEF STATE ────────────────────────────────────────
  debriefQuestions: [],          // 2 question objects from rationaleData.debrief
  debriefStep: 0,                // 0=Q1, 1=Q2, 2=done
  debriefScore: 0,               // correct debrief answers
  debriefDone: false,
  debriefLastAnswer: null,       // {answerId, correct, insight}

  // ── PER-YEAR MIX MEMORY ──────────────────────────────────
  mixPerYear: {},                // { 1: {tv,digital,trade,pr}, 2: {...} }

  // ── VALUE CHAIN VAULT ────────────────────────────────────
  valueChainPillar: null,        // currently viewed pillar id
  valueChainCaseId: null,        // currently viewed case id
};

// ── ROUTER ──────────────────────────────────────────────────
BPZ.navigate = function(screen, extra) {
  BPZ.state.screen = screen;
  if (extra) Object.assign(BPZ.state, extra);
  BPZ.render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

BPZ.render = function() {
  const views = {
    'landing':           BPZ.ui.landing,
    'setup-player':      BPZ.ui.setupPlayer,
    'world-builder':     BPZ.ui.worldBuilder,
    'brand-studio':      BPZ.ui.brandStudio,
    'segments':          BPZ.ui.segments,
    'channels':          BPZ.ui.channels,
    'marketing-mix':     BPZ.ui.marketingMix,
    'event-card':        BPZ.ui.eventCard,
    'dashboard':         BPZ.ui.dashboard,
    'final-report':      BPZ.ui.finalReport,
    'learn-hub':         BPZ.ui.learnHub,
    'learn-topic':       BPZ.ui.learnTopic,
    'case-study':        BPZ.ui.caseStudy,
    'debrief-questions': BPZ.ui.debriefQuestions,
    'value-chain':       BPZ.ui.valueChain,
    'value-chain-case':  BPZ.ui.valueChainCase,
    'market-select':     BPZ.ui.marketSelect,
    'learn-hub-korea':   BPZ.ui.learnHubKorea,
    'learn-topic-korea': BPZ.ui.learnTopicKorea,
    'case-study-korea':  BPZ.ui.caseStudyKorea,
  };
  const fn  = views[BPZ.state.screen];
  const app = document.getElementById('app');
  if (fn && app) {
    app.innerHTML = fn();
    if (BPZ.state.screen === 'dashboard') {
      requestAnimationFrame(() => BPZ.ui.initDashboardCharts());
    }
  }
};

// ── CHANNEL HELPERS ──────────────────────────────────────────
BPZ.toggleChannel = function(channelId) {
  const idx = BPZ.state.selectedChannels.findIndex(c => c.id === channelId);
  if (idx >= 0) {
    BPZ.state.selectedChannels.splice(idx, 1);
  } else {
    const defaultPct = Math.min(20, Math.floor(80 / (BPZ.state.selectedChannels.length + 1)));
    BPZ.state.selectedChannels.push({ id: channelId, budgetPct: defaultPct });
  }
  BPZ.render();
};

BPZ.setChannelBudget = function(channelId, pct) {
  const ch = BPZ.state.selectedChannels.find(c => c.id === channelId);
  if (ch) ch.budgetPct = pct;
};

// ── MARKETING MIX HELPER ─────────────────────────────────────
BPZ.setMix = function(key, val) {
  BPZ.state.marketingMix[key] = val;
  const mix    = BPZ.state.marketingMix;
  const budget = BPZ.state.brand.budgetCrore;
  const total  = mix.tv + mix.digital + mix.trade + mix.pr;

  // % label
  const pctEl   = document.getElementById('mix-pct-' + key);
  if (pctEl) pctEl.textContent = val + '%';

  // ₹ absolute spend — updates live as slider moves
  const spendEl = document.getElementById('mix-spend-' + key);
  if (spendEl) spendEl.textContent = '₹' + (budget * val / 100).toFixed(1) + ' Cr';

  // Total bar
  const totalEl = document.getElementById('mix-total');
  if (totalEl) {
    totalEl.textContent = `${total}% ${total === 100 ? '✓' : `(${total > 100 ? '+' : ''}${total - 100} off)`}`;
    totalEl.style.color = total === 100 ? '#10b981' : '#f43f5e';
  }

  // Launch button
  const btnEl = document.getElementById('launch-btn');
  if (btnEl) {
    btnEl.disabled = total !== 100;
    btnEl.style.opacity = total === 100 ? '1' : '0.5';
    btnEl.style.cursor  = total === 100 ? 'pointer' : 'not-allowed';
  }
};

// ── BUDGET ADJUSTER (from mix screen) ────────────────────────
BPZ.updateBudget = function(val) {
  const v = parseFloat(val);
  if (isNaN(v) || v <= 0) return;
  BPZ.state.brand.budgetCrore = Math.min(500, Math.max(0.5, v));
  const budget = BPZ.state.brand.budgetCrore;
  const mix    = BPZ.state.marketingMix;

  // Update all spend displays
  ['tv', 'digital', 'trade', 'pr'].forEach(function(k) {
    const el = document.getElementById('mix-spend-' + k);
    if (el) el.textContent = '₹' + (budget * mix[k] / 100).toFixed(1) + ' Cr';
  });

  // Update headline
  const hl = document.getElementById('budget-headline');
  if (hl) hl.textContent = '₹' + budget + ' Crore';
};

// ── LAUNCH BRAND (Year 1 kick-off) ──────────────────────────
BPZ.launchBrand = function() {
  BPZ.state.currentYear = 1;
  // Save Year 1 mix
  BPZ.state.mixPerYear[1] = { ...BPZ.state.marketingMix };
  // Reset rationale state for fresh event card
  BPZ.state.pendingEventOption = null;
  BPZ.state.rationaleStep      = 0;
  BPZ.state.rationaleScore     = 0;
  BPZ.state.rationaleLastAnswer = null;
  const event = BPZ.engine.drawEventCard(1, BPZ.state.usedEventIds);
  BPZ.state.currentEvent   = event;
  BPZ.state.eventResponse  = null;
  BPZ.navigate('event-card');
};

// ── SELECT EVENT OPTION (highlight, show preview + rationale) ─
BPZ.selectEventOption = function(optionId) {
  const event = BPZ.state.currentEvent;
  if (!event) return;
  const option = event.options.find(o => o.id === optionId);
  if (!option) return;

  BPZ.state.pendingEventOption  = option;
  BPZ.state.rationaleStep       = 1;   // show Q1
  BPZ.state.rationaleScore      = 0;
  BPZ.state.rationaleLastAnswer = null;
  BPZ.render();
};

// ── ANSWER RATIONALE QUESTION ────────────────────────────────
BPZ.answerRationale = function(questionNum, answerId) {
  const event  = BPZ.state.currentEvent;
  const option = BPZ.state.pendingEventOption;
  if (!event || !option) return;

  const rationaleBank = BPZ.rationaleData && BPZ.rationaleData.events
    ? BPZ.rationaleData.events[event.id]
    : null;
  const qBank = rationaleBank ? rationaleBank[option.id] : null;
  const qKey  = questionNum === 1 ? 'q1' : 'q2';
  const qData = qBank ? qBank[qKey] : null;

  let correct = false;
  if (qData) {
    const chosen = qData.options.find(o => o.id === answerId);
    correct = chosen ? !!chosen.correct : false;
  }

  if (correct) BPZ.state.rationaleScore += 1;

  BPZ.state.rationaleLastAnswer = { questionNum, answerId, correct };

  // Advance step: after Q1 answered → show Q2; after Q2 → ready to lock
  if (questionNum === 1) {
    BPZ.state.rationaleStep = 2;
  } else {
    BPZ.state.rationaleStep = 3;
  }
  BPZ.render();
};

// ── CONFIRM EVENT DECISION (lock in after rationale) ─────────
BPZ.confirmEventDecision = function() {
  if (!BPZ.state.pendingEventOption) return;
  BPZ.state.eventResponse      = BPZ.state.pendingEventOption;
  BPZ.state.pendingEventOption = null;
  BPZ.state.rationaleStep      = 0;
  BPZ.resolveEvent();
};

// ── RESOLVE EVENT → RUN SIMULATION ──────────────────────────
BPZ.resolveEvent = function() {
  const decisions = {
    selectedChannels: BPZ.state.selectedChannels,
    marketingMix:     BPZ.state.marketingMix,
  };
  const prevMetrics = { ...BPZ.state.metrics };
  const newMetrics  = BPZ.engine.runYear(BPZ.state, decisions, BPZ.state.eventResponse);

  BPZ.state.history.push({ ...newMetrics });

  if (BPZ.state.currentEvent) {
    BPZ.state.usedEventIds.push(BPZ.state.currentEvent.id);
  }

  BPZ.state.coachMessage = BPZ.engine.buildCoachMessage(
    BPZ.state, decisions, newMetrics, BPZ.state.eventResponse
  );

  BPZ.state.metrics      = { ...newMetrics };
  BPZ.state._prevMetrics = prevMetrics;   // save for debrief context
  BPZ.state.eventResponse = null;
  BPZ.state.currentEvent  = null;

  BPZ.navigate('dashboard');
};

// ── START DEBRIEF (called from dashboard "Continue" button) ──
BPZ.startDebrief = function() {
  const year    = BPZ.state.currentYear;
  const metrics = BPZ.state.metrics;
  const prev    = BPZ.state._prevMetrics || metrics;
  const decisions = {
    selectedChannels: BPZ.state.selectedChannels,
    marketingMix:     BPZ.state.marketingMix,
  };

  const questions = BPZ.engine.getDebriefQuestions(year, metrics, prev, decisions);

  BPZ.state.debriefQuestions  = questions;
  BPZ.state.debriefStep       = 0;
  BPZ.state.debriefScore      = 0;
  BPZ.state.debriefDone       = false;
  BPZ.state.debriefLastAnswer = null;

  BPZ.navigate('debrief-questions');
};

// ── ANSWER DEBRIEF QUESTION ──────────────────────────────────
BPZ.answerDebrief = function(answerId) {
  const step = BPZ.state.debriefStep;
  const q    = BPZ.state.debriefQuestions[step];
  if (!q) return;

  const chosen  = (q.options || []).find(o => o.id === answerId);
  const correct = chosen ? !!chosen.correct : false;
  const insight = q.insight || '';

  if (correct) BPZ.state.debriefScore += 1;
  BPZ.state.debriefLastAnswer = { answerId, correct, insight };

  if (step + 1 >= BPZ.state.debriefQuestions.length) {
    BPZ.state.debriefDone = true;
  } else {
    BPZ.state.debriefStep += 1;
    BPZ.state.debriefLastAnswer = null; // reset for next question display
  }
  BPZ.render();
};

// ── SKIP DEBRIEF ANSWER (show next question) ─────────────────
BPZ.nextDebriefQuestion = function() {
  BPZ.state.debriefStep       += 1;
  BPZ.state.debriefLastAnswer  = null;
  BPZ.render();
};

// ── COMPLETE DEBRIEF → advance to next year or final report ──
BPZ.completeDebrief = function() {
  const year = BPZ.state.currentYear;
  if (year >= BPZ.state.maxYears) {
    BPZ.navigate('final-report');
    return;
  }
  BPZ.startNextYear();
};

// ── START NEXT YEAR ──────────────────────────────────────────
BPZ.startNextYear = function() {
  BPZ.state.currentYear += 1;
  const nextYear = BPZ.state.currentYear;

  // Reset rationale state for fresh event card
  BPZ.state.pendingEventOption  = null;
  BPZ.state.rationaleStep       = 0;
  BPZ.state.rationaleScore      = 0;
  BPZ.state.rationaleLastAnswer = null;

  // Navigate to marketing-mix first so player can adjust for new year
  BPZ.navigate('marketing-mix');
};

// ── PROCEED TO EVENT (called from marketing-mix "Launch" btn) ─
BPZ.proceedToEvent = function() {
  const year = BPZ.state.currentYear;
  // Save mix for this year
  BPZ.state.mixPerYear[year] = { ...BPZ.state.marketingMix };

  const event = BPZ.engine.drawEventCard(year, BPZ.state.usedEventIds);
  BPZ.state.currentEvent  = event;
  BPZ.state.eventResponse = null;
  BPZ.navigate('event-card');
};

// ── RESET GAME ───────────────────────────────────────────────
BPZ.resetGame = function() {
  BPZ.state = {
    screen: 'landing',
    player: { name: '', experienceLevel: '' },
    world:  { country: 'India', category: 'Personal Care', subCategory: '' },
    brand:  { name: '', companyArchetype: '', track: '', positioning: '', budgetTier: '', budgetCrore: 0 },
    targetSegmentId: null,
    selectedChannels: [],
    marketingMix: { tv: 30, digital: 30, trade: 30, pr: 10 },
    launchedSKUs: [],
    currentYear: 0, maxYears: 3,
    currentEvent: null, eventResponse: null, usedEventIds: [],
    history: [],
    metrics: {
      awareness: 5, distribution: 0, trial: 0, repeat: 0,
      marketShare: 0, revenue: 0, grossMarginCrore: 0,
      aAndPCrore: 0, ebitdaCrore: 0,
      brandEquity: { relevance: 20, differentiation: 30, esteem: 15, knowledge: 5 },
      brandEquityIndex: 17, nps: 0,
    },
    coachMessage: '', topicId: null, caseId: null,
    pendingEventOption: null, rationaleStep: 0,
    rationaleScore: 0, rationaleLastAnswer: null,
    debriefQuestions: [], debriefStep: 0,
    debriefScore: 0, debriefDone: false, debriefLastAnswer: null,
    mixPerYear: {},
    valueChainPillar: null, valueChainCaseId: null,
  };
  BPZ.navigate('landing');
};

// ── INIT ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function() {
  BPZ.render();
});
