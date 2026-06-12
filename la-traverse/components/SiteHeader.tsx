import Link from "next/link";
import { MainNavigation } from "@/components/MainNavigation";
import { MobileNavigation } from "@/components/MobileNavigation";
import { siteConfig } from "@/config/site.config";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link className="focus-ring flex items-center gap-3 rounded-sm" href="/">
          <span className="flex h-11 w-11 items-center justify-center bg-night text-sm font-bold text-paper">{siteConfig.shortName}</span>
          <span>
            <span className="block font-serif text-2xl leading-none text-night">{siteConfig.name}</span>
            <span className="hidden text-xs uppercase text-muted sm:block">Analyse internationale</span>
          </span>
        </Link>
        <MainNavigation />
        <div className="hidden items-center gap-3 lg:flex">
          <Link className="focus-ring border border-night px-4 py-2 text-sm font-semibold text-night transition hover:bg-night hover:text-paper" href="/contact">
            Contact
          </Link>
        </div>
        <MobileNavigation />
      </div>
    </header>
  );
}
