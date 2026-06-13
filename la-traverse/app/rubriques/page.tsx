import type { Metadata } from "next";
import { RubricGrid } from "@/components/RubricGrid";
import { SectionTitle } from "@/components/SectionTitle";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Rubriques",
  description: "La hiérarchie éditoriale de La Traverse.",
  path: "/rubriques"
});

export default function RubricsPage() {
  return (
    <section className="bg-paper px-5 py-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Rubriques" title="Hiérarchie éditoriale" description="Chaque rubrique pourra accueillir des analyses, dossiers, fiches conceptuelles et données commentées depuis une perspective critique, indépendante et documentée." />
        <div className="mt-10">
          <RubricGrid />
        </div>
      </div>
    </section>
  );
}
