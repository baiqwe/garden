import type { Metadata } from 'next';
import LongformBlock from '@/components/LongformBlock';
import { COMMON_EEAT_PARAGRAPHS } from '@/lib/pageNarratives';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms for using GH.Tools.',
  keywords: ['GH.Tools terms of service', 'Garden Horizons fan tool terms'],
  alternates: {
    canonical: '/terms'
  }
};

export default function TermsPage() {
  const termsDeep = [
    'Terms of service should define operational boundaries clearly, not just present legal language. Users need to know what content is informational, which actions remain user responsibility, and when service behavior may change.',
    'We write terms in executable language to reduce interpretation cost. A frequent dispute in utility sites is treating estimates as guarantees. Our policy is explicit: page data supports decisions but does not promise outcomes.',
    'Terms also function as risk communication. Planned disclosures around maintenance, temporary delays, and feature updates create realistic expectations and reduce support friction.'
  ];

  return (
    <section className="panel prose">
      <h1>Terms of Service</h1>
      <p>Effective date: March 4, 2026</p>
      <h2>Use of Service</h2>
      <p>
        GH.Tools is an independent fan utility for informational use. You are responsible for your own in-game
        decisions and outcomes.
      </p>
      <h2>No Affiliation</h2>
      <p>
        GH.Tools is not affiliated with Roblox or Garden Horizons developers. Names and game terms belong to their
        respective owners.
      </p>
      <h2>Availability</h2>
      <p>
        We may update, pause, or remove features at any time. We do not guarantee uninterrupted or error-free service.
      </p>
      <h2>Contact</h2>
      <p>Questions: <a href="mailto:support@gh.tools">support@gh.tools</a>.</p>
      <p>
        Please also review our <a href="/privacy">Privacy Policy</a> and <a href="/about">About page</a>.
      </p>
      <LongformBlock title="Service Terms and User Responsibility Boundaries" paragraphs={[...termsDeep, ...COMMON_EEAT_PARAGRAPHS, ...COMMON_EEAT_PARAGRAPHS]} />
    </section>
  );
}
