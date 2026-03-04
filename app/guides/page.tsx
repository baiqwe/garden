import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Garden Horizons Guides: How, What, Why',
  description:
    'Detailed Garden Horizons strategy guides covering stock timing, ROI methods, mutation planning, and beginner progression.',
  keywords: [
    'Garden Horizons beginner guide',
    'How to make money in Garden Horizons',
    'Garden Horizons stock refresh pattern',
    'Garden Horizons mutation strategy',
    'Garden Horizons ROI tips'
  ],
  alternates: {
    canonical: '/guides'
  }
};

export default function GuidesPage() {
  return (
    <section className="panel prose">
      <h1>Guides & Articles</h1>
      <p>
        Core long-tail guides: <Link href="/guides/how-to-get-dawn-fruit">How to Get Dawn Fruit</Link>,{' '}
        <Link href="/guides/best-seeds-by-level">Best Seeds by Level</Link>, and{' '}
        <Link href="/guides/stock-reset-pattern">Stock Reset Pattern</Link>.
      </p>
      <p>
        Last reviewed: March 4, 2026. Author: GH.Tools gameplay team. This page is written for players who want a
        repeatable method, not one-off luck.
      </p>
      <h2>What Matters Most in Garden Horizons Economy</h2>
      <p>
        The in-game economy rewards timing and consistency. High-rarity seeds can look attractive but become net-loss
        purchases when you buy without considering restock timing, current coin reserves, and plot constraints. Most
        avoidable losses come from late purchases, incomplete mutation prerequisites, and overestimating expected sell
        values during volatile event periods.
      </p>
      <h2>How to Build a Reliable Farming Loop</h2>
      <p>
        Start by checking <Link href="/">current stock</Link> and skip purchases that do not fit your budget floor.
        Run 2-3 options through the <Link href="/calculator">ROI calculator</Link> and prioritize stable
        coins-per-minute over short spikes. For mutation paths, use <Link href="/mutations">mutation pages</Link> to
        confirm weather and fertilizer combinations before committing premium resources. Finally, review{' '}
        <Link href="/stock-history">stock history</Link> to estimate when rare seeds are likely to reappear if you
        miss a window.
      </p>
      <h2>Why Players Miss Profits (and How to Avoid It)</h2>
      <p>
        The biggest strategic error is forcing legendary seeds when basic throughput is underdeveloped. Another common
        issue is chasing event-dependent mutations without checking whether event weather can be realistically matched
        in your play session. A third issue is using old code lists from low-quality pages. Always verify code status
        and update timing before planning your run.
      </p>
      <h2>Dawn Fruit Playbook</h2>
      <p>
        Dawn Fruit should be treated as a tactical purchase, not a default crop. Keep reserve coins ready, buy on
        appearance, and avoid full-plot commitment unless you can support the mutation chain and sell timing. If Dawn
        Fruit is unavailable, run mid-volatility crops with strong baseline ROI and use that period to rebuild capital.
      </p>
      <h2>Beginner 7-Day Progress Blueprint</h2>
      <p>
        Day 1-2: prioritize consistency over rarity. Build baseline capital and unlock enough plots to avoid idle time.
        Day 3-4: start comparing at least two crops per cycle in the calculator and keep a manual note of actual sell
        outcomes. Day 5: begin selective mutation attempts only after prerequisites are confirmed. Day 6: allocate a
        reserve fund for rare stock opportunities. Day 7: review outcomes, remove weak crops from your loop, and keep
        the top two performers as your default strategy.
      </p>
      <h2>Advanced Session Planning (Low-Time Players)</h2>
      <p>
        If your playtime is short, schedule decisions instead of constant checking. Open the site, review stock, and
        choose a plan you can complete in one session: one stable crop path and one optional event path. This keeps
        your progress predictable and protects coins during high-variance windows. If event weather does not align,
        fall back immediately to stable crops rather than waiting and losing cycle time.
      </p>
      <h2>Golden Bamboo Playbook</h2>
      <p>
        Golden Bamboo is often a better consistency pick for mid-tier players because requirements are more predictable.
        Use it when your objective is to stabilize coin inflow instead of chasing event spikes. You can review the full
        route in <Link href="/mutations/golden-bamboo">Golden Bamboo mutation details</Link>.
      </p>
      <h2>FAQ</h2>
      <h3>How often should I check stock?</h3>
      <p>
        For active sessions, every 2-5 minutes is enough. GH.Tools front-end refreshes snapshot data every 90 seconds,
        while source updates are near real-time.
      </p>
      <h3>What is a good ROI target for beginners?</h3>
      <p>
        Use your own seed costs and start with stable, low-risk crops. A lower but consistent ROI is better than a
        high theoretical ROI that depends on event-only conditions.
      </p>
      <h3>Where should I report incorrect data?</h3>
      <p>
        Send corrections through the <Link href="/contact">contact page</Link>. Include the crop name, observed time,
        and source context.
      </p>
      <p>
        Continue with: <Link href="/">live stock tracker</Link>, <Link href="/mutations/dawn-fruit">Dawn Fruit guide</Link>,{' '}
        <Link href="/privacy">privacy policy</Link>, and <Link href="/about">about us</Link>.
      </p>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'How often should I check stock?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'For active sessions, every 2-5 minutes is enough. GH.Tools refreshes snapshot data every 90 seconds.'
                }
              },
              {
                '@type': 'Question',
                name: 'What is a good ROI target for beginners?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Use your own costs and prioritize stable returns. Consistent low-risk ROI is better than volatile event-only peaks.'
                }
              },
              {
                '@type': 'Question',
                name: 'Where can I report wrong data?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Use the contact page and include crop name, observed time, and context.'
                }
              }
            ]
          })
        }}
      />
    </section>
  );
}
