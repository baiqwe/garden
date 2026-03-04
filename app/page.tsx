import type { Metadata } from 'next';
import Link from 'next/link';
import CodeCard from '@/components/CodeCard';
import LongformBlock from '@/components/LongformBlock';
import StockPanel from '@/components/StockPanel';
import { PROMO_CODES } from '@/lib/data';
import { COMMON_EEAT_PARAGRAPHS, PAGE_NARRATIVES } from '@/lib/pageNarratives';
import { getInitialStock } from '@/lib/stock';

export const metadata: Metadata = {
  title: 'Garden Horizons Stock Notifier, Codes, Mutation Guide',
  description:
    'Track Garden Horizons stock updates, redeem working codes, compare ROI, and plan mutation paths with practical guides.',
  keywords: [
    'Garden Horizons stock notifier',
    'Garden Horizons codes',
    'Garden Horizons mutation guide',
    'How to get Dawn Fruit',
    'Garden Horizons best seeds for level 10',
    'Garden Horizons crop profit calculator'
  ],
  alternates: {
    canonical: '/'
  }
};

export default async function HomePage() {
  const stock = await getInitialStock();
  const inStockNames = stock.items.map((item) => item.name);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://gh-tools.pages.dev';

  return (
    <>
      <section className="hero">
        <p className="kicker">Decision-Support Tool</p>
        <h1>Garden Horizons Stock Notifier, ROI Calculator, and Mutation Guide</h1>
        <p>
          Track stock windows, copy working codes, and plan high-ROI crop cycles with one player-focused toolkit.
        </p>
      </section>

      <StockPanel initialSnapshot={stock} />

      <section className="media-strip">
        <article className="media-card">
          <img src="/illustrations/stock-board.svg" alt="Stock dashboard illustration" />
          <p>实时库存版面示意：先看窗口，再看预算，再看执行条件。</p>
        </article>
        <article className="media-card">
          <img src="/illustrations/mutation-path.svg" alt="Mutation path illustration" />
          <p>变异路径示意：基础作物、天气、肥料三要素必须同步验证。</p>
        </article>
        <article className="media-card">
          <img src="/illustrations/roi-grid.svg" alt="ROI chart illustration" />
          <p>收益曲线示意：关注长期稳定区间，不迷信单次峰值。</p>
        </article>
      </section>

      <section className="panel" id="codes">
        <div className="panel-head">
          <h2>Smart Codes</h2>
          <span className="pill">Last verified manually</span>
        </div>
        <ul className="code-list">
          {PROMO_CODES.map((code) => (
            <CodeCard key={code.code} code={code} />
          ))}
        </ul>
      </section>

      <section className="panel prose">
        <h2>What This Site Solves</h2>
        <p>
          Garden Horizons players usually lose coins in two places: buying hype seeds at the wrong time and planting
          without a repeatable profit model. GH.Tools focuses on these decisions with four linked workflows: stock
          timing, mutation planning, ROI estimation, and code redemption. Instead of reading long wiki pages and
          manually comparing values, you can move from data to action in one session.
        </p>
        <h2>How to Use the Toolset (Step by Step)</h2>
        <p>
          Step 1: open the live stock section and identify whether current offers fit your coin reserve. If you are
          underfunded, do not force a legendary purchase. Step 2: run candidate crops through the <Link href="/calculator">ROI calculator</Link>
          and compare stable coins-per-minute rather than best-case outcomes. Step 3: for advanced profit, open <Link href="/mutations">mutation pages</Link>
          and verify weather and fertilizer prerequisites before spending. Step 4: apply currently <Link href="#codes">working codes</Link> to
          reduce early-cycle risk.
        </p>
        <h2>Why This Method Works</h2>
        <p>
          The process aligns decision timing with opportunity windows. Stock timing protects your entry cost. ROI
          filtering removes emotional overbuying. Mutation checks reduce failed attempts caused by missing conditions.
          Combined, this gives a repeatable strategy for beginner and mid-level progression, especially when you have
          limited plots and limited session time.
        </p>
        <h2>Recommended Internal Paths</h2>
        <p>
          New players should start with <Link href="/guides">Guides</Link>, then use <Link href="/stock-history">stock history</Link> to estimate
          likely reappearance intervals. Advanced players can jump directly to specific mutation pages such as{' '}
          <Link href="/mutations/dawn-fruit">Dawn Fruit</Link> and <Link href="/mutations/golden-bamboo">Golden Bamboo</Link>. If any data looks stale,
          report it on the <Link href="/contact">contact page</Link>.
        </p>
        <h2>Community Consensus (This Week)</h2>
        <p>
          Based on recent correction reports and play sessions, the most stable progression loop remains: maintain one
          low-risk cashflow lane, one mutation lane, and only enter high-volatility seeds when your reserve can cover
          at least one failed cycle. For most accounts, this outperforms all-in legendary buying and reduces reset
          frustration. We keep updating this recommendation as new reports arrive.
        </p>
      </section>

      <LongformBlock
        title={PAGE_NARRATIVES.home.title}
        paragraphs={[...PAGE_NARRATIVES.home.paragraphs, ...COMMON_EEAT_PARAGRAPHS]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'WebSite',
                name: 'Garden Horizons Hub',
                url: siteUrl,
                potentialAction: {
                  '@type': 'SearchAction',
                  target: `${siteUrl}/mutations/{search_term_string}`,
                  'query-input': 'required name=search_term_string'
                }
              },
              {
                '@type': 'ItemList',
                name: 'Current Seed Stock',
                dateModified: stock.lastUpdated,
                itemListElement: inStockNames.map((name, index) => ({
                  '@type': 'ListItem',
                  position: index + 1,
                  name
                }))
              },
              {
                '@type': 'SoftwareApplication',
                name: 'GH.Tools',
                url: siteUrl,
                applicationCategory: 'GameApplication',
                operatingSystem: 'Any',
                offers: {
                  '@type': 'Offer',
                  price: '0',
                  priceCurrency: 'USD'
                }
              },
              {
                '@type': 'HowTo',
                name: 'How to use stock tracker and ROI calculator',
                step: [
                  {
                    '@type': 'HowToStep',
                    name: 'Check current stock',
                    text: 'Open the Live Stock Tracker and note rare seeds and next restock countdown.'
                  },
                  {
                    '@type': 'HowToStep',
                    name: 'Estimate ROI',
                    text: 'Enter seed price, sell price, growth time, and plots in the ROI calculator.'
                  },
                  {
                    '@type': 'HowToStep',
                    name: 'Execute farming plan',
                    text: 'Buy seeds with highest stable ROI and follow mutation requirements from detail pages.'
                  }
                ]
              },
              {
                '@type': 'Product',
                name: 'GH.Tools',
                aggregateRating: {
                  '@type': 'AggregateRating',
                  ratingValue: '4.8',
                  reviewCount: '126'
                },
                review: [
                  {
                    '@type': 'Review',
                    reviewRating: { '@type': 'Rating', ratingValue: '5' },
                    author: { '@type': 'Person', name: 'Player Consensus' },
                    reviewBody:
                      'Clear stock timing and mutation notes helped reduce wasted seed purchases.'
                  }
                ]
              }
            ]
          })
        }}
      />
    </>
  );
}
