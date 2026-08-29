# CLAUDE.md

## What this is

A VS Code **Extension Pack** (`FredericVercaemst.albuddy-pack`, "AL Buddy
Pack") that installs a curated set of AL / Business Central extensions in one
step. Sibling to AL Buddy (`FredericVercaemst.albuddy`) and BC Buddy; it
borrows AL Buddy's icon build and brand construction.

There is **no source code**. The deliverable is `package.json` (`extensionPack`)
plus the docs. Nothing compiles; nothing is tested. Installing the pack installs
every extension in the array - VS Code extension packs have no opt-in step.

## Language

All work is in English: docs, comments, commit messages, build-script output.

## Conventions

- **`package.json` `extensionPack` is the source of truth** for what the pack
  installs. Entries are grouped by purpose - AL essentials, AL additional,
  editor essentials, editor additional, Git, AI - with a blank line between
  groups (valid JSON whitespace; keep it).
- **`README.md` mirrors the array**: one `##` section per group, in the same
  order, as `| Extension | Description |` tables. The linked extension name is
  the mirror anchor (its Marketplace URL carries the ID); the description is a
  short, verified summary of what the extension gives an AL/BC developer.
  `scripts/check-readme-sync.js` (`npm run check`) enforces the mirror - same
  IDs (read from each link's `itemName=`), same order, same group sizes - and
  CI fails on drift.
- To add / remove / reorder an extension: edit `package.json` `extensionPack`,
  mirror it into the `README.md` sections, run `npm run check`, and add a
  `CHANGELOG.md` entry under `## Unreleased` written for users - all in one
  commit. CI / tooling work does not get a changelog entry.
- **`backlog.md`** holds unsized ideas plus an **Extensions to review** table -
  candidates considered but not (yet) in the pack. Move a row into
  `extensionPack` + `README.md` when it makes the cut. Move an idea out when
  work starts.
- **Icon**: edit `icons/logo.svg`, then `npm run build-icons`, then commit the
  regenerated PNGs. `package.json` ships `icons/icon128.png`. The mark is
  shared with AL Buddy for now.
- **Releasing**: the `Release` workflow is dispatched by hand. It bumps
  `package.json`, dates the `## Unreleased` changelog section (keeping the
  `[start:released]` marker), tags `vX.Y.Z`, cuts the GitHub release from that
  section, and runs `vsce publish`. Never bump the version or tag by hand.
  Steps are in `DEVELOPMENT.md`.

## Checks before a commit

`npm run check` (README / `extensionPack` mirror) and
`npx --yes @vscode/vsce package` must both succeed - the same gates CI runs.
There is no lint / type-check / test step.
