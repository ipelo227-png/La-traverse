# Déploiement gratuit de La Traverse

## Recommandation

Pour ce projet Next.js, l'option la plus simple est Vercel Hobby:

- compatible avec Next.js sans configuration spéciale;
- URL gratuite en `*.vercel.app`;
- déploiement automatique à chaque push GitHub;
- suffisant pour un site éditorial personnel ou associatif au démarrage.

Attention: le plan Hobby de Vercel est prévu pour un usage personnel et non commercial. Si le site devient un média professionnel, monétisé ou porté par une structure, il faudra relire les conditions ou passer sur une offre adaptée.

## Étapes Vercel

Tu n'as rien à télécharger côté Vercel si tu passes par le site web. Le CLI Vercel est optionnel.

Le projet contient déjà:

- `vercel.json`, pour déclarer Next.js, l'installation et la commande de build;
- `.env.example`, pour montrer la variable d'URL publique;
- `package.json`, avec une version Node compatible.

### Méthode web, recommandée

1. Créer un dépôt GitHub, par exemple `la-traverse`.
2. Envoyer ce dossier dans le dépôt.
3. Aller sur `https://vercel.com`.
4. Se connecter avec GitHub.
5. Cliquer sur `Add New Project`.
6. Importer le dépôt `la-traverse`.
7. Régler `Root Directory` sur:

```text
la-traverse
```

8. Laisser Vercel détecter Next.js.
9. Dans `Environment Variables`, ajouter:

```text
NEXT_PUBLIC_SITE_URL=https://ton-url.vercel.app
```

10. Cliquer sur `Deploy`.

### Vérification locale, optionnelle

Si Node.js est installé sur la machine, tu peux vérifier avant l'envoi:

```bash
npm install
npm run build
```

### Méthode CLI, optionnelle

Cette méthode demande d'installer l'outil Vercel:

```bash
npm i -g vercel
vercel
```

Elle n'est pas nécessaire si tu utilises GitHub + le site Vercel.

## Alternatives gratuites

### Netlify

Bon second choix. Netlify supporte Next.js avec App Router, route handlers/API routes et déploiement Git. Son plan Free peut suffire au démarrage.

### Cloudflare Pages / Workers

Très généreux pour le statique. Pour le Next.js complet avec route API, il faut suivre le guide Next.js Workers ou passer le site en export statique.

### GitHub Pages

Très simple et gratuit, mais seulement pour un site statique. Le projet actuel devrait être converti en export statique, et la route API newsletter ne fonctionnerait plus.

### Render

Possible aussi. Les sites statiques sont gratuits et les web services ont une option gratuite, mais c'est moins naturel pour un projet Next.js éditorial que Vercel ou Netlify.

## Option zéro serveur

Si tu veux ne jamais gérer de serveur, garde le site en statique:

- articles en fichiers MDX;
- build automatique;
- hébergement sur Vercel, Netlify, Cloudflare Pages ou GitHub Pages;
- newsletter reliée à un service externe comme Brevo.

C'est la meilleure approche au début: pas de base de données, pas d'administration serveur, presque aucun coût.
