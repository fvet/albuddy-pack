# AL Buddy Pack

[![CI](https://github.com/fvet/albuddy-pack/actions/workflows/ci.yml/badge.svg)](https://github.com/fvet/albuddy-pack/actions/workflows/ci.yml)
[![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/FredericVercaemst.albuddy-pack)](https://marketplace.visualstudio.com/items?itemName=FredericVercaemst.albuddy-pack)
[![License: MIT](https://img.shields.io/badge/License-MIT-informational.svg)](LICENSE)

A curated Extension Pack for **AL / Microsoft Dynamics 365 Business Central**
development. Companion to
[AL Buddy](https://marketplace.visualstudio.com/items?itemName=FredericVercaemst.albuddy).

Installing this pack installs **every extension listed below**. Don't want one
of them? Uninstall it from the Extensions view - the pack won't put it back.
The list mirrors the tiers in [cursor-extensions.md](cursor-extensions.md),
which also records the versions each entry was last checked against.

## AL - essential

| Extension | ID |
| --- | --- |
| AL Language (official Microsoft compiler + language server) | `ms-dynamics-smb.al` |
| AZ AL Dev Tools / Code Outline | `andrzejzwierzchowski.al-code-outline` |
| AL Code Actions | `davidfeldhoff.al-codeactions` |
| Object ID Ninja | `vjeko.vjeko-al-objid` |
| AL Pocket Tools | `teddyherryanto.al-pocket-tools` |
| AlCops | `arthurvdv.alcops` |
| CRS AL Language Extension | `waldo.crs-al-language-extension` |

## Editor - essential

| Extension | ID |
| --- | --- |
| Bracket Select | `chunsen.bracket-select` |
| Reload | `natqe.reload` |
| Code Spell Checker | `streetsidesoftware.code-spell-checker` |
| Change Case | `wmaurer.change-case` |
| Partial Diff | `ryu1kn.partial-diff` |
| Create GUID | `nwallace.createguid` |

## AL - extras

| Extension | ID |
| --- | --- |
| AL Prettier | `alexander-drogin.al-prettier-vscode` |
| XLIFF Sync | `rvanbekkum.xliff-sync` |

## Editor - extras

| Extension | ID |
| --- | --- |
| vscode-icons | `vscode-icons-team.vscode-icons` |
| Sort Lines | `tyriar.sort-lines` |
| Remove Empty Lines | `usernamehw.remove-empty-lines` |

## Optional

Broader tooling and personal-taste picks. Uninstall any you don't use.

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
