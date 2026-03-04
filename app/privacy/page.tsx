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
        <li>Potential third-party ad serving and measurement data when ads are enabled</li>
      </ul>
      <h2>Advertising and Cookies</h2>
      <p>
        When Google AdSense is enabled, third-party vendors including Google may use cookies to serve ads based on
        prior visits to this site or other sites. Users can manage ad personalization through Google ad settings.
      </p>
      <p>
        This policy is intended to align with Google publisher transparency requirements, including disclosure of
        third-party cookie usage for advertising and measurement.
      </p>
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
