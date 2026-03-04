import type { Metadata } from 'next';
import { MUTATIONS } from '@/lib/data';

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return MUTATIONS.map((m) => ({ slug: m.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const mutation = MUTATIONS.find((m) => m.slug === params.slug);
  if (!mutation) return { title: 'Mutation Not Found | GH.Tools' };
  return {
    title: `${mutation.crop} Mutation Guide | GH.Tools`,
    description: `How to unlock ${mutation.crop}: weather, fertilizer and practical pathing notes.`
  };
}

export default function MutationDetailPage({ params }: Props) {
  const mutation = MUTATIONS.find((m) => m.slug === params.slug);
  if (!mutation) {
    return (
      <section className="panel">
        <h1>Mutation Not Found</h1>
      </section>
    );
  }

  return (
    <section className="panel">
      <h1>{mutation.crop}</h1>
      <div className="meta-grid">
        <p><strong>Base Plant:</strong> {mutation.basePlant}</p>
        <p><strong>Required Weather:</strong> {mutation.weather}</p>
        <p><strong>Recommended Fertilizer:</strong> {mutation.fertilizer}</p>
      </div>
      <p>{mutation.note}</p>
    </section>
  );
}
