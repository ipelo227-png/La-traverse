import { ArticleCard } from "@/components/ArticleCard";
import { EditorialSection } from "@/components/EditorialSection";
import { EmptyState } from "@/components/EmptyState";
import { FeaturedArticleSlot } from "@/components/FeaturedArticleSlot";
import { HeroSection } from "@/components/HeroSection";
import { NewsletterBox } from "@/components/NewsletterBox";
import { RubricGrid } from "@/components/RubricGrid";
import { SectionTitle } from "@/components/SectionTitle";
import { getFeaturedArticle, getPublishedArticles, getPublishedDossiers } from "@/lib/content";

const formats = [
  "Décryptage rapide",
  "Analyse longue",
  "Briefing hebdomadaire",
  "Dossier thématique",
  "Fiche concept",
  "Article empirique"
];

export default function HomePage() {
  const articles = getPublishedArticles();
  const featuredArticle = getFeaturedArticle();
  const dossiers = getPublishedDossiers();

  return (
    <>
      <HeroSection />
      <EditorialSection eyebrow="À la une" title="La future une du média" description="Un espace conçu pour accueillir les analyses importantes dès leur publication.">
        <FeaturedArticleSlot article={featuredArticle} />
      </EditorialSection>
      <EditorialSection eyebrow="Rubriques" title="Une architecture éditoriale claire" tone="white">
        <RubricGrid />
      </EditorialSection>
      <EditorialSection eyebrow="Dossiers" title="Dossiers thématiques à venir" description="Des parcours longs pour suivre une question dans la durée.">
        {dossiers.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-3">
            {dossiers.map((dossier) => (
              <div className="border border-line bg-white/60 p-6" key={dossier.slug}>
                <p className="text-xs font-bold uppercase text-wine">Dossier</p>
                <h3 className="mt-3 font-serif text-2xl text-night">{dossier.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{dossier.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <EmptyState title="Les dossiers thématiques seront publiés progressivement." description="Cette section accueillera les séries de fond sur les rapports de force internationaux, économiques et politiques." />
        )}
      </EditorialSection>
      <EditorialSection eyebrow="Briefing" title="Un rendez-vous hebdomadaire">
        <div className="grid gap-6 lg:grid-cols-[1fr_420px]">
          <div className="border border-line bg-white/60 p-6">
            <SectionTitle title="Relier les événements, les structures et les idées" description="Le briefing hebdomadaire rassemblera les signaux importants de la semaine: diplomatie, marchés, institutions, conflits, doctrines économiques et débats intellectuels." />
          </div>
          <NewsletterBox compact />
        </div>
      </EditorialSection>
      <EditorialSection eyebrow="Données & graphiques" title="Un espace empirique" tone="white">
        <EmptyState title="Les premiers graphiques commentés arriveront avec les publications." description="L’espace données permettra de contextualiser les analyses par des séries, indicateurs et repères chiffrés." />
      </EditorialSection>
      <section className="border-t border-line bg-night px-5 py-16 text-paper">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-bold uppercase text-paper/60">Pourquoi ce média ?</p>
            <h2 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">Sortir du flux pour comprendre les structures.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {formats.map((format) => (
              <div className="border border-paper/20 p-4" key={format}>
                <p className="font-serif text-xl">{format}</p>
                <p className="mt-2 text-sm leading-6 text-paper/70">Format prévu pour les futures publications du média.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <EditorialSection eyebrow="Dernières publications" title="Articles publiés">
        {articles.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-3">
            {articles.slice(0, 3).map((article) => (
              <ArticleCard article={article} key={article.slug} />
            ))}
          </div>
        ) : (
          <EmptyState title="Aucun article publié pour le moment." description="Le site est prêt à recevoir les premiers contenus réels via les fichiers MDX." action={{ label: "Voir les articles", href: "/articles" }} />
        )}
      </EditorialSection>
    </>
  );
}
