import type { Author } from "@/types/editorial";

export function AuthorBox({ author }: { author: Author }) {
  return (
    <aside className="border border-line bg-white/55 p-5">
      <p className="text-xs font-bold uppercase text-muted">Auteur</p>
      <p className="mt-2 font-serif text-2xl text-night">{author.name}</p>
      {author.bio ? <p className="mt-3 text-sm leading-6 text-muted">{author.bio}</p> : null}
    </aside>
  );
}
