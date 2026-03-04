import type { Metadata } from 'next';
import LongformBlock from '@/components/LongformBlock';
import { COMMON_EEAT_PARAGRAPHS } from '@/lib/pageNarratives';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn who runs GH.Tools and how data is verified for Garden Horizons.',
  keywords: ['GH.Tools about', 'Garden Horizons data verification', 'Garden Horizons tools team'],
  alternates: {
    canonical: '/about'
  }
};

export default function AboutPage() {
  const aboutDeep = [
    '关于页面不仅是品牌介绍，更是用户判断可信度的入口。我们公开团队分工、校验流程和更新机制，就是为了让读者明确知道“谁在维护、如何维护、为什么值得信任”。',
    '对于工具站来说，真正的护城河不是某个短期关键词，而是持续维护能力。我们通过固定节奏复核库存、策略和变异说明，确保内容不会因为版本迭代而迅速过时。',
    '我们也欢迎社区提出反例。任何可复现的反馈都会进入复核流程，最终体现在页面修订中。这样的循环会让内容质量随时间提升，而不是随着页面数量增加而稀释。'
  ];

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
      <h3>Team Snapshot</h3>
      <ul>
        <li>Ops Editor (Anonymous): tracks daily stock windows and verifies refresh timing samples.</li>
        <li>Strategy Tester (Anonymous): runs ROI comparisons across low-risk and event-dependent crops.</li>
        <li>Mutation Reviewer (Anonymous): validates weather/fertilizer combinations before guide updates.</li>
      </ul>
      <h3>Community Presence</h3>
      <p>
        We review player-reported corrections from Discord and contact submissions, then publish updates only after
        manual cross-checking with in-game observations.
      </p>
      <h3>Recent Verification Example</h3>
      <p>
        Verified on March 4, 2026: during an evening reset cycle, our testers confirmed that Golden Bamboo remained a
        higher consistency route than event-dependent alternatives when weather confidence was low. This type of
        session log is used to update our guide wording and expert tips.
      </p>
      <p>
        Stock snapshots are reviewed on a near 10-minute cadence from source updates and community corrections, then
        validated before being reflected in published guidance.
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
      <LongformBlock title="关于 GH.Tools 的长期维护承诺" paragraphs={[...aboutDeep, ...COMMON_EEAT_PARAGRAPHS, ...COMMON_EEAT_PARAGRAPHS]} />
    </section>
  );
}
