type LongformBlockProps = {
  title: string;
  paragraphs: string[];
};

export default function LongformBlock({ title, paragraphs }: LongformBlockProps) {
  return (
    <section className="panel prose longform">
      <h2>{title}</h2>
      {paragraphs.map((p, idx) => (
        <p key={`${idx}-${p.slice(0, 12)}`}>{p}</p>
      ))}
    </section>
  );
}
