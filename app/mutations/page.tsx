import type { Metadata } from 'next';
import Link from 'next/link';
import { MUTATIONS } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Mutation Database',
  description: 'Explore mutation paths and requirements for each crop.',
  keywords: ['Garden Horizons mutation guide', 'Bamboo mutation guide', 'How to get Dawn Fruit'],
  alternates: {
    canonical: '/mutations'
  }
};

export default function MutationsPage() {
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
    </section>
  );
}
