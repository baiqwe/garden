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
    '服务条款的目标不是堆法律术语，而是提前定义双方边界。用户需要知道哪些信息属于参考、哪些行为由用户自担、站点在哪些情况下可能调整服务。只有边界清晰，体验才稳定。',
    '我们将条款写成可执行语言，目的是减少误解成本。对工具站来说，最常见争议来自“把估算当成保证”。因此我们持续强调：页面数据用于决策支持，不构成收益承诺，最终执行仍取决于玩家自身条件。',
    '条款还承担风险沟通作用。比如功能暂停、数据延迟、页面维护等情况，若提前披露，用户预期会更合理。长期看，透明条款有助于减少支持压力，也能提升品牌信任。'
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
      <LongformBlock title="服务条款与用户边界说明" paragraphs={[...termsDeep, ...COMMON_EEAT_PARAGRAPHS, ...COMMON_EEAT_PARAGRAPHS]} />
    </section>
  );
}
