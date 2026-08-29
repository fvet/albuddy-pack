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
| `.github/workflows/release.yml` | Publishes to the Marketplace on a `v*` tag. |

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

1. Move everything under `## Unreleased` in `CHANGELOG.md` to a new
   `## x.y.z - YYYY-MM-DD` section; leave a fresh empty `## Unreleased`.
2. Bump and tag in one step:
   ```bash
   npm version <patch|minor|major>   # edits package.json, commits, tags vX.Y.Z
   ```
3. Push with the tag:
   ```bash
   git push --follow-tags
   ```
4. The **Release** workflow then:
   - asserts the tag matches `package.json` (`vX.Y.Z` -> `X.Y.Z`),
   - `vsce package` -> `albuddy-pack-vX.Y.Z.vsix`,
   - `vsce publish` to the Marketplace using `VSCE_PAT`,
   - creates a GitHub Release with generated notes and the `.vsix` attached.
5. Confirm:
   <https://marketplace.visualstudio.com/items?itemName=FredericVercaemst.albuddy-pack>

### Dry run (no publish)

**Actions -> Release -> Run workflow**, tick **dry-run**. It packages and
uploads the `.vsix` artifact, and skips `vsce publish` and the GitHub Release.

### Manual publish (fallback)

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
