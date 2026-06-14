import type { Metadata } from "next";
import { NewsletterBox } from "@/components/NewsletterBox";
import { SectionTitle } from "@/components/SectionTitle";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Newsletter",
  description: "Le briefing hebdomadaire de La Traverse.",
  path: "/newsletter"
});

const promises = [
  "Un briefing hebdomadaire depuis Genève sur les rapports de force internationaux.",
  "Des analyses longues pour sortir du commentaire immédiat et des réflexes de camp.",
  "Des notes culturelles pour relier livres, images, lieux et débats publics.",
  "Une sélection de lectures critiques, de cartes et de données commentées."
];

export default function NewsletterPage() {
  return (
    <section className="bg-paper px-5 py-12 md:py-16">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_420px]">
        <div>
          <SectionTitle eyebrow="Newsletter" title="Le briefing hebdomadaire" description="Relier actualité internationale, économie politique, institutions genevoises, culture et théorie critique dans un format régulier, dense et lisible." />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {promises.map((promise) => (
              <div className="border border-line bg-white/60 p-5" key={promise}>
                <p className="font-serif text-xl leading-snug text-night">{promise}</p>
              </div>
            ))}
          </div>
        </div>
        <NewsletterBox />
      </div>
    </section>
  );
}
