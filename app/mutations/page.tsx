import type { Metadata } from 'next';
import Link from 'next/link';
import LongformBlock from '@/components/LongformBlock';
import { MUTATIONS } from '@/lib/data';
import { COMMON_EEAT_PARAGRAPHS, PAGE_NARRATIVES } from '@/lib/pageNarratives';

export const metadata: Metadata = {
  title: 'Mutation Database',
  description: 'Explore mutation paths and requirements for each crop.',
  keywords: ['Garden Horizons mutation guide', 'Bamboo mutation guide', 'How to get Dawn Fruit'],
  alternates: {
    canonical: '/mutations'
  }
};

export default function MutationsPage() {
  const mutationIntro = [
    '变异系统是 Garden Horizons 中最容易被误解的高收益机制。很多玩家看到“稀有结果”就默认应该优先追求，但没有先评估自己的执行条件。这会导致投入很高、完成度很低。',
    '正确做法是把变异看成“条件工程”。你需要同时满足作物基础、天气窗口、肥料选择、地块安排和收菜时机。只要其中一个环节偏离，结果就会大幅波动。',
    '在策略上建议先跑一条稳定收益线，再配一条变异实验线。这样即便实验线失败，你的现金流也不会中断，账号成长不会被单次波动拖垮。'
  ];

  return (
    <section className="panel prose">
      <h1>Mutation Lab</h1>
      <p className="muted">Select a mutation to see base crop, weather, fertilizer, and tactical notes.</p>
      <ul className="mutation-list">
        {MUTATIONS.map((m) => (
          <li key={m.slug}>
            <Link href={`/mutations/${m.slug}`}>{m.crop}</Link>
          </li>
        ))}
      </ul>
      <p>
        For better results, pair mutation planning with <Link href="/stock-history">stock frequency analysis</Link>{' '}
        and then validate expected return in the <Link href="/calculator">ROI calculator</Link>.
      </p>
      <LongformBlock title="变异系统全局策略解析" paragraphs={[...mutationIntro, ...COMMON_EEAT_PARAGRAPHS, ...PAGE_NARRATIVES.stock.paragraphs]} />
    </section>
  );
}
