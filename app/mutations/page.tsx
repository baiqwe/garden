import type { Metadata } from 'next';
import Link from 'next/link';
import LongformBlock from '@/components/LongformBlock';
import { MUTATIONS } from '@/lib/data';
import { COMMON_EEAT_PARAGRAPHS, PAGE_NARRATIVES } from '@/lib/pageNarratives';

export const metadata: Metadata = {
  title: 'Mutation Database',
  description: 'Explore mutation paths and requirements for each crop.',
  keywords: ['Garden Horizons mutation guide', 'Bamboo mutation guide', 'How to get Dawn Fruit'],
  alternates: {
    canonical: '/mutations'
  }
};

export default function MutationsPage() {
  const mutationIntro = [
    'The mutation system is one of the most misunderstood high-upside mechanics in Garden Horizons. Many players prioritize rare outcomes without evaluating execution readiness, which creates high input and low completion quality.',
    'A stronger approach treats mutation as a condition engineering workflow. You must align base crop, weather window, fertilizer choice, plot allocation, and harvest timing. Misalignment in any one stage can heavily distort outcomes.',
    'Strategically, run one stable-income lane and one mutation experiment lane. Even if the experiment fails, your cashflow continues and account growth is protected from single-cycle variance.'
  ];

  return (
    <section className="panel prose">
      <h1>Mutation Lab</h1>
      <p className="muted">Select a mutation to see base crop, weather, fertilizer, and tactical notes.</p>
      <ul className="mutation-list">
        {MUTATIONS.map((m) => (
          <li key={m.slug}>
            <Link href={`/mutations/${m.slug}`}>{m.crop}</Link>
          </li>
        ))}
      </ul>
      <p>
        For better results, pair mutation planning with <Link href="/stock-history">stock frequency analysis</Link>{' '}
        and then validate expected return in the <Link href="/calculator">ROI calculator</Link>.
      </p>
      <LongformBlock title="Global Mutation Strategy Framework" paragraphs={[...mutationIntro, ...COMMON_EEAT_PARAGRAPHS, ...PAGE_NARRATIVES.stock.paragraphs]} />
    </section>
  );
}
