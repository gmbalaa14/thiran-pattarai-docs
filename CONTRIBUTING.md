# Contributing to the Thiran Pattarai docs

Thank you for helping improve the docs! This repo holds the website only. To add or change a skill or plugin, see
[CONTRIBUTING.md in the marketplace repo](https://github.com/gmbalaa14/thiran-pattarai/blob/main/CONTRIBUTING.md).

Everyone taking part is expected to follow the [Code of Conduct](CODE_OF_CONDUCT.md).

## Table of Contents

- [Where to report problems](#where-to-report-problems)
- [Which repo does my change belong in?](#which-repo-does-my-change-belong-in)
- [Run the site locally](#run-the-site-locally)
- [Common changes](#common-changes)
- [Validate your change](#validate-your-change)
- [Submitting a PR](#submitting-a-pr)

---

## Where to report problems

Issues are disabled in this repo. Please [open an issue in the marketplace repo](https://github.com/gmbalaa14/thiran-pattarai/issues/new/choose)
and pick the docs template. If the fix belongs here, open a pull request in this repo and reference the issue
(`Fixes gmbalaa14/thiran-pattarai#123`).

## Which repo does my change belong in?

| You want to change | Where |
|---|---|
| A skill's description, requirements, version or rules table | Marketplace repo (`SKILL.md`, `rules.json`): the skill pages are generated from them |
| The extra content on a skill page (when to use, how it works, example) | This repo: `src/data/skill-docs.ts` |
| A hand-written page, the sidebar, layout, styling, logos | This repo |
| `CONTRIBUTING.md` or `CODE_OF_CONDUCT.md` | Both: the marketplace repo and the matching page in `src/pages/` here, in two pull requests |

## Run the site locally

Requires Node 22.

```bash
npm ci
npm run marketplace     # clones the marketplace repo into ./marketplace
npm run dev
```

To use your own clone of the marketplace repo (for example to preview a skill change before it is merged):
`MARKETPLACE_DIR=../thiran-pattarai npm run dev`.

## Common changes

**Edit a hand-written page.** Edit the file in `src/pages/`. Root-relative links inside Markdown (such as `/contributing/`)
get the site base path added automatically.

**Add a hand-written page.** Add the file under `src/pages/` and an entry for it in `src/data/nav.ts`.

**Give a skill a richer page.** Add an entry to `src/data/skill-docs.ts` with the same `plugin` and `slug` as the skill.
Skills without an entry still get a page built from their `SKILL.md`.

**Keep the contributor guides in step.** `src/pages/contributing.md` and `src/pages/code-of-conduct.md` mirror the files
in the marketplace repo. If you change one side, open a matching pull request in the other repo.

## Validate your change

```bash
npm run build
```

It must finish without errors. CI does not build pull requests from forks automatically, so run it before you submit.

## Submitting a PR

1. Fork the repository.
2. Create a branch: `git checkout -b docs-<short-description>`.
3. Make your change, following the sections above.
4. Run `npm run build`.
5. Open a pull request against `main`. The pull request template fills in automatically; tick every item that applies
   and delete the ones that do not.

Use a clear title in the conventional style (`docs:`, `fix:`, `feat:`, `chore:`), for example `docs: clarify install steps`.
