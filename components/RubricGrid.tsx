import Link from "next/link";
import { siteConfig } from "@/config/site.config";

export function RubricGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {siteConfig.rubrics.map((rubric) => (
        <Link className="focus-ring group border border-line bg-white/60 p-5 transition hover:border-night" href={`/rubriques/${rubric.slug}`} key={rubric.slug}>
          <p className="text-xs font-bold uppercase text-wine">Rubrique</p>
          <h3 className="mt-3 font-serif text-2xl text-night group-hover:text-wine">{rubric.title}</h3>
          <p className="mt-3 text-sm leading-6 text-muted">{rubric.description}</p>
        </Link>
      ))}
    </div>
  );
}
