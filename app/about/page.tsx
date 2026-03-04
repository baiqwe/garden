import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn who runs GH.Tools and how data is verified for Garden Horizons.',
  keywords: ['GH.Tools about', 'Garden Horizons data verification', 'Garden Horizons tools team'],
  alternates: {
    canonical: '/about'
  }
};

export default function AboutPage() {
  return (
    <section className="panel prose">
      <h1>About GH.Tools</h1>
      <p>
        GH.Tools exists to help Garden Horizons players make faster and better in-game decisions with clear, practical
        data tools.
      </p>
      <h2>Our Mission</h2>
      <p>
        We provide free, easy-to-read stock tracking, mutation references, and profit planning tools so players can
        spend less time guessing and more time farming.
      </p>
      <h2>Experience and Validation</h2>
      <p>
        We actively play Garden Horizons and manually validate critical information like high-value mutation paths,
        seed window behavior, and code status before publishing updates.
      </p>
      <h2>Values</h2>
      <p>
        Privacy first, transparent updates, and player-first utility. Content is reviewed by humans and edited for
        gameplay accuracy and clarity.
      </p>
      <p>
        Learn more about our editorial process in <a href="/guides">Guides</a>, legal terms in{' '}
        <a href="/terms">Terms</a>, and data handling in <a href="/privacy">Privacy Policy</a>.
      </p>
    </section>
  );
}
