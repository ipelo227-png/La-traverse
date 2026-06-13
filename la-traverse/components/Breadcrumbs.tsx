import Link from "next/link";

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Fil d’Ariane" className="text-xs uppercase text-muted">
      <ol className="flex flex-wrap gap-2">
        <li>
          <Link className="focus-ring rounded-sm hover:text-wine" href="/">
            Accueil
          </Link>
        </li>
        {items.map((item) => (
          <li key={`${item.label}-${item.href ?? "current"}`} className="flex gap-2">
            <span>/</span>
            {item.href ? (
              <Link className="focus-ring rounded-sm hover:text-wine" href={item.href}>
                {item.label}
              </Link>
            ) : (
              <span>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
