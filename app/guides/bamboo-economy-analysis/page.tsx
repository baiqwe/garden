import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import LongformBlock from '@/components/LongformBlock';
import { COMMON_EEAT_PARAGRAPHS, PAGE_NARRATIVES } from '@/lib/pageNarratives';

export const metadata: Metadata = {
  title: 'Bamboo Economy Analysis',
  description:
    'Bamboo base price and ROI analysis for Garden Horizons with practical timing and progression recommendations.',
  keywords: ['bamboo base price garden horizons', 'bamboo garden horizons', 'bamboo ROI analysis'],
  alternates: {
    canonical: '/guides/bamboo-economy-analysis'
  }
};

export default function BambooEconomyAnalysisPage() {
  return (
    <section className="panel prose">
      <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Guides', href: '/guides' }, { name: 'Bamboo Economy Analysis' }]} />
      <h1>Bamboo Economy Analysis</h1>
      <p>
        Bamboo remains one of the most searched economic routes because it balances entry cost, cycle speed, and
        strategic flexibility across account stages.
      </p>
      <h2>Why Bamboo Matters</h2>
      <p>
        Bamboo is often used as a cashflow stabilizer while players prepare event-oriented routes. It performs best when
        combined with strict budget rules and predictable harvest cadence.
      </p>
      <h2>Action Path</h2>
      <p>
        Check <a href="/stock-history">Stock History</a> for recurrence timing, then compare options in{' '}
        <a href="/calculator">ROI Calculator</a>. Continue to <a href="/mutations/golden-bamboo">Golden Bamboo details</a>{' '}
        for mutation-level optimization.
      </p>
      <LongformBlock title="Bamboo Pricing and Throughput Strategy" paragraphs={[...PAGE_NARRATIVES.stock.paragraphs, ...COMMON_EEAT_PARAGRAPHS]} />
    </section>
  );
}
