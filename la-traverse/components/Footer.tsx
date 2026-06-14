import Link from "next/link";
import { siteConfig } from "@/config/site.config";

export function Footer() {
  return (
    <footer className="border-t border-line bg-night text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-[1.2fr_2fr]">
        <div>
          <p className="font-serif text-3xl">{siteConfig.name}</p>
          <p className="mt-4 max-w-md text-sm leading-6 text-paper/75">{siteConfig.promise}</p>
          <p className="mt-3 text-xs uppercase text-ochre">Genève | Léman | International | Culture</p>
          <p className="mt-6 text-sm text-paper/65">{siteConfig.contactEmail}</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          <FooterColumn
            title="Rubriques"
            links={siteConfig.rubrics.slice(1, 6).map((rubric) => ({
              label: rubric.title,
              href: `/rubriques/${rubric.slug}`
            }))}
          />
          <FooterColumn
            title="Média"
            links={[
              { label: "Articles", href: "/articles" },
              { label: "Dossiers", href: "/dossiers" },
              { label: "Newsletter", href: "/newsletter" },
              { label: "À propos", href: "/a-propos" }
            ]}
          />
          <FooterColumn
            title="Informations"
            links={[
              { label: "Contact", href: "/contact" },
              { label: "Mentions légales", href: "/mentions-legales" },
              { label: "Flux RSS", href: "/rss.xml" }
            ]}
          />
        </div>
      </div>
      <div className="border-t border-paper/15 px-5 py-4 text-center text-xs text-paper/55">
        © {new Date().getFullYear()} {siteConfig.name}. Base éditoriale prête à publier.
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <p className="text-xs font-bold uppercase text-paper/60">{title}</p>
      <ul className="mt-4 space-y-3 text-sm">
        {links.map((link) => (
          <li key={link.href}>
            <Link className="focus-ring rounded-sm text-paper/80 transition hover:text-paper" href={link.href}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
