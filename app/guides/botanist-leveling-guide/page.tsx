import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import LongformBlock from '@/components/LongformBlock';
import { COMMON_EEAT_PARAGRAPHS, PAGE_NARRATIVES } from '@/lib/pageNarratives';

export const metadata: Metadata = {
  title: 'Garden Horizons Botanist Leveling Guide',
  description:
    'Step-by-step Botanist progression guide with seed priority, budget control, and stock-window execution strategy.',
  keywords: [
    'Garden Horizons botanist',
    'botanist leveling guide',
    'Garden Horizons radiant petal guide',
    'Garden Horizons profession progression'
  ],
  alternates: {
    canonical: '/guides/botanist-leveling-guide'
  }
};

export default function BotanistLevelingGuidePage() {
  const intro = [
    'Botanist progression is currently one of the strongest search-intent topics because players want a repeatable route instead of random grinding.',
    'The fastest mistake is over-investing in rare seeds too early. Leveling speed improves when you combine stable throughput crops with selective window-based rare entries.',
    'Radiant Petal paths should be treated as tactical boosts, not your default baseline. Build consistency first, then layer event-sensitive opportunities.'
  ];

  return (
    <section className="panel prose">
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Guides', href: '/guides' },
          { name: 'Botanist Leveling Guide' }
        ]}
      />
      <h1>Garden Horizons Botanist Leveling Guide</h1>
      <p>
        This guide is designed for players who want predictable Botanist progression with minimal wasted budget. The
        key principle is structured progression: stable XP flow first, tactical spikes second.
      </p>

      <h2>Leveling Structure by Stage</h2>
      <p>
        Stage 1: run reliable low-variance seeds to keep rotation speed high. Stage 2: introduce one mutation lane only
        when your budget can absorb failed attempts. Stage 3: use stock timing plus ROI checks to gate all rare entries.
      </p>

      <h2>Radiant Petal Handling Strategy</h2>
      <p>
        Radiant Petal opportunities should be validated by timing and reserve, not excitement. If stock appears but your
        prerequisites are incomplete, skip and preserve cycle integrity. Long-term progression is built on repeatability.
      </p>

      <h2>Execution Checklist</h2>
      <ul>
        <li>Check freshness timestamp on stock data</li>
        <li>Run current options through ROI calculator</li>
        <li>Confirm weather and fertilizer requirements</li>
        <li>Reserve at least one fallback cycle budget</li>
      </ul>

      <p>
        Continue with <a href="/">Live Stock</a>, <a href="/stock-history">Stock History</a>,{' '}
        <a href="/mutations">Mutation Lab</a>, and <a href="/guides/how-to-get-dawn-fruit">Dawn Fruit Guide</a>.
      </p>

      <LongformBlock
        title="Botanist Progression Framework and Practical Risk Control"
        paragraphs={[...intro, ...PAGE_NARRATIVES.botanist.paragraphs, ...COMMON_EEAT_PARAGRAPHS]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Garden Horizons Botanist Leveling Guide',
            author: { '@type': 'Organization', name: 'GH.Tools Team' },
            publisher: { '@type': 'Organization', name: 'GH.Tools' },
            datePublished: '2026-03-04',
            dateModified: '2026-03-04'
          })
        }}
      />
    </section>
  );
}
