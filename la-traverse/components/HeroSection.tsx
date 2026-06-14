import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site.config";

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden border-b border-line bg-night text-paper">
      <Image
        alt="Paysage éditorial original du Léman, de Genève et des Alpes au crépuscule"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        fill
        priority
        sizes="100vw"
        src="/geneva-lake-hero.png"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(7,20,63,0.88)_0%,rgba(7,20,63,0.68)_42%,rgba(7,20,63,0.18)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-[linear-gradient(0deg,rgba(7,20,63,0.76),rgba(7,20,63,0))]" />
      <div className="mx-auto flex min-h-[70vh] max-w-6xl items-end px-5 py-14 md:min-h-[76vh] md:py-20">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase text-ochre">Genève | Léman | Mondes contemporains</p>
          <h1 className="mt-5 font-serif text-5xl leading-[0.94] text-paper md:text-7xl">{siteConfig.name}</h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-paper md:text-2xl">{siteConfig.promise}</p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-paper/78">
            Journal d&rsquo;analyse critique, de culture et de diplomatie. Depuis Genève, suivre les rapports de force, les institutions, les récits et les formes sensibles du présent.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="focus-ring bg-paper px-5 py-3 text-sm font-semibold text-night transition hover:bg-ochre" href="/newsletter">
              Recevoir le briefing
            </Link>
            <Link className="focus-ring border border-paper/70 px-5 py-3 text-sm font-semibold text-paper transition hover:border-ochre hover:text-ochre" href="/rubriques">
              Explorer les rubriques
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
