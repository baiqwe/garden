import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact GH.Tools support for bug reports, feature requests, and content corrections.',
  keywords: ['GH.Tools contact', 'Garden Horizons report bug', 'Garden Horizons content correction'],
  alternates: {
    canonical: '/contact'
  }
};

export default function ContactPage() {
  return (
    <section className="panel prose">
      <h1>Contact Us</h1>
      <p>Email: <a href="mailto:support@gh.tools">support@gh.tools</a></p>
      <h2>Feedback Types</h2>
      <ul>
        <li>Bug Report: wrong calculations, display issues, broken pages</li>
        <li>Feature Request: new calculators, new filters, new tracking views</li>
        <li>Content Correction: stock data, mutation conditions, or code status</li>
      </ul>
      <p>Typical response time: 2-3 business days.</p>
      <p>
        Before contacting support, you can check <a href="/guides">Guides</a> and <a href="/mutations">Mutation Lab</a>{' '}
        for common troubleshooting steps.
      </p>
    </section>
  );
}
