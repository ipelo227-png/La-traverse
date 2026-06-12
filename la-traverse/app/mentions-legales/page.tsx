import type { Metadata } from "next";
import { SectionTitle } from "@/components/SectionTitle";
import { siteConfig } from "@/config/site.config";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Mentions légales et confidentialité",
  description: "Informations légales de La Traverse.",
  path: "/mentions-legales"
});

export default function LegalPage() {
  return (
    <section className="bg-paper px-5 py-12 md:py-16">
      <div className="mx-auto max-w-4xl">
        <SectionTitle eyebrow="Informations" title="Mentions légales et confidentialité" description="Cette page contient des textes placeholders à remplacer avant publication officielle." />
        <div className="editorial-prose mt-10">
          <h2>Éditeur</h2>
          <p>{siteConfig.name} est un projet éditorial indépendant en cours de constitution. Les informations légales définitives devront être complétées avant mise en ligne publique.</p>
          <h2>Contact</h2>
          <p>Adresse de contact: {siteConfig.contactEmail}</p>
          <h2>Données personnelles</h2>
          <p>Le formulaire newsletter est préparé techniquement. Aucune intégration externe réelle n&rsquo;est activée dans cette version MVP.</p>
        </div>
      </div>
    </section>
  );
}
