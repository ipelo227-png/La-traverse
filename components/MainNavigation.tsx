import Link from "next/link";

export const navigationItems = [
  { label: "Articles", href: "/articles" },
  { label: "Rubriques", href: "/rubriques" },
  { label: "Dossiers", href: "/dossiers" },
  { label: "Newsletter", href: "/newsletter" },
  { label: "À propos", href: "/a-propos" }
];

export function MainNavigation() {
  return (
    <nav aria-label="Navigation principale" className="hidden items-center gap-6 text-sm font-semibold uppercase text-night lg:flex">
      {navigationItems.map((item) => (
        <Link key={item.href} className="focus-ring rounded-sm transition hover:text-wine" href={item.href}>
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
