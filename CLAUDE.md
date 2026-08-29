# CLAUDE.md

## What this is

A VS Code **Extension Pack** (`FredericVercaemst.albuddy-pack`, "AL Buddy
Pack") that bundles the official AL Language extension and curates a menu of
recommended AL / Business Central companions. Sibling to AL Buddy
(`FredericVercaemst.albuddy`) and BC Buddy; it borrows AL Buddy's icon build
and brand construction.

There is **no source code**. The deliverable is `package.json` (`extensionPack`)
plus the docs. Nothing compiles; nothing is tested.

## Language

All work is in English: docs, comments, commit messages, build-script output.

## Conventions

- **The pack is `package.json` `extensionPack`.** Today it holds only
  `ms-dynamics-smb.al`. Everything else lives in `README.md` as an opt-in menu,
  grouped by tier, sourced from `cursor-extensions.md`.
- **Every change to what the pack installs, or to the recommended list, gets a
  `CHANGELOG.md` entry** under `## Unreleased`, in the same commit, written for
  users. CI / tooling work does not.
- **`README.md` is for users** (what installs, the recommended menu);
  **`DEVELOPMENT.md` is for maintainers** (package, publish, release, icon).
- **`backlog.md`** holds unsized ideas. Move an item out when work starts.
- Adding an extension to the pack: add its ID to `extensionPack`, remove it
  from the "also recommended" table in `README.md`, add a `CHANGELOG.md` entry.
- **Icon**: edit `icons/logo.svg`, then `npm run build-icons`, then commit the
  regenerated PNGs. `package.json` ships `icons/icon128.png`. The mark is
  shared with AL Buddy for now.
- **Versioning**: the Marketplace version follows the Git `v*` tag;
  `release.yml` fails if the tag and `package.json` disagree. Release steps are
  in `DEVELOPMENT.md`.

## Checks before a commit

`npx --yes @vscode/vsce package` must succeed - the same gate CI runs. There is
no lint / type-check / test step.
