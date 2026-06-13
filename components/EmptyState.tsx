import Link from "next/link";

export function EmptyState({ title, description, action }: { title: string; description: string; action?: { label: string; href: string } }) {
  return (
    <div className="border border-dashed border-line bg-white/45 p-8">
      <p className="font-serif text-2xl text-night">{title}</p>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">{description}</p>
      {action ? (
        <Link className="focus-ring mt-6 inline-flex border border-night px-4 py-2 text-sm font-semibold text-night transition hover:bg-night hover:text-paper" href={action.href}>
          {action.label}
        </Link>
      ) : null}
    </div>
  );
}
