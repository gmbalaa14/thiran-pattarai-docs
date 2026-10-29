<p align="center"><strong>Thiran Pattarai docs</strong></p>

Documentation site for [Thiran Pattarai](https://github.com/gmbalaa14/thiran-pattarai), a Claude Code plugin marketplace
of hand-forged skills.

**Live site:** https://gmbalaa14.github.io/thiran-pattarai-docs/

[![Deploy](https://github.com/gmbalaa14/thiran-pattarai-docs/actions/workflows/deploy.yml/badge.svg)](https://github.com/gmbalaa14/thiran-pattarai-docs/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## How it fits together

This repo holds only the website. The plugins live in the marketplace repo,
[`gmbalaa14/thiran-pattarai`](https://github.com/gmbalaa14/thiran-pattarai), so adding the marketplace in Claude Code
does not download the site.

At build time the site reads the marketplace repo's `.claude-plugin/marketplace.json` and each skill's `SKILL.md`
(and optional `rules.json`) to generate the plugin and skill pages. Adding a plugin or skill there needs no change here.

```
src/pages/        hand-written pages (getting-started, contributing, code-of-conduct) and page templates
src/data/         nav.ts (sidebar), skill-docs.ts (richer skill pages), registry.ts (reads the marketplace repo), site.ts
src/layouts/      page layouts
src/components/   shared components
src/styles/       global and docs CSS (light and dark)
public/           logos, favicon, social preview
scripts/          fetch-marketplace.mjs (local development helper)
```

## Develop

Requires Node 22.

```bash
npm ci
npm run marketplace     # clones the marketplace repo into ./marketplace (run again to update it)
npm run dev             # http://localhost:4321/thiran-pattarai-docs/
```

Already have the marketplace repo cloned? Point to it instead: `MARKETPLACE_DIR=../thiran-pattarai npm run dev`.

```bash
npm run build           # production build into dist/
npm run preview         # serve the production build
```

## Deploy

Deployed to GitHub Pages (Settings → Pages → Source: **GitHub Actions**) by `.github/workflows/deploy.yml`.
It runs on:

- a push to `main` in this repo,
- a `marketplace-updated` dispatch sent by the marketplace repo when its `plugins/` or `.claude-plugin/` change on `main`,
- a manual run from the Actions tab.

The marketplace repo sends the dispatch with a token stored there as the secret `DOCS_DISPATCH_TOKEN`
(fine-grained, Contents read and write on this repo only).

## Issues and contributing

Issues are turned off here. Report anything about the site or the skills in the marketplace repo:
[open an issue](https://github.com/gmbalaa14/thiran-pattarai/issues/new/choose). Pull requests are welcome here;
see [CONTRIBUTING.md](CONTRIBUTING.md). Everyone taking part is expected to follow the
[Code of Conduct](CODE_OF_CONDUCT.md).

## License

[MIT](LICENSE) © 2026 Balagurunathan Marimuthu
