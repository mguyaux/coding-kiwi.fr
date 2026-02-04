# coding-kiwi.fr

Socle technique du site Coding Kiwi, basé sur le modèle `modele/` (Angular standalone) et déployé via GitHub Pages.

## Démarrage local

- Prérequis: Node.js 20+, npm 10+
- Installer les dépendances:

```bash
npm ci
```

- Lancer le serveur de dev:

```bash
npm start
```

- Construire pour la prod:

```bash
npm run build
```

La sortie est générée dans `dist/coding-kiwi-fr`.

## Structure

- `angular.json`, `tsconfig*.json`, `package.json`: configuration Angular
- `src/` : code source de l’app (standalone components, router)
  - `app.component.ts`: shell (nav + footer, thème clair/sombre)
  - `app.routes.ts`: routes minimalistes (`/`, `/contact`)
  - `pages/`: composants de page `home` et `contact`
  - `styles.css`: styles globaux (reprise du thème du modèle)
  - `404.html`: nécessaire pour le routage SPA sur GitHub Pages
  - `favicon.svg`: icône temporaire "CK" (à remplacer par le logo officiel)
- `CNAME`: configuration domaine `coding-kiwi.fr`

## CI/CD — GitHub Pages

Le workflow `.github/workflows/deploy.yml`:
- s’exécute sur `push` sur la branche `main`
- installe Node LTS, `npm ci`, puis `npm run build`
- publie le dossier `dist/coding-kiwi-fr` vers GitHub Pages

Pré-requis côté dépôt GitHub:
- Activer GitHub Pages (Source: GitHub Actions)
- Enregistrer le domaine personnalisé `coding-kiwi.fr` et le DNS (A/AAAA vers GitHub Pages, CNAME `www` → username.github.io si nécessaire)

## À faire ensuite

- Remplacer l’icône/branding par le logo officiel Coding Kiwi
- Ajouter des pages supplémentaires (ex: Services, Références, À propos)
- Contenu SEO (title/description, Open Graph)
- Suivi analytics (optionnel)
