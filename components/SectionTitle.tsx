export function SectionTitle({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? <p className="text-xs font-bold uppercase text-wine">{eyebrow}</p> : null}
      <h2 className="mt-2 font-serif text-3xl leading-tight text-night md:text-5xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-muted md:text-lg">{description}</p> : null}
    </div>
  );
}
