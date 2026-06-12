import Link from "next/link";
import type { Dossier } from "@/types/editorial";

export function DossierCard({ dossier }: { dossier: Dossier }) {
  return (
    <article className="border border-line bg-white/60 p-6">
      <p className="text-xs font-bold uppercase text-wine">Dossier</p>
      <h3 className="mt-3 font-serif text-2xl leading-tight text-night">
        <Link className="focus-ring rounded-sm" href={`/dossiers/${dossier.slug}`}>
          {dossier.title}
        </Link>
      </h3>
      <p className="mt-3 text-sm leading-6 text-muted">{dossier.description}</p>
      <p className="mt-5 text-xs uppercase text-muted">{dossier.articles.length} article lié</p>
    </article>
  );
}
