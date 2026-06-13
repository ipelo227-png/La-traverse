import type { Metadata } from "next";
import Link from "next/link";
import { SectionTitle } from "@/components/SectionTitle";
import { siteConfig } from "@/config/site.config";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description: "Contacter La Traverse.",
  path: "/contact"
});

export default function ContactPage() {
  const mailto = `mailto:${siteConfig.contactEmail}?subject=Contact%20La%20Traverse`;

  return (
    <section className="bg-paper px-5 py-12 md:py-16">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_420px]">
        <div>
          <SectionTitle eyebrow="Contact" title="Écrire à la rédaction" description="Proposition d’article, collaboration, remarque éditoriale ou demande professionnelle." />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {["Proposition d’article", "Collaboration", "Remarque éditoriale", "Demande professionnelle"].map((item) => (
              <div className="border border-line bg-white/60 p-5" key={item}>
                <p className="font-serif text-xl text-night">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <aside className="border border-line bg-white/60 p-6">
          <p className="text-xs font-bold uppercase text-wine">Adresse configurable</p>
          <p className="mt-4 font-serif text-2xl text-night">{siteConfig.contactEmail}</p>
          <Link className="focus-ring mt-6 inline-flex bg-night px-5 py-3 text-sm font-semibold text-paper transition hover:bg-wine" href={mailto}>
            Envoyer un email
          </Link>
        </aside>
      </div>
    </section>
  );
}
