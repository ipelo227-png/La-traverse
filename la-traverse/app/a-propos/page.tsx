import type { Metadata } from "next";
import { SectionTitle } from "@/components/SectionTitle";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "À propos",
  description: "Présentation du projet La Traverse.",
  path: "/a-propos"
});

export default function AboutPage() {
  return (
    <section className="bg-paper px-5 py-12 md:py-16">
      <div className="mx-auto max-w-4xl">
        <SectionTitle eyebrow="À propos" title="Une revue d’analyse critique et culturelle" description="La Traverse est conçue comme une plateforme éditoriale basée autour de Genève, pour analyser l’actualité mondiale, l’économie politique, les institutions et les formes culturelles du présent." />
        <div className="editorial-prose mt-10">
          <p>
            Le projet vise à relier les événements récents aux structures plus profondes qui les rendent intelligibles: rapports de puissance, économie mondiale, organisations internationales, transformations productives, tensions sociales, idéologies, cultures et crise écologique.
          </p>
          <p>
            Sa ligne s&rsquo;inscrit dans la tradition des revues d&rsquo;intervention intellectuelle: exigence théorique, regard diplomatique, attention aux lieux, aux textes, aux libertés publiques et refus des réflexes de camp.
          </p>
          <p>
            Cette première version pose les fondations: rubriques, dossiers, modèles d&rsquo;articles, newsletter et documentation. Elle attend désormais les premiers contenus réels pour devenir progressivement une revue d&rsquo;analyse, de culture et de débat.
          </p>
        </div>
      </div>
    </section>
  );
}
