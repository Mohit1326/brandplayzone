// ============================================================
//  BrandPlayzone — Rationale Question Bank
//  Forces first-principles thinking before every decision
// ============================================================
window.BPZ = window.BPZ || {};

BPZ.rationaleData = {

  // ── RATIONALE QUESTIONS PER EVENT OPTION ────────────────
  // Structure: eventId → optionId → { q1, q2 }
  // Each question: { text, options[{id,text,correct}], insight }

  events: {

    'raw-material-spike': {
      'absorb': {
        q1: {
          text: 'What is the primary strategic case for absorbing the cost hit rather than passing it to consumers?',
          options: [
            { id: 'a', text: 'Maximise short-term profitability', correct: false },
            { id: 'b', text: 'Protect consumer price trust and brand equity — a brand investment over margin', correct: true },
            { id: 'c', text: 'Force competitors to absorb costs too', correct: false },
            { id: 'd', text: 'Signal to retailers that you are a reliable partner', correct: false },
          ],
          insight: 'Absorbing a COGS hit bets that long-term consumer trust outweighs the short-term margin dip. Especially valid for a young brand — a price increase early in the lifecycle can permanently reprice consumer expectations downward and train switchers to leave.'
        },
        q2: {
          text: 'What is the key financial risk you must monitor when absorbing a COGS spike?',
          options: [
            { id: 'a', text: 'Retailer margin pressure cascading', correct: false },
            { id: 'b', text: 'Structural margin erosion if raw material costs do not normalise', correct: true },
            { id: 'c', text: 'Volume loss to competitors in the short term', correct: false },
            { id: 'd', text: 'Brand awareness decline', correct: false },
          ],
          insight: 'Absorbing once is a calculated risk that commodity prices revert to mean. If they do not, you have locked yourself into permanently thin margins. Set a hard trigger: "If COGS remain elevated for 2 quarters, we re-examine pricing." Never absorb without a contingency plan.'
        }
      },
      'price-hike': {
        q1: {
          text: 'A price increase is most strategically defensible when which condition is true?',
          options: [
            { id: 'a', text: 'Your brand has strong equity and consumers have limited comparable alternatives', correct: true },
            { id: 'b', text: 'When market share is at its highest', correct: false },
            { id: 'c', text: 'When your total advertising budget is large', correct: false },
            { id: 'd', text: 'When Kirana stores are your primary channel', correct: false },
          ],
          insight: 'Price elasticity is lower when brand equity is high. Loyal consumers absorb a hike; switchers do not. Key diagnostic: what % of your consumers are loyal repeaters vs. trial buyers? Over 60% loyal → a modest hike is tolerable. Under 40% loyal → volume risk is severe.'
        },
        q2: {
          text: 'Which consumer segment is MOST impacted by an 8% price hike on your SKU?',
          options: [
            { id: 'a', text: 'Metro Premium Millennials', correct: false },
            { id: 'b', text: 'Health-Conscious Gen Z', correct: false },
            { id: 'c', text: 'Value Hunters and Aspiring Middle Class', correct: true },
            { id: 'd', text: 'Traditional Loyalists', correct: false },
          ],
          insight: 'Value Hunters and Aspiring Middle Class have high price sensitivity — even a ₹5–10 increase triggers switching. If these segments are part of your base, a price hike carries real volume risk. Price sensitivity analysis by segment should always precede any price action.'
        }
      },
      'reformulate': {
        q1: {
          text: 'When is reformulating to reduce costs MOST dangerous for a brand?',
          options: [
            { id: 'a', text: 'When the brand is already a market leader', correct: false },
            { id: 'b', text: 'When the brand\'s core equity is built on superior ingredient quality or naturals claims', correct: true },
            { id: 'c', text: 'When the brand has high numeric distribution', correct: false },
            { id: 'd', text: 'When the category is in decline', correct: false },
          ],
          insight: 'If your differentiation is "better ingredients," reformulating is brand suicide. Gen Z reads ingredient lists. Patanjali lost significant equity when quality inconsistency eroded its "natural" promise. Never compromise the core ingredient story that consumers chose you for.'
        },
        q2: {
          text: 'What must you ALWAYS do before executing any formulation change?',
          options: [
            { id: 'a', text: 'Increase advertising budget to manage consumer perception', correct: false },
            { id: 'b', text: 'Run blind product tests with core consumers to validate perceptual parity', correct: true },
            { id: 'c', text: 'Inform distributors first so they can manage trade questions', correct: false },
            { id: 'd', text: 'Check competitor ingredient lists for benchmarking', correct: false },
          ],
          insight: 'Blind consumer usage tests are non-negotiable before any formula change. If consumers cannot tell the difference, proceed. If they can, you have not reformulated — you have degraded. The New Coke disaster (1985) is the ultimate case study in skipping this step and paying the price.'
        }
      }
    },

    'competitor-price-war': {
      'match-price': {
        q1: {
          text: '"Reactive pricing" — matching a competitor\'s cut — has one primary strategic weakness. What is it?',
          options: [
            { id: 'a', text: 'It reduces distribution revenue immediately', correct: false },
            { id: 'b', text: 'It signals to the market that your price — not your brand — is why consumers choose you', correct: true },
            { id: 'c', text: 'It causes brand awareness to drop sharply', correct: false },
            { id: 'd', text: 'It makes distribution partners uncomfortable', correct: false },
          ],
          insight: 'Once you match a price cut, you commoditise yourself. Consumers start comparing on price alone. The next competitive cut will again require a response. Breaking out of a price war is far harder than not entering one in the first place.'
        },
        q2: {
          text: 'Which metric best tells you if a price cut is driving real growth vs. just promotional volume?',
          options: [
            { id: 'a', text: 'Total revenue during the promotion period', correct: false },
            { id: 'b', text: 'Market share increase during the promotion', correct: false },
            { id: 'c', text: 'Repeat purchase rate 8 weeks after the promotion ends', correct: true },
            { id: 'd', text: 'Retailer sell-in volume', correct: false },
          ],
          insight: 'Post-promotion repeat rate is the acid test. Consumers who bought on discount but did not repeat gave you volume — not loyalty. Price promotions drive trial. Product quality and brand relevance drive repeat. Never confuse the two in your evaluation.'
        }
      },
      'promote': {
        q1: {
          text: 'BTL promotions are used to counter a price attack because they...',
          options: [
            { id: 'a', text: 'Are always cheaper than TV advertising', correct: false },
            { id: 'b', text: 'Defend shelf space without permanently cutting MRP — giving you reversibility', correct: true },
            { id: 'c', text: 'Build long-term brand equity better than ATL advertising', correct: false },
            { id: 'd', text: 'Directly reach the competitor\'s existing consumers', correct: false },
          ],
          insight: 'BTL promotions (BOGOF, sampling, end-cap displays) fight at the point of purchase without long-term MRP damage. Once you cut MRP it is hard to raise it back. BTL is temporary and reversible — the core reason mature FMCG brands prefer shopper marketing over price wars.'
        },
        q2: {
          text: 'The biggest risk of over-using BTL promotions as a price war defence is:',
          options: [
            { id: 'a', text: 'Retailer resistance to promotional materials', correct: false },
            { id: 'b', text: 'Consumers become trained to only buy during promotions, eroding base volume', correct: true },
            { id: 'c', text: 'Competitors will immediately copy all promotions', correct: false },
            { id: 'd', text: 'The advertising budget gets fully consumed', correct: false },
          ],
          insight: 'Over-promotion creates a "deal-seeker" consumer base. If 60%+ of your volume comes during promotional periods, your base price has effectively become the promotional price. This is the promotion trap — very hard to escape. Cap promotional weeks at under 30% of the year.'
        }
      },
      'hold-course': {
        q1: {
          text: 'Holding course during a price war makes strategic sense when:',
          options: [
            { id: 'a', text: 'Your marketing budget is too small to respond', correct: false },
            { id: 'b', text: 'Brand equity and consumer loyalty are strong enough to withstand short-term share loss', correct: true },
            { id: 'c', text: 'You are new to the market with low distribution', correct: false },
            { id: 'd', text: 'Your distribution coverage is weak', correct: false },
          ],
          insight: 'Hold course is a long game. You are betting that your loyal base will not switch and that the competitor will return to normal pricing having damaged their own margins. Apple never chases price wars — premium brands do not blink first. But this only works with a truly loyal base.'
        },
        q2: {
          text: 'When holding course during a competitor price attack, which investment most protects you?',
          options: [
            { id: 'a', text: 'Increasing trade margins to retailers to ensure shelf priority', correct: false },
            { id: 'b', text: 'Doubling down on brand communication to reinforce why you are worth the premium', correct: true },
            { id: 'c', text: 'Reducing your advertising spend to conserve budget', correct: false },
            { id: 'd', text: 'Quietly launching a new value SKU at the competitor\'s price', correct: false },
          ],
          insight: 'If you are not matching price, you must justify the premium loudly. Communication that reinforces differentiation — quality, ingredients, values, user outcomes — is the only thing that holds consumers at a higher price point during competitive attacks. Silence during a price war is surrender in slow motion.'
        }
      }
    },

    'influencer-viral': {
      'partner': {
        q1: {
          text: 'When formalising an influencer partnership post-virality, the key risk to manage is:',
          options: [
            { id: 'a', text: 'The influencer becoming too expensive to sustain', correct: false },
            { id: 'b', text: 'Over-commercialisation killing the authenticity that made the post viral', correct: true },
            { id: 'c', text: 'Competitors immediately copying the partnership model', correct: false },
            { id: 'd', text: 'Retailer relationships being negatively affected', correct: false },
          ],
          insight: 'The paradox of influencer marketing: the moment it becomes too polished and branded, it loses the "real person" credibility that drove the virality. Provide the product and a brief — not a word-for-word script. The authenticity is the asset you are paying for. Do not destroy what you are paying to own.'
        },
        q2: {
          text: 'Which metric best measures the ROI of an influencer partnership?',
          options: [
            { id: 'a', text: 'Total views on the influencer\'s posts', correct: false },
            { id: 'b', text: 'The influencer\'s total follower count', correct: false },
            { id: 'c', text: 'Conversion rate to trial (UTM clicks to purchases) and sentiment score', correct: true },
            { id: 'd', text: 'Number of posts published per month', correct: false },
          ],
          insight: 'Views are vanity. What matters is the path from awareness to trial. Track UTM links, discount code redemptions, and app installs tied to the influencer. For brand equity, also measure sentiment — what are people actually saying in comments? Positive sentiment outlasts the post and builds real equity.'
        }
      },
      'ride-wave': {
        q1: {
          text: 'Riding the organic wave without formal partnership means betting on:',
          options: [
            { id: 'a', text: 'The influencer\'s goodwill continuing indefinitely without incentive', correct: false },
            { id: 'b', text: 'Capital efficiency over reach extension — accepting a shorter, smaller lift', correct: true },
            { id: 'c', text: 'Protecting brand purity from any commercial association', correct: false },
            { id: 'd', text: 'The viral moment sustaining itself without brand amplification', correct: false },
          ],
          insight: 'Organic viral moments are typically 48–72 hours. Without amplification, the spike decays rapidly. The strategic trade-off is capital efficiency vs. reach extension. For a bootstrapped brand, riding the wave may be the right call — but quantify the equity you are leaving on the table before deciding.'
        },
        q2: {
          text: 'Even without investment, the minimum a brand should do when a positive viral moment happens is:',
          options: [
            { id: 'a', text: 'Do nothing — avoid contaminating the organic moment', correct: false },
            { id: 'b', text: 'Engage authentically in comments, reshare from brand channels, amplify the conversation', correct: true },
            { id: 'c', text: 'Issue a press release immediately', correct: false },
            { id: 'd', text: 'Increase paid advertising budget to amplify the moment', correct: false },
          ],
          insight: 'Even without paid partnership, brand engagement is free and essential. Responding with wit or gratitude signals a human, listening brand. Zomato built its entire equity platform on exactly this approach — responding to consumer content with authentic brand voice before spending a rupee on formal partnerships.'
        }
      },
      'ignore': {
        q1: {
          text: 'A brand should consider NOT engaging with a viral influencer moment when:',
          options: [
            { id: 'a', text: 'The brand is too small to handle the attention', correct: false },
            { id: 'b', text: 'The influencer\'s audience is misaligned with the brand\'s long-term positioning strategy', correct: true },
            { id: 'c', text: 'Brand awareness is already very high', correct: false },
            { id: 'd', text: 'Social media is not a declared priority channel', correct: false },
          ],
          insight: 'Not every viral moment deserves engagement. If a naturals brand goes viral among consumers who do not value naturals, engaging might attract the wrong cohort — diluting the target community. Strategic selectivity in influencer engagement is a hallmark of well-managed premium brands.'
        },
        q2: {
          text: 'The primary risk of ignoring a positive organic viral moment is:',
          options: [
            { id: 'a', text: 'Legal exposure from user-generated content', correct: false },
            { id: 'b', text: 'Competitor brands swooping in to engage with the influencer\'s activated audience', correct: true },
            { id: 'c', text: 'Long-term retailer relationship damage', correct: false },
            { id: 'd', text: 'Employee morale declining', correct: false },
          ],
          insight: 'The biggest risk of inaction is competitive opportunism. If your brand does not engage with a community talking about your product, a competitor will step in to capture that audience. "Your consumers are talking about you — someone will listen. Make sure it is you."'
        }
      }
    },

    'qcom-surge': {
      'enter-qcom': {
        q1: {
          text: 'Quick commerce is most strategically valuable for which type of brand?',
          options: [
            { id: 'a', text: 'Rural-focused, value-positioned brands targeting the sachet economy', correct: false },
            { id: 'b', text: 'Urban premium brands targeting metro consumers who prioritise convenience above price', correct: true },
            { id: 'c', text: 'Brands with very large and complex SKU portfolios', correct: false },
            { id: 'd', text: 'Brands with the lowest price point in the category', correct: false },
          ],
          insight: 'Quick commerce (Blinkit, Zepto, Instamart) is a metro, premium, convenience-driven channel. For a premium brand, entering q-com signals relevance to your core urban cohort, delivers first-party data on purchase behaviour, and is a strong trial driver for new product launches in urban markets.'
        },
        q2: {
          text: 'The key financial challenge of quick commerce for FMCG brands is:',
          options: [
            { id: 'a', text: 'High entry listing fees paid upfront', correct: false },
            { id: 'b', text: 'The 40%+ commission structure which significantly compresses contribution margins', correct: true },
            { id: 'c', text: 'Slow payment cycles from the platform', correct: false },
            { id: 'd', text: 'Low brand visibility within the app algorithm', correct: false },
          ],
          insight: 'Q-com commissions (35–45%) are the highest of any channel. At a 65% gross margin, you are left with ~25% contribution before marketing. The ROI case must rest on brand-building value of urban presence, first-party data, and trial generation — not direct profitability. Never justify q-com investment on margin alone.'
        }
      },
      'wait-watch': {
        q1: {
          text: 'Waiting on quick commerce makes sense primarily when:',
          options: [
            { id: 'a', text: 'Your target segment shops primarily in Kirana or Tier 2+ cities where q-com does not operate', correct: true },
            { id: 'b', text: 'You have a large enough budget to absorb the commission costs', correct: false },
            { id: 'c', text: 'Your brand already has very high awareness', correct: false },
            { id: 'd', text: 'Your direct competitors have not yet entered q-com', correct: false },
          ],
          insight: 'Q-com investment only makes sense if your primary segment uses it. Value Hunters and Traditional Loyalists shop at Kirana and Modern Trade. Investing in q-com to reach them is capital misallocation. Always filter channel decisions through segment behaviour data — not through channel hype in industry press.'
        },
        q2: {
          text: 'What is the risk of waiting too long to enter quick commerce?',
          options: [
            { id: 'a', text: 'No significant risk — you save commission costs and margins remain healthy', correct: false },
            { id: 'b', text: 'Competitors establish category dominance in the channel, making later entry more expensive and less visible', correct: true },
            { id: 'c', text: 'Regulatory complications with new channel registrations', correct: false },
            { id: 'd', text: 'Distributor channel conflicts will emerge', correct: false },
          ],
          insight: 'First-mover advantage in any channel is real. Brands that establish q-com presence early capture the default position in the app algorithm. Entering late means paying more for placement and fighting entrenched consumer habits. Set a specific trigger: "We enter q-com when [segment metric] reaches [threshold]."'
        }
      }
    },

    'regulator-flag': {
      'modify-claim': {
        q1: {
          text: 'Proactively modifying a flagged claim is strategically smart because:',
          options: [
            { id: 'a', text: 'It eliminates all legal exposure immediately', correct: false },
            { id: 'b', text: 'It signals brand maturity and avoids the PR snowball of a contested regulatory dispute', correct: true },
            { id: 'c', text: 'It is always cheaper than any alternative course of action', correct: false },
            { id: 'd', text: 'It satisfies retailers and trade partners immediately', correct: false },
          ],
          insight: 'Brands that self-correct before being forced to look confident and consumer-centric. Those that fight and lose look defensive. The Maggi lesson: a 2-month delay in acknowledging a regulatory issue cost far more than the issue itself. Speed of acknowledgement matters more than legal correctness.'
        },
        q2: {
          text: 'When modifying product claims, the communication priority is:',
          options: [
            { id: 'a', text: 'Say nothing — let the packaging change happen quietly', correct: false },
            { id: 'b', text: 'Communicate proactively with trade partners and consumers about why the claim was updated', correct: true },
            { id: 'c', text: 'Focus all communication only to the regulator body', correct: false },
            { id: 'd', text: 'Launch a new campaign to distract consumer attention elsewhere', correct: false },
          ],
          insight: 'Silence around claim modifications creates rumour. Brief communication — "We updated our claim to be more precise about what our product does" — signals confidence, not retreat. Trade partners especially need this: they face shopper questions in-aisle daily and need accurate answers to give.'
        }
      },
      'contest': {
        q1: {
          text: 'Contesting a regulatory claim with clinical data is justified only when:',
          options: [
            { id: 'a', text: 'Your legal team believes they have a strong chance of winning', correct: false },
            { id: 'b', text: 'You have robust, independent clinical evidence directly supporting the exact claim in question', correct: true },
            { id: 'c', text: 'You have a large PR budget to manage the public narrative', correct: false },
            { id: 'd', text: 'Competitors make similar or stronger claims already', correct: false },
          ],
          insight: 'Only contest what you can prove, not what you believe. The data must be: (a) from an independent credible source — not in-house, (b) directly relevant to the specific claim, and (c) statistically significant. Contesting without solid evidence prolongs brand exposure in the news cycle and looks evasive to both regulators and consumers.'
        },
        q2: {
          text: 'During a 60-day regulatory dispute, the most important brand communication task is:',
          options: [
            { id: 'a', text: 'Maintain normal advertising spend to signal business as usual', correct: false },
            { id: 'b', text: 'Brief your sales force and trade partners with accurate statements for fielding shopper questions', correct: true },
            { id: 'c', text: 'Reduce brand visibility to avoid further association with the issue', correct: false },
            { id: 'd', text: 'Accelerate other product launches to shift media attention', correct: false },
          ],
          insight: 'The last mile of a brand crisis is the salesperson in the retailer office and the shelf-stocker. They face questions daily. If they do not have accurate answers, they improvise — and improvised crisis communication is always worse than the original crisis. Brief your entire field force before the story breaks externally.'
        }
      },
      'silent': {
        q1: {
          text: '"Quietly update, say nothing" carries the highest brand risk because:',
          options: [
            { id: 'a', text: 'It is more expensive operationally than other options', correct: false },
            { id: 'b', text: 'If media discovers the change, the narrative becomes "brand hid a problem" — 10× worse than the original issue', correct: true },
            { id: 'c', text: 'ASCI will automatically reject the silent approach', correct: false },
            { id: 'd', text: 'Competitors will proactively share this information with trade partners', correct: false },
          ],
          insight: 'In the information era, there is no such thing as quiet. Packaging changes get noticed by journalists and consumer advocates. When the story becomes "Brand X secretly changed their claim without telling consumers," the damage is 10× the original regulatory notice. Transparency is always the risk-minimising strategy.'
        },
        q2: {
          text: 'Choosing silence over proactive communication reveals which gap in brand crisis management maturity?',
          options: [
            { id: 'a', text: 'The brand is being appropriately efficient and cost-conscious', correct: false },
            { id: 'b', text: 'Legal risk avoidance is prioritised over consumer trust management — a common but dangerous structural gap', correct: true },
            { id: 'c', text: 'The brand has strong legal leadership that knows how to manage regulators', correct: false },
            { id: 'd', text: 'The brand is confident that its product quality is above question', correct: false },
          ],
          insight: 'When brands choose silence, it is usually because legal says "say nothing" and marketing does not push back. This reveals a structural gap: crisis PR must have a seat at the table equal to legal. Brand reputation is a balance sheet asset that deserves protection — not just from legal exposure but from consumer trust erosion.'
        }
      }
    },

    'festival-season': {
      'big-play': {
        q1: {
          text: 'Investing heavily in the Diwali season (ATL + BTL) is most justified when:',
          options: [
            { id: 'a', text: 'The brand is already the market leader with strong momentum', correct: false },
            { id: 'b', text: 'The brand needs broad awareness and trial — seasonal consumer pull amplifies every invested rupee', correct: true },
            { id: 'c', text: 'All key competitors are not investing in the festive season', correct: false },
            { id: 'd', text: 'Distribution is already at near-maximum levels', correct: false },
          ],
          insight: 'Festive seasons are media efficiency windows. The entire category is in consideration mode — consumers are actively shopping. Your advertising reaches a more receptive audience than off-season. Strategic principle: amplify investment when consumer pull is highest, not when it is lowest.'
        },
        q2: {
          text: 'The biggest operational risk of a "big play" festive investment is:',
          options: [
            { id: 'a', text: 'Budget overrun on media placements', correct: false },
            { id: 'b', text: 'Stockouts — demand exceeding supply if inventory was not pre-planned with distributors 6–8 weeks ahead', correct: true },
            { id: 'c', text: 'Advertising effectiveness being lower than historical benchmarks', correct: false },
            { id: 'd', text: 'Retailer pushback on premium placement of promotional materials', correct: false },
          ],
          insight: 'The worst festive outcome: you create demand you cannot fulfil. Stockouts during peak season are brand-damaging — a consumer who wanted your product and found an empty shelf often buys the competitor and does not come back. Supply chain planning must happen 6–8 weeks before the season begins. Spend planning without supply planning is planning to fail.'
        }
      },
      'moderate': {
        q1: {
          text: 'A moderate festive investment (digital + in-store only) is best suited for:',
          options: [
            { id: 'a', text: 'Brands with high TV viewership and a mass nationwide audience', correct: false },
            { id: 'b', text: 'Challenger brands with limited budget targeting urban, digital-first consumers for precise trial conversion', correct: true },
            { id: 'c', text: 'Brands with very large national distribution networks in Kirana', correct: false },
            { id: 'd', text: 'Premium heritage brands focused on long-form brand storytelling', correct: false },
          ],
          insight: 'Moderate digital + in-store is the precision strike approach. You are not trying to win the festive season on broadcast reach — you are optimising for targeted trial conversion among segments most likely to buy right now. Capital-efficient, measurable, and defensible to stakeholders.'
        },
        q2: {
          text: 'The key metric to measure for a moderate festive investment is:',
          options: [
            { id: 'a', text: 'Total impressions across all digital and physical media placements', correct: false },
            { id: 'b', text: 'Incremental revenue and new trial rate during the 45-day window vs. same period prior year', correct: true },
            { id: 'c', text: 'Brand awareness scores measured before and after the period', correct: false },
            { id: 'd', text: 'Retailer satisfaction and sell-in volume', correct: false },
          ],
          insight: 'For a time-bound activation, the primary measurement is incremental revenue and new trial during the period. Awareness and equity are important but are measured quarterly — they will not tell you if your Diwali spend worked. Define success metrics before you spend, not after the season ends.'
        }
      },
      'skip': {
        q1: {
          text: 'Skipping Diwali to save budget for a Q4 launch makes strategic sense when:',
          options: [
            { id: 'a', text: 'The brand has very low brand equity and needs to rebuild', correct: false },
            { id: 'b', text: 'A new SKU launch with higher strategic ROI would be diluted by competing with festive media noise', correct: true },
            { id: 'c', text: 'The brand already has high awareness and dominant market share', correct: false },
            { id: 'd', text: 'The marketing budget is very large and surplus exists', correct: false },
          ],
          insight: 'Sometimes the best festive strategy is to launch just after the season. When festive noise fades, your new product gets undivided shelf attention and cleaner media share of voice. The post-festive launch window has lower media costs and calmer consumer headspace. An underutilised but legitimate playbook for challenger brands.'
        },
        q2: {
          text: 'The main opportunity cost of skipping the festive season for a growing brand is:',
          options: [
            { id: 'a', text: 'Missing a high-engagement window where trial conversions are naturally elevated', correct: true },
            { id: 'b', text: 'Permanently losing key distributor relationships', correct: false },
            { id: 'c', text: 'Brand awareness will definitely decline during the period', correct: false },
            { id: 'd', text: 'There is no real opportunity cost — the brand saves money and invests smarter later', correct: false },
          ],
          insight: 'Festive seasons have elevated category purchase intent. Consumers come to stores already in a buying mindset. Not being present means ceding trial opportunities to competitors. Quantify the cost before skipping: how many new trials could you have driven at your average cost per trial? That number is the real cost of absence.'
        }
      }
    },

    'ambassador-crisis': {
      'drop-ambassador': {
        q1: {
          text: 'Dropping a brand ambassador swiftly during controversy is justified primarily because:',
          options: [
            { id: 'a', text: 'It saves on ongoing endorsement fees immediately', correct: false },
            { id: 'b', text: 'Brand association with a person under controversy transfers reputation risk directly — and the damage compounds daily', correct: true },
            { id: 'c', text: 'It is legally required under endorsement contract clauses', correct: false },
            { id: 'd', text: 'Retailers will demand this action before restocking', correct: false },
          ],
          insight: 'Brand-ambassador association is tight and fast in the social media era. Every tweet tagging the ambassador tags your brand. The association risk compounds daily. Swift, decisive action — "we are stepping back while the situation develops" — is the most brand-protective response available. Delay is always more expensive than action.'
        },
        q2: {
          text: 'The most important communication principle during an ambassador crisis response is:',
          options: [
            { id: 'a', text: 'Be the first brand to drop the ambassador to earn PR credit', correct: false },
            { id: 'b', text: 'Redirect all communication to brand values and consumers — not to the ambassador or the controversy', correct: true },
            { id: 'c', text: 'Wait for full legal advice before issuing any statement', correct: false },
            { id: 'd', text: 'Issue a strong public statement clearly distancing from the ambassador\'s personal conduct', correct: false },
          ],
          insight: 'Never make the crisis about the ambassador — that keeps the story alive. Redirect immediately to your brand\'s purpose: "Our brand exists to [serve our consumers]. We will continue to focus on that." The best crisis communications pivot to the brand\'s future, not the controversy\'s past.'
        }
      },
      'stand-by': {
        q1: {
          text: 'Standing by an ambassador under controversy can be the right choice — but only when:',
          options: [
            { id: 'a', text: 'Allegations are clearly false and brand-ambassador alignment is strong and genuinely documented', correct: true },
            { id: 'b', text: 'The ambassador has a very large and loyal social media following', correct: false },
            { id: 'c', text: 'The contract exit clause makes walking away financially costly', correct: false },
            { id: 'd', text: 'Competitors are facing their own ambassador controversies simultaneously', correct: false },
          ],
          insight: 'Loyalty to an ambassador during adversity can be powerfully humanising — IF the allegations are clearly false and you have conviction based on facts. Nike\'s sustained support of athletes during adversity built enormous equity because it signals conviction, not cowardice. But this only works when you have facts, not hope.'
        },
        q2: {
          text: 'Standing by causes permanent brand damage primarily when:',
          options: [
            { id: 'a', text: 'The ambassador has a relatively small social media following', correct: false },
            { id: 'b', text: 'Allegations are later proven true and evidence shows brand leadership had prior knowledge of the risk', correct: true },
            { id: 'c', text: 'Media coverage of the controversy is very extensive', correct: false },
            { id: 'd', text: 'Consumer sentiment on social media turns negative', correct: false },
          ],
          insight: 'The worst outcome: allegations proven true AND evidence that brand leadership knew and chose to ignore. This is not a PR crisis — it becomes a values crisis. The brand is complicit. The distinction between standing by in good faith vs. looking away from clear warning signs must be managed carefully and documented.'
        }
      },
      'silent-rebrand': {
        q1: {
          text: 'A "pivot to cause" strategy after an ambassador crisis works best when:',
          options: [
            { id: 'a', text: 'The cause is directly relevant to the brand\'s core proposition and the consumers\' values', correct: true },
            { id: 'b', text: 'The cause has no connection to the brand category for maximum contrast', correct: false },
            { id: 'c', text: 'It is executed immediately during the festive season for maximum visibility', correct: false },
            { id: 'd', text: 'The brand currently has low awareness and needs a relaunch', correct: false },
          ],
          insight: 'Cause campaigns post-crisis only build equity if they are authentic — meaning the brand already had a documented relationship with that cause. A personal care brand pivoting to women\'s empowerment is credible. The same brand pivoting to environmental conservation looks like distraction. Cause marketing must be earned, not purchased as crisis management.'
        },
        q2: {
          text: 'The silent phase-out of an ambassador without public announcement carries what specific risk?',
          options: [
            { id: 'a', text: 'It is legally complex and requires more time to execute', correct: false },
            { id: 'b', text: 'Astute media will notice the absence and the lack of a statement invites speculation — often worse than the actual situation', correct: true },
            { id: 'c', text: 'It delays the brand\'s first response by several days', correct: false },
            { id: 'd', text: 'Distribution partners will notice the contract change first', correct: false },
          ],
          insight: '"No comment" is itself a statement. In the information vacuum of a silent phase-out, media and social commentators fill the void with their own interpretation — which is always more damaging than reality. Proactively framing your own narrative, even briefly, always outperforms silence during an active controversy.'
        }
      }
    },

    'naturals-trend': {
      'launch-variant': {
        q1: {
          text: 'Launching a dedicated natural variant is strategically superior to just repositioning messaging because:',
          options: [
            { id: 'a', text: 'It is actually cheaper than a major messaging campaign', correct: false },
            { id: 'b', text: 'It creates a tangible product expression of the brand\'s naturals commitment — a claim you can substantiate at shelf', correct: true },
            { id: 'c', text: 'It automatically reaches a wider audience than a communications campaign', correct: false },
            { id: 'd', text: 'It protects the existing hero SKU from competitive erosion', correct: false },
          ],
          insight: 'Gen Z and Health-Conscious Millennials are ingredient-sophisticated. They read labels. Messaging "we have always had natural ingredients" rings hollow if the formula does not change. A new SKU says "we heard you and built something specifically for you." That is the difference between claiming a value and living it.'
        },
        q2: {
          text: 'The primary risk of a new naturals SKU launched under the same brand umbrella is:',
          options: [
            { id: 'a', text: 'Slow retail distribution ramp-up in modern trade', correct: false },
            { id: 'b', text: 'Portfolio cannibalisation — the natural variant pulling trial from your hero SKU instead of attracting new consumers', correct: true },
            { id: 'c', text: 'Competitors will immediately copy the ingredient positioning', correct: false },
            { id: 'd', text: 'The formulation development will take too long to matter', correct: false },
          ],
          insight: 'Cannibalisation is the silent killer of SKU extensions. Before launching, define: "Is this SKU targeting a NEW consumer, or just offering a variant for existing buyers?" If the natural variant takes 50% of hero SKU volume, you have grown in complexity without growing in total revenue. Solve this with price differential and channel differentiation — e.g., natural variant online only, hero in Kirana.'
        }
      },
      'reposition-msgs': {
        q1: {
          text: 'Repositioning messaging around existing natural ingredients is a valid strategy when:',
          options: [
            { id: 'a', text: 'You have genuine natural ingredient credentials that are simply under-communicated to consumers', correct: true },
            { id: 'b', text: 'You want to respond to the trend without any R&D investment or timeline', correct: false },
            { id: 'c', text: 'You have a very large advertising budget and national reach', correct: false },
            { id: 'd', text: 'There are no natural variants available from competitors in the category', correct: false },
          ],
          insight: 'Sometimes the brand has the right product but the wrong story. "Claim the truth you have not told" is a legitimate and cost-effective strategy. But it must pass the authenticity test: can you substantiate the claim? Would a sceptical Gen Z consumer who reads every ingredient label believe it? If yes, proceed with confidence. If no, fix the formula first.'
        },
        q2: {
          text: 'Messaging repositioning without any product change primarily works for consumers who are:',
          options: [
            { id: 'a', text: 'Label-reading, ingredient-savvy buyers who scrutinise every formula online', correct: false },
            { id: 'b', text: 'Trust-based buyers who respond to brand communication rather than deep ingredient scrutiny', correct: true },
            { id: 'c', text: 'Price-sensitive buyers for whom value matters most', correct: false },
            { id: 'd', text: 'Rural buyers with limited internet and social media access', correct: false },
          ],
          insight: 'Messaging repositioning works on trust-based segments — Traditional Loyalists and Aspiring Middle Class who respond to brand communication. It fails with Health-Conscious Gen Z who read every label and cross-check ingredients on Reddit and beauty communities. Know your primary segment: if it is the latter, a formula change is non-negotiable before any claims campaign.'
        }
      },
      'ignore-trend': {
        q1: {
          text: 'Ignoring the naturals trend and focusing on the core mass audience is defensible if:',
          options: [
            { id: 'a', text: 'Your core mass consumers genuinely do not value naturals and the trend is urban/premium-specific', correct: true },
            { id: 'b', text: 'You do not currently have the R&D capability to reformulate within the year', correct: false },
            { id: 'c', text: 'Naturals brands are still small and not yet a real competitive threat by revenue', correct: false },
            { id: 'd', text: 'The trend is too new to act on with conviction', correct: false },
          ],
          insight: 'Not every trend is relevant to every segment. Value Hunters and Traditional Loyalists in Tier 2–4 cities prioritise efficacy, trust, and price — not ingredient naturalness. Chasing a trend that your primary consumer does not care about is a form of brand confusion. Focus is itself a competitive advantage.'
        },
        q2: {
          text: 'The hidden long-term risk of ignoring the naturals trend for 2+ years is:',
          options: [
            { id: 'a', text: 'You will lose your core Kirana distribution permanently', correct: false },
            { id: 'b', text: 'Naturalness may become a baseline category expectation — making your brand the "non-natural default" by definition', correct: true },
            { id: 'c', text: 'Your advertising costs will increase significantly', correct: false },
            { id: 'd', text: 'Product quality perception will decline with all segments', correct: false },
          ],
          insight: 'Trends that start premium often democratise over time. "Sulphate-free" went from a premium claim on ₹400 shampoos to a standard expectation even in ₹100 products. Ignoring a trend today can mean playing expensive catch-up in 3 years when being natural is no longer a differentiator — it is just table stakes for category entry.'
        }
      }
    },

    'retailer-demand': {
      'accept-terms': {
        q1: {
          text: 'Accepting a key retailer\'s improved margin terms is strategically smart primarily when:',
          options: [
            { id: 'a', text: 'You cannot afford to lose the volume and have no credible alternative channel to replace it', correct: true },
            { id: 'b', text: 'Your gross margins are already very healthy and can absorb the reduction easily', correct: false },
            { id: 'c', text: 'The retailer in question is actually your smallest volume account', correct: false },
            { id: 'd', text: 'All key competitors are also accepting similar terms', correct: false },
          ],
          insight: 'The accept decision is a volume-preservation call that must be made analytically. If this retailer is 18% of your volume, what is the replacement cost via GT or e-com? If you cannot plug that gap elsewhere within 6 months, accept. If you can, you are leaving negotiating leverage unused. Always calculate the alternative before accepting.'
        },
        q2: {
          text: 'After accepting improved retailer terms, the most important long-term strategic action is:',
          options: [
            { id: 'a', text: 'Accept each future demand as it comes to maintain the relationship', correct: false },
            { id: 'b', text: 'Accelerate multi-channel distribution so no single retailer exceeds 10–12% of total volume', correct: true },
            { id: 'c', text: 'Increase brand advertising budget to grow faster and create natural leverage', correct: false },
            { id: 'd', text: 'Launch exclusive SKUs in that retailer to deepen the dependency on both sides', correct: false },
          ],
          insight: 'Channel concentration is a power trap. When one retailer holds 15%+ of your volume, they know they hold leverage. The long-term antidote is disciplined diversification — build GT, e-com, and D2C to the point where no single account exceeds 10–12% of revenue. Then you negotiate from strength, not from fear.'
        }
      },
      'negotiate': {
        q1: {
          text: 'Offering better shelf placement in exchange for a reduced margin concession works because:',
          options: [
            { id: 'a', text: 'Retailers always prefer product placement over direct margin payments', correct: false },
            { id: 'b', text: 'Prime shelf placement drives higher velocity, improving the retailer\'s category productivity per square foot — their core business metric', correct: true },
            { id: 'c', text: 'Shelf placement concessions are legally required in Modern Trade contracts', correct: false },
            { id: 'd', text: 'This structure eliminates any margin cost for the brand entirely', correct: false },
          ],
          insight: 'Retailers are in the business of space productivity — revenue per square foot. A brand that drives higher category velocity from prime shelf justifies less margin because the retailer makes more per metre from your product. Frame negotiations around the retailer\'s P&L, not just your own. Reframe the conversation from cost to category value creation.'
        },
        q2: {
          text: 'What data would most strengthen your position in a retailer negotiation?',
          options: [
            { id: 'a', text: 'Your own internal brand equity tracking scores', correct: false },
            { id: 'b', text: 'Category incrementality data showing your brand grows the total category — not just steals share from competitors', correct: true },
            { id: 'c', text: 'Your brand\'s consumer awareness percentages in the region', correct: false },
            { id: 'd', text: 'Your total advertising spend levels as a signal of commitment', correct: false },
          ],
          insight: '"Category incrementality" is the gold standard in trade negotiations. If your brand demonstrably grows the total category — brings in new consumers, increases basket size — the retailer cannot afford to delist you without hurting their own category performance. Build this case through shopper panels or scanner data before you enter the negotiation room. Enter prepared, never defensive.'
        }
      },
      'delist': {
        q1: {
          text: 'Deliberately delisting from a major retail chain as a power move requires first having:',
          options: [
            { id: 'a', text: 'A credible, specific plan to redirect that volume to other channels within 2–3 quarters', correct: true },
            { id: 'b', text: 'A large advertising budget to communicate the channel change to consumers', correct: false },
            { id: 'c', text: 'Already very high brand awareness so consumers will seek you out elsewhere', correct: false },
            { id: 'd', text: 'No other options remaining after negotiation has failed completely', correct: false },
          ],
          insight: 'Deliberate delisting is a bold but legitimate power move — IF you have a credible redirection plan. Some FMCG brands have delisted from specific retailers to accelerate D2C and maintain full margin control. This works when your brand has enough consumer pull that shoppers will seek you out on preferred channels. Without a redirection plan, delisting is just lost volume.'
        },
        q2: {
          text: 'The biggest collateral damage risk of delisting from a major retail chain is:',
          options: [
            { id: 'a', text: 'Brand awareness declining rapidly from reduced shelf presence', correct: false },
            { id: 'b', text: 'Signalling to all other retailers that you are willing to walk — triggering similar demands industry-wide', correct: true },
            { id: 'c', text: 'Negative media coverage about the brand\'s distribution decision', correct: false },
            { id: 'd', text: 'Consumer complaints about reduced product availability', correct: false },
          ],
          insight: 'When other retailers see you delist from one chain, they may test your resolve with similar demands. Your delisting must be accompanied by a clear message to all trade partners: this was specific, exceptional, and not a blanket policy change. Manage the trade narrative or you will simultaneously fight this battle on multiple fronts with every major account.'
        }
      }
    },

    'd2c-challenger': {
      'accelerate-d2c': {
        q1: {
          text: 'Investing in D2C and consumer community to counter a funded D2C entrant is smart because:',
          options: [
            { id: 'a', text: 'D2C is always more profitable than any other channel in FMCG', correct: false },
            { id: 'b', text: 'First-party data, community loyalty, and brand experience are moats that cannot be purchased — only built over time', correct: true },
            { id: 'c', text: 'D2C is the cheapest channel to operate at scale', correct: false },
            { id: 'd', text: 'Investors and analysts prefer brands with high D2C revenue mix', correct: false },
          ],
          insight: 'A funded competitor can outspend you on performance advertising. They cannot shortcut building a genuine consumer community with shared values and years of purchase history data. Your owned D2C channel with a loyal subscriber base is a compounding moat — not something that can be replicated with a ₹150Cr cheque and a Nykaa listing.'
        },
        q2: {
          text: 'D2C community building requires focusing primarily on:',
          options: [
            { id: 'a', text: 'Selling at the lowest possible price to rapidly acquire new subscribers', correct: false },
            { id: 'b', text: 'Creating content, engagement, and experiences that make consumers feel they belong to something beyond a product', correct: true },
            { id: 'c', text: 'Building the most technically advanced app UX in the category', correct: false },
            { id: 'd', text: 'Maximising total social media follower count as quickly as possible', correct: false },
          ],
          insight: 'Community is not follower count. It is a group of consumers who advocate because the brand reflects something they genuinely believe in. The best D2C brands (Glossier, early Mamaearth) built communities around shared values before they built product lines. Followers are an audience. Community members are co-creators and evangelists who reduce your customer acquisition cost over time.'
        }
      },
      'defend-channels': {
        q1: {
          text: 'Doubling down on offline distribution when facing a digital D2C attacker is effective because:',
          options: [
            { id: 'a', text: 'Offline channels are always more profitable than digital for all FMCG brands', correct: false },
            { id: 'b', text: 'A D2C-only competitor has zero offline presence — you defend 85%+ of Indian FMCG volumes that move through physical trade', correct: true },
            { id: 'c', text: 'Physical retail is always cheaper than digital marketing spend', correct: false },
            { id: 'd', text: 'Traditional retailers always prefer established brands over new entrants', correct: false },
          ],
          insight: 'India\'s FMCG distribution reality: 85%+ of volumes still move through offline channels. A D2C brand with ₹150Cr and strong Instagram presence may dominate Nykaa but has zero presence in 10M+ kirana stores. Defending your offline base — where real volume lives — is the asymmetric advantage that established players hold and must never cede.'
        },
        q2: {
          text: 'The highest-ROI investment to strengthen offline channel defence typically is:',
          options: [
            { id: 'a', text: 'National TVC advertising to build broad mass awareness', correct: false },
            { id: 'b', text: 'Increasing retailer margins equally across all channels', correct: false },
            { id: 'c', text: 'Sales force productivity tools, better retailer programs, and superior in-store visibility execution', correct: true },
            { id: 'd', text: 'Launching more SKUs to occupy more physical shelf space', correct: false },
          ],
          insight: 'Offline defence is won at the last metre — the retailer\'s shelf and the salesperson\'s relationship. Sales force incentives, retailer loyalty programs, improved planogram execution, and POSM are the mechanisms. A brand that is the first choice for the kirana storekeeper who hand-recommends products has a distribution advantage that no amount of Instagram advertising can replicate.'
        }
      },
      'acquire': {
        q1: {
          text: 'Acquiring a new D2C competitor makes strategic sense specifically when:',
          options: [
            { id: 'a', text: 'The target has achieved a high valuation that signals significant market validation', correct: false },
            { id: 'b', text: 'The target has capabilities, consumer community, or technology that would take 3+ years to build organically', correct: true },
            { id: 'c', text: 'You primarily want to eliminate a competitor from the market', correct: false },
            { id: 'd', text: 'The target is currently losing money and therefore available at a low valuation', correct: false },
          ],
          insight: 'The build vs. buy calculus: if a D2C brand has a loyal Gen Z community, unique ingredient expertise, or technology you cannot replicate in under 3 years, acquisition may deliver faster ROI than building organically. This is why HUL acquired Indulekha, Marico acquired Beardo, and Emami acquired The Man Company. Buy capabilities and community — not just revenue lines.'
        },
        q2: {
          text: 'The most common failure mode when a large FMCG acquires a D2C brand is:',
          options: [
            { id: 'a', text: 'Difficulty integrating IT and ERP systems across both companies', correct: false },
            { id: 'b', text: 'Corporate culture and processes suffocating the agility and authenticity that made the D2C brand valuable in the first place', correct: true },
            { id: 'c', text: 'Overpaying for the acquisition and having to write down the goodwill', correct: false },
            { id: 'd', text: 'Regulatory approvals for the acquisition taking too long', correct: false },
          ],
          insight: 'D2C brands have founder energy, fast decision-making cycles, and authentic consumer relationships. Once absorbed into a large FMCG, procurement processes, approval hierarchies, and brand guidelines can kill everything that made the acquisition worth doing. The best acquirers run acquired D2C brands at arm\'s length as separate entities. Protect what you paid to acquire.'
        }
      }
    },

    // ── NEW EVENTS (Year 1) ──────────────────────────────────

    'social-scare': {
      'respond-fast': {
        q1: {
          text: 'Responding immediately with empathy to a viral safety claim (before investigation is complete) is justified because:',
          options: [
            { id: 'a', text: 'It is legally the safest response to any consumer complaint', correct: false },
            { id: 'b', text: 'In a 6-hour crisis window, acknowledging concern and pledging investigation is brand-protective even without having all the facts', correct: true },
            { id: 'c', text: 'It prevents competitors from commenting on the situation', correct: false },
            { id: 'd', text: 'It satisfies regulatory bodies immediately', correct: false },
          ],
          insight: 'In the social media era, brands have a 6-hour window to shape the crisis narrative. Responding with empathy — "We take this seriously. We are investigating immediately and will update you with full transparency" — signals a brand that listens. Silence signals a brand that hides. The response does not require having all facts — it requires acknowledging the human at the centre.'
        },
        q2: {
          text: 'What is the most important internal action during the first 48 hours of a product safety scare?',
          options: [
            { id: 'a', text: 'Issue a press release to national media immediately', correct: false },
            { id: 'b', text: 'Form an internal task force: QA + legal + brand + PR — with a single spokesperson for all external communication', correct: true },
            { id: 'c', text: 'Increase social media advertising to drown out the negative noise', correct: false },
            { id: 'd', text: 'Pull all advertising immediately across all platforms', correct: false },
          ],
          insight: 'The 48-hour period is the most critical. Multiple voices = multiple stories. Designate one spokesperson. Establish an internal crisis team with QA, legal, brand, and PR at the same table simultaneously. The worst outcomes happen when legal, brand, and PR operate independently and contradict each other in public.'
        }
      },
      'legal-hold': {
        q1: {
          text: 'Putting all communications on legal hold during a product safety scare primarily signals to consumers:',
          options: [
            { id: 'a', text: 'The brand is taking the issue very seriously and being methodical', correct: false },
            { id: 'b', text: 'The brand may have something to hide — silence is interpreted as guilt in the social media era', correct: true },
            { id: 'c', text: 'The brand has strong regulatory compliance procedures', correct: false },
            { id: 'd', text: 'The brand is efficiently managing a complex situation', correct: false },
          ],
          insight: 'Legal hold is often the default corporate response — but in the social media era it is brand-toxic. While you wait for legal sign-off, social media fills the void with speculation. Every hour of silence is an hour that critics, competitors, and concerned consumers are shaping the narrative without you. Legal protection and brand protection are not always the same goal.'
        },
        q2: {
          text: 'What is the hidden cost of a legal-first response to a consumer safety concern?',
          options: [
            { id: 'a', text: 'Higher legal fees from the extended process', correct: false },
            { id: 'b', text: 'Brand equity erosion that is far more expensive and slower to repair than any legal settlement', correct: true },
            { id: 'c', text: 'Retailer relationships becoming strained', correct: false },
            { id: 'd', text: 'Supply chain disruption from pulling products', correct: false },
          ],
          insight: 'Legal settlements are bounded and time-limited. Brand equity erosion is unbounded and long-lasting. The calculation that brands often miss: a legal settlement costs ₹X Cr. The loss of consumer trust costs ₹Y Cr per quarter in revenue, indefinitely. Always balance legal risk against brand equity risk — they are not the same balance sheet.'
        }
      },
      'pr-offensive': {
        q1: {
          text: 'Pushing back with product safety data during a consumer scare works when:',
          options: [
            { id: 'a', text: 'The data is robust, independent, and directly contradicts the specific claim being made', correct: true },
            { id: 'b', text: 'Your PR agency has strong media relationships', correct: false },
            { id: 'c', text: 'The safety concern was raised by a small, low-credibility account', correct: false },
            { id: 'd', text: 'You have already established high brand equity in the category', correct: false },
          ],
          insight: 'A data-led response works when the data is strong and directly relevant. Weak data + confident PR response is the worst combination — it looks like spin. Before going on a PR offensive, the QA team must certify: "This is exactly what happened, and here is the independent evidence." Never bluff with partial data in a consumer safety situation.'
        },
        q2: {
          text: 'What is the primary tone risk of a PR offensive in response to a consumer safety claim?',
          options: [
            { id: 'a', text: 'The response will cost too much in media placements', correct: false },
            { id: 'b', text: 'If it reads as defensive or dismissive of the concerned consumer, it inflames rather than resolves the issue', correct: true },
            { id: 'c', text: 'It will attract regulatory attention unnecessarily', correct: false },
            { id: 'd', text: 'Competitors will respond with their own safety data', correct: false },
          ],
          insight: 'The tone must always begin with the consumer at the centre: "We heard you. We take your concern seriously. Here is what the evidence shows." Data without empathy sounds like "you are wrong." Data with empathy sounds like "we understand why you are concerned and here is what we found." The distinction changes whether the story ends or escalates.'
        }
      }
    },

    'ipl-moment': {
      'take-deal': {
        q1: {
          text: 'Taking an IPL jersey patch deal makes the most strategic sense for which brand profile?',
          options: [
            { id: 'a', text: 'A premium naturals brand targeting Health-Conscious Gen Z in metros', correct: false },
            { id: 'b', text: 'A mass or masstige brand targeting Aspiring Middle Class with national reach aspirations', correct: true },
            { id: 'c', text: 'A brand with a very small annual budget of ₹3 Crore', correct: false },
            { id: 'd', text: 'A brand that is already the market leader with 31% share', correct: false },
          ],
          insight: 'IPL reaches 180M+ viewers — predominantly male, Tier 1–3 cities, aspiring middle class. For a mass or masstige brand targeting the Aspiring Middle Class, this is near-perfect reach alignment. For a premium naturals Gen Z brand, IPL reaches a largely misaligned audience. The 14% awareness boost is real — but only if it is reaching your right segment.'
        },
        q2: {
          text: 'The key risk of spending ₹1.5Cr on an IPL deal for a brand under ₹15Cr budget is:',
          options: [
            { id: 'a', text: 'Brand positioning dilution from a sports association', correct: false },
            { id: 'b', text: 'Consuming 10% of annual budget on one initiative, potentially starving other critical brand-building activities', correct: true },
            { id: 'c', text: 'Regulatory issues with sports marketing', correct: false },
            { id: 'd', text: 'Consumer perception of the brand as too mainstream', correct: false },
          ],
          insight: 'Concentration risk in budget allocation is real. ₹1.5Cr out of ₹15Cr (10%) on a single 45-day initiative means that 10% less is available for the full-year marketing mix. Evaluate the IPL deal against what else ₹1.5Cr could buy — 3 months of digital performance marketing, a trade promotion program, or a sampling drive. What drives more sustainable brand equity?'
        }
      },
      'digital-ipl': {
        q1: {
          text: 'A digital-only IPL activation (no jersey patch) works best for which objective?',
          options: [
            { id: 'a', text: 'Maximum mass reach across all demographic segments simultaneously', correct: false },
            { id: 'b', text: 'Precision targeting of specific consumer segments within the IPL audience at lower cost and higher measurability', correct: true },
            { id: 'c', text: 'Building a physical association with the sport for heritage brands', correct: false },
            { id: 'd', text: 'Reaching consumers with low internet and social media usage', correct: false },
          ],
          insight: 'Digital IPL activation (social listening, Twitter trends, Instagram Reels during matches) gives you the festive-season attention at a fraction of the jersey cost. More importantly, it is targeted — you can reach 25-35 year old cricket fans specifically, not all 180M viewers. Measurability is also a significant advantage over patch deals.'
        },
        q2: {
          text: 'What is the hidden advantage of a digital-only IPL strategy vs. jersey placement?',
          options: [
            { id: 'a', text: 'It is always more effective than jersey placement per rupee spent', correct: false },
            { id: 'b', text: 'You retain flexibility to pause, optimise, or redirect the spend mid-tournament based on real-time data', correct: true },
            { id: 'c', text: 'Digital ads are seen more often than jersey patches during matches', correct: false },
            { id: 'd', text: 'Regulators prefer digital advertising over sports patch placements', correct: false },
          ],
          insight: 'Jersey deals are fixed, inflexible commitments. Digital activations give you real-time optionality — if mid-tournament data shows low conversion, you can pivot creative, change targeting, or reallocate budget. In brand management, the ability to course-correct in real time based on data is increasingly a competitive advantage over fixed, irreversible commitments.'
        }
      },
      'pass': {
        q1: {
          text: 'Passing on an IPL deal is strategically correct for your brand when:',
          options: [
            { id: 'a', text: 'The brand\'s target segment does not consume cricket media in meaningful numbers', correct: true },
            { id: 'b', text: 'The brand does not have enough awareness to be seen during matches', correct: false },
            { id: 'c', text: 'The deal is too expensive for any brand under ₹60Cr budget', correct: false },
            { id: 'd', text: 'Competitors have already booked IPL partnerships', correct: false },
          ],
          insight: 'The reach value of IPL depends entirely on whether your target segment is in the audience. Health-Conscious Gen Z women who follow beauty Reels are not the primary IPL audience. Spending ₹1.5Cr to reach 180M viewers where 90% are outside your target segment gives you a CPM that looks terrible on any media efficiency calculation.'
        },
        q2: {
          text: 'What does passing on a major cultural moment like IPL tell you about your brand\'s media strategy maturity?',
          options: [
            { id: 'a', text: 'It signals the brand is too small to compete with market leaders', correct: false },
            { id: 'b', text: 'It signals disciplined segment-first thinking over FOMO-driven media decisions', correct: true },
            { id: 'c', text: 'It signals poor marketing leadership', correct: false },
            { id: 'd', text: 'It signals an overly conservative risk appetite', correct: false },
          ],
          insight: 'Saying no to a culturally visible but strategically misaligned spend is a sign of brand management maturity. The worst media decisions in FMCG history were made because of FOMO — fear of missing out on a cultural moment. The best media decisions are made by starting with: "What is my segment\'s media behaviour and what channel reaches them most efficiently?" Everything else follows from that.'
        }
      }
    }

  },

  // ── DEBRIEF QUESTION TEMPLATES ───────────────────────────
  // Used by engine.getDebriefQuestions() to generate dynamic questions
  debrief: {
    lowAwareness: {
      id: 'low-awareness',
      q: 'Your awareness ended at {X}%. With {Y}% in reach media (TV + Digital), what is the most likely root cause?',
      options: [
        { id: 'a', text: 'Insufficient or misallocated reach media for your segment\'s media behaviour', correct: true },
        { id: 'b', text: 'Distribution was too low during the year', correct: false },
        { id: 'c', text: 'Product quality perception was poor among consumers', correct: false },
        { id: 'd', text: 'Pricing was misaligned with segment expectations', correct: false },
      ],
      insight: 'Awareness is almost entirely a media investment × segment affinity equation. Check: is your reach spend matched to your segment\'s dominant media (digital for Gen Z, TV for Value Hunters)? Also check creative resonance — reach without relevance builds no awareness. Low awareness usually has two causes: under-investment or wrong channel for the segment.'
    },
    highAwarenessLowTrial: {
      id: 'awareness-trial-gap',
      q: 'Strong awareness ({X}%) but low trial ({Y}%). Where is the gap most likely?',
      options: [
        { id: 'a', text: 'Poor in-store presence and low trade spend — you\'re seen but not findable at the shelf', correct: true },
        { id: 'b', text: 'Media investment was too low', correct: false },
        { id: 'c', text: 'Brand positioning was wrong for the target segment', correct: false },
        { id: 'd', text: 'Pricing was misaligned with the segment\'s willingness to pay', correct: false },
      ],
      insight: 'The awareness-to-trial gap almost always points to insufficient trade/BTL investment or poor distribution. You have won the mind but not the shelf. Next year, redirect 5–8% of your media budget to in-store activation, sampling at key outlets, and Kirana trade incentives. The shopper who knows you must find you.'
    },
    lowEquity: {
      id: 'low-equity',
      q: 'Brand equity index is {X} — below the category average of 45. Which factor most likely held it back?',
      options: [
        { id: 'a', text: 'Under-investment in PR and earned media — the drivers of differentiation and esteem', correct: true },
        { id: 'b', text: 'Too much TV spend relative to other budget lines', correct: false },
        { id: 'c', text: 'Too many channels selected simultaneously without focus', correct: false },
        { id: 'd', text: 'Distribution expanded too quickly for the brand to sustain quality', correct: false },
      ],
      insight: 'Brand equity is built through three levers: relevance (right positioning for right segment), differentiation (PR, innovation, purpose), and esteem (quality + digital presence). Low equity usually traces to under-investing in PR and purpose communication. These investments pay off slowly but compound — think of them as equity deposits that earn compound interest.'
    },
    negativeEBITDA: {
      id: 'negative-ebitda',
      q: 'EBITDA was negative at ₹{X} Cr. Is this necessarily bad in Year {Y}?',
      options: [
        { id: 'a', text: 'No — if brand equity and awareness grew strongly, you purchased future returns', correct: true },
        { id: 'b', text: 'Yes — you should always cut investment when EBITDA is negative', correct: false },
        { id: 'c', text: 'Yes — reduce distribution channels to save fixed costs', correct: false },
        { id: 'd', text: 'No — losses never matter at any stage of brand building', correct: false },
      ],
      insight: 'Year 1–2 EBITDA negativity is normal and expected for brand-building. The question is: are the losses productive? A brand that spends ₹15Cr and gains 18% awareness, 12% trial, and 3% share has bought assets that will compound. Evaluate losses against "the equity assets you purchased" — not just the P&L. The right question is not "are we losing money?" but "are we buying equity faster than the cost?"'
    },
    strongYear: {
      id: 'strong-year',
      q: 'Strong year — {X}% market share, {Z} brand equity index. What should be the top strategic priority in Year {N1}?',
      options: [
        { id: 'a', text: 'Cut brand investment to extract profits from the strong base you\'ve built', correct: false },
        { id: 'b', text: 'Deepen loyalty defences and brand equity before competitors are forced to respond', correct: true },
        { id: 'c', text: 'Launch as many new SKUs as possible to capitalise on market momentum', correct: false },
        { id: 'd', text: 'Enter every available channel simultaneously to maximise distribution', correct: false },
      ],
      insight: 'A strong year attracts competitive attention and attacks. The window between strong traction and competitor response is typically 6–12 months. Use it to build loyalty programs, deepen your consumer community, and reinvest in brand equity. The brands that sustain momentum are those that invest hardest when they are winning, not when they are losing.'
    },
    mixForward: {
      id: 'mix-forward',
      q: 'You allocated {Y}% of budget to {C}. For Year {N1}, what is the right framework for deciding your largest budget line?',
      options: [
        { id: 'a', text: 'Allocate most budget to where your target segment spends most of their media time', correct: true },
        { id: 'b', text: 'Allocate most to whichever channel had the lowest cost per impression last year', correct: false },
        { id: 'c', text: 'Copy the media allocation strategy of the market leader', correct: false },
        { id: 'd', text: 'Always increase TV as the brand grows in awareness', correct: false },
      ],
      insight: 'The only correct starting point for media allocation is your target segment\'s media behaviour. Health-Conscious Gen Z: 80%+ digital, minimal TV. Value Hunters: 70%+ TV, limited digital. Traditional Loyalists: 60%+ TV + pharmacist recommendations. Start with segment data, then optimise by ROI of each channel from your year\'s actual performance. Never start with the channel — start with the consumer.'
    }
  }
};
