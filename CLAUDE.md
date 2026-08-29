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

- **`cursor-extensions.md` is the source of truth** for the curation. It is
  grouped into tiers: MUST-AL, MUST-DEV, COULD-AL, COULD-DEV, OPTIONAL.
- **`package.json` `extensionPack` mirrors that file**: same tier order, same
  order within each tier. Blank lines in the array mark the tier boundaries -
  keep them (they are valid JSON whitespace).
- **`README.md` mirrors it too**, as labelled tables (AL essential, editor
  essential, AL extras, editor extras, optional).
- To add / remove / reorder an extension: edit `cursor-extensions.md` first,
  then mirror the change into `package.json` `extensionPack` and the
  `README.md` tables, plus a `CHANGELOG.md` entry under `## Unreleased` written
  for users - all in one commit. CI / tooling work does not get a changelog
  entry.
- **`backlog.md`** holds unsized ideas. Move an item out when work starts.
- **Icon**: edit `icons/logo.svg`, then `npm run build-icons`, then commit the
  regenerated PNGs. `package.json` ships `icons/icon128.png`. The mark is
  shared with AL Buddy for now.
- **Versioning**: the Marketplace version follows the Git `v*` tag;
  `release.yml` fails if the tag and `package.json` disagree. Release steps are
  in `DEVELOPMENT.md`.

## Checks before a commit

`npx --yes @vscode/vsce package` must succeed - the same gate CI runs. There is
no lint / type-check / test step.
