import type { Metadata } from "next";
import { DossierCard } from "@/components/DossierCard";
import { EmptyState } from "@/components/EmptyState";
import { SectionTitle } from "@/components/SectionTitle";
import { getPublishedDossiers } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Dossiers",
  description: "Dossiers thématiques de La Traverse.",
  path: "/dossiers"
});

export default function DossiersPage() {
  const dossiers = getPublishedDossiers();

  return (
    <section className="bg-paper px-5 py-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Dossiers" title="Questions longues et séries thématiques" description="Les dossiers rassembleront les analyses publiées autour d’un même thème." />
        <div className="mt-10">
          {dossiers.length > 0 ? (
            <div className="grid gap-5 md:grid-cols-3">
              {dossiers.map((dossier) => (
                <DossierCard dossier={dossier} key={dossier.slug} />
              ))}
            </div>
          ) : (
            <EmptyState title="Les dossiers thématiques seront publiés progressivement." description="Aucun dossier public n’est encore disponible." />
          )}
        </div>
      </div>
    </section>
  );
}
