# Development & maintenance

Guide for anyone updating or releasing AL Buddy Pack. This is an **Extension
Pack**: no source, no build step, no tests. The deliverable is `package.json`
plus the docs.

## Layout

| Path | What it is |
| --- | --- |
| `package.json` | `extensionPack` - the extensions the pack installs. The whole product. |
| `README.md` | User-facing: the full install list as labelled tables, mirroring `extensionPack`. |
| `backlog.md` | Unsized ideas + an **Extensions to review** table of candidates not yet bundled. |
| `icons/logo.svg` | Brand mark (shared with AL Buddy). `build-icons.ps1` rasterises it. |
| `.github/workflows/ci.yml` | `vsce package` on every push and PR. |
| `.github/workflows/release.yml` | Manual dispatch: bump, date the changelog, tag, GitHub release, publish. |

## Prerequisites

- Node.js 22.x and npm - only to run `@vscode/vsce` through `npx`.
- For the icon only: Chrome or Edge, on Windows (PowerShell).

## Changing what the pack installs

1. Edit `extensionPack` in `package.json` - this array is the source of truth.
   Keep the by-purpose grouping and the blank line between groups.
2. Mirror the change into the `README.md` sections (same order, same grouping).
3. Add a `## Unreleased` entry to `CHANGELOG.md` in the same commit.
4. `npx --yes @vscode/vsce package` then `npx vsce ls` to eyeball the `.vsix`.

An extension that was considered but not taken goes in the **Extensions to
review** table in `backlog.md`, not the array.

## Publishing

Published to the **Visual Studio Marketplace** as
`FredericVercaemst.albuddy-pack`. The Marketplace version always equals the Git
tag.

Publisher and PAT setup are identical to AL Buddy - see that repo's
`DEVELOPMENT.md` if you need to recreate the `VSCE_PAT`. Store it as an Actions
secret on this repo:

```bash
gh secret set VSCE_PAT --repo fvet/albuddy-pack
```

### Cutting a release

Entries accumulate under `## Unreleased` in `CHANGELOG.md` as changes land,
written for users. The release itself is one manual run - it does the version
bump, the tag and the Marketplace push, so they cannot disagree.

1. **Actions -> Release -> Run workflow** (on `main`). Pick `bump`
   (`patch` / `minor` / `major`) or type an exact `version` to override it.
   Leave `publish` on `publish`.
2. The workflow then, in order:
   - works out the next version and writes it into `package.json`,
   - renames `## Unreleased` to `## X.Y.Z — YYYY-MM-DD`, opens a fresh empty
     `## Unreleased`, and keeps the `[start:released]` marker between them (an
     empty section becomes *"Maintenance release - nothing that changes what
     you see"*),
   - `vsce package` -> `albuddy-pack-X.Y.Z.vsix`, then checks the packaged
     `package.json` really declares `X.Y.Z`,
   - commits `package.json` + `CHANGELOG.md` as `Release vX.Y.Z`, tags
     `vX.Y.Z`, pushes both to `main` atomically,
   - creates the GitHub Release with that changelog section as the body and the
     `.vsix` attached,
   - `vsce publish` to the Marketplace using `VSCE_PAT`.
3. Confirm:
   <https://marketplace.visualstudio.com/items?itemName=FredericVercaemst.albuddy-pack>

The release commit is pushed straight to `main` with the default
`GITHUB_TOKEN`. If `main` is later protected against direct pushes, add a write
deploy key to the ruleset bypass list and check out with `ssh-key:` - this is
how BC Buddy's release works.

### Rehearsing

The `publish` input has two lighter settings:

- **`package-only`** - bump, tag, push, and publish the GitHub Release, but do
  not touch the Marketplace.
- **`dry-run`** - build and version-check the `.vsix` only; nothing is
  committed, tagged, or published. The `.vsix` is uploaded as a workflow
  artifact to inspect.

### Manual publish (fallback)

If Actions is unavailable, from a clean `main` with the version already set in
`package.json` and the changelog closed off by hand:

```bash
npx vsce login FredericVercaemst      # paste the PAT once
npx vsce publish                       # uses package.json version
```

## What ships in the .vsix

Only `package.json`, `README.md`, `CHANGELOG.md`, `LICENSE`,
`icons/icon128.png`. `.vscodeignore` controls this - update it if you add a
shipped asset.

## The icon

Shared with AL Buddy for now. Edit `icons/logo.svg`, then:

```bash
npm run build-icons
```

Commit the regenerated `icon128.png` / `icon256.png` alongside the `logo.svg`
change.

## Open VSX (not enabled)

Marketplace only today. To also reach VSCodium / Cursor / Windsurf users, add an
`ovsx publish` step to `release.yml` with an `OVSX_PAT` secret from
<https://open-vsx.org>. Audit the recommended list first - several IDs are not
published to Open VSX.
