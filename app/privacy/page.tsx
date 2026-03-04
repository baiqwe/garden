import type { Metadata } from 'next';
import LongformBlock from '@/components/LongformBlock';
import { COMMON_EEAT_PARAGRAPHS } from '@/lib/pageNarratives';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Read how GH.Tools handles analytics, cookies, and user privacy.',
  keywords: ['GH.Tools privacy policy', 'Garden Horizons tools privacy', 'website analytics policy'],
  alternates: {
    canonical: '/privacy'
  }
};

export default function PrivacyPage() {
  const privacyDeep = [
    '隐私政策页面需要做到“可读、可核对、可执行”。可读代表普通用户能理解，不依赖法律术语；可核对代表关键条款可映射到实际行为；可执行代表用户知道自己能做什么，例如如何关闭个性化广告、如何联系站点请求说明。',
    '广告相关披露是审核重点之一。我们在页面中明确说明第三方广告与 Cookie 场景，目的是让用户在访问前就知道数据可能如何被使用。透明度越高，误解越少，品牌信任越稳。',
    '我们坚持最小化原则：只保留站点运行和分析所需的必要数据，不触碰与功能无关的敏感信息。对于工具站来说，这不仅是合规要求，也是用户选择长期使用的基础。'
  ];

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
      <p>
        We explicitly disclose this for AdSense compliance: Google may use advertising cookies to personalize ad
        delivery, and users can opt out of personalized advertising through Google Ads Settings.
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
      <LongformBlock title="隐私与广告合规的实践说明" paragraphs={[...privacyDeep, ...COMMON_EEAT_PARAGRAPHS, ...COMMON_EEAT_PARAGRAPHS]} />
    </section>
  );
}
