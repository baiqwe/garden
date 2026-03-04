import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Read how GH.Tools handles analytics, cookies, and user privacy.',
  keywords: ['GH.Tools privacy policy', 'Garden Horizons tools privacy', 'website analytics policy'],
  alternates: {
    canonical: '/privacy'
  }
};

export default function PrivacyPage() {
  return (
    <section className="panel prose">
      <h1>Privacy Policy</h1>
      <p>Effective date: March 4, 2026</p>
      <p>
        GH.Tools is designed as a lightweight utility site. We do not require account registration and we do not
        collect game account credentials.
      </p>
      <h2>Data We Process</h2>
      <ul>
        <li>Essential technical data required to load pages</li>
        <li>Optional anonymized analytics events (only if enabled)</li>
      </ul>
      <h2>What We Do Not Collect</h2>
      <ul>
        <li>Personal identity documents</li>
        <li>Payment card data</li>
        <li>Game login passwords</li>
      </ul>
      <h2>Contact</h2>
      <p>For privacy questions, email <a href="mailto:support@gh.tools">support@gh.tools</a>.</p>
      <p>
        For service boundaries, read <a href="/terms">Terms of Service</a>. For team details, visit{' '}
        <a href="/about">About</a>.
      </p>
    </section>
  );
}
