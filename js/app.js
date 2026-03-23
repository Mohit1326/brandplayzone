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
    'landing':       BPZ.ui.landing,
    'setup-player':  BPZ.ui.setupPlayer,
    'world-builder': BPZ.ui.worldBuilder,
    'brand-studio':  BPZ.ui.brandStudio,
    'segments':      BPZ.ui.segments,
    'channels':      BPZ.ui.channels,
    'marketing-mix': BPZ.ui.marketingMix,
    'event-card':    BPZ.ui.eventCard,
    'dashboard':     BPZ.ui.dashboard,
    'final-report':  BPZ.ui.finalReport,
    'learn-hub':     BPZ.ui.learnHub,
    'learn-topic':   BPZ.ui.learnTopic,
    'case-study':    BPZ.ui.caseStudy,
  };
  const fn  = views[BPZ.state.screen];
  const app = document.getElementById('app');
  if (fn && app) {
    app.innerHTML = fn();
    // Charts need the DOM to exist first
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
    // Default allocation: equal share up to reasonable cap
    const defaultPct = Math.min(20, Math.floor(80 / (BPZ.state.selectedChannels.length + 1)));
    BPZ.state.selectedChannels.push({ id: channelId, budgetPct: defaultPct });
  }
  BPZ.render();
};

BPZ.setChannelBudget = function(channelId, pct) {
  const ch = BPZ.state.selectedChannels.find(c => c.id === channelId);
  if (ch) ch.budgetPct = pct;
  // No re-render here — slider handles its own label update
};

// ── MARKETING MIX HELPER ─────────────────────────────────────
BPZ.setMix = function(key, val) {
  BPZ.state.marketingMix[key] = val;
  const mix   = BPZ.state.marketingMix;
  const total = mix.tv + mix.digital + mix.trade + mix.pr;
  const totalEl = document.getElementById('mix-total');
  const btnEl   = document.getElementById('launch-btn');
  const pctEl   = document.getElementById('mix-pct-' + key);
  const budget  = BPZ.state.brand.budgetCrore;

  if (pctEl) pctEl.textContent = val + '%';
  if (totalEl) {
    totalEl.textContent = `${total}% ${total === 100 ? '✓' : `(${total > 100 ? '+' : ''}${total - 100} off)`}`;
    totalEl.style.color = total === 100 ? '#10b981' : '#f43f5e';
  }
  if (btnEl) {
    btnEl.disabled = total !== 100;
    btnEl.style.opacity = total === 100 ? '1' : '0.5';
    btnEl.style.cursor  = total === 100 ? 'pointer' : 'not-allowed';
  }
};

// ── LAUNCH BRAND (Year 1 kick-off) ──────────────────────────
BPZ.launchBrand = function() {
  BPZ.state.currentYear = 1;
  // Draw a Year 1 event card
  const event = BPZ.engine.drawEventCard(1, BPZ.state.usedEventIds);
  BPZ.state.currentEvent   = event;
  BPZ.state.eventResponse  = null;
  BPZ.navigate('event-card');
};

// ── RESOLVE EVENT → RUN SIMULATION ──────────────────────────
BPZ.resolveEvent = function() {
  const decisions = {
    selectedChannels: BPZ.state.selectedChannels,
    marketingMix:     BPZ.state.marketingMix,
  };
  const newMetrics = BPZ.engine.runYear(BPZ.state, decisions, BPZ.state.eventResponse);

  // Save history
  BPZ.state.history.push({ ...newMetrics });

  // Track used events
  if (BPZ.state.currentEvent) {
    BPZ.state.usedEventIds.push(BPZ.state.currentEvent.id);
  }

  // Build coach message
  BPZ.state.coachMessage = BPZ.engine.buildCoachMessage(
    BPZ.state, decisions, newMetrics, BPZ.state.eventResponse
  );

  // Update live metrics
  BPZ.state.metrics = { ...newMetrics };
  BPZ.state.eventResponse = null;
  BPZ.state.currentEvent  = null;

  BPZ.navigate('dashboard');
};

// ── START NEXT YEAR ──────────────────────────────────────────
BPZ.startNextYear = function() {
  BPZ.state.currentYear += 1;
  const event = BPZ.engine.drawEventCard(BPZ.state.currentYear, BPZ.state.usedEventIds);
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
  };
  BPZ.navigate('landing');
};

// ── INIT ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function() {
  BPZ.render();
});
