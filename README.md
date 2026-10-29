# Thiran Pattarai docs

Documentation site for the [Thiran Pattarai](https://github.com/gmbalaa14/thiran-pattarai) Claude Code plugin marketplace.
Live at https://gmbalaa14.github.io/thiran-pattarai-docs/

The site is built with [Astro](https://astro.build/). Plugin and skill pages are generated from the manifests and
`SKILL.md` files in the marketplace repo, which this repo checks out at build time. No plugin content is stored here.

## Develop

```bash
npm ci
npm run marketplace     # clones the marketplace repo into ./marketplace (run again to update it)
npm run dev
```

Set `MARKETPLACE_DIR` to point at an existing local clone instead.

## Deploy

GitHub Pages, source **GitHub Actions**. `.github/workflows/deploy.yml` runs on:

- a push to `main` in this repo,
- a `marketplace-updated` dispatch from the marketplace repo (plugins or manifests changed),
- manual run.

## Where things live

- `src/pages/` hand-written pages (`contributing.md` and `code-of-conduct.md` mirror the marketplace repo's
  `CONTRIBUTING.md` and `CODE_OF_CONDUCT.md`; change them together)
- `src/data/nav.ts` sidebar entries for hand-written pages
- `src/data/skill-docs.ts` optional richer page content per skill
