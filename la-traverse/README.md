# La Traverse

MVP Next.js en français pour une revue critique de gauche non autoritaire, dans l'esprit des revues d'intervention intellectuelle comme Socialisme ou Barbarie, consacrée aux rapports de force internationaux, au capitalisme, aux luttes sociales et aux idées d'émancipation.

## Lancer le projet

```bash
npm install
npm run dev
```

Puis ouvrir `http://localhost:3000`.

Pour vérifier la compilation:

```bash
npm run build
```

Pour déployer sur Vercel, importer ce dossier comme projet Next.js depuis GitHub. Le fichier `vercel.json` est déjà présent. Définir `NEXT_PUBLIC_SITE_URL` avec l'URL publique du site.

## Structure

- `app/`: routes App Router, pages publiques, sitemap, robots, RSS et API newsletter.
- `components/`: composants éditoriaux réutilisables.
- `config/site.config.ts`: nom, promesse, email, rubriques, tags et SEO global.
- `content/articles/`: articles Markdown ou MDX.
- `content/dossiers/`: dossiers Markdown ou MDX.
- `lib/content.ts`: lecture des contenus et filtrage public.
- `types/editorial.ts`: types éditoriaux.

## Publier un article

1. Dupliquer `content/articles/_template.mdx`.
2. Renommer le fichier avec le futur slug, par exemple `dette-dollar-souverainete.mdx`.
3. Modifier le frontmatter.
4. Passer `status` de `draft` à `published`.

Exemple:

```mdx
---
title: "Dette, dollar et autonomie"
slug: "dette-dollar-souverainete"
excerpt: "Résumé court de l'analyse."
date: "2026-06-12"
updatedAt: "2026-06-12"
author: "Rédaction"
authorSlug: "redaction"
category: "macroeconomie"
tags: ["Dette", "Dollar", "Autonomie"]
format: "Analyse longue"
status: "published"
featured: true
readingTime: 9
coverImage: ""
relatedArticles: []
---

## Angle

Texte de l'article.
```

Les articles avec `status: draft` ne sont pas affichés dans les pages publiques, la recherche, le sitemap ou le RSS.

## Ajouter une rubrique

Modifier `rubrics` dans `config/site.config.ts`:

```ts
{
  title: "Nouvelle rubrique",
  slug: "nouvelle-rubrique",
  description: "Description courte.",
  color: "night"
}
```

Les pages `/rubriques` et `/rubriques/[slug]` sont générées à partir de cette configuration.

## Créer un dossier

1. Dupliquer `content/dossiers/_template.mdx`.
2. Renseigner `title`, `slug`, `description`, `createdAt`.
3. Ajouter dans `articles` les slugs d'articles publiés.
4. Passer `status` à `published`.

## Connecter la newsletter

La route `app/api/newsletter/route.ts` valide l'email puis renvoie un fallback local.

Pour connecter un service réel:

- Brevo ou Mailchimp: appeler leur API dans la route `POST`.
- Resend: envoyer l'adresse vers une audience ou une notification interne.
- Supabase: insérer l'email dans une table `newsletter_subscribers`.

Conserver la validation côté serveur et stocker les clés API dans `.env.local`.

## Prochaines étapes possibles

- Intégration CMS.
- Espace admin.
- Analytics.
- Newsletter réelle.
- Base de données.
- Système d'auteurs avancé.
- Commentaires.
- Espace abonné.
