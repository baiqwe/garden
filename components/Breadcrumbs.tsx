import Link from 'next/link';

export type Crumb = {
  name: string;
  href?: string;
};

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs">
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <span key={`${item.name}-${idx}`}>
            {item.href && !isLast ? <Link href={item.href}>{item.name}</Link> : <span>{item.name}</span>}
            {!isLast && <span className="sep"> / </span>}
          </span>
        );
      })}
    </nav>
  );
}
