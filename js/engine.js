// ============================================================
//  BrandPlayzone — Deterministic Simulation Engine
// ============================================================
window.BPZ = window.BPZ || {};

BPZ.engine = {

  /**
   * Run one year of simulation.
   * @param {Object} state  — full game state
   * @param {Object} decisions — { channelBudgets, marketingMix }
   * @param {Object|null} eventResponse — chosen event option or null
   * @returns {Object} — new metrics snapshot
   */
  runYear(state, decisions, eventResponse) {
    const { brand, targetSegmentId, currentYear } = state;
    const segment  = BPZ.data.segments.find(s => s.id === targetSegmentId);
    const subCat   = BPZ.data.subCategories.find(c => c.id === state.world.subCategory);
    const archData = BPZ.data.companyArchetypes.find(a => a.id === brand.companyArchetype);
    const prev     = state.metrics;

    // ── Budget split ────────────────────────────────────────
    const budget   = brand.budgetCrore;
    const mix      = decisions.marketingMix;  // { tv, digital, trade, pr }
    const tvSpend  = budget * mix.tv / 100;
    const digSpend = budget * mix.digital / 100;
    const trSpend  = budget * mix.trade / 100;
    const prSpend  = budget * mix.pr / 100;

    // ── AWARENESS MODEL ─────────────────────────────────────
    // TV: mass reach, multiplied by segment TV affinity
    const tvLift    = tvSpend * 0.75 * (segment ? segment.mediaAffinity.tv : 1.0);
    // Digital: targeted reach, multiplied by segment digital affinity
    const digLift   = digSpend * 0.55 * (segment ? segment.mediaAffinity.digital : 1.0);
    // PR: quality signal, low but real
    const prLift    = prSpend * 0.28;
    // Diminishing returns after 40% base (awareness harder to build at scale)
    const rawAware  = prev.awareness + tvLift + digLift + prLift;
    const newAwareness = Math.min(parseFloat(rawAware.toFixed(1)), 92);

    // ── DISTRIBUTION MODEL ──────────────────────────────────
    let weightedDist = prev.distribution;
    const channels = decisions.selectedChannels;
    const totalChBudget = channels.reduce((s, c) => s + (budget * c.budgetPct / 100), 0);

    channels.forEach(ch => {
      const chData    = BPZ.data.channels.find(c => c.id === ch.id);
      if (!chData) return;
      const chBudget  = budget * ch.budgetPct / 100;
      const entryThresh = chData.entryBudgetCrore;
      // Square-root curve: first rupees matter most
      const distGain  = chData.maxDistPct * Math.sqrt(chBudget / (entryThresh * 3));
      const chReach   = Math.min(distGain, chData.maxDistPct) * chData.revenueWeight;
      weightedDist   += chReach * 0.6; // partial ramp per year
    });
    const newDist = Math.min(parseFloat(weightedDist.toFixed(1)), 85);

    // ── POSITIONING FIT ─────────────────────────────────────
    // How well does brand positioning match target segment preference?
    const posMap   = { premium: 3, masstige: 2, mass: 1, value: 0 };
    const segPref  = segment ? posMap[segment.preferredPositioning] : 1;
    const brandPos = posMap[brand.positioning] || 1;
    const fitScore = 1 - (Math.abs(brandPos - segPref) * 0.25); // 0.5–1.0

    // ── TRIAL RATE ──────────────────────────────────────────
    const baseTrialRates = { premium: 12, masstige: 18, mass: 26, value: 33 };
    const baseTrial      = baseTrialRates[brand.positioning] || 18;
    // Trade/BTL boosts trial (in-store promotions, sampling)
    const trialBoost     = trSpend * 0.8;
    const newTrial       = Math.min(
      prev.trial * 0.2 + (baseTrial * fitScore + trialBoost),
      65
    );

    // ── REPEAT RATE ─────────────────────────────────────────
    const qualityScore = archData ? archData.qualityMod : 0.82;
    const baseRepeat   = 22;
    const newRepeat    = Math.min(baseRepeat * qualityScore * fitScore * 1.15, 65);

    // ── MARKET SHARE ────────────────────────────────────────
    // Share = awareness × distribution × trial × repeat × frequency factor
    const freqFactor   = { premium: 0.45, masstige: 0.52, mass: 0.62, value: 0.7 }[brand.positioning] || 0.5;
    const brandVolPct  = (newAwareness / 100) * (newDist / 100) * (newTrial / 100) * (newRepeat / 100) * freqFactor * 100;
    const newShare     = parseFloat(Math.min(brandVolPct, 28).toFixed(2));

    // ── REVENUE ─────────────────────────────────────────────
    const aspMap   = { premium: 420, masstige: 260, mass: 140, value: 72 };
    const asp      = aspMap[brand.positioning] || 200;
    const catVolCr = subCat ? subCat.marketSizeCrore : 22000;
    const revenue  = parseFloat(((newShare / 100) * catVolCr).toFixed(1));

    // ── GROSS MARGIN ────────────────────────────────────────
    const gmPctMap = { premium: 62, masstige: 54, mass: 46, value: 38 };
    const gmPct    = gmPctMap[brand.positioning] || 50;
    const grossMarginCrore = parseFloat((revenue * gmPct / 100).toFixed(1));

    // ── A&P & EBITDA ────────────────────────────────────────
    const aAndPCrore   = budget;
    const fixedCosts   = parseFloat((revenue * 0.12).toFixed(1));  // ~12% fixed overhead
    const ebitdaCrore  = parseFloat((grossMarginCrore - aAndPCrore - fixedCosts).toFixed(1));

    // ── BRAND EQUITY ────────────────────────────────────────
    const prevEq  = prev.brandEquity;
    // Relevance: driven by right segment targeting + brand positioning fit
    const relDelta = fitScore > 0.85 ? 9 : fitScore > 0.7 ? 5 : 2;
    // Differentiation: driven by PR, innovation, unique positioning
    const diffDelta = prSpend > budget * 0.12 ? 7 : 3;
    // Esteem: driven by overall quality perception + media investment
    const estDelta  = (digSpend > budget * 0.25 && qualityScore > 0.85) ? 6 : 3;
    // Knowledge: driven by awareness growth
    const knwDelta  = parseFloat(((newAwareness - prev.awareness) * 0.45).toFixed(1));

    const brandEquity = {
      relevance:        Math.min(prevEq.relevance + relDelta, 100),
      differentiation:  Math.min(prevEq.differentiation + diffDelta, 100),
      esteem:           Math.min(prevEq.esteem + estDelta, 100),
      knowledge:        Math.min(prevEq.knowledge + knwDelta, 100),
    };
    const brandEquityIndex = parseFloat(
      ((brandEquity.relevance + brandEquity.differentiation + brandEquity.esteem + brandEquity.knowledge) / 4).toFixed(1)
    );

    // ── NPS (simulated) ─────────────────────────────────────
    const nps = Math.min(Math.round(brandEquityIndex * 0.55 + newRepeat * 0.3 - 12), 78);

    // ── APPLY EVENT EFFECTS ──────────────────────────────────
    let result = {
      awareness: newAwareness,
      distribution: newDist,
      trial: parseFloat(newTrial.toFixed(1)),
      repeat: parseFloat(newRepeat.toFixed(1)),
      marketShare: newShare,
      revenue,
      grossMarginCrore,
      aAndPCrore,
      ebitdaCrore,
      brandEquity,
      brandEquityIndex,
      nps,
    };

    if (eventResponse) {
      result = BPZ.engine.applyEventEffect(result, eventResponse, budget);
    }

    return result;
  },

  /**
   * Apply a selected event option's metric effects.
   */
  applyEventEffect(metrics, option, budget) {
    const fx = option.metricEffect || {};
    const m  = { ...metrics };

    if (fx.awareMod)  m.awareness     = Math.max(0, Math.min(95, m.awareness + fx.awareMod));
    if (fx.distMod)   m.distribution  = Math.max(0, Math.min(90, m.distribution + fx.distMod));
    if (fx.trialMod)  m.trial         = Math.max(0, Math.min(65, m.trial + fx.trialMod));
    if (fx.shareMod)  m.marketShare   = Math.max(0, Math.min(30, m.marketShare + fx.shareMod));
    if (fx.equityMod) {
      const adj = fx.equityMod;
      m.brandEquity = {
        relevance:       Math.max(0, Math.min(100, m.brandEquity.relevance + adj * 0.8)),
        differentiation: Math.max(0, Math.min(100, m.brandEquity.differentiation + adj)),
        esteem:          Math.max(0, Math.min(100, m.brandEquity.esteem + adj * 0.9)),
        knowledge:       Math.max(0, Math.min(100, m.brandEquity.knowledge + adj * 0.4)),
      };
      m.brandEquityIndex = parseFloat(
        ((m.brandEquity.relevance + m.brandEquity.differentiation + m.brandEquity.esteem + m.brandEquity.knowledge) / 4).toFixed(1)
      );
    }
    if (fx.gmMod) {
      // gmMod is a fractional change (e.g. -0.08 = 8% drop in GM%)
      m.grossMarginCrore = parseFloat((m.grossMarginCrore * (1 + fx.gmMod)).toFixed(1));
      m.ebitdaCrore      = parseFloat((m.grossMarginCrore - m.aAndPCrore - m.revenue * 0.12).toFixed(1));
    }

    // Extra budget spent on event choice → increases total A&P
    if (option.cost && option.cost > 0) {
      m.aAndPCrore  = parseFloat((m.aAndPCrore + option.cost).toFixed(1));
      m.ebitdaCrore = parseFloat((m.ebitdaCrore - option.cost).toFixed(1));
    }

    return m;
  },

  /**
   * Draw an event card appropriate for the current year.
   * Year 1 draws from year:1 events; later years from all.
   */
  drawEventCard(currentYear, usedEventIds = []) {
    const pool = BPZ.data.events.filter(e =>
      e.year <= currentYear && !usedEventIds.includes(e.id)
    );
    if (!pool.length) return null;
    // Deterministic pick: use currentYear as seed index
    const idx = (currentYear - 1) % pool.length;
    return pool[idx];
  },

  /**
   * Build the AI Coach commentary based on decisions + outcomes.
   */
  buildCoachMessage(state, decisions, metrics, eventChoice) {
    const { brand, targetSegmentId } = state;
    const segment  = BPZ.data.segments.find(s => s.id === targetSegmentId);
    const year     = state.currentYear;
    const msgs     = [];

    // ── Opening ──────────────────────────────────────────────
    const grade = BPZ.engine.getGrade(metrics.brandEquityIndex, metrics.marketShare);
    msgs.push(`**Year ${year} Debrief — Overall Grade: ${grade.letter}**`);
    msgs.push(grade.comment);

    // ── Awareness feedback ───────────────────────────────────
    if (metrics.awareness < 15) {
      msgs.push(`📡 **Awareness at ${metrics.awareness}% is low.** You need to be seen before you can be bought. Are you under-invested in reach media (TV or digital) relative to your budget?`);
    } else if (metrics.awareness >= 30) {
      msgs.push(`📡 **Awareness at ${metrics.awareness}% is strong** for year ${year}. You've bought attention — now the job is converting it to trial.`);
    }

    // ── Segment fit feedback ─────────────────────────────────
    if (segment) {
      const posMap  = { premium: 3, masstige: 2, mass: 1, value: 0 };
      const fit     = 1 - Math.abs((posMap[brand.positioning] || 1) - (posMap[segment.preferredPositioning] || 1)) * 0.25;
      if (fit < 0.7) {
        msgs.push(`🎯 **Positioning-segment mismatch detected.** Your brand is positioned as *${brand.positioning}* but your target (${segment.name}) expects *${segment.preferredPositioning}*. Expect lower trial conversion until you bridge this gap.`);
      } else {
        msgs.push(`🎯 Good call targeting ${segment.name} with a *${brand.positioning}* positioning. The fit is working — your trial rate reflects it.`);
      }
    }

    // ── Distribution feedback ────────────────────────────────
    if (decisions.selectedChannels.length < 2) {
      msgs.push(`🗺️ **You're only in ${decisions.selectedChannels.length} channel(s).** In FMCG, the brand that's everywhere wins volume. Consider adding at least one more channel in Year ${year + 1}.`);
    }

    // ── Marketing mix feedback ───────────────────────────────
    const mix = decisions.marketingMix;
    if (mix.trade < 20 && metrics.trial < 18) {
      msgs.push(`🏪 **Your trade/BTL allocation is low (${mix.trade}%).** Low trial rates often trace to poor in-store presence — not just weak awareness. Sampling and shelf placement directly drive first purchases.`);
    }
    if (mix.tv > 60 && segment && segment.mediaAffinity.tv < 0.6) {
      msgs.push(`📺 **Heavy TV investment (${mix.tv}%) on a segment with low TV affinity.** Your target consumer is on Instagram and YouTube, not Star Plus. Reallocate toward digital.`);
    }

    // ── Event choice feedback ────────────────────────────────
    if (eventChoice) {
      if (eventChoice.id === 'ride-wave' || eventChoice.id === 'skip' || eventChoice.id === 'wait-watch') {
        msgs.push(`💡 You chose the cautious path on the event. Sometimes that's right — but watch if competitors capitalise on the same opportunity you passed on.`);
      } else if (eventChoice.id === 'hold-course') {
        msgs.push(`🧠 Bold move — you didn't blink in the price war. This is the right long-term call if your brand equity is strong enough to hold consumers. Watch market share in Q1 of next year closely.`);
      }
    }

    // ── EBITDA feedback ──────────────────────────────────────
    if (metrics.ebitdaCrore < 0) {
      msgs.push(`💸 **EBITDA is negative (₹${Math.abs(metrics.ebitdaCrore)} Cr loss).** That's expected in Year 1 for most brands. The question is: are you investing for growth or just burning? Your revenue trajectory is the answer.`);
    }

    // ── Closing prompt ───────────────────────────────────────
    const prompts = [
      `**Question to reflect on:** If your top competitor saw your Year ${year} results, what would they do differently to attack you?`,
      `**Question to reflect on:** Which single metric, if doubled, would most change your Year ${year + 1} outcome?`,
      `**Question to reflect on:** Is your channel mix aligned with where your target segment actually shops? Check the data.`,
    ];
    msgs.push(prompts[year % prompts.length]);

    return msgs.join('\n\n');
  },

  /**
   * Convert metrics to a letter grade + comment.
   */
  getGrade(equityIndex, marketShare) {
    const score = equityIndex * 0.6 + marketShare * 4;  // weighted composite
    if (score >= 60) return { letter: 'A', comment: 'Exceptional. You\'re building a brand with real equity momentum. Stay disciplined.' };
    if (score >= 45) return { letter: 'B', comment: 'Strong foundations. A few decisions need refinement but the trajectory is good.' };
    if (score >= 30) return { letter: 'C', comment: 'Average. Some decisions worked; others didn\'t. Diagnose the underperformers before Year 2.' };
    if (score >= 18) return { letter: 'D', comment: 'Challenging year. Critical decisions may have misfired. Re-examine your positioning and mix.' };
    return { letter: 'F', comment: 'This brand needs a reset. Study the case studies in the Learn Hub before your next simulation.' };
  },

  /**
   * Run a quick projection for a single event option without mutating state.
   * Returns projected metrics after applying the option's effect.
   */
  previewScenario(state, option) {
    const decisions = {
      selectedChannels: state.selectedChannels,
      marketingMix: state.marketingMix,
    };
    const clone = {
      ...state,
      metrics: {
        ...state.metrics,
        brandEquity: { ...state.metrics.brandEquity },
      },
    };
    return BPZ.engine.runYear(clone, decisions, option);
  },

  /**
   * Pick 2 Socratic debrief questions based on year's performance signals.
   * @returns {Array} — array of 2 question objects from BPZ.rationaleData.debrief
   */
  getDebriefQuestions(year, metrics, prevMetrics, decisions) {
    const db = BPZ.rationaleData.debrief;
    const questions = [];

    // Signal 1 — pick the most pressing issue as Q1
    if (metrics.awareness < 20 && db.lowAwareness) {
      questions.push({ ...db.lowAwareness, signal: 'lowAwareness' });
    } else if (metrics.awareness > 30 && metrics.trial < 15 && db.highAwarenessLowTrial) {
      questions.push({ ...db.highAwarenessLowTrial, signal: 'highAwarenessLowTrial' });
    } else if (metrics.brandEquityIndex < 35 && db.lowEquity) {
      questions.push({ ...db.lowEquity, signal: 'lowEquity' });
    } else if (metrics.ebitdaCrore < 0 && db.negativeEBITDA) {
      questions.push({ ...db.negativeEBITDA, signal: 'negativeEBITDA' });
    } else if (db.strongYear) {
      questions.push({ ...db.strongYear, signal: 'strongYear' });
    }

    // Q2 — always the forward-looking mix strategy question
    if (db.mixForward) {
      questions.push({ ...db.mixForward, signal: 'mixForward' });
    }

    // Fallback: if nothing matched, use first two available templates
    if (questions.length === 0) {
      const keys = Object.keys(db);
      if (keys[0]) questions.push({ ...db[keys[0]], signal: keys[0] });
      if (keys[1]) questions.push({ ...db[keys[1]], signal: keys[1] });
    }

    return questions.slice(0, 2);
  },

};
