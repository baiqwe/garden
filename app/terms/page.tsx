import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms for using GH.Tools.',
  keywords: ['GH.Tools terms of service', 'Garden Horizons fan tool terms'],
  alternates: {
    canonical: '/terms'
  }
};

export default function TermsPage() {
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
    </section>
  );
}
