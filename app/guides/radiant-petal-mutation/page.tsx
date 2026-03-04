import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import LongformBlock from '@/components/LongformBlock';
import { COMMON_EEAT_PARAGRAPHS, mutationNarrative } from '@/lib/pageNarratives';

export const metadata: Metadata = {
  title: 'Radiant Petal Mutation Guide',
  description:
    'Detailed Radiant Petal mutation path: base flower, weather windows, fertilizer setup, and practical execution notes.',
  keywords: ['radiant petal garden horizons', 'radiant petal mutation', 'how to get radiant petal'],
  alternates: {
    canonical: '/guides/radiant-petal-mutation'
  }
};

export default function RadiantPetalMutationPage() {
  const story = mutationNarrative('Radiant Petal', 'Radiant Storm / Night', '45-80 coins/min per plot');

  return (
    <section className="panel prose">
      <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Guides', href: '/guides' }, { name: 'Radiant Petal Mutation' }]} />
      <h1>Radiant Petal Mutation Guide</h1>
      <p>
        Radiant Petal is a high-upside route with strict timing and low tolerance for execution mistakes. Use this guide
        to plan entry and avoid resource burn.
      </p>
      <h2>Requirements Snapshot</h2>
      <ul>
        <li>Base Flower: Cosmos</li>
        <li>Weather Window: Radiant Storm / Night</li>
        <li>Fertilizer: Starlight Powder</li>
      </ul>
      <p>
        After setup, verify current stock in <a href="/">Live Stock</a> and estimate practical return in the{' '}
        <a href="/calculator">ROI Calculator</a>.
      </p>
      <LongformBlock title={story.title} paragraphs={[...story.paragraphs, ...COMMON_EEAT_PARAGRAPHS]} />
    </section>
  );
}
