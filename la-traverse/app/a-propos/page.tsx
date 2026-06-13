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
        <SectionTitle eyebrow="À propos" title="Une revue d’analyse critique" description="La Traverse est conçue comme une plateforme éditoriale pour analyser l’actualité mondiale, l’économie politique et les conflits sociaux depuis un point de vue indépendant, exigeant et documenté." />
        <div className="editorial-prose mt-10">
          <p>
            Le projet vise à relier les événements récents aux structures plus profondes qui les rendent intelligibles: rapports de puissance, économie mondiale, institutions internationales, conflits, transformations productives, tensions sociales, idéologies et crise écologique.
          </p>
          <p>
            Sa ligne s&rsquo;inscrit dans la tradition des revues d&rsquo;intervention intellectuelle: exigence théorique, critique des bureaucraties, attention aux libertés publiques et refus des réflexes de camp.
          </p>
          <p>
            Cette première version pose les fondations: rubriques, dossiers, modèles d&rsquo;articles, newsletter et documentation. Elle attend désormais les premiers contenus réels pour devenir progressivement une revue d&rsquo;analyse et de débat.
          </p>
        </div>
      </div>
    </section>
  );
}
