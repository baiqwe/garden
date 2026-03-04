export const PAGE_NARRATIVES: Record<string, { title: string; paragraphs: string[] }> = {
  home: {
    title: 'Deep Guide to the Garden Horizons Economy',
    paragraphs: [
      'Many players treat rare stock as an automatic buy signal in early progression, but long-term returns usually depend on process quality, not one lucky cycle. The real gap between average and advanced players is repeatability: can you run the same decision loop, verify assumptions, and improve after each harvest window.',
      'The stock window should be the first gate in your workflow. It is not enough to see a countdown. You should combine freshness timestamp, 24-hour appearance frequency, and your current budget before entering. A purchase is strategically valid only when all three align with your execution capacity.',
      'The second core principle is cashflow architecture. New players often overcommit to high-volatility seeds and lose two or three cycles when weather or mutation conditions do not match. Keep at least one stable crop lane active at all times. It may not have the highest peak return, but it protects growth continuity.',
      'The third principle is mutation execution discipline. Guides often list weather and fertilizer requirements without explaining sequence cost. In practice, preparing inputs before the window opens produces better outcomes than last-minute procurement under time pressure.',
      'The fourth principle is structured review. After each cycle, record buy cost, actual sell value, occupied time, and whether conditions triggered as expected. Within one week of logging, most players discover that their personal best route differs from generic tier lists.',
      'Efficiency-focused players should run a dual strategy model: one baseline route for stable periods and one tactical route for event windows. When events appear, swap tactical parameters rather than rebuilding your whole plan. This keeps momentum and reduces operational error.',
      'Community consensus matters because single-source signals can include delay or noise. We prioritize reproducible, timestamped, cross-verifiable reports. Strategy lines displayed on GH.Tools are intended to be actionable summaries of validated observations, not generic motivational text.',
      'The goal is not to hit the highest possible seed every time. The goal is to sustain growth across variable conditions with consistent decision quality. When stock timing, budget discipline, mutation execution, and review feedback are combined, account progression becomes more predictable and scalable.'
    ]
  },
  calculator: {
    title: 'ROI Calculator Framework and Practical Interpretation',
    paragraphs: [
      'The ROI calculator is a filtering instrument, not a prediction machine. Its primary value is removing weak choices quickly across multiple candidates. It does not guarantee a specific outcome because prices, weather, event modifiers, and execution quality can all shift real returns.',
      'Always start with realistic inputs. If you enter ideal purchase assumptions instead of actual available pricing, the output becomes optimistic noise. Conservative input discipline usually outperforms high but unrealistic estimates over repeated cycles.',
      'Time cost must be explicit. Two crops may look similar on net profit but diverge heavily in cycle duration. For players with limited daily play windows, shorter reliable cycles can create stronger realized earnings than slower high-variance options.',
      'Use layered comparison: low-risk baseline crops, event-sensitive options, and mutation-oriented paths. Rank by ROI first, then filter by current execution feasibility. In real play, the best route is usually the highest score that you can execute consistently.',
      'Link ROI to stock availability. A route with high single-cycle output but low stock recurrence cannot power stable growth. Combining the calculator with stock history helps distinguish occasional spikes from repeatable pipelines.',
      'Set a minimum acceptable ROI threshold before each session. Rules like this protect against emotional entries during rare-tag hype moments. Many losses are caused by weak execution discipline after correct calculation, not by poor math.',
      'Calibrate weekly by comparing projected values with observed outcomes. Re-feed variance into future inputs. This process increases model relevance to your account rhythm, available time, and risk tolerance.',
      'After repeated use, ROI becomes a control layer for your account strategy rather than an isolated number. You decide faster, with fewer regrets, and with clearer reasons for each buy-or-skip action.'
    ]
  },
  stock: {
    title: 'Stock Refresh Dynamics and Window-Based Decisioning',
    paragraphs: [
      'Stock behavior is better understood as a probability window than a strict timer. Opportunity density increases during certain periods, but that does not mean every check produces a hit. This framing prevents both overconfidence and overreaction.',
      'A robust stock decision model has three layers: freshness verification, recent frequency context, and execution readiness. If one layer fails, the decision quality drops. If all three pass, entry quality is significantly stronger than intuition-based buying.',
      'Players with limited time should avoid constant monitoring. Focus around expected windows derived from history rather than checking randomly all day. This approach improves hit efficiency and preserves attention for execution and harvest timing.',
      'Stock data should be interpreted together with weather and mutation prerequisites. Rare visibility alone does not create profit if weather mismatches, fertilizer is missing, or plots are fully occupied. Execution readiness matters more than label rarity.',
      'Use a pre-entry checklist: verify budget, validate conditions, allocate plots, then purchase. This sequence may feel slower but usually increases effective speed because it reduces post-buy rework and missed prerequisites.',
      'Evaluate stock strategy at weekly horizon, not daily. Single-day luck can hide structural errors. Multi-day logs reveal patterns in missed opportunities, overbuy events, and average realized return quality.',
      'Community correction systems reduce source bias. We prioritize reproducible reports with timestamps and cross-validation signals. The result is lower noise and higher practical reliability for planning decisions.',
      'The objective is not to catch every rare item. The objective is to maximize executable value within your available time and account constraints. Treat stock as a strategy input, not an emotional trigger.'
    ]
  },
  botanist: {
    title: 'Botanist and Radiant Petal Progression Strategy',
    paragraphs: [
      'Botanist progression rewards consistency more than rare-event chasing. Players who maintain stable cycle throughput usually outlevel players who overcommit to sporadic high-variance entries.',
      'Radiant Petal routes should be used as tactical upgrades when prerequisites are aligned, not as default baseline loops. This reduces resource burn and keeps account momentum healthy.',
      'A strong Botanist framework combines stock-window awareness, conservative budget gates, and post-cycle variance review. These three controls produce better long-term progression than single-metric optimization.',
      'When evaluating Botanist routes, prioritize reproducibility. If a method cannot be repeated across multiple sessions under realistic timing constraints, treat it as an opportunistic spike rather than a strategy core.'
    ]
  }
};

export const COMMON_EEAT_PARAGRAPHS: string[] = [
  'To meet long-term content quality expectations, each page should answer real user problems, not just list keywords. We use a structure of context, method, risk, and action so readers leave with clear next steps.',
  'E-E-A-T is not about volume alone; it is about verifiability. Every recommendation should include assumptions, valid scenarios, and failure boundaries. Readers trust content more when limitations are explicit.',
  'For game utility sites, practical experience signals come from review cycles. Session logs, adjustment notes, and variance audits provide stronger authenticity than generic claims.',
  'Layout should support decision speed. Dense content is easier to consume when split into sections with clear headings, key blocks, and guided internal links. This is especially important on mobile.',
  'From a search perspective, longform pages should cover intent space: what it is, when to use it, how to use it, why it works, and when it fails. This naturally captures broader query coverage.',
  'Internal links should form a task loop. Readers should be able to move from explanation to calculator, from calculator to mutation detail, and from mutation back to stock execution in one flow.',
  'Compliance pages are not box-checking artifacts. Privacy, terms, about, and contact pages indicate maintenance maturity and accountability, which directly affects trust and branded search behavior.',
  'The end goal is page-level independence. A user who lands on any single page from search should still get full context, method, and next-step navigation without needing to restart from the homepage.'
];

export function mutationNarrative(name: string, weather: string, roiBand: string): { title: string; paragraphs: string[] } {
  return {
    title: `${name} Mutation Route: Execution and Review Framework`,
    paragraphs: [
      `${name} is not a route that can be repeated by luck alone. The main challenge is operational discipline across four steps: window identification, condition readiness, execution order, and post-cycle review.`,
      `In repeated observations, ${name} performance is strongly tied to weather alignment under ${weather}. Even with the correct recipe, mistimed windows can reduce practical outcomes. Pre-window checks are more reliable than last-minute reactions.`,
      `The ROI band of ${roiBand} should be treated as a boundary, not a guarantee. Evaluate it against your plot capacity, session time, and budget ceiling before committing full volume.`,
      'Use a fixed sequence: verify stock and budget, confirm weather and fertilizer, allocate plots, then execute. This order minimizes rework and reduces avoidable errors.',
      'During review, track five fields: entry time, cost, triggered conditions, output, and variance reason. A few days of logs usually reveal personal strengths across specific windows and combinations.',
      'Conservative players can run a stable primary lane and a tactical mutation lane. This prevents cashflow interruption when mutation attempts fail and supports gradual scaling.',
      'Community feedback shows that many failed samples come from delayed information and skipped steps. Prioritize timestamped and reproducible signals, then scale only after small-batch validation.',
      `The long-term value of ${name} is not rarity by itself; it is repeatable conversion into stable account growth. With process discipline, this route can become a dependable mid-to-late progression engine.`
    ]
  };
}
