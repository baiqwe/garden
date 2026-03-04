import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
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
    title: `${mutation.crop} Mutation Guide`,
    description: `How to unlock ${mutation.crop}: weather, fertilizer and practical pathing notes.`,
    keywords: [
      `${mutation.crop} mutation guide`,
      `How to get ${mutation.crop}`,
      `${mutation.basePlant} mutation Garden Horizons`
    ],
    alternates: {
      canonical: `/mutations/${mutation.slug}`
    }
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
    <section className="panel prose">
      <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Mutations', href: '/mutations' }, { name: mutation.crop }]} />
      <h1>{mutation.crop}</h1>
      <div className="meta-grid">
        <p><strong>Base Plant:</strong> {mutation.basePlant}</p>
        <p><strong>Required Weather:</strong> {mutation.weather}</p>
        <p><strong>Recommended Fertilizer:</strong> {mutation.fertilizer}</p>
      </div>
      <h2>What You Need</h2>
      <p>{mutation.note}</p>
      <h2>How to Execute</h2>
      <p>
        Prepare seeds before the weather window starts, apply the listed fertilizer, and avoid switching crops
        mid-cycle. Use <a href="/stock-history">stock history</a> to estimate timing and confirm expected return in
        the <a href="/calculator">ROI calculator</a>.
      </p>
      <h2>Why This Path Is Useful</h2>
      <p>
        This path balances unlock difficulty and profitability for most players. If the required weather is unavailable,
        use alternatives from <a href="/mutations">Mutation Lab</a> and keep progressing with stable ROI crops.
      </p>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://gh-tools.pages.dev/'
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Mutations',
                item: 'https://gh-tools.pages.dev/mutations'
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: mutation.crop,
                item: `https://gh-tools.pages.dev/mutations/${mutation.slug}`
              }
            ]
          })
        }}
      />
    </section>
  );
}
