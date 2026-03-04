import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import LongformBlock from '@/components/LongformBlock';
import { COMMON_EEAT_PARAGRAPHS, PAGE_NARRATIVES } from '@/lib/pageNarratives';

export const metadata: Metadata = {
  title: 'Garden Horizons Botanist Progression Guide',
  description:
    'Comprehensive Botanist progression framework with practical leveling flow, resource strategy, and event timing.',
  keywords: ['garden horizons botanist guide', 'botanist leveling garden horizons', 'botanist progression'],
  alternates: {
    canonical: '/guides/botanist-progression-guide'
  }
};

export default function BotanistProgressionGuidePage() {
  return (
    <section className="panel prose">
      <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Guides', href: '/guides' }, { name: 'Botanist Progression Guide' }]} />
      <h1>Garden Horizons Botanist Progression Guide</h1>
      <p>
        Botanist progression is currently one of the highest-interest topics because it affects both route efficiency and
        mutation readiness. This page focuses on stable advancement, not one-time spikes.
      </p>
      <h2>Core Progression Logic</h2>
      <p>
        Build baseline throughput first, then add event-sensitive tactical entries. If your budget reserve is thin,
        skip rare opportunities and protect cycle continuity.
      </p>
      <h2>Recommended Next Steps</h2>
      <p>
        Use <a href="/calculator">ROI Calculator</a> with Botanist bonus enabled, then validate timing in{' '}
        <a href="/stock-history">Stock History</a>. If you are targeting event crops, continue to{' '}
        <a href="/guides/radiant-petal-mutation">Radiant Petal Mutation Guide</a>.
      </p>
      <LongformBlock
        title={PAGE_NARRATIVES.botanist.title}
        paragraphs={[...PAGE_NARRATIVES.botanist.paragraphs, ...COMMON_EEAT_PARAGRAPHS]}
      />
    </section>
  );
}
