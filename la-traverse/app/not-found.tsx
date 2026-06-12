import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-paper px-5 py-20">
      <div className="mx-auto max-w-3xl border border-line bg-white/60 p-8">
        <p className="text-xs font-bold uppercase text-wine">404</p>
        <h1 className="mt-3 font-serif text-5xl text-night">Page introuvable</h1>
        <p className="mt-4 text-muted">Cette page n&rsquo;existe pas ou n&rsquo;est pas publiée.</p>
        <Link className="focus-ring mt-6 inline-flex bg-night px-5 py-3 text-sm font-semibold text-paper transition hover:bg-wine" href="/">
          Retour à l&rsquo;accueil
        </Link>
      </div>
    </section>
  );
}
