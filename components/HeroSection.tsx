import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site.config";

export function HeroSection() {
  return (
    <section className="border-b border-line bg-paper px-5 py-10 md:py-14">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div>
          <p className="text-xs font-bold uppercase text-wine">Revue d’analyse critique</p>
          <h1 className="mt-5 font-serif text-5xl leading-[0.95] text-night md:text-7xl">{siteConfig.name}</h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-ink">{siteConfig.promise}</p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
            Actualité internationale, économie politique, conflictualités sociales et théorie critique pour éclairer les crises du présent, les formes de domination et les marges d&rsquo;action collective.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="focus-ring bg-night px-5 py-3 text-sm font-semibold text-paper transition hover:bg-wine" href="/newsletter">
              Recevoir le briefing
            </Link>
            <Link className="focus-ring border border-night px-5 py-3 text-sm font-semibold text-night transition hover:bg-night hover:text-paper" href="/rubriques">
              Explorer les rubriques
            </Link>
          </div>
        </div>
        <div className="border border-line bg-white/55 p-3 shadow-editorial">
          <Image alt="Carte éditoriale montrant les axes international, économie et données" className="h-auto w-full" height={720} priority src="/editorial-map.svg" unoptimized width={900} />
        </div>
      </div>
    </section>
  );
}
