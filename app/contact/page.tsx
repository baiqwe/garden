import type { Metadata } from 'next';
import LongformBlock from '@/components/LongformBlock';
import { COMMON_EEAT_PARAGRAPHS } from '@/lib/pageNarratives';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact GH.Tools support for bug reports, feature requests, and content corrections.',
  keywords: ['GH.Tools contact', 'Garden Horizons report bug', 'Garden Horizons content correction'],
  alternates: {
    canonical: '/contact'
  }
};

export default function ContactPage() {
  const contactDeep = [
    'A contact page should do more than publish an email address. It should define a trackable feedback workflow so users know what happens after submission, expected response time, and how fixes are communicated.',
    'In data-driven products, correction speed influences trust speed. The faster a report is verified and reflected on-page, the more likely users are to keep contributing high-quality feedback.',
    'For best support quality, reports should include timestamp, target page, reproduction steps, and screenshot context. This dramatically reduces diagnosis time and minimizes multi-round clarification delays.'
  ];

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
      <LongformBlock title="Feedback Workflow and Quality Maintenance Policy" paragraphs={[...contactDeep, ...COMMON_EEAT_PARAGRAPHS, ...COMMON_EEAT_PARAGRAPHS]} />
    </section>
  );
}
