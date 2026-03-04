import type { Metadata } from 'next';
import AdsterraSlot from '@/components/AdsterraSlot';
import Breadcrumbs from '@/components/Breadcrumbs';
import LongformBlock from '@/components/LongformBlock';
import { MUTATIONS } from '@/lib/data';
import { COMMON_EEAT_PARAGRAPHS, mutationNarrative } from '@/lib/pageNarratives';

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
    description: `How to unlock ${mutation.crop}: weather, fertilizer, success rate (${mutation.successRate}), and ROI band (${mutation.expectedRoiBand}).`,
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
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://gardenhorizonsstock.org';
  const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  const longNarrative = mutation ? mutationNarrative(mutation.crop, mutation.weather, mutation.expectedRoiBand) : null;

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
        <p><strong>Observed Success Rate:</strong> {mutation.successRate}</p>
        <p><strong>Expected ROI Band:</strong> {mutation.expectedRoiBand}</p>
      </div>
      <h2>What You Need</h2>
      <p>{mutation.note}</p>
      <h2>Expert Tip (Field Tested)</h2>
      <p>{mutation.expertTip}</p>
      <p>
        Verified on {today}: this route was reconfirmed in active session logs before this page update.
      </p>
      <h2>How to Execute</h2>
      <p>
        Prepare seeds before the weather window starts, apply the listed fertilizer, and avoid switching crops
        mid-cycle. Use <a href="/stock-history">stock history</a> to estimate timing and confirm expected return in
        the <a href="/calculator">ROI calculator</a>.
      </p>
      <AdsterraSlot kind="leaderboard" id={`mutation-inline-${mutation.slug}`} />
      <h2>Why This Path Is Useful</h2>
      <p>
        This path balances unlock difficulty and profitability for most players. If the required weather is unavailable,
        use alternatives from <a href="/mutations">Mutation Lab</a> and keep progressing with stable ROI crops.
      </p>
      <h2>Other Popular Mutations</h2>
      <ul>
        {MUTATIONS.filter((m) => m.slug !== mutation.slug).map((m) => (
          <li key={m.slug}>
            <a href={`/mutations/${m.slug}`}>{m.crop}</a>
          </li>
        ))}
      </ul>
      <p>
        <a href="/" className="action-link">Check if {mutation.basePlant} seed is in stock now</a>
      </p>
      <LongformBlock
        title={longNarrative!.title}
        paragraphs={[...longNarrative!.paragraphs, ...COMMON_EEAT_PARAGRAPHS]}
      />
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
                item: `${siteUrl}/`
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Mutations',
                item: `${siteUrl}/mutations`
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: mutation.crop,
                item: `${siteUrl}/mutations/${mutation.slug}`
              }
            ]
          })
        }}
      />
    </section>
  );
}
