import type { Metadata } from 'next';
import AdsterraSlot from '@/components/AdsterraSlot';
import LongformBlock from '@/components/LongformBlock';
import ROICalculator from '@/components/ROICalculator';
import { COMMON_EEAT_PARAGRAPHS, PAGE_NARRATIVES } from '@/lib/pageNarratives';

export const metadata: Metadata = {
  title: 'ROI Calculator',
  description: 'Calculate expected crop profit per minute based on price, growth time, weather and plots.',
  keywords: ['Garden Horizons ROI calculator', 'Garden Horizons crop profit', 'best seeds by level Garden Horizons'],
  alternates: {
    canonical: '/calculator'
  }
};

export default function CalculatorPage() {
  return (
    <>
      <ROICalculator />
      <AdsterraSlot kind="rectangle" id="calculator-inline" />
      <section className="panel prose">
        <h2>How to Read ROI Results</h2>
        <p>
          Use ROI as a decision filter, not an absolute promise. Compare several crops, then choose the one with
          repeatable return under your current plot count and event conditions.
        </p>
        <p>
          Next steps: check <a href="/stock-history">stock history</a> for timing confidence and verify mutation
          prerequisites in <a href="/mutations">Mutation Lab</a>.
        </p>
        <p>
          Looking for better profit routes? Check the <a href="/mutations">Mutation Guide</a> and compare candidate
          paths in <a href="/guides/best-seeds-by-level">Best Seeds by Level</a>.
        </p>
      </section>
      <LongformBlock
        title={PAGE_NARRATIVES.calculator.title}
        paragraphs={[...PAGE_NARRATIVES.calculator.paragraphs, ...COMMON_EEAT_PARAGRAPHS]}
      />
    </>
  );
}
