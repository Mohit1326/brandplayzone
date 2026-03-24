// ============================================================
//  BrandPlayzone — UI Views + Event Binding
// ============================================================
window.BPZ = window.BPZ || {};
BPZ.charts = {};

// ── NAV BAR ─────────────────────────────────────────────────
function renderNav(subtitle) {
  const year = BPZ.state.currentYear > 0
    ? `<span class="tag tag-indigo">Year ${BPZ.state.currentYear}</span>`
    : '';
  return `
    <nav style="background:var(--surface);border-bottom:1px solid var(--border);" class="px-6 py-4 flex items-center justify-between sticky top-0 z-50">
      <div class="flex items-center gap-3 cursor-pointer" onclick="BPZ.navigate('landing')">
        <div style="background:linear-gradient(135deg,#6366f1,#4f46e5);width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:13px;color:white;font-family:'Space Grotesk',sans-serif;letter-spacing:-0.5px;">BP</div>
        <div>
          <div class="font-display font-bold text-base leading-tight">BrandPlayzone</div>
          ${subtitle ? `<div style="font-size:11px;color:var(--muted);">${subtitle}</div>` : ''}
        </div>
      </div>
      <div class="flex items-center gap-3">
        ${year}
        <button class="btn-ghost text-sm" onclick="BPZ.navigate('learn-hub')">Learn Hub</button>
        ${BPZ.state.currentYear > 0 ? `<button class="btn-ghost text-sm" onclick="BPZ.navigate('dashboard')">Dashboard</button>` : ''}
      </div>
    </nav>`;
}

// ── PROGRESS STEPPER ────────────────────────────────────────
function renderStepper(current, total) {
  const steps = ['Market', 'Brand', 'Segment', 'Channels', 'Budget'];
  const labels = steps.slice(0, total);
  return `
    <div class="flex items-center gap-2 mb-8">
      ${labels.map((label, i) => {
        const idx = i + 1;
        const done    = idx < current;
        const active  = idx === current;
        const pending = idx > current;
        return `
          <div class="flex items-center gap-2">
            <div class="flex items-center gap-1.5">
              <div style="width:26px;height:26px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;
                ${done    ? 'background:#10b981;color:white;' : ''}
                ${active  ? 'background:#6366f1;color:white;box-shadow:0 0 12px rgba(99,102,241,0.5);' : ''}
                ${pending ? 'background:var(--elevated);color:var(--muted);border:1px solid var(--border);' : ''}">
                ${done ? '✓' : idx}
              </div>
              <span style="font-size:12px;font-weight:${active ? '600' : '400'};color:${active ? 'var(--text)' : 'var(--muted)'};">${label}</span>
            </div>
            ${i < labels.length - 1 ? `<div style="width:24px;height:1px;background:var(--border);"></div>` : ''}
          </div>`;
      }).join('')}
    </div>`;
}

// ════════════════════════════════════════════════════════════
//  LANDING
// ════════════════════════════════════════════════════════════
BPZ.ui = BPZ.ui || {};

BPZ.ui.landing = function() {
  return `
    <div style="min-height:100vh;background:var(--bg);">
      ${renderNav()}
      <div style="max-width:1100px;margin:0 auto;padding:60px 24px 40px;">

        <!-- Hero -->
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 mb-6" style="background:rgba(99,102,241,0.1);border:1px solid rgba(99,102,241,0.25);border-radius:24px;padding:6px 16px;">
            <div class="pulse-dot"></div>
            <span style="font-size:13px;color:#818cf8;font-weight:500;">India · Personal Care · Live</span>
          </div>
          <h1 class="font-display font-bold text-5xl md:text-6xl mb-5 leading-tight">
            Where Brand Managers<br>
            <span class="grad-text">Are Made</span>
          </h1>
          <p style="font-size:18px;color:var(--text-sub);max-width:560px;margin:0 auto 12px;line-height:1.7;">
            Build FMCG brands from zero, test strategies without risk, and learn from real-world brand successes — and disasters.
          </p>
          <p style="font-size:13px;color:var(--muted);">India · Personal Care · Deterministic Simulation · AI Coach Powered</p>
        </div>

        <!-- Dual Track Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-2xl mx-auto">

          <!-- LEARN -->
          <div class="card-hover" onclick="BPZ.navigate('learn-hub')"
            style="background:var(--card);border:1px solid var(--border);border-radius:18px;padding:32px;text-align:center;cursor:pointer;">
            <div style="width:60px;height:60px;background:rgba(34,211,238,0.12);border:1px solid rgba(34,211,238,0.2);border-radius:16px;display:flex;align-items:center;justify-content:center;font-size:28px;margin:0 auto 16px;">📚</div>
            <h2 class="font-display font-bold text-xl mb-2">Learn Hub</h2>
            <p style="color:var(--text-sub);font-size:14px;line-height:1.6;margin-bottom:20px;">
              Brand theory, FMCG frameworks, and the Mishap Vault — real stories of brand wins and disasters.
            </p>
            <div class="flex flex-wrap justify-center gap-2 mb-6">
              <span class="tag tag-cyan">6 Topics</span>
              <span class="tag tag-cyan">6 Case Studies</span>
              <span class="tag tag-cyan">Real Brands</span>
            </div>
            <button class="btn-secondary w-full" style="color:#22d3ee;border-color:rgba(34,211,238,0.3);">Enter Learn Hub →</button>
          </div>

          <!-- PLAY -->
          <div class="card-hover" onclick="BPZ.navigate('setup-player')"
            style="background:var(--card);border:2px solid rgba(99,102,241,0.4);border-radius:18px;padding:32px;text-align:center;cursor:pointer;position:relative;overflow:hidden;">
            <div style="position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#6366f1,#22d3ee);"></div>
            <div style="width:60px;height:60px;background:rgba(99,102,241,0.12);border:1px solid rgba(99,102,241,0.3);border-radius:16px;display:flex;align-items:center;justify-content:center;font-size:28px;margin:0 auto 16px;">🎮</div>
            <h2 class="font-display font-bold text-xl mb-2">Play Simulation</h2>
            <p style="color:var(--text-sub);font-size:14px;line-height:1.6;margin-bottom:20px;">
              Run a full brand simulation — launch, compete, face market events, and see your brand health evolve over 3 years.
            </p>
            <div class="flex flex-wrap justify-center gap-2 mb-6">
              <span class="tag tag-indigo">0→1 Launch</span>
              <span class="tag tag-indigo">1→100 Scale</span>
              <span class="tag tag-indigo">AI Coach</span>
            </div>
            <button class="btn-primary w-full">Start Simulation →</button>
          </div>
        </div>

        <!-- Stats bar -->
        <div style="border:1px solid var(--border);border-radius:14px;padding:20px 32px;display:grid;grid-template-columns:repeat(5,1fr);gap:16px;text-align:center;background:var(--surface);">
          <div>
            <div class="font-display font-bold text-2xl grad-text">3</div>
            <div style="font-size:12px;color:var(--muted);">Simulation Years</div>
          </div>
          <div>
            <div class="font-display font-bold text-2xl grad-text">5</div>
            <div style="font-size:12px;color:var(--muted);">Consumer Segments</div>
          </div>
          <div>
            <div class="font-display font-bold text-2xl grad-text">20</div>
            <div style="font-size:12px;color:var(--muted);">Market Events</div>
          </div>
          <div>
            <div class="font-display font-bold text-2xl grad-text">18</div>
            <div style="font-size:12px;color:var(--muted);">Value Chain Cases</div>
          </div>
          <div>
            <div class="font-display font-bold text-2xl grad-text">6</div>
            <div style="font-size:12px;color:var(--muted);">Sales Channels</div>
          </div>
        </div>
      </div>
    </div>`;
};

// ════════════════════════════════════════════════════════════
//  PLAYER PROFILE SETUP
// ════════════════════════════════════════════════════════════
BPZ.ui.setupPlayer = function() {
  return `
    <div style="min-height:100vh;background:var(--bg);">
      ${renderNav('Setup')}
      <div style="max-width:560px;margin:0 auto;padding:48px 24px;">
        <div class="mb-8">
          <h1 class="font-display font-bold text-3xl mb-2">Let's get started</h1>
          <p style="color:var(--text-sub);">Quick profile setup — takes 30 seconds.</p>
        </div>

        <div style="background:var(--card);border:1px solid var(--border);border-radius:16px;padding:28px;" class="mb-5">
          <label style="font-size:13px;font-weight:600;color:var(--text-sub);display:block;margin-bottom:8px;">YOUR NAME</label>
          <input id="player-name" type="text" placeholder="e.g. Arjun Sharma"
            value="${BPZ.state.player.name || ''}"
            style="width:100%;background:var(--elevated);border:1px solid var(--border);border-radius:10px;padding:12px 14px;color:var(--text);font-size:15px;outline:none;"
            oninput="BPZ.state.player.name = this.value" />
        </div>

        <div style="background:var(--card);border:1px solid var(--border);border-radius:16px;padding:28px;" class="mb-8">
          <label style="font-size:13px;font-weight:600;color:var(--text-sub);display:block;margin-bottom:14px;">YOUR ROLE</label>
          <div class="grid grid-cols-1 gap-3">
            ${[
              { id: 'student',      icon: '🎓', label: 'Student / Learner',      desc: 'Learning brand management for the first time' },
              { id: 'professional', icon: '💼', label: 'Marketing Professional', desc: 'Working in FMCG / brand management' },
            ].map(r => `
              <div class="selectable ${BPZ.state.player.experienceLevel === r.id ? 'selected' : ''}"
                style="border-radius:12px;padding:14px 16px;display:flex;align-items:center;gap:12px;"
                onclick="BPZ.state.player.experienceLevel = '${r.id}'; BPZ.render();">
                <span style="font-size:22px;">${r.icon}</span>
                <div>
                  <div style="font-weight:600;font-size:14px;">${r.label}</div>
                  <div style="font-size:12px;color:var(--muted);">${r.desc}</div>
                </div>
              </div>`).join('')}
          </div>
        </div>

        <button class="btn-primary w-full text-base" onclick="BPZ.navigate('world-builder')"
          ${!BPZ.state.player.experienceLevel ? 'disabled style="opacity:0.5;cursor:not-allowed;"' : ''}>
          Continue →
        </button>
      </div>
    </div>`;
};

// ════════════════════════════════════════════════════════════
//  WORLD BUILDER
// ════════════════════════════════════════════════════════════
BPZ.ui.worldBuilder = function() {
  const subCats = BPZ.data.subCategories;
  const selected = BPZ.state.world.subCategory;
  return `
    <div style="min-height:100vh;background:var(--bg);">
      ${renderNav('World Builder')}
      <div style="max-width:780px;margin:0 auto;padding:48px 24px;">
        ${renderStepper(1, 5)}

        <div class="mb-8">
          <div class="tag tag-indigo mb-3">Step 1 — World Builder</div>
          <h1 class="font-display font-bold text-3xl mb-2">Choose your battlefield</h1>
          <p style="color:var(--text-sub);">Select the FMCG sub-category you want to launch in. More markets unlock in future updates.</p>
        </div>

        <!-- Country (locked to India for now) -->
        <div style="background:var(--card);border:1px solid var(--border);border-radius:16px;padding:20px;margin-bottom:24px;display:flex;align-items:center;gap:16px;">
          <div style="font-size:40px;">🇮🇳</div>
          <div style="flex:1;">
            <div class="font-display font-semibold text-lg">India</div>
            <div style="font-size:13px;color:var(--text-sub);">₹1.5 Lakh Crore PC market · 9% CAGR · 12M+ retail outlets</div>
          </div>
          <span class="tag tag-emerald">Unlocked</span>
        </div>

        <!-- Category cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          ${subCats.map(cat => `
            <div class="selectable card-hover ${selected === cat.id ? 'selected' : ''}"
              style="border-radius:14px;padding:20px;text-align:center;"
              onclick="BPZ.state.world.subCategory = '${cat.id}'; BPZ.render();">
              <div style="font-size:36px;margin-bottom:10px;">${cat.icon}</div>
              <div class="font-semibold text-base mb-1">${cat.name}</div>
              <div style="font-size:12px;color:var(--muted);margin-bottom:8px;">₹${(cat.marketSizeCrore/1000).toFixed(0)}K Cr market · ${cat.growth}</div>
              <div style="font-size:11px;color:var(--text-sub);line-height:1.5;">${cat.description}</div>
            </div>`).join('')}
        </div>

        <!-- Market context box (shows after selection) -->
        ${selected ? (() => {
          const cat = subCats.find(c => c.id === selected);
          return `
            <div style="background:rgba(99,102,241,0.06);border:1px solid rgba(99,102,241,0.2);border-radius:14px;padding:20px;margin-bottom:24px;">
              <div style="font-size:12px;font-weight:700;color:#818cf8;margin-bottom:10px;letter-spacing:0.05em;">MARKET CONTEXT</div>
              <p style="font-size:14px;color:var(--text-sub);line-height:1.6;margin-bottom:12px;">${cat.keyInsight}</p>
              <div class="font-semibold text-sm mb-3">Competitive Landscape</div>
              <div class="grid grid-cols-2 gap-2">
                ${cat.competitors.map(c => `
                  <div style="background:var(--elevated);border-radius:8px;padding:10px 12px;display:flex;align-items:center;justify-content:between;gap:8px;">
                    <div style="flex:1;">
                      <div style="font-size:13px;font-weight:600;">${c.name}</div>
                      <div style="font-size:11px;color:var(--muted);">${c.archetype}</div>
                    </div>
                    <div style="text-align:right;">
                      <div style="font-size:13px;font-weight:700;color:#22d3ee;">${c.share}%</div>
                      <div style="font-size:10px;color:var(--muted);">share</div>
                    </div>
                  </div>`).join('')}
              </div>
            </div>`;
        })() : ''}

        <button class="btn-primary w-full text-base" onclick="BPZ.navigate('brand-studio')"
          ${!selected ? 'disabled style="opacity:0.5;cursor:not-allowed;"' : ''}>
          Continue →
        </button>
      </div>
    </div>`;
};

// ════════════════════════════════════════════════════════════
//  BRAND STUDIO
// ════════════════════════════════════════════════════════════
BPZ.ui.brandStudio = function() {
  const s = BPZ.state.brand;
  const archetypes  = BPZ.data.companyArchetypes;
  const positions   = ['premium', 'masstige', 'mass', 'value'];
  const posLabels   = { premium: 'Premium', masstige: 'Masstige', mass: 'Mass Market', value: 'Value/Economy' };
  const posDesc     = {
    premium:  'High price, strong differentiation. Narrow audience but high margin.',
    masstige: 'Mass reach with premium feel. The sweet spot for challenger brands.',
    mass:     'Wide reach, competitive price. Volume game.',
    value:    'Lowest price. Rural and price-sensitive consumers. Margin is thin.',
  };
  const tiers = BPZ.data.budgetTiers;

  return `
    <div style="min-height:100vh;background:var(--bg);">
      ${renderNav('Brand Studio')}
      <div style="max-width:780px;margin:0 auto;padding:48px 24px;">
        ${renderStepper(2, 5)}

        <div class="mb-8">
          <div class="tag tag-indigo mb-3">Step 2 — Brand Studio</div>
          <h1 class="font-display font-bold text-3xl mb-2">Build your brand</h1>
          <p style="color:var(--text-sub);">Define the foundation — name, positioning, and the scale you're playing at.</p>
        </div>

        <!-- Track selection -->
        <div style="background:var(--card);border:1px solid var(--border);border-radius:16px;padding:24px;margin-bottom:20px;">
          <div style="font-size:12px;font-weight:700;color:var(--muted);margin-bottom:14px;letter-spacing:0.05em;">SIMULATION TRACK</div>
          <div class="grid grid-cols-2 gap-3">
            ${[
              { id: '0to1', icon: '🌱', label: '0 → 1 Launch',    desc: 'New brand. Start from scratch.' },
              { id: '1to100', icon: '🚀', label: '1 → 100 Scale', desc: 'Inherited brand. Fix and grow.' },
            ].map(t => `
              <div class="selectable ${s.track === t.id ? 'selected' : ''}"
                style="border-radius:12px;padding:14px;text-align:center;"
                onclick="BPZ.state.brand.track='${t.id}';BPZ.render();">
                <div style="font-size:24px;margin-bottom:6px;">${t.icon}</div>
                <div style="font-weight:700;font-size:13px;">${t.label}</div>
                <div style="font-size:11px;color:var(--muted);margin-top:4px;">${t.desc}</div>
              </div>`).join('')}
          </div>
        </div>

        <!-- Brand name -->
        <div style="background:var(--card);border:1px solid var(--border);border-radius:16px;padding:24px;margin-bottom:20px;">
          <div style="font-size:12px;font-weight:700;color:var(--muted);margin-bottom:10px;letter-spacing:0.05em;">BRAND NAME</div>
          <input id="brand-name-input" type="text" placeholder="e.g. Velura, RootLab, AuraOne..."
            value="${s.name || ''}"
            style="width:100%;background:var(--elevated);border:1px solid var(--border);border-radius:10px;padding:12px 16px;color:var(--text);font-size:16px;font-family:'Space Grotesk',sans-serif;font-weight:600;outline:none;"
            oninput="BPZ.state.brand.name = this.value" />
        </div>

        <!-- Company archetype -->
        <div style="background:var(--card);border:1px solid var(--border);border-radius:16px;padding:24px;margin-bottom:20px;">
          <div style="font-size:12px;font-weight:700;color:var(--muted);margin-bottom:14px;letter-spacing:0.05em;">COMPANY ARCHETYPE</div>
          <div class="grid grid-cols-3 gap-3">
            ${archetypes.map(a => `
              <div class="selectable ${s.companyArchetype === a.id ? 'selected' : ''}"
                style="border-radius:12px;padding:14px;text-align:center;"
                onclick="BPZ.state.brand.companyArchetype='${a.id}';BPZ.render();">
                <div style="font-size:24px;margin-bottom:6px;">${a.icon}</div>
                <div style="font-weight:700;font-size:12px;">${a.name}</div>
                <div style="font-size:10px;color:var(--muted);margin-top:4px;line-height:1.4;">${a.description}</div>
              </div>`).join('')}
          </div>
        </div>

        <!-- Budget tier -->
        <div style="background:var(--card);border:1px solid var(--border);border-radius:16px;padding:24px;margin-bottom:20px;">
          <div style="font-size:12px;font-weight:700;color:var(--muted);margin-bottom:14px;letter-spacing:0.05em;">ANNUAL MARKETING BUDGET</div>
          <div class="grid grid-cols-2 gap-3">
            ${tiers.map(t => `
              <div class="selectable ${s.budgetTier === t.id ? 'selected' : ''}"
                style="border-radius:12px;padding:14px;display:flex;align-items:center;gap:10px;"
                onclick="BPZ.state.brand.budgetTier='${t.id}';BPZ.state.brand.budgetCrore=${t.budgetCrore};BPZ.render();">
                <span style="font-size:22px;">${t.icon}</span>
                <div>
                  <div style="font-weight:700;font-size:13px;">${t.name}</div>
                  <div style="font-size:12px;color:#22d3ee;font-weight:600;">₹${t.budgetCrore} Crore / yr</div>
                  <div style="font-size:11px;color:var(--muted);">${t.description}</div>
                </div>
              </div>`).join('')}
          </div>
        </div>

        <!-- Positioning -->
        <div style="background:var(--card);border:1px solid var(--border);border-radius:16px;padding:24px;margin-bottom:24px;">
          <div style="font-size:12px;font-weight:700;color:var(--muted);margin-bottom:14px;letter-spacing:0.05em;">BRAND POSITIONING</div>
          <div class="grid grid-cols-2 gap-3">
            ${positions.map(p => `
              <div class="selectable ${s.positioning === p ? 'selected' : ''}"
                style="border-radius:12px;padding:14px;"
                onclick="BPZ.state.brand.positioning='${p}';BPZ.render();">
                <div style="font-weight:700;font-size:13px;margin-bottom:4px;">${posLabels[p]}</div>
                <div style="font-size:11px;color:var(--muted);line-height:1.4;">${posDesc[p]}</div>
              </div>`).join('')}
          </div>
        </div>

        <button class="btn-primary w-full text-base" onclick="BPZ.navigate('segments')"
          ${!(s.track && s.name && s.companyArchetype && s.budgetTier && s.positioning) ? 'disabled style="opacity:0.5;cursor:not-allowed;"' : ''}>
          Continue →
        </button>
      </div>
    </div>`;
};

// ════════════════════════════════════════════════════════════
//  SEGMENT SELECTION
// ════════════════════════════════════════════════════════════
BPZ.ui.segments = function() {
  const segs    = BPZ.data.segments;
  const chosen  = BPZ.state.targetSegmentId;
  const posMap  = { premium: 3, masstige: 2, mass: 1, value: 0 };
  const brandPos = posMap[BPZ.state.brand.positioning] || 1;

  return `
    <div style="min-height:100vh;background:var(--bg);">
      ${renderNav('Segment Selection')}
      <div style="max-width:900px;margin:0 auto;padding:48px 24px;">
        ${renderStepper(3, 5)}

        <div class="mb-8">
          <div class="tag tag-indigo mb-3">Step 3 — Target Segment</div>
          <h1 class="font-display font-bold text-3xl mb-2">Who will you sell to?</h1>
          <p style="color:var(--text-sub);">Choose one primary segment. Your channel strategy, media mix and messaging will be optimised for them.</p>
        </div>

        <div class="grid grid-cols-1 gap-4 mb-8">
          ${segs.map(seg => {
            const segPos  = posMap[seg.preferredPositioning] || 1;
            const fitPct  = Math.round((1 - Math.abs(brandPos - segPos) * 0.25) * 100);
            const fitColor = fitPct >= 80 ? '#10b981' : fitPct >= 65 ? '#f59e0b' : '#f43f5e';
            const isChosen = chosen === seg.id;
            return `
              <div class="selectable card-hover ${isChosen ? 'selected' : ''}"
                style="border-radius:14px;padding:20px;display:grid;grid-template-columns:auto 1fr auto;gap:16px;align-items:start;"
                onclick="BPZ.state.targetSegmentId='${seg.id}';BPZ.render();">
                <div style="font-size:36px;">${seg.icon}</div>
                <div>
                  <div style="display:flex;align-items:center;gap-8px;margin-bottom:6px;">
                    <span class="font-semibold text-base">${seg.name}</span>
                    <span style="font-size:12px;color:var(--muted);margin-left:8px;">${seg.age} · ${seg.location}</span>
                  </div>
                  <p style="font-size:13px;color:var(--text-sub);margin-bottom:10px;line-height:1.5;">${seg.description}</p>
                  <div class="flex flex-wrap gap-2">
                    <span style="font-size:11px;color:var(--muted);">📱 Channels:</span>
                    ${seg.channelPreference.map(c => `<span style="font-size:11px;color:#94a3b8;background:var(--elevated);padding:2px 8px;border-radius:4px;">${c}</span>`).join('')}
                  </div>
                  <div style="margin-top:8px;display:flex;flex-wrap:wrap;gap:6px;">
                    ${seg.values.map(v => `<span class="tag tag-amber" style="font-size:10px;">${v}</span>`).join('')}
                  </div>
                </div>
                <div style="text-align:center;min-width:72px;">
                  <div style="font-size:22px;font-weight:800;color:${fitColor};">${fitPct}%</div>
                  <div style="font-size:10px;color:var(--muted);margin-bottom:6px;">Positioning<br>Fit</div>
                  <div class="prog-bar" style="width:60px;">
                    <div class="prog-fill" style="width:${fitPct}%;background:${fitColor};"></div>
                  </div>
                </div>
              </div>`;
          }).join('')}
        </div>

        <button class="btn-primary w-full text-base" onclick="BPZ.navigate('channels')"
          ${!chosen ? 'disabled style="opacity:0.5;cursor:not-allowed;"' : ''}>
          Continue →
        </button>
      </div>
    </div>`;
};

// ════════════════════════════════════════════════════════════
//  CHANNEL SELECTION
// ════════════════════════════════════════════════════════════
BPZ.ui.channels = function() {
  const allCh = BPZ.data.channels;
  const selected = BPZ.state.selectedChannels;  // [{id, budgetPct}]
  const budget   = BPZ.state.brand.budgetCrore;
  const totalAlloc = selected.reduce((s, c) => s + c.budgetPct, 0);

  return `
    <div style="min-height:100vh;background:var(--bg);">
      ${renderNav('Channel Selection')}
      <div style="max-width:900px;margin:0 auto;padding:48px 24px;">
        ${renderStepper(4, 5)}

        <div class="mb-8">
          <div class="tag tag-indigo mb-3">Step 4 — Channel Playfield</div>
          <h1 class="font-display font-bold text-3xl mb-2">Where will you compete?</h1>
          <p style="color:var(--text-sub);">Select channels and roughly how much of your <strong style="color:#22d3ee;">₹${budget} Crore</strong> budget goes to each. You'll fine-tune the full marketing mix next.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          ${allCh.map(ch => {
            const entry = selected.find(s => s.id === ch.id);
            const isOn  = !!entry;
            return `
              <div class="selectable card-hover ${isOn ? 'selected' : ''}"
                style="border-radius:14px;padding:18px;"
                onclick="BPZ.toggleChannel('${ch.id}')">
                <div style="display:flex;align-items:center;gap-12px;margin-bottom:10px;">
                  <span style="font-size:24px;">${ch.icon}</span>
                  <div style="flex:1;margin-left:10px;">
                    <div style="display:flex;align-items:center;gap:8px;">
                      <span class="font-semibold">${ch.name}</span>
                      <span style="font-size:11px;color:var(--muted);">${ch.revenueSplit}% of category</span>
                    </div>
                    <div style="font-size:11px;color:var(--muted);margin-top:2px;">${ch.examples}</div>
                  </div>
                  <div style="width:22px;height:22px;border-radius:50%;border:2px solid ${isOn ? '#6366f1' : 'var(--border)'};display:flex;align-items:center;justify-content:center;background:${isOn ? '#6366f1' : 'transparent'};flex-shrink:0;">
                    ${isOn ? '<span style="color:white;font-size:12px;">✓</span>' : ''}
                  </div>
                </div>
                <div class="flex flex-wrap gap-2 mb-2">
                  ${ch.pros.map(p => `<span style="font-size:10px;color:#6ee7b7;background:rgba(16,185,129,0.08);border-radius:4px;padding:2px 6px;">✓ ${p}</span>`).join('')}
                </div>
                <div style="font-size:11px;color:var(--muted);">Entry budget: ₹${ch.entryBudgetCrore}Cr · ROI: ${ch.timeToROI}</div>
                ${isOn ? `
                  <div style="margin-top:12px;padding-top:12px;border-top:1px solid var(--border);" onclick="event.stopPropagation()">
                    <div style="font-size:11px;color:var(--text-sub);margin-bottom:6px;">Budget allocation: <strong style="color:#6366f1;" id="alloc-${ch.id}">${entry.budgetPct}%</strong> = ₹${(budget * entry.budgetPct / 100).toFixed(1)}Cr</div>
                    <input type="range" min="5" max="60" value="${entry.budgetPct}"
                      style="width:100%;"
                      oninput="BPZ.setChannelBudget('${ch.id}', +this.value); document.getElementById('alloc-${ch.id}').textContent = this.value + '%';" />
                  </div>` : ''}
              </div>`;
          }).join('')}
        </div>

        <div style="background:var(--card);border:1px solid var(--border);border-radius:12px;padding:16px 20px;margin-bottom:24px;display:flex;align-items:center;justify-content:between;">
          <div style="display:flex;align-items:center;gap:12px;flex:1;">
            <span style="font-size:13px;color:var(--text-sub);">Channels selected: <strong style="color:var(--text);">${selected.length}</strong></span>
            <span style="font-size:13px;color:var(--text-sub);">Channel budget allocated: <strong style="color:${totalAlloc > 80 ? '#f43f5e' : '#22d3ee'};">${totalAlloc}%</strong></span>
          </div>
          ${totalAlloc > 80 ? `<span class="tag tag-rose">⚠ Over-allocated — remaining goes to marketing mix</span>` : ''}
        </div>

        <button class="btn-primary w-full text-base" onclick="BPZ.navigate('marketing-mix')"
          ${selected.length === 0 ? 'disabled style="opacity:0.5;cursor:not-allowed;"' : ''}>
          Continue to Marketing Mix →
        </button>
      </div>
    </div>`;
};

// ════════════════════════════════════════════════════════════
//  MARKETING MIX
// ════════════════════════════════════════════════════════════
BPZ.ui.marketingMix = function() {
  const budget   = BPZ.state.brand.budgetCrore;
  const mix      = BPZ.state.marketingMix;
  const total    = mix.tv + mix.digital + mix.trade + mix.pr;
  const year     = BPZ.state.currentYear;
  const isYear1  = year === 0 || year === 1;
  const prevMix  = BPZ.state.mixPerYear[year - 1] || null;
  const prevM    = BPZ.state.metrics;

  const mixItems = [
    { key: 'tv',      icon: '📺', label: 'TV / ATL',        colour: '#6366f1', description: 'National reach, mass awareness. Works best for mass and traditional segments.' },
    { key: 'digital', icon: '📱', label: 'Digital',         colour: '#22d3ee', description: 'Social, search, influencers, CRM. Precision targeting. Essential for Gen Z and millennials.' },
    { key: 'trade',   icon: '🏪', label: 'Trade & BTL',     colour: '#10b981', description: 'In-store promos, sampling, merchandising. Directly drives trial and distribution fill.' },
    { key: 'pr',      icon: '📰', label: 'PR & Earned',     colour: '#f59e0b', description: 'Media coverage, launches, cause campaigns. Best ROI for brand equity building per rupee.' },
  ];
  const segment = BPZ.data.segments.find(s => s.id === BPZ.state.targetSegmentId);

  // ── Year context signals (Year 2+) ────────────────────────
  const yearContextSection = (!isYear1 && prevMix) ? (() => {
    const signals = [];
    if (prevM.awareness > 30 && prevM.trial < 15) {
      signals.push({ icon: '⚠️', text: `Awareness is high (${prevM.awareness}%) but trial is only ${prevM.trial}%. Shift budget toward Trade/BTL to convert awareness into first purchase.`, col: '#f59e0b' });
    }
    if (prevMix.tv > 50 && segment && segment.mediaAffinity.tv < 0.6) {
      signals.push({ icon: '📺', text: `TV was ${prevMix.tv}% of mix but your segment has low TV affinity. Consider shifting toward Digital.`, col: '#f43f5e' });
    }
    if (prevM.brandEquityIndex < 35 && prevMix.pr < 12) {
      signals.push({ icon: '💎', text: `Brand equity is weak (${prevM.brandEquityIndex}/100). PR was only ${prevMix.pr}% — PR per rupee is your most cost-effective equity builder.`, col: '#818cf8' });
    }
    if (prevM.distribution < 30 && prevMix.trade < 20) {
      signals.push({ icon: '🗺️', text: `Distribution is only ${prevM.distribution}% — trade activation drove this. Increase Trade/BTL to push products into more outlets.`, col: '#10b981' });
    }
    if (signals.length === 0) {
      signals.push({ icon: '✅', text: `Year ${year - 1} mix is working. Consider pushing your strongest lever further.`, col: '#10b981' });
    }
    return `
      <div style="background:rgba(99,102,241,0.06);border:1px solid rgba(99,102,241,0.2);border-radius:14px;padding:20px 24px;margin-bottom:24px;">
        <div style="font-size:12px;font-weight:700;color:#818cf8;letter-spacing:0.05em;margin-bottom:14px;">📊 YEAR ${year - 1} RETROSPECTIVE — WHAT TO ADJUST</div>
        <div style="display:flex;gap:16px;margin-bottom:14px;flex-wrap:wrap;">
          ${['tv','digital','trade','pr'].map(k => `
            <div style="text-align:center;background:var(--elevated);border-radius:8px;padding:8px 14px;">
              <div style="font-size:14px;font-weight:700;color:var(--text);">${prevMix[k]}%</div>
              <div style="font-size:10px;color:var(--muted);">${k === 'tv' ? 'TV' : k === 'digital' ? 'Digital' : k === 'trade' ? 'Trade' : 'PR'}</div>
            </div>`).join('')}
          <div style="text-align:center;background:var(--elevated);border-radius:8px;padding:8px 14px;">
            <div style="font-size:14px;font-weight:700;color:#22d3ee;">${prevM.marketShare}%</div>
            <div style="font-size:10px;color:var(--muted);">Share</div>
          </div>
          <div style="text-align:center;background:var(--elevated);border-radius:8px;padding:8px 14px;">
            <div style="font-size:14px;font-weight:700;color:#6366f1;">${prevM.brandEquityIndex}</div>
            <div style="font-size:10px;color:var(--muted);">Equity</div>
          </div>
        </div>
        ${signals.map(s => `
          <div style="display:flex;align-items:start;gap:10px;margin-bottom:8px;">
            <span style="font-size:16px;flex-shrink:0;">${s.icon}</span>
            <p style="font-size:13px;color:${s.col};margin:0;line-height:1.5;">${s.text}</p>
          </div>`).join('')}
      </div>`;
  })() : '';

  return `
    <div style="min-height:100vh;background:var(--bg);">
      ${renderNav('Marketing Mix')}
      <div style="max-width:900px;margin:0 auto;padding:48px 24px;">
        ${isYear1 ? renderStepper(5, 5) : `
          <div class="flex items-center gap-3 mb-8">
            <span class="tag tag-indigo">Year ${year}</span>
            <h1 class="font-display font-bold text-2xl">Adjust Your Marketing Mix</h1>
          </div>`}

        <div class="mb-6">
          ${isYear1 ? `<div class="tag tag-indigo mb-3">Step 5 — Marketing Mix</div>` : ''}
          <h1 class="font-display font-bold text-3xl mb-2">${isYear1 ? `Allocate your ₹${budget} Crore` : `Year ${year} Mix — ₹${budget} Crore`}</h1>
          <p style="color:var(--text-sub);">${isYear1 ? 'Distribute your annual budget across the four spend buckets.' : `Adjust your mix based on Year ${year - 1} results. Every percentage point shifts your outcomes.`}</p>
        </div>

        <!-- Year context (Year 2+) -->
        ${yearContextSection}

        <!-- Segment media hint -->
        ${segment ? `
          <div style="background:rgba(34,211,238,0.06);border:1px solid rgba(34,211,238,0.2);border-radius:12px;padding:14px 18px;margin-bottom:24px;font-size:13px;color:var(--text-sub);">
            💡 <strong style="color:#22d3ee;">${segment.name}</strong> prefers ${segment.mediaAffinity.digital > 1.2 ? 'digital-first media (low TV affinity)' : segment.mediaAffinity.tv > 1.2 ? 'TV-heavy media mix' : 'balanced media'}.
            Channel preference: <strong>${segment.channelPreference.join(', ')}</strong>.
          </div>` : ''}

        <!-- Mix sliders -->
        <div style="background:var(--card);border:1px solid var(--border);border-radius:16px;padding:28px;margin-bottom:24px;">
          ${mixItems.map(item => {
            const spend    = (budget * mix[item.key] / 100).toFixed(1);
            const prevPct  = prevMix ? prevMix[item.key] : null;
            const delta    = prevPct !== null ? mix[item.key] - prevPct : null;
            const deltaStr = delta !== null
              ? `<span style="font-size:11px;color:${delta > 0 ? '#10b981' : delta < 0 ? '#f43f5e' : 'var(--muted)'};">${delta > 0 ? '▲' : delta < 0 ? '▼' : '—'}${Math.abs(delta)}% vs Y${year-1}</span>`
              : '';
            return `
              <div style="margin-bottom:24px;">
                <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
                  <div style="display:flex;align-items:center;gap-8px;">
                    <span style="font-size:20px;margin-right:8px;">${item.icon}</span>
                    <div>
                      <span class="font-semibold text-sm">${item.label}</span>
                      <div style="font-size:11px;color:var(--muted);max-width:320px;">${item.description}</div>
                    </div>
                  </div>
                  <div style="text-align:right;min-width:90px;">
                    <div style="font-size:18px;font-weight:700;color:${item.colour};" id="mix-pct-${item.key}">${mix[item.key]}%</div>
                    <div style="font-size:11px;color:var(--muted);">₹${spend}Cr</div>
                    ${deltaStr}
                  </div>
                </div>
                <input type="range" min="5" max="70" value="${mix[item.key]}"
                  style="width:100%;accent-color:${item.colour};"
                  oninput="BPZ.setMix('${item.key}', +this.value)" />
              </div>`;
          }).join('')}
          <div style="border-top:1px solid var(--border);padding-top:16px;display:flex;align-items:center;justify-content:space-between;">
            <span style="font-size:13px;color:var(--text-sub);">Total allocated:</span>
            <span id="mix-total" style="font-size:18px;font-weight:700;color:${total === 100 ? '#10b981' : '#f43f5e'};">${total}% ${total === 100 ? '✓' : `(${total > 100 ? '+' : ''}${total - 100} off)`}</span>
          </div>
        </div>

        <!-- Estimated impact preview -->
        <div style="background:var(--card);border:1px solid var(--border);border-radius:16px;padding:20px 24px;margin-bottom:24px;">
          <div style="font-size:12px;font-weight:700;color:var(--muted);margin-bottom:14px;letter-spacing:0.05em;">EXPECTED YEAR ${isYear1 ? 1 : year} DIRECTION</div>
          <div class="grid grid-cols-3 gap-4">
            ${[
              { label: 'Awareness Lift', value: `+${Math.round((budget * mix.tv / 100) * 0.75 + (budget * mix.digital / 100) * 0.55)}%`, note: 'est.' },
              { label: 'Trial Boost',    value: `+${Math.round((budget * mix.trade / 100) * 0.8)}%`, note: 'from BTL' },
              { label: 'Equity Lift',    value: mix.pr >= 10 ? 'High' : mix.pr >= 6 ? 'Moderate' : 'Low', note: 'brand equity' },
            ].map(e => `
              <div style="text-align:center;">
                <div class="font-display font-bold text-xl grad-text">${e.value}</div>
                <div style="font-size:12px;color:var(--text-sub);">${e.label}</div>
                <div style="font-size:11px;color:var(--muted);">${e.note}</div>
              </div>`).join('')}
          </div>
        </div>

        <button class="btn-primary w-full text-base" id="launch-btn"
          onclick="${isYear1 ? 'BPZ.launchBrand()' : 'BPZ.proceedToEvent()'}"
          ${total !== 100 ? 'disabled style="opacity:0.5;cursor:not-allowed;"' : ''}>
          ${isYear1 ? '🚀 Launch Brand & Simulate Year 1' : `▶ Set Mix & Enter Year ${year} →`}
        </button>
      </div>
    </div>`;
};

// ════════════════════════════════════════════════════════════
//  EVENT CARD  (with Scenario Preview + Rationale Gate)
// ════════════════════════════════════════════════════════════
BPZ.ui.eventCard = function() {
  const ev = BPZ.state.currentEvent;
  if (!ev) {
    BPZ.navigate('dashboard');
    return '';
  }

  const pending   = BPZ.state.pendingEventOption;
  const rStep     = BPZ.state.rationaleStep;   // 0=picking, 1=Q1, 2=Q2, 3=ready
  const lastAns   = BPZ.state.rationaleLastAnswer;
  const cur       = BPZ.state.metrics;

  // Scenario preview deltas (only when an option is pending)
  let preview = null;
  let previewSection = '';
  if (pending) {
    try {
      preview = BPZ.engine.previewScenario(BPZ.state, pending);
      const d = (key, unit='%') => {
        const delta = (preview[key] - cur[key]);
        const sign  = delta >= 0 ? '+' : '';
        const col   = delta >= 0 ? '#10b981' : '#f43f5e';
        return `<span style="font-weight:700;color:${col};">${sign}${delta.toFixed(1)}${unit}</span>`;
      };
      const eqDelta = preview.brandEquityIndex - cur.brandEquityIndex;
      const eqSign  = eqDelta >= 0 ? '+' : '';
      const eqCol   = eqDelta >= 0 ? '#10b981' : '#f43f5e';
      previewSection = `
        <div style="background:rgba(34,211,238,0.06);border:1px solid rgba(34,211,238,0.2);border-radius:14px;padding:18px 20px;margin-bottom:20px;">
          <div style="font-size:11px;font-weight:700;color:#22d3ee;letter-spacing:0.07em;margin-bottom:12px;">🔭 SCENARIO PREVIEW — IF YOU PICK: <em>${pending.label}</em></div>
          <div class="grid grid-cols-2 gap-3" style="grid-template-columns:repeat(4,1fr);">
            ${[
              { label:'Awareness',    val: d('awareness') },
              { label:'Market Share', val: d('marketShare') },
              { label:'Brand Equity', val: `<span style="font-weight:700;color:${eqCol};">${eqSign}${eqDelta.toFixed(1)}</span>` },
              { label:'EBITDA (₹Cr)', val: d('ebitdaCrore','') },
            ].map(row => `
              <div style="text-align:center;background:var(--elevated);border-radius:10px;padding:10px;">
                <div style="font-size:15px;margin-bottom:2px;">${row.val}</div>
                <div style="font-size:10px;color:var(--muted);">${row.label}</div>
              </div>`).join('')}
          </div>
          <div style="font-size:11px;color:var(--muted);margin-top:10px;">⚡ Projected impact vs current metrics — actual results depend on all factors.</div>
        </div>`;
    } catch(e) { previewSection = ''; }
  }

  // ── Rationale questions ──────────────────────────────────
  function renderRationaleQ(qNum) {
    const eventRationale = (BPZ.rationaleData && BPZ.rationaleData.events) ? BPZ.rationaleData.events[ev.id] : null;
    const optRationale   = eventRationale ? eventRationale[pending.id] : null;
    const qData          = optRationale ? optRationale['q' + qNum] : null;

    // No rationale data? skip gracefully
    if (!qData) {
      // Auto-advance if no question data found
      if (rStep === 1 && qNum === 1) {
        BPZ.state.rationaleStep = 3;
        return '';
      }
      return '';
    }

    // Already answered this question?
    const answered = (qNum === 1 && rStep >= 2) || (qNum === 2 && rStep >= 3);
    // The last answer applies to the just-answered question
    const thisAns  = (lastAns && lastAns.questionNum === qNum) ? lastAns : null;

    return `
      <div style="background:var(--card);border:1px solid ${answered && thisAns ? (thisAns.correct ? 'rgba(16,185,129,0.4)' : 'rgba(244,63,94,0.4)') : 'var(--border)'};border-radius:14px;padding:20px;margin-bottom:16px;">
        <div style="font-size:11px;font-weight:700;color:#818cf8;letter-spacing:0.06em;margin-bottom:10px;">🧠 THINK IT THROUGH — Q${qNum} OF 2</div>
        <p style="font-size:14px;font-weight:600;color:var(--text);margin-bottom:14px;">${qData.text}</p>
        <div class="grid grid-cols-1 gap-2">
          ${qData.options.map(opt => {
            let border = 'var(--border)';
            let bg     = 'var(--elevated)';
            let badge  = '';
            if (answered) {
              if (opt.correct) { border='rgba(16,185,129,0.6)'; bg='rgba(16,185,129,0.08)'; badge='<span style="font-size:10px;background:#10b981;color:white;padding:1px 6px;border-radius:4px;margin-left:6px;">✓ Correct</span>'; }
              else if (thisAns && thisAns.answerId === opt.id && !opt.correct) { border='rgba(244,63,94,0.5)'; bg='rgba(244,63,94,0.08)'; badge='<span style="font-size:10px;background:#f43f5e;color:white;padding:1px 6px;border-radius:4px;margin-left:6px;">✗</span>'; }
            }
            return `
              <div style="border:1px solid ${border};background:${bg};border-radius:10px;padding:12px 14px;cursor:${answered ? 'default' : 'pointer'};"
                ${!answered ? `onclick="BPZ.answerRationale(${qNum}, '${opt.id}')"` : ''}>
                <span style="font-size:13px;color:var(--text);">${opt.text}</span>${badge}
              </div>`;
          }).join('')}
        </div>
        ${answered && qData.insight ? `
          <div style="margin-top:14px;background:rgba(99,102,241,0.08);border:1px solid rgba(99,102,241,0.2);border-radius:10px;padding:12px 14px;">
            <span style="font-size:12px;color:#818cf8;font-weight:600;">💡 Insight: </span>
            <span style="font-size:12px;color:var(--text-sub);">${qData.insight}</span>
          </div>` : ''}
      </div>`;
  }

  const showQ1 = rStep >= 1;
  const showQ2 = rStep >= 2;
  const showLock = rStep >= 3;

  // Fallback: if no rationale data at all, show lock button immediately
  const hasRationale = !!(BPZ.rationaleData && BPZ.rationaleData.events && ev && BPZ.rationaleData.events[ev.id]);
  const effectiveShowLock = showLock || (rStep >= 1 && !hasRationale);

  return `
    <div style="min-height:100vh;background:var(--bg);padding:24px;">
      ${renderNav(`Year ${BPZ.state.currentYear} — Market Event`)}
      <div style="max-width:700px;margin:0 auto;padding:32px 0;">

        <!-- Header -->
        <div style="text-align:center;margin-bottom:28px;">
          <div style="font-size:13px;font-weight:700;color:var(--muted);letter-spacing:0.1em;margin-bottom:6px;">YEAR ${BPZ.state.currentYear} — MARKET EVENT</div>
          <div style="font-size:12px;color:var(--muted);">Study the situation, pick your move — but be ready to justify it.</div>
        </div>

        <!-- Event card -->
        <div style="background:var(--card);border:1px solid var(--border);border-radius:20px;padding:28px;margin-bottom:24px;">
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:18px;">
            <div style="width:52px;height:52px;border-radius:14px;background:${ev.categoryColour}22;border:1px solid ${ev.categoryColour}44;display:flex;align-items:center;justify-content:center;font-size:26px;">
              ${ev.icon}
            </div>
            <div>
              <span style="font-size:11px;font-weight:700;color:${ev.categoryColour};letter-spacing:0.05em;">${ev.category.toUpperCase()}</span>
              <h2 class="font-display font-bold text-xl">${ev.title}</h2>
            </div>
          </div>
          <p style="color:var(--text-sub);font-size:14px;line-height:1.7;margin-bottom:14px;">${ev.description}</p>
          <div style="background:rgba(245,158,11,0.08);border:1px solid rgba(245,158,11,0.2);border-radius:10px;padding:10px 14px;">
            <span style="font-size:12px;font-weight:600;color:#fcd34d;">📊 Business Impact: </span>
            <span style="font-size:12px;color:var(--text-sub);">${ev.impact}</span>
          </div>
        </div>

        <!-- Response options (always visible) -->
        <div style="margin-bottom:10px;font-size:12px;font-weight:700;color:var(--muted);letter-spacing:0.05em;">CHOOSE YOUR RESPONSE</div>
        <div class="grid grid-cols-1 gap-3 mb-6">
          ${ev.options.map(opt => {
            const isSelected = pending && pending.id === opt.id;
            return `
              <div class="selectable card-hover ${isSelected ? 'selected' : ''}"
                style="border-radius:14px;padding:16px;${isSelected ? 'border-color:#6366f1;' : ''}"
                onclick="BPZ.selectEventOption('${opt.id}')">
                <div style="display:flex;align-items:start;justify-content:space-between;gap:12px;">
                  <div style="flex:1;">
                    <div class="font-semibold text-sm mb-1">${opt.label}</div>
                    <div style="font-size:12px;color:var(--text-sub);">${opt.description}</div>
                  </div>
                  ${opt.cost > 0
                    ? `<span class="tag tag-amber" style="flex-shrink:0;">₹${opt.cost}Cr extra</span>`
                    : '<span class="tag tag-emerald" style="flex-shrink:0;">No cost</span>'}
                </div>
                ${isSelected ? '<div style="font-size:11px;color:#6366f1;margin-top:8px;font-weight:600;">▶ Selected — answer the questions below to confirm</div>' : ''}
              </div>`;
          }).join('')}
        </div>

        ${pending ? `
          <!-- Scenario Preview -->
          ${previewSection}

          <!-- Rationale Gate -->
          ${showQ1 ? renderRationaleQ(1) : ''}
          ${showQ2 ? renderRationaleQ(2) : ''}

          <!-- Lock In Button -->
          ${effectiveShowLock ? `
            <div style="background:rgba(99,102,241,0.08);border:1px solid rgba(99,102,241,0.25);border-radius:14px;padding:16px 20px;margin-bottom:16px;text-align:center;">
              <div style="font-size:13px;color:var(--text-sub);margin-bottom:4px;">Rationale score: <strong style="color:#818cf8;">${BPZ.state.rationaleScore}/2</strong></div>
              <div style="font-size:11px;color:var(--muted);">${BPZ.state.rationaleScore === 2 ? '🎯 Perfect strategic thinking!' : BPZ.state.rationaleScore === 1 ? '👍 Good — one insight missed. Review before locking in.' : '📚 Study the insights above before your next decision.'}</div>
            </div>
            <button class="btn-primary w-full text-base" onclick="BPZ.confirmEventDecision()">
              🔒 Lock In Decision: "${pending.label}" → See Year ${BPZ.state.currentYear} Results
            </button>` : ''}
        ` : `
          <div style="text-align:center;padding:20px;color:var(--muted);font-size:13px;">
            ☝️ Select a response above to see your scenario preview and strategic questions.
          </div>`}
      </div>
    </div>`;
};

// ════════════════════════════════════════════════════════════
//  DASHBOARD
// ════════════════════════════════════════════════════════════
BPZ.ui.dashboard = function() {
  const m     = BPZ.state.metrics;
  const brand = BPZ.state.brand;
  const year  = BPZ.state.currentYear;
  const hist  = BPZ.state.history;
  const isFinal = year >= BPZ.state.maxYears;
  const grade = BPZ.engine.getGrade(m.brandEquityIndex, m.marketShare);
  const subCat = BPZ.data.subCategories.find(c => c.id === BPZ.state.world.subCategory);
  const competitors = subCat ? subCat.competitors : [];

  const ebitdaColor = m.ebitdaCrore >= 0 ? '#10b981' : '#f43f5e';
  const gradeColor  = { A: '#10b981', B: '#22d3ee', C: '#f59e0b', D: '#f59e0b', F: '#f43f5e' }[grade.letter] || '#94a3b8';

  return `
    <div style="min-height:100vh;background:var(--bg);">
      ${renderNav(`${brand.name || 'Your Brand'} · Year ${year} Report`)}

      <div style="max-width:1100px;margin:0 auto;padding:40px 24px;">

        <!-- Header row -->
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:32px;flex-wrap:wrap;gap:16px;">
          <div>
            <div style="font-size:12px;font-weight:700;color:var(--muted);letter-spacing:0.08em;margin-bottom:4px;">YEAR ${year} BRAND REPORT — ${brand.name ? brand.name.toUpperCase() : 'YOUR BRAND'}</div>
            <h1 class="font-display font-bold text-3xl">Performance Dashboard</h1>
            <p style="font-size:14px;color:var(--text-sub);margin-top:4px;">India · ${subCat ? subCat.name : 'Personal Care'} · ${brand.positioning} positioning</p>
          </div>
          <div style="text-align:center;background:var(--card);border:1px solid var(--border);border-radius:14px;padding:16px 24px;">
            <div style="font-size:48px;font-weight:800;font-family:'Space Grotesk',sans-serif;color:${gradeColor};line-height:1;">${grade.letter}</div>
            <div style="font-size:12px;color:var(--muted);">Overall Grade</div>
          </div>
        </div>

        <!-- KPI Cards -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          ${[
            { label: 'Market Share',     value: m.marketShare + '%',       icon: '📊', colour: '#22d3ee', sub: `vs ${competitors[0] ? competitors[0].share + '% ' + competitors[0].name : 'leader'}` },
            { label: 'Brand Awareness',  value: m.awareness + '%',         icon: '📡', colour: '#6366f1', sub: `Trial: ${m.trial}%` },
            { label: 'Brand Equity Index', value: m.brandEquityIndex + '/100', icon: '💎', colour: '#f59e0b', sub: `NPS: ${m.nps}` },
            { label: 'Revenue',          value: '₹' + m.revenue + 'Cr',   icon: '💰', colour: '#10b981', sub: `EBITDA: ₹${m.ebitdaCrore}Cr` },
          ].map(k => `
            <div class="metric-card">
              <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
                <span style="font-size:10px;font-weight:700;color:var(--muted);letter-spacing:0.05em;">${k.label.toUpperCase()}</span>
                <span style="font-size:16px;">${k.icon}</span>
              </div>
              <div style="font-size:26px;font-weight:800;font-family:'Space Grotesk',sans-serif;color:${k.colour};">${k.value}</div>
              <div style="font-size:11px;color:var(--muted);margin-top:4px;">${k.sub}</div>
            </div>`).join('')}
        </div>

        <!-- Charts Row -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

          <!-- Awareness trend -->
          <div style="background:var(--card);border:1px solid var(--border);border-radius:16px;padding:20px 24px;">
            <div style="font-size:12px;font-weight:700;color:var(--muted);letter-spacing:0.05em;margin-bottom:16px;">AWARENESS & DISTRIBUTION TREND</div>
            <canvas id="chart-awareness" height="180"></canvas>
          </div>

          <!-- Brand Equity Radar -->
          <div style="background:var(--card);border:1px solid var(--border);border-radius:16px;padding:20px 24px;">
            <div style="font-size:12px;font-weight:700;color:var(--muted);letter-spacing:0.05em;margin-bottom:16px;">BRAND EQUITY BREAKDOWN</div>
            <canvas id="chart-equity" height="180"></canvas>
          </div>
        </div>

        <!-- P&L + Competitor + Metrics row -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

          <!-- P&L Summary -->
          <div style="background:var(--card);border:1px solid var(--border);border-radius:16px;padding:20px 24px;">
            <div style="font-size:12px;font-weight:700;color:var(--muted);letter-spacing:0.05em;margin-bottom:16px;">P&L SUMMARY (₹ Crore)</div>
            ${[
              { label: 'Revenue',        value: m.revenue,             colour: '#10b981' },
              { label: 'Gross Margin',   value: m.grossMarginCrore,    colour: '#22d3ee' },
              { label: 'A&P Spend',      value: -m.aAndPCrore,         colour: '#f59e0b' },
              { label: 'EBITDA',         value: m.ebitdaCrore,         colour: m.ebitdaCrore >= 0 ? '#10b981' : '#f43f5e' },
            ].map(row => `
              <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--elevated);">
                <span style="font-size:13px;color:var(--text-sub);">${row.label}</span>
                <span style="font-size:14px;font-weight:700;color:${row.colour};">${row.value >= 0 ? '' : '('}₹${Math.abs(row.value).toFixed(1)}Cr${row.value >= 0 ? '' : ')'}</span>
              </div>`).join('')}
          </div>

          <!-- Competitor vs. You -->
          <div style="background:var(--card);border:1px solid var(--border);border-radius:16px;padding:20px 24px;">
            <div style="font-size:12px;font-weight:700;color:var(--muted);letter-spacing:0.05em;margin-bottom:16px;">MARKET SHARE LANDSCAPE</div>
            ${[
              { name: brand.name || 'Your Brand', share: m.marketShare, colour: '#6366f1', you: true },
              ...competitors.map(c => ({ name: c.name, share: c.share, colour: '#334155', you: false })),
            ].map(row => `
              <div style="margin-bottom:12px;">
                <div style="display:flex;justify-content:space-between;margin-bottom:4px;">
                  <span style="font-size:12px;font-weight:${row.you ? '700' : '400'};color:${row.you ? 'var(--text)' : 'var(--text-sub)'};">${row.name}${row.you ? ' 🫵' : ''}</span>
                  <span style="font-size:12px;font-weight:700;color:${row.colour};">${row.share}%</span>
                </div>
                <div class="prog-bar">
                  <div style="height:100%;width:${Math.min(row.share * 2, 100)}%;background:${row.colour};border-radius:2px;transition:width 0.8s ease;"></div>
                </div>
              </div>`).join('')}
          </div>
        </div>

        <!-- Brand Health Detail -->
        <div style="background:var(--card);border:1px solid var(--border);border-radius:16px;padding:20px 24px;margin-bottom:24px;">
          <div style="font-size:12px;font-weight:700;color:var(--muted);letter-spacing:0.05em;margin-bottom:16px;">BRAND HEALTH METRICS</div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            ${[
              { label: 'Distribution',  value: m.distribution, unit: '%', colour: '#22d3ee', icon: '🗺️' },
              { label: 'Trial Rate',    value: m.trial,        unit: '%', colour: '#10b981', icon: '🧪' },
              { label: 'Repeat Rate',   value: m.repeat,       unit: '%', colour: '#6366f1', icon: '🔄' },
              { label: 'NPS Score',     value: m.nps,          unit: '',  colour: '#f59e0b', icon: '⭐' },
            ].map(h => `
              <div style="text-align:center;">
                <div style="font-size:24px;margin-bottom:4px;">${h.icon}</div>
                <div style="font-size:22px;font-weight:800;font-family:'Space Grotesk',sans-serif;color:${h.colour};">${h.value}${h.unit}</div>
                <div style="font-size:11px;color:var(--muted);">${h.label}</div>
                <div class="prog-bar" style="margin-top:6px;">
                  <div class="prog-fill" style="width:${Math.min(h.value, 100)}%;background:${h.colour};"></div>
                </div>
              </div>`).join('')}
          </div>
        </div>

        <!-- AI Coach Debrief -->
        <div class="coach-box mb-8">
          <div style="display:flex;align-items:center;gap-10px;margin-bottom:14px;">
            <div style="width:36px;height:36px;background:linear-gradient(135deg,#6366f1,#22d3ee);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:18px;margin-right:10px;">🤖</div>
            <div>
              <div class="font-semibold text-sm">AI Coach — Year ${year} Debrief</div>
              <div style="font-size:11px;color:var(--muted);">Powered by Claude · Personalised to your decisions</div>
            </div>
          </div>
          <div id="coach-message" style="font-size:13px;color:var(--text-sub);line-height:1.8;">
            ${renderCoachText(BPZ.state.coachMessage || '')}
          </div>
        </div>

        <!-- Action buttons -->
        <div class="flex gap-4">
          ${isFinal ? `
            <button class="btn-primary text-base flex-1" onclick="BPZ.navigate('final-report')">
              🏆 View Final Report
            </button>` : `
            <button class="btn-primary text-base flex-1" onclick="BPZ.startDebrief()">
              🧠 Reflect & Continue to Year ${year + 1}
            </button>`}
          <button class="btn-secondary" onclick="BPZ.navigate('landing')">
            Start New Game
          </button>
        </div>
      </div>
    </div>`;
};

function renderCoachText(raw) {
  // Convert markdown-lite **bold** and \n\n paragraphs to HTML
  return raw
    .split('\n\n')
    .map(para => `<p style="margin-bottom:10px;">${para.replace(/\*\*(.*?)\*\*/g, '<strong style="color:var(--text);">$1</strong>')}</p>`)
    .join('');
}

// ════════════════════════════════════════════════════════════
//  FINAL REPORT
// ════════════════════════════════════════════════════════════
BPZ.ui.finalReport = function() {
  const brand    = BPZ.state.brand;
  const m        = BPZ.state.metrics;
  const hist     = BPZ.state.history;
  const grade    = BPZ.engine.getGrade(m.brandEquityIndex, m.marketShare);
  const gradeCol = { A: '#10b981', B: '#22d3ee', C: '#f59e0b', D: '#f59e0b', F: '#f43f5e' }[grade.letter] || '#94a3b8';

  return `
    <div style="min-height:100vh;background:var(--bg);">
      ${renderNav('Final Report')}
      <div style="max-width:780px;margin:0 auto;padding:48px 24px;text-align:center;">
        <div style="font-size:80px;margin-bottom:16px;">${grade.letter === 'A' ? '🏆' : grade.letter === 'B' ? '🥈' : grade.letter === 'C' ? '🥉' : '📈'}</div>
        <div style="font-size:80px;font-weight:800;font-family:'Space Grotesk',sans-serif;color:${gradeCol};line-height:1;margin-bottom:8px;">${grade.letter}</div>
        <h1 class="font-display font-bold text-3xl mb-2">${brand.name || 'Your Brand'} — 3-Year Final</h1>
        <p style="color:var(--text-sub);margin-bottom:8px;">${grade.comment}</p>
        <p style="font-size:13px;color:var(--muted);margin-bottom:40px;">India · ${BPZ.data.subCategories.find(c => c.id === BPZ.state.world.subCategory)?.name || 'Personal Care'} · ${brand.positioning} positioning</p>

        <!-- Final metrics grid -->
        <div class="grid grid-cols-3 gap-4 mb-8">
          ${[
            { label: 'Final Market Share', value: m.marketShare + '%',         colour: '#22d3ee' },
            { label: 'Brand Equity Index', value: m.brandEquityIndex + '/100', colour: '#6366f1' },
            { label: 'Year 3 Revenue',     value: '₹' + m.revenue + 'Cr',     colour: '#10b981' },
            { label: 'Awareness',          value: m.awareness + '%',           colour: '#f59e0b' },
            { label: '3-Yr EBITDA',        value: '₹' + hist.reduce((s, h) => +(s + h.ebitdaCrore).toFixed(1), 0) + 'Cr', colour: m.ebitdaCrore >= 0 ? '#10b981' : '#f43f5e' },
            { label: 'NPS',                value: m.nps,                        colour: '#818cf8' },
          ].map(k => `
            <div style="background:var(--card);border:1px solid var(--border);border-radius:14px;padding:20px;">
              <div style="font-size:22px;font-weight:800;font-family:'Space Grotesk',sans-serif;color:${k.colour};margin-bottom:4px;">${k.value}</div>
              <div style="font-size:11px;color:var(--muted);">${k.label}</div>
            </div>`).join('')}
        </div>

        <div class="flex gap-4 justify-center">
          <button class="btn-primary text-base" onclick="BPZ.resetGame()">🔄 Play Again</button>
          <button class="btn-secondary" onclick="BPZ.navigate('learn-hub')">📚 Go to Learn Hub</button>
        </div>
      </div>
    </div>`;
};

// ════════════════════════════════════════════════════════════
//  LEARN HUB
// ════════════════════════════════════════════════════════════
BPZ.ui.learnHub = function() {
  const topics = BPZ.data.learnTopics;
  const cases  = BPZ.data.caseStudies;
  const tagClass = { indigo: 'tag-indigo', cyan: 'tag-cyan', emerald: 'tag-emerald', amber: 'tag-amber', rose: 'tag-rose' };

  return `
    <div style="min-height:100vh;background:var(--bg);">
      ${renderNav('Learn Hub')}
      <div style="max-width:1100px;margin:0 auto;padding:48px 24px;">

        <!-- Header -->
        <div class="mb-10">
          <h1 class="font-display font-bold text-4xl mb-3">Learn Hub</h1>
          <p style="color:var(--text-sub);font-size:16px;">Brand management theory, FMCG frameworks, and the Mishap Vault — real stories of brand wins and disasters.</p>
        </div>

        <!-- Topics -->
        <div style="margin-bottom:48px;">
          <div style="font-size:13px;font-weight:700;color:var(--muted);letter-spacing:0.06em;margin-bottom:16px;">BRAND MANAGEMENT TOPICS</div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${topics.map(t => `
              <div class="card-hover" onclick="BPZ.navigate('learn-topic', {topicId: '${t.id}'})"
                style="background:var(--card);border:1px solid var(--border);border-radius:14px;padding:20px;cursor:pointer;">
                <div style="display:flex;align-items:start;gap:14px;">
                  <div style="font-size:28px;flex-shrink:0;">${t.icon}</div>
                  <div style="flex:1;">
                    <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;flex-wrap:wrap;">
                      <span class="font-semibold text-sm">${t.title}</span>
                      <span class="tag ${tagClass[t.tagColour] || 'tag-indigo'}">${t.tag}</span>
                      <span style="font-size:11px;color:var(--muted);">⏱ ${t.duration}</span>
                    </div>
                    <p style="font-size:12px;color:var(--text-sub);line-height:1.5;">${t.summary}</p>
                  </div>
                </div>
              </div>`).join('')}
          </div>
        </div>

        <!-- Value Chain Vault -->
        <div style="margin-bottom:48px;">
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;flex-wrap:wrap;">
            <div style="font-size:13px;font-weight:700;color:var(--muted);letter-spacing:0.06em;">VALUE CHAIN VAULT</div>
            <span class="tag tag-amber">18 Cases</span>
            <span class="tag tag-amber">6 Pillars</span>
          </div>

          <!-- Vault hero card -->
          <div class="card-hover" onclick="BPZ.navigate('value-chain')"
            style="background:linear-gradient(135deg,rgba(245,158,11,0.08),rgba(244,63,94,0.06));border:1px solid rgba(245,158,11,0.25);border-radius:16px;padding:24px 28px;cursor:pointer;margin-bottom:16px;position:relative;overflow:hidden;">
            <div style="position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#f59e0b,#f43f5e,#818cf8);"></div>
            <div style="display:flex;align-items:center;gap:16px;">
              <div style="font-size:44px;">⛓️</div>
              <div style="flex:1;">
                <div class="font-display font-bold text-xl mb-1">Win Across the Full Value Chain</div>
                <p style="font-size:13px;color:var(--text-sub);line-height:1.6;margin-bottom:12px;">Deep-dive cases across Product, Packaging, Retail, Communication, Consumer Value, and Customer Value. Each case includes what they did, why it worked, the trade-off they made, and exactly how it maps to your simulation decisions.</p>
                <div class="flex flex-wrap gap-2">
                  ${(BPZ.data.valueChainPillars || []).map(p => `
                    <div style="display:inline-flex;align-items:center;gap:5px;background:${p.colourBg};border:1px solid ${p.colourBorder};border-radius:12px;padding:4px 10px;">
                      <span style="font-size:12px;">${p.icon}</span>
                      <span style="font-size:11px;font-weight:600;color:${p.colour};">${p.label}</span>
                    </div>`).join('')}
                </div>
              </div>
              <button class="btn-primary" style="flex-shrink:0;white-space:nowrap;">Explore Vault →</button>
            </div>
          </div>
        </div>

        <!-- Mishap Vault -->
        <div>
          <div style="display:flex;align-items:center;gap-10px;margin-bottom:16px;">
            <div style="font-size:13px;font-weight:700;color:var(--muted);letter-spacing:0.06em;margin-right:10px;">MISHAP VAULT — REAL BRAND CASE STUDIES</div>
            <span class="tag tag-rose">Real Brands</span>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${cases.map(cs => `
              <div class="card-hover" onclick="BPZ.navigate('case-study', {caseId: '${cs.id}'})"
                style="background:var(--card);border:1px solid var(--border);border-radius:14px;padding:20px;cursor:pointer;">
                <div style="display:flex;align-items:center;gap-12px;margin-bottom:12px;">
                  <div style="font-size:28px;margin-right:10px;">${cs.icon}</div>
                  <div>
                    <div style="font-size:11px;font-weight:700;color:var(--muted);margin-bottom:2px;">${cs.brand} · ${cs.year}</div>
                    <div class="font-semibold text-sm">${cs.headline}</div>
                  </div>
                </div>
                <p style="font-size:12px;color:var(--text-sub);line-height:1.5;margin-bottom:10px;">${cs.summary.substring(0, 120)}...</p>
                <div class="flex gap-2 flex-wrap">
                  ${cs.tags.map(tag => `<span class="tag tag-${cs.tagColour}">${tag}</span>`).join('')}
                </div>
              </div>`).join('')}
          </div>
        </div>
      </div>
    </div>`;
};

// ════════════════════════════════════════════════════════════
//  TOPIC DETAIL PAGE
// ════════════════════════════════════════════════════════════
BPZ.ui.learnTopic = function() {
  const topic = BPZ.data.learnTopics.find(t => t.id === BPZ.state.topicId);
  if (!topic) return BPZ.ui.learnHub();
  const tagClass = { indigo: 'tag-indigo', cyan: 'tag-cyan', emerald: 'tag-emerald', amber: 'tag-amber', rose: 'tag-rose' };

  return `
    <div style="min-height:100vh;background:var(--bg);">
      ${renderNav('Learn Hub')}
      <div style="max-width:760px;margin:0 auto;padding:48px 24px;">
        <button class="btn-ghost mb-6" onclick="BPZ.navigate('learn-hub')" style="display:flex;align-items:center;gap:6px;padding-left:0;">← Back to Learn Hub</button>

        <div style="display:flex;align-items:center;gap:16px;margin-bottom:8px;">
          <span style="font-size:44px;">${topic.icon}</span>
          <div>
            <div class="flex items-center gap-2 mb-1">
              <span class="tag ${tagClass[topic.tagColour] || 'tag-indigo'}">${topic.tag}</span>
              <span style="font-size:12px;color:var(--muted);">⏱ ${topic.duration}</span>
            </div>
            <h1 class="font-display font-bold text-3xl">${topic.title}</h1>
          </div>
        </div>

        <p style="font-size:15px;color:var(--text-sub);line-height:1.7;margin-bottom:32px;">${topic.summary}</p>

        <div style="background:var(--card);border:1px solid var(--border);border-radius:16px;padding:28px;margin-bottom:28px;">
          <div style="font-size:12px;font-weight:700;color:var(--muted);letter-spacing:0.05em;margin-bottom:16px;">KEY TAKEAWAYS</div>
          ${topic.keyPoints.map((pt, i) => `
            <div style="display:flex;align-items:start;gap:12px;margin-bottom:14px;">
              <div style="width:24px;height:24px;border-radius:50%;background:rgba(99,102,241,0.15);border:1px solid rgba(99,102,241,0.3);display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:#818cf8;flex-shrink:0;margin-top:1px;">${i + 1}</div>
              <p style="font-size:14px;color:var(--text-sub);line-height:1.6;margin:0;">${pt}</p>
            </div>`).join('')}
        </div>

        <div style="background:rgba(99,102,241,0.06);border:1px solid rgba(99,102,241,0.2);border-radius:12px;padding:20px 24px;">
          <p style="font-size:13px;color:#818cf8;font-style:italic;">💡 Apply this in the simulation: these concepts are baked into every decision and outcome. The better you understand them, the better your scores.</p>
        </div>
      </div>
    </div>`;
};

// ════════════════════════════════════════════════════════════
//  CASE STUDY DETAIL PAGE
// ════════════════════════════════════════════════════════════
BPZ.ui.caseStudy = function() {
  const cs = BPZ.data.caseStudies.find(c => c.id === BPZ.state.caseId);
  if (!cs) return BPZ.ui.learnHub();
  const tagClass = { indigo: 'tag-indigo', cyan: 'tag-cyan', emerald: 'tag-emerald', amber: 'tag-amber', rose: 'tag-rose' };

  return `
    <div style="min-height:100vh;background:var(--bg);">
      ${renderNav('Mishap Vault')}
      <div style="max-width:760px;margin:0 auto;padding:48px 24px;">
        <button class="btn-ghost mb-6" onclick="BPZ.navigate('learn-hub')" style="display:flex;align-items:center;gap:6px;padding-left:0;">← Back to Learn Hub</button>

        <!-- Case header -->
        <div style="display:flex;align-items:start;gap:16px;margin-bottom:24px;">
          <span style="font-size:48px;">${cs.icon}</span>
          <div>
            <div class="flex flex-wrap items-center gap-2 mb-2">
              <span style="font-size:13px;font-weight:700;color:var(--muted);">${cs.brand}</span>
              <span style="font-size:13px;color:var(--muted);">·</span>
              <span style="font-size:13px;color:var(--muted);">${cs.year}</span>
              <span class="tag tag-${cs.tagColour}">${cs.category}</span>
            </div>
            <h1 class="font-display font-bold text-3xl">${cs.headline}</h1>
          </div>
        </div>

        <p style="font-size:15px;color:var(--text-sub);line-height:1.7;margin-bottom:28px;">${cs.summary}</p>

        <!-- What happened -->
        <div class="grid grid-cols-1 gap-4 mb-6">
          <div style="background:rgba(244,63,94,0.06);border:1px solid rgba(244,63,94,0.2);border-radius:14px;padding:20px 24px;">
            <div style="font-size:12px;font-weight:700;color:#f87171;letter-spacing:0.05em;margin-bottom:10px;">⚠ WHAT WENT WRONG</div>
            <p style="font-size:14px;color:var(--text-sub);line-height:1.7;">${cs.whatWentWrong}</p>
          </div>
          <div style="background:rgba(16,185,129,0.06);border:1px solid rgba(16,185,129,0.2);border-radius:14px;padding:20px 24px;">
            <div style="font-size:12px;font-weight:700;color:#6ee7b7;letter-spacing:0.05em;margin-bottom:10px;">✓ WHAT WORKED</div>
            <p style="font-size:14px;color:var(--text-sub);line-height:1.7;">${cs.whatWorked}</p>
          </div>
        </div>

        <!-- Key lesson -->
        <div style="background:rgba(99,102,241,0.08);border:1px solid rgba(99,102,241,0.25);border-radius:14px;padding:20px 24px;margin-bottom:24px;">
          <div style="font-size:12px;font-weight:700;color:#818cf8;letter-spacing:0.05em;margin-bottom:10px;">🎓 KEY LESSON FOR BRAND MANAGERS</div>
          <p style="font-size:15px;color:var(--text);font-style:italic;line-height:1.7;">"${cs.keyLesson}"</p>
        </div>

        <!-- Metrics -->
        <div style="background:var(--card);border:1px solid var(--border);border-radius:14px;padding:20px 24px;margin-bottom:28px;">
          <div style="font-size:12px;font-weight:700;color:var(--muted);letter-spacing:0.05em;margin-bottom:14px;">BY THE NUMBERS</div>
          <div class="grid grid-cols-3 gap-4">
            ${Object.entries(cs.metrics).map(([k, v]) => `
              <div>
                <div style="font-size:12px;font-weight:700;color:var(--text);">${v}</div>
                <div style="font-size:11px;color:var(--muted);margin-top:2px;">${k.replace(/([A-Z])/g, ' $1').trim()}</div>
              </div>`).join('')}
          </div>
        </div>

        <div class="flex gap-4">
          <button class="btn-primary" onclick="BPZ.navigate('setup-player')">Apply in Simulation →</button>
          <button class="btn-secondary" onclick="BPZ.navigate('learn-hub')">Back to Learn Hub</button>
        </div>
      </div>
    </div>`;
};

// ════════════════════════════════════════════════════════════
//  DEBRIEF QUESTIONS (post-year Socratic reflection)
// ════════════════════════════════════════════════════════════
BPZ.ui.debriefQuestions = function() {
  const year      = BPZ.state.currentYear;
  const questions = BPZ.state.debriefQuestions;
  const step      = BPZ.state.debriefStep;
  const done      = BPZ.state.debriefDone;
  const lastAns   = BPZ.state.debriefLastAnswer;
  const score     = BPZ.state.debriefScore;
  const m         = BPZ.state.metrics;

  // No questions fallback
  if (!questions || questions.length === 0) {
    BPZ.completeDebrief();
    return '';
  }

  const q = questions[step] || questions[0];
  const totalQ = questions.length;

  const gradeColor = { A:'#10b981', B:'#22d3ee', C:'#f59e0b', D:'#f59e0b', F:'#f43f5e' };
  const grade      = BPZ.engine.getGrade(m.brandEquityIndex, m.marketShare);

  // Score badge colour
  const scoreCol = score === totalQ ? '#10b981' : score === 0 ? '#f43f5e' : '#f59e0b';

  // Render single question (pre-answer)
  function renderQuestion(qObj) {
    return `
      <div style="background:var(--card);border:1px solid var(--border);border-radius:16px;padding:24px;margin-bottom:20px;">
        <div style="font-size:11px;font-weight:700;color:#818cf8;letter-spacing:0.07em;margin-bottom:12px;">
          QUESTION ${step + 1} OF ${totalQ}
        </div>
        <p style="font-size:16px;font-weight:600;color:var(--text);line-height:1.6;margin-bottom:20px;">${qObj.text}</p>
        <div class="grid grid-cols-1 gap-3">
          ${(qObj.options || []).map(opt => `
            <div style="background:var(--elevated);border:1px solid var(--border);border-radius:10px;padding:14px 16px;cursor:pointer;transition:border-color 0.2s;"
              onmouseover="this.style.borderColor='#6366f1'" onmouseout="this.style.borderColor='var(--border)'"
              onclick="BPZ.answerDebrief('${opt.id}')">
              <span style="font-size:14px;color:var(--text);">${opt.text}</span>
            </div>`).join('')}
        </div>
      </div>`;
  }

  // Render answered state (with feedback)
  function renderAnswered(qObj, ans) {
    if (!ans) return renderQuestion(qObj);
    return `
      <div style="background:var(--card);border:1px solid ${ans.correct ? 'rgba(16,185,129,0.5)' : 'rgba(244,63,94,0.4)'};border-radius:16px;padding:24px;margin-bottom:20px;">
        <div style="font-size:11px;font-weight:700;color:#818cf8;letter-spacing:0.07em;margin-bottom:12px;">
          QUESTION ${step + 1} OF ${totalQ}
        </div>
        <p style="font-size:16px;font-weight:600;color:var(--text);line-height:1.6;margin-bottom:16px;">${qObj.text}</p>
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px;padding:10px 14px;border-radius:10px;background:${ans.correct ? 'rgba(16,185,129,0.1)' : 'rgba(244,63,94,0.1)'};">
          <span style="font-size:20px;">${ans.correct ? '🎯' : '📚'}</span>
          <div>
            <div style="font-size:13px;font-weight:700;color:${ans.correct ? '#10b981' : '#f43f5e'};">${ans.correct ? 'Correct!' : 'Not quite — here\'s the insight:'}</div>
          </div>
        </div>
        <div style="background:rgba(99,102,241,0.08);border:1px solid rgba(99,102,241,0.2);border-radius:10px;padding:14px 16px;margin-bottom:16px;">
          <span style="font-size:12px;color:#818cf8;font-weight:600;">💡 Key Insight: </span>
          <span style="font-size:13px;color:var(--text-sub);line-height:1.6;">${qObj.insight || 'Keep analysing your results to build pattern recognition.'}</span>
        </div>
        ${!done ? `
          <button class="btn-primary w-full" onclick="BPZ.nextDebriefQuestion()">
            Next Question →
          </button>` : ''}
      </div>`;
  }

  // Done state
  const doneSection = done ? `
    <div style="background:var(--card);border:1px solid var(--border);border-radius:16px;padding:28px;text-align:center;margin-bottom:24px;">
      <div style="font-size:48px;margin-bottom:12px;">${score === totalQ ? '🧠' : score > 0 ? '📈' : '📚'}</div>
      <div style="font-size:22px;font-weight:800;font-family:'Space Grotesk',sans-serif;color:${scoreCol};margin-bottom:6px;">${score}/${totalQ} correct</div>
      <p style="font-size:14px;color:var(--text-sub);margin-bottom:0;">
        ${score === totalQ
          ? 'Sharp strategic thinking. You\'re diagnosing your brand like a pro.'
          : score > 0
          ? 'Good effort. Re-read the insights above before making Year ' + (year + 1) + ' decisions.'
          : 'Study the insights carefully — they point directly at what to fix next year.'}
      </p>
    </div>
    <button class="btn-primary w-full text-base" onclick="BPZ.completeDebrief()">
      ${year >= BPZ.state.maxYears ? '🏆 View Final Report' : `▶ Set Year ${year + 1} Mix & Continue`}
    </button>` : '';

  return `
    <div style="min-height:100vh;background:var(--bg);">
      ${renderNav(`Year ${year} Debrief`)}
      <div style="max-width:640px;margin:0 auto;padding:40px 24px;">

        <!-- Header -->
        <div style="text-align:center;margin-bottom:32px;">
          <div style="font-size:12px;font-weight:700;color:var(--muted);letter-spacing:0.1em;margin-bottom:8px;">YEAR ${year} DEBRIEF</div>
          <h1 class="font-display font-bold text-2xl mb-2">Reflect Before You Move On</h1>
          <p style="font-size:13px;color:var(--text-sub);">Answer these Socratic questions to sharpen your strategic thinking. No googling — trust your instincts and the data you just saw.</p>
        </div>

        <!-- Performance snapshot -->
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-bottom:28px;">
          ${[
            { label:'Share',    val: m.marketShare + '%',          col:'#22d3ee' },
            { label:'Awareness',val: m.awareness + '%',            col:'#6366f1' },
            { label:'Equity',   val: m.brandEquityIndex + '/100',  col:'#f59e0b' },
            { label:'Grade',    val: grade.letter,                  col: gradeColor[grade.letter] || '#94a3b8' },
          ].map(k => `
            <div style="text-align:center;background:var(--card);border:1px solid var(--border);border-radius:10px;padding:10px;">
              <div style="font-size:18px;font-weight:800;font-family:'Space Grotesk',sans-serif;color:${k.col};">${k.val}</div>
              <div style="font-size:10px;color:var(--muted);">${k.label}</div>
            </div>`).join('')}
        </div>

        <!-- Question or Done state -->
        ${done
          ? doneSection
          : (lastAns ? renderAnswered(q, lastAns) : renderQuestion(q))
        }

        ${!done ? `
          <div style="text-align:center;margin-top:16px;">
            <button class="btn-ghost text-sm" onclick="BPZ.completeDebrief()" style="font-size:12px;color:var(--muted);">
              Skip reflection →
            </button>
          </div>` : ''}
      </div>
    </div>`;
};

// ════════════════════════════════════════════════════════════
//  VALUE CHAIN VAULT — PILLAR HUB
// ════════════════════════════════════════════════════════════
BPZ.ui.valueChain = function() {
  const pillars      = BPZ.data.valueChainPillars;
  const cases        = BPZ.data.valueChainCases;
  const activePillar = BPZ.state.valueChainPillar;
  const filtered     = activePillar ? cases.filter(c => c.pillar === activePillar) : cases;
  const pillar       = activePillar ? pillars.find(p => p.id === activePillar) : null;

  return `
    <div style="min-height:100vh;background:var(--bg);">
      ${renderNav('Value Chain Vault')}
      <div style="max-width:1100px;margin:0 auto;padding:48px 24px;">

        <button class="btn-ghost mb-6" onclick="BPZ.navigate('learn-hub')" style="display:flex;align-items:center;gap:6px;padding-left:0;">← Back to Learn Hub</button>

        <div class="mb-10">
          <div class="tag tag-amber mb-3">Value Chain Vault</div>
          <h1 class="font-display font-bold text-4xl mb-3">Win Across the Full Value Chain</h1>
          <p style="color:var(--text-sub);font-size:16px;max-width:640px;">Real brand cases across the 6 levers that determine FMCG success — from product formulation to trade partnerships. Study each pillar. Apply the lesson in your simulation.</p>
        </div>

        <!-- Pillar filter strip -->
        <div style="display:flex;flex-wrap:wrap;gap:10px;margin-bottom:32px;">
          <div class="selectable ${!activePillar ? 'selected' : ''}"
            style="border-radius:20px;padding:8px 16px;font-size:13px;font-weight:600;"
            onclick="BPZ.state.valueChainPillar=null;BPZ.render();">
            All Pillars (${cases.length})
          </div>
          ${pillars.map(p => `
            <div class="selectable ${activePillar === p.id ? 'selected' : ''}"
              style="border-radius:20px;padding:8px 16px;font-size:13px;font-weight:600;"
              onclick="BPZ.state.valueChainPillar='${p.id}';BPZ.render();">
              ${p.icon} ${p.label}
            </div>`).join('')}
        </div>

        <!-- Active pillar description -->
        ${pillar ? `
          <div style="background:${pillar.colourBg};border:1px solid ${pillar.colourBorder};border-radius:14px;padding:18px 24px;margin-bottom:28px;display:flex;align-items:center;gap:16px;">
            <div style="font-size:36px;flex-shrink:0;">${pillar.icon}</div>
            <div>
              <div style="font-size:11px;font-weight:700;color:${pillar.colour};letter-spacing:0.06em;margin-bottom:4px;">${pillar.label.toUpperCase()}</div>
              <p style="font-size:14px;color:var(--text-sub);margin:0;line-height:1.6;">${pillar.description}</p>
            </div>
          </div>` : `
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
            ${pillars.map(p => {
              const count = cases.filter(c => c.pillar === p.id).length;
              return `
                <div class="card-hover" style="background:${p.colourBg};border:1px solid ${p.colourBorder};border-radius:14px;padding:20px;cursor:pointer;"
                  onclick="BPZ.state.valueChainPillar='${p.id}';BPZ.render();">
                  <div style="font-size:28px;margin-bottom:10px;">${p.icon}</div>
                  <div style="font-weight:700;font-size:13px;color:${p.colour};margin-bottom:6px;">${p.label}</div>
                  <p style="font-size:12px;color:var(--text-sub);line-height:1.5;margin-bottom:10px;">${p.description}</p>
                  <span style="font-size:11px;color:${p.colour};font-weight:600;">${count} cases →</span>
                </div>`;
            }).join('')}
          </div>`}

        <!-- Cases grid -->
        <div style="font-size:12px;font-weight:700;color:var(--muted);letter-spacing:0.06em;margin-bottom:16px;">
          ${activePillar && pillar ? `${filtered.length} CASES — ${pillar.label.toUpperCase()}` : `ALL ${filtered.length} CASES`}
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${filtered.map(c => {
            const p = pillars.find(pl => pl.id === c.pillar);
            return `
              <div class="card-hover" style="background:var(--card);border:1px solid var(--border);border-radius:14px;padding:20px;cursor:pointer;"
                onclick="BPZ.navigate('value-chain-case', {valueChainCaseId: '${c.id}'})">
                <div style="display:flex;align-items:start;gap:14px;">
                  <div style="font-size:32px;flex-shrink:0;">${c.icon}</div>
                  <div style="flex:1;">
                    <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:6px;">
                      ${p ? `<span style="font-size:11px;font-weight:700;color:${p.colour};">${p.icon} ${p.label}</span>` : ''}
                      <span style="font-size:11px;color:var(--muted);">· ${c.brand} · ${c.year}</span>
                    </div>
                    <div class="font-semibold text-sm mb-2">${c.headline}</div>
                    <p style="font-size:12px;color:var(--text-sub);line-height:1.5;margin-bottom:10px;">${c.summary.substring(0, 110)}...</p>
                    <div class="flex flex-wrap gap-1">
                      ${c.tags.map(t => `<span class="tag tag-${c.tagColour}" style="font-size:10px;">${t}</span>`).join('')}
                    </div>
                  </div>
                </div>
              </div>`;
          }).join('')}
        </div>
      </div>
    </div>`;
};

// ════════════════════════════════════════════════════════════
//  VALUE CHAIN VAULT — CASE DETAIL
// ════════════════════════════════════════════════════════════
BPZ.ui.valueChainCase = function() {
  const c = BPZ.data.valueChainCases.find(x => x.id === BPZ.state.valueChainCaseId);
  if (!c) return BPZ.ui.valueChain();
  const pillar = BPZ.data.valueChainPillars.find(p => p.id === c.pillar);

  return `
    <div style="min-height:100vh;background:var(--bg);">
      ${renderNav('Value Chain Vault')}
      <div style="max-width:760px;margin:0 auto;padding:48px 24px;">

        <button class="btn-ghost mb-6" onclick="BPZ.navigate('value-chain', {valueChainPillar: '${c.pillar}'})" style="display:flex;align-items:center;gap:6px;padding-left:0;">← Back to ${pillar ? pillar.label : 'Value Chain Vault'}</button>

        <!-- Header -->
        <div style="display:flex;align-items:start;gap:18px;margin-bottom:24px;">
          <div style="font-size:52px;flex-shrink:0;">${c.icon}</div>
          <div>
            <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:8px;">
              ${pillar ? `
                <div style="display:inline-flex;align-items:center;gap:6px;background:${pillar.colourBg};border:1px solid ${pillar.colourBorder};border-radius:20px;padding:4px 12px;">
                  <span style="font-size:13px;">${pillar.icon}</span>
                  <span style="font-size:11px;font-weight:700;color:${pillar.colour};">${pillar.label}</span>
                </div>` : ''}
              <span style="font-size:12px;color:var(--muted);">${c.brand} · ${c.year}</span>
            </div>
            <h1 class="font-display font-bold text-3xl leading-tight">${c.headline}</h1>
          </div>
        </div>

        <div class="flex flex-wrap gap-2 mb-6">
          ${c.tags.map(t => `<span class="tag tag-${c.tagColour}">${t}</span>`).join('')}
        </div>

        <p style="font-size:15px;color:var(--text-sub);line-height:1.8;margin-bottom:32px;">${c.summary}</p>

        <!-- 4-section deep dive -->
        <div class="grid grid-cols-1 gap-5 mb-8">

          <div style="background:var(--card);border:1px solid var(--border);border-radius:16px;padding:24px;">
            <div style="font-size:11px;font-weight:700;color:#22d3ee;letter-spacing:0.06em;margin-bottom:12px;">🔍 WHAT THEY DID</div>
            <p style="font-size:14px;color:var(--text-sub);line-height:1.8;margin:0;">${c.whatTheyDid}</p>
          </div>

          <div style="background:rgba(16,185,129,0.05);border:1px solid rgba(16,185,129,0.2);border-radius:16px;padding:24px;">
            <div style="font-size:11px;font-weight:700;color:#6ee7b7;letter-spacing:0.06em;margin-bottom:12px;">✅ WHY IT WORKED</div>
            <p style="font-size:14px;color:var(--text-sub);line-height:1.8;margin:0;">${c.whyItWorked}</p>
          </div>

          <div style="background:rgba(245,158,11,0.05);border:1px solid rgba(245,158,11,0.2);border-radius:16px;padding:24px;">
            <div style="font-size:11px;font-weight:700;color:#fcd34d;letter-spacing:0.06em;margin-bottom:12px;">⚖️ THE TRADE-OFF</div>
            <p style="font-size:14px;color:var(--text-sub);line-height:1.8;margin:0;">${c.tradeOff}</p>
          </div>

          <div style="background:rgba(99,102,241,0.07);border:1px solid rgba(99,102,241,0.25);border-radius:16px;padding:24px;">
            <div style="font-size:11px;font-weight:700;color:#818cf8;letter-spacing:0.06em;margin-bottom:12px;">🎮 IN YOUR SIMULATION</div>
            <p style="font-size:14px;color:var(--text-sub);line-height:1.8;margin:0;">${c.simulationLink}</p>
          </div>
        </div>

        <!-- Metrics -->
        <div style="background:var(--card);border:1px solid var(--border);border-radius:14px;padding:20px 24px;margin-bottom:32px;">
          <div style="font-size:11px;font-weight:700;color:var(--muted);letter-spacing:0.05em;margin-bottom:14px;">📊 BY THE NUMBERS</div>
          <div class="grid grid-cols-3 gap-4">
            ${Object.entries(c.metrics).map(([k, v]) => `
              <div>
                <div style="font-size:13px;font-weight:700;color:var(--text);line-height:1.4;">${v}</div>
                <div style="font-size:11px;color:var(--muted);margin-top:3px;">${k.replace(/([A-Z])/g, ' $1').trim()}</div>
              </div>`).join('')}
          </div>
        </div>

        <!-- More from same pillar -->
        ${(() => {
          const more = BPZ.data.valueChainCases.filter(x => x.pillar === c.pillar && x.id !== c.id);
          if (!more.length) return '';
          return `
            <div style="margin-bottom:32px;">
              <div style="font-size:12px;font-weight:700;color:var(--muted);letter-spacing:0.05em;margin-bottom:12px;">MORE FROM ${pillar ? pillar.label.toUpperCase() : 'THIS PILLAR'}</div>
              <div class="grid grid-cols-1 gap-3">
                ${more.map(x => `
                  <div class="card-hover" style="background:var(--card);border:1px solid var(--border);border-radius:12px;padding:14px 16px;cursor:pointer;display:flex;align-items:center;gap:12px;"
                    onclick="BPZ.navigate('value-chain-case', {valueChainCaseId: '${x.id}'})">
                    <span style="font-size:24px;">${x.icon}</span>
                    <div style="flex:1;">
                      <div style="font-weight:600;font-size:13px;">${x.brand}</div>
                      <div style="font-size:12px;color:var(--text-sub);">${x.headline}</div>
                    </div>
                    <span style="font-size:14px;color:var(--muted);">→</span>
                  </div>`).join('')}
              </div>
            </div>`;
        })()}

        <div class="flex gap-4">
          <button class="btn-primary" onclick="BPZ.navigate('setup-player')">Apply in Simulation →</button>
          <button class="btn-secondary" onclick="BPZ.navigate('value-chain', {valueChainPillar: '${c.pillar}'})">Back to ${pillar ? pillar.label : 'Vault'}</button>
        </div>
      </div>
    </div>`;
};

// ════════════════════════════════════════════════════════════
//  CHART INITIALISATION (called after dashboard renders)
// ════════════════════════════════════════════════════════════
BPZ.ui.initDashboardCharts = function() {
  const m    = BPZ.state.metrics;
  const hist = BPZ.state.history;

  // Destroy old instances
  Object.values(BPZ.charts).forEach(c => c.destroy());
  BPZ.charts = {};

  // ── Awareness & Distribution line chart ────────────────────
  const awareCvs = document.getElementById('chart-awareness');
  if (awareCvs) {
    const years  = hist.map((_, i) => `Year ${i + 1}`);
    const awareData = hist.map(h => h.awareness);
    const distData  = hist.map(h => h.distribution);
    BPZ.charts.awareness = new Chart(awareCvs, {
      type: 'line',
      data: {
        labels: years,
        datasets: [
          { label: 'Awareness %', data: awareData, borderColor: '#6366f1', backgroundColor: 'rgba(99,102,241,0.1)', fill: true, tension: 0.4, pointRadius: 5 },
          { label: 'Distribution %', data: distData, borderColor: '#22d3ee', backgroundColor: 'rgba(34,211,238,0.08)', fill: true, tension: 0.4, pointRadius: 5 },
        ],
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: { labels: { color: '#94a3b8', font: { size: 11 } } } },
        scales: {
          x: { grid: { color: 'rgba(255,255,255,0.04)' }, ticks: { color: '#64748b' } },
          y: { grid: { color: 'rgba(255,255,255,0.04)' }, ticks: { color: '#64748b' }, min: 0, max: 100 },
        },
      },
    });
  }

  // ── Brand Equity Radar ──────────────────────────────────────
  const eqCvs = document.getElementById('chart-equity');
  if (eqCvs) {
    const eq = m.brandEquity;
    BPZ.charts.equity = new Chart(eqCvs, {
      type: 'radar',
      data: {
        labels: ['Relevance', 'Differentiation', 'Esteem', 'Knowledge'],
        datasets: [{
          label: BPZ.state.brand.name || 'Your Brand',
          data: [eq.relevance, eq.differentiation, eq.esteem, eq.knowledge],
          borderColor: '#6366f1',
          backgroundColor: 'rgba(99,102,241,0.15)',
          pointBackgroundColor: '#6366f1',
          pointBorderColor: '#6366f1',
          borderWidth: 2,
        }],
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: { labels: { color: '#94a3b8', font: { size: 11 } } } },
        scales: {
          r: {
            min: 0, max: 100,
            grid: { color: 'rgba(255,255,255,0.06)' },
            angleLines: { color: 'rgba(255,255,255,0.06)' },
            pointLabels: { color: '#94a3b8', font: { size: 11 } },
            ticks: { display: false },
          },
        },
      },
    });
  }
};
