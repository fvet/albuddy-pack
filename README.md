# AL Buddy Pack

[![CI](https://github.com/fvet/albuddy-pack/actions/workflows/ci.yml/badge.svg)](https://github.com/fvet/albuddy-pack/actions/workflows/ci.yml)
[![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/FredericVercaemst.albuddy-pack)](https://marketplace.visualstudio.com/items?itemName=FredericVercaemst.albuddy-pack)
[![License: MIT](https://img.shields.io/badge/License-MIT-informational.svg)](LICENSE)

A curated Extension Pack for **AL / Microsoft Dynamics 365 Business Central**
development. Companion to
[AL Buddy](https://marketplace.visualstudio.com/items?itemName=FredericVercaemst.albuddy).

Installing this pack installs **every extension listed below** in one step.
Don't want one of them? Uninstall it from the Extensions view - the pack won't
put it back. Extensions still under consideration are in the
[backlog](backlog.md).

The sections below mirror the grouping in `package.json` `extensionPack`.

## AL essentials

| Extension | ID |
| --- | --- |
| AL Language (official Microsoft compiler + language server) | `ms-dynamics-smb.al` |
| AlCops | `arthurvdv.alcops` |
| AZ AL Dev Tools / Code Outline | `andrzejzwierzchowski.al-code-outline` |
| AL Code Actions | `davidfeldhoff.al-codeactions` |
| CRS AL Language Extension | `waldo.crs-al-language-extension` |
| Object ID Ninja | `vjeko.vjeko-al-objid` |
| AL Pocket Tools | `teddyherryanto.al-pocket-tools` |
| XLIFF Sync | `rvanbekkum.xliff-sync` |

## AL additional

| Extension | ID |
| --- | --- |
| AL Prettier | `alexander-drogin.al-prettier-vscode` |
| AL Navigator | `wbrakowski.al-navigator` |
| AL Companion | `DSaladin.al-companion` |
| NAB AL Tools | `nabsolutions.nab-al-tools` |
| AL Test Runner | `jamespearson.al-test-runner` |

## Editor essentials

| Extension | ID |
| --- | --- |
| Bracket Select | `chunsen.bracket-select` |
| Reload | `natqe.reload` |
| Code Spell Checker | `streetsidesoftware.code-spell-checker` |
| Change Case | `wmaurer.change-case` |
| Partial Diff | `ryu1kn.partial-diff` |
| Create GUID | `nwallace.createguid` |
| PowerShell | `ms-vscode.powershell` |
| Format JSON | `clemenspeters.format-json` |

## Editor additional

| Extension | ID |
| --- | --- |
| vscode-icons | `vscode-icons-team.vscode-icons` |
| Sort Lines | `tyriar.sort-lines` |
| Increment Selection | `albymor.increment-selection` |
| Remove Empty Lines | `usernamehw.remove-empty-lines` |
| Markdown All in One | `yzhang.markdown-all-in-one` |
| Code Spell Checker - Dutch | `streetsidesoftware.code-spell-checker-dutch` |

## Git

| Extension | ID |
| --- | --- |
| Git History | `donjayamanne.githistory` |
| GitLens | `eamodio.gitlens` |
| GitHub Pull Requests | `github.vscode-pull-request-github` |
| GitHub Actions | `github.vscode-github-actions` |

## AI

| Extension | ID |
| --- | --- |
| Claude Code | `anthropic.claude-code` |
| AL Copilot Skills Collection | `FernandoArtigasAlfonso.al-copilot-skills-collection` |
| AL Development Collection | `JavierArmestoGonzalez.al-development-collection` |
| ACDC | `theframework.acdc` |

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
