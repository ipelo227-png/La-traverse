import { Search } from "lucide-react";

export function SearchBar({ defaultValue = "" }: { defaultValue?: string }) {
  return (
    <form action="/articles" className="flex flex-col gap-3 border border-line bg-white/60 p-3 sm:flex-row">
      <label className="sr-only" htmlFor="q">
        Rechercher
      </label>
      <div className="flex min-h-12 flex-1 items-center gap-3 border border-line bg-paper px-4">
        <Search aria-hidden className="text-muted" size={18} />
        <input className="focus-ring w-full bg-transparent text-sm text-ink placeholder:text-muted" defaultValue={defaultValue} id="q" name="q" placeholder="Titre, tag ou résumé" type="search" />
      </div>
      <button className="focus-ring min-h-12 bg-night px-5 text-sm font-semibold text-paper transition hover:bg-wine" type="submit">
        Rechercher
      </button>
    </form>
  );
}
