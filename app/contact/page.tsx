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
    '联系方式页面的作用不只是给一个邮箱，而是建立“可追踪反馈链路”。用户需要知道报告问题后会发生什么、多久处理、如何回传结果。我们将反馈拆分为错误上报、功能建议和内容纠错，就是为了降低沟通成本。',
    '在数据驱动型页面中，纠错速度决定信任速度。越快完成核验并同步页面，用户越愿意持续提供高质量反馈，站点内容就会形成正循环。反之，用户会停止反馈，页面质量会在沉默中下滑。',
    '我们建议提交反馈时附上时间戳、目标页面、操作步骤和截图描述。这样可以显著缩短复现时间。没有上下文的“有问题”通常需要多轮往返，最终会拖慢修复节奏。'
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
      <LongformBlock title="反馈机制与质量维护说明" paragraphs={[...contactDeep, ...COMMON_EEAT_PARAGRAPHS, ...COMMON_EEAT_PARAGRAPHS]} />
    </section>
  );
}
