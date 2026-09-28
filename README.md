# AL Buddy Pack

[![CI](https://github.com/fvet/albuddy-pack/actions/workflows/ci.yml/badge.svg)](https://github.com/fvet/albuddy-pack/actions/workflows/ci.yml)
[![VS Marketplace](https://img.shields.io/badge/VS_Marketplace-AL_Buddy_Pack-blue?logo=visualstudiocode)](https://marketplace.visualstudio.com/items?itemName=FredericVercaemst.albuddy-pack)
[![License: MIT](https://img.shields.io/badge/License-MIT-informational.svg)](LICENSE)

A curated Extension Pack for **AL / Microsoft Dynamics 365 Business Central** development. 

Installing this pack installs **every extension listed below** in one step.
Don't want one of them? Uninstall it from the Extensions view - the pack won't
put it back.

Prefer to pick your own? You don't need the pack for that. Every extension
below links to its Marketplace page, so you can treat this as a reading list
and install just the ones you want, one by one.

The sections below mirror the grouping in `package.json` `extensionPack`.

## AL essentials

| Extension | Description |
| --- | --- |
| [AL Language](https://marketplace.visualstudio.com/items?itemName=ms-dynamics-smb.al) | Microsoft's official AL toolchain - syntax highlighting, IntelliSense, compiler, debugger, and publish to cloud or on-prem BC. Required for any AL work. |
| [AlCops](https://marketplace.visualstudio.com/items?itemName=arthurvdv.alcops) | Downloads and auto-updates the AlCops analyzer, adding an extra set of AL code-quality rules on top of the compiler's built-in analyzers. |
| [AZ AL Dev Tools / Code Outline](https://marketplace.visualstudio.com/items?itemName=andrzejzwierzchowski.al-code-outline) | Symbol tree and outline, object wizards and generators, and bulk sort/cleanup of fields, procedures, and variables. Also a dependency for other AL extensions. |
| [AL Code Actions](https://marketplace.visualstudio.com/items?itemName=davidfeldhoff.al-codeactions) | Quick-fix refactors: create missing procedures and handlers, extract code to a procedure, literal-to-label, option-to-enum, and analyzer-warning fixes. |
| [CRS AL Language Extension](https://marketplace.visualstudio.com/items?itemName=waldo.crs-al-language-extension) | Renames and reorganizes AL files to a naming standard on save, runs the current object with Ctrl+Shift+R, and adds a large AL snippet library. |
| [Object ID Ninja](https://marketplace.visualstudio.com/items?itemName=vjeko.vjeko-al-objid) | Suggests the next free object and field ID through IntelliSense with a team-wide zero-collision guarantee; Range Explorer shows ID usage per app and range. |
| [AL Pocket Tools](https://marketplace.visualstudio.com/items?itemName=teddyherryanto.al-pocket-tools) | Grab-bag of AL helpers: region and pragma viewers, app.json version bump, .alpackages cleanup, SetLoadFields insertion, and text-to-label conversion. |
| [XLIFF Sync](https://marketplace.visualstudio.com/items?itemName=rvanbekkum.xliff-sync) | Merges new units from the base XLIFF into every language file, flags missing translations, and validates placeholders and option members. |

## AL additional

| Extension | Description |
| --- | --- |
| [AL Prettier](https://marketplace.visualstudio.com/items?itemName=alexander-drogin.al-prettier-vscode) | Opinionated AL formatter (Prettier plugin) for consistent indentation, line length, and variable grouping, with format-on-save and folder/workspace runs. |
| [AL Navigator](https://marketplace.visualstudio.com/items?itemName=wbrakowski.al-navigator) | Generates variables and parameters with spec-compliant type sorting, jumps to var/key/dataitem sections by shortcut, and previews field translations on hover. |
| [NAB AL Tools](https://marketplace.visualstudio.com/items?itemName=nabsolutions.nab-al-tools) | End-to-end XLIFF translation workflow (refresh, match, CSV import/export, state) plus tooltip and external doc generation from XML comments and permission-set generation. |
| [AL Test Runner](https://marketplace.visualstudio.com/items?itemName=jamespearson.al-test-runner) | Runs and debugs AL tests from VS Code's Testing pane, highlights covered lines, and links each test to the methods it exercises. |

## Editor essentials

| Extension | Description |
| --- | --- |
| [Bracket Select](https://marketplace.visualstudio.com/items?itemName=chunsen.bracket-select) | Select everything inside the current brackets with Alt+A; press again to expand outward. Multi-cursor aware. |
| [Reload](https://marketplace.visualstudio.com/items?itemName=natqe.reload) | Adds a status-bar button to reload the VS Code window - quick recovery after installing or updating extensions. |
| [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) | Offline spell-check for code and comments with camelCase-aware splitting, lightbulb suggestions, and custom workspace dictionaries. |
| [Change Case](https://marketplace.visualstudio.com/items?itemName=wmaurer.change-case) | Convert the selection or word between camelCase, PascalCase, snake_case, CONSTANT_CASE, and ~15 more; works with multiple cursors. |
| [Partial Diff](https://marketplace.visualstudio.com/items?itemName=ryu1kn.partial-diff) | Diff two selections, two files, or a selection against the clipboard, with optional normalization rules to reduce noise. |
| [Insert GUID](https://marketplace.visualstudio.com/items?itemName=heaths.vscode-guid) | Inserts a GUID at the cursor or over the selection, with a choice of formats (plain, braced, C struct/macro) and lower/upper casing - handy for permission-set IDs and test data. |
| [PowerShell](https://marketplace.visualstudio.com/items?itemName=ms-vscode.powershell) | Full PowerShell editing and debugging with IntelliSense and script analyzer; useful for BcContainerHelper and AL-Go pipeline scripts. |
| [Format JSON](https://marketplace.visualstudio.com/items?itemName=clemenspeters.format-json) | One command sets a file to JSON and pretty-prints it, untitled buffers included - quick tidy-up for pasted app.json/launch.json fragments. |

## Editor additional

| Extension | Description |
| --- | --- |
| [vscode-icons](https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons) | File and folder icon theme that makes AL, JSON, and config files easy to spot in the Explorer. |
| [Sort Lines](https://marketplace.visualstudio.com/items?itemName=tyriar.sort-lines) | Sort selected lines ascending, descending, natural order, by length, or unique (dedupe while sorting). |
| [Increment Selection](https://marketplace.visualstudio.com/items?itemName=albymor.increment-selection) | Turn identical multi-cursor selections into an incrementing sequence; also decrement and reverse. Useful for numbering fields or enum values. |
| [Remove Empty Lines](https://marketplace.visualstudio.com/items?itemName=usernamehw.remove-empty-lines) | Remove blank lines or collapse runs to a set maximum, across a document or selection, optionally on save. |
| [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one) | Markdown editing with formatting shortcuts, automatic list renumbering, an auto-updating table of contents, and preview/HTML export for docs. |
| [Code Spell Checker - Dutch](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker-dutch) | Adds the Dutch (nl) dictionary to Code Spell Checker for Dutch captions, comments, and documentation. |

## Git

| Extension | Description |
| --- | --- |
| [Git History](https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory) | Visual git log with graph, file and line history, blame, and commit or branch comparison. |
| [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) | Inline blame and CodeLens authorship, an interactive Commit Graph, and side-bar views for branches, stashes, and contributors. |
| [GitHub Pull Requests](https://marketplace.visualstudio.com/items?itemName=github.vscode-pull-request-github) | Create, review, and merge GitHub PRs and browse issues in the editor; check out PR branches to test locally. |
| [GitHub Actions](https://marketplace.visualstudio.com/items?itemName=github.vscode-github-actions) | Track workflow runs, inspect failed-run logs, and get YAML validation and completion when editing workflows - pairs well with AL-Go for GitHub. |

## AI

| Extension | Description |
| --- | --- |
| [Claude Code](https://marketplace.visualstudio.com/items?itemName=anthropic.claude-code) | Anthropic's agentic coding assistant: explores the repo, edits code, and runs terminal commands with your approval; supports MCP, subagents, and custom slash commands. |
| [AL Copilot Skills Collection](https://marketplace.visualstudio.com/items?itemName=FernandoArtigasAlfonso.al-copilot-skills-collection) | One command deploys 40+ BC-specific AI skills (code review, API pages, tests, telemetry, ADRs) into `.github/` or `.claude/` for Copilot or Claude Code. |
| [AL Development Collection](https://marketplace.visualstudio.com/items?itemName=JavierArmestoGonzalez.al-development-collection) | Turns Copilot into a spec-first, TDD-orchestrated AL framework with specialized agents, composable skills and workflows, and human approval gates. |
| [ACDC](https://marketplace.visualstudio.com/items?itemName=theframework.acdc) | "Agentic Coding / Direct Coding" - gives Copilot a team of eight BC agents, auto-applied per-object coding standards, and a Plan -> RED -> GREEN -> REFACTOR flow. |

## Requirements

- VS Code `1.95.0` or newer.
- Installs from the **Visual Studio Marketplace**. On VSCodium / Cursor /
  Windsurf (Open VSX) some of these IDs are not available.

## Installation

Install **AL Buddy Pack** from the Extensions view in VS Code, or:

```bash
code --install-extension FredericVercaemst.albuddy-pack
```

## Contributing

See [DEVELOPMENT.md](DEVELOPMENT.md) for how the pack is maintained and
released. Issues and pull requests are welcome at
<https://github.com/fvet/albuddy-pack>.

## License

[MIT](LICENSE) (c) Frédéric Vercaemst
