import type { Metadata } from 'next';
import Link from 'next/link';
import { MUTATIONS } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Mutations Database | Garden Horizons Hub',
  description: 'Explore mutation paths and requirements for each crop.'
};

export default function MutationsPage() {
  return (
    <section className="panel">
      <h1>Mutation Lab</h1>
      <p className="muted">Select a mutation to see base crop, weather, fertilizer, and tactical notes.</p>
      <ul className="mutation-list">
        {MUTATIONS.map((m) => (
          <li key={m.slug}>
            <Link href={`/mutations/${m.slug}`}>{m.crop}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
