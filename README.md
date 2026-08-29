# AL Buddy Pack

[![CI](https://github.com/fvet/albuddy-pack/actions/workflows/ci.yml/badge.svg)](https://github.com/fvet/albuddy-pack/actions/workflows/ci.yml)
[![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/FredericVercaemst.albuddy-pack)](https://marketplace.visualstudio.com/items?itemName=FredericVercaemst.albuddy-pack)
[![License: MIT](https://img.shields.io/badge/License-MIT-informational.svg)](LICENSE)

A curated Extension Pack for **AL / Microsoft Dynamics 365 Business Central**
development. It is the companion pack to
[AL Buddy](https://marketplace.visualstudio.com/items?itemName=FredericVercaemst.albuddy).

> **Status: MVP.** The pack bundles exactly one extension today - the official
> AL Language extension - and lists the rest as an opt-in menu below. Later
> releases may promote more of them into the pack.

## What this pack installs

| Extension | Why |
| --- | --- |
| [AL Language](https://marketplace.visualstudio.com/items?itemName=ms-dynamics-smb.al) (`ms-dynamics-smb.al`) | The official Microsoft AL compiler and language server. Everything else builds on it. |

## Also recommended

These are **not** installed by the pack - it is a menu, not a mandate. Add the
ones you want from the Extensions view, or:

```bash
code --install-extension <id>
```

### AL

| Extension | ID |
| --- | --- |
| AZ AL Dev Tools / Code Outline | `andrzejzwierzchowski.al-code-outline` |
| AL Code Actions | `davidfeldhoff.al-codeactions` |
| Object ID Ninja | `vjeko.vjeko-al-objid` |
| AL Pocket Tools | `teddyherryanto.al-pocket-tools` |
| AlCops | `arthurvdv.alcops` |
| CRS AL Language Extension | `waldo.crs-al-language-extension` |
| AL Prettier | `alexander-drogin.al-prettier-vscode` |
| XLIFF Sync | `rvanbekkum.xliff-sync` |

### Editor / general

| Extension | ID |
| --- | --- |
| Bracket Select | `chunsen.bracket-select` |
| Reload | `natqe.reload` |
| Code Spell Checker | `streetsidesoftware.code-spell-checker` |
| Change Case | `wmaurer.change-case` |
| vscode-icons | `vscode-icons-team.vscode-icons` |
| Partial Diff | `ryu1kn.partial-diff` |
| Sort Lines | `tyriar.sort-lines` |
| Remove Empty Lines | `usernamehw.remove-empty-lines` |

### Optional / personal taste

| Extension | ID |
| --- | --- |
| Git History | `donjayamanne.githistory` |
| GitLens | `eamodio.gitlens` |
| Claude Code | `anthropic.claude-code` |
| GitHub Pull Requests | `github.vscode-pull-request-github` |
| PowerShell | `ms-vscode.powershell` |
| Code Spell Checker - Dutch | `streetsidesoftware.code-spell-checker-dutch` |
| Markdown All in One | `yzhang.markdown-all-in-one` |
| Increment Selection | `albymor.increment-selection` |
| Format JSON | `clemenspeters.format-json` |
| GitHub Actions | `github.vscode-github-actions` |

The full inventory, with the versions this list was last checked against, is in
[cursor-extensions.md](cursor-extensions.md).

## Requirements

- VS Code `1.95.0` or newer.
- Installs from the **Visual Studio Marketplace**. On VSCodium / Cursor /
  Windsurf (Open VSX) some of the listed IDs are not available.

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
