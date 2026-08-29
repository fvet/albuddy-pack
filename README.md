# AL Buddy Pack

[![CI](https://github.com/fvet/albuddy-pack/actions/workflows/ci.yml/badge.svg)](https://github.com/fvet/albuddy-pack/actions/workflows/ci.yml)
[![VS Marketplace](https://img.shields.io/badge/VS_Marketplace-AL_Buddy_Pack-blue?logo=visualstudiocode)](https://marketplace.visualstudio.com/items?itemName=FredericVercaemst.albuddy-pack)
[![License: MIT](https://img.shields.io/badge/License-MIT-informational.svg)](LICENSE)

A curated Extension Pack for **AL / Microsoft Dynamics 365 Business Central** development. 

Installing this pack installs **every extension listed below** in one step.
Don't want one of them? Uninstall it from the Extensions view - the pack won't
put it back. Extensions still under consideration are in the
[backlog](backlog.md).

The sections below mirror the grouping in `package.json` `extensionPack`.

## AL essentials

| Extension | ID |
| --- | --- |
| [AL Language](https://marketplace.visualstudio.com/items?itemName=ms-dynamics-smb.al) | `ms-dynamics-smb.al` |
| [AlCops](https://marketplace.visualstudio.com/items?itemName=arthurvdv.alcops) | `arthurvdv.alcops` |
| [AZ AL Dev Tools / Code Outline](https://marketplace.visualstudio.com/items?itemName=andrzejzwierzchowski.al-code-outline) | `andrzejzwierzchowski.al-code-outline` |
| [AL Code Actions](https://marketplace.visualstudio.com/items?itemName=davidfeldhoff.al-codeactions) | `davidfeldhoff.al-codeactions` |
| [CRS AL Language Extension](https://marketplace.visualstudio.com/items?itemName=waldo.crs-al-language-extension) | `waldo.crs-al-language-extension` |
| [Object ID Ninja](https://marketplace.visualstudio.com/items?itemName=vjeko.vjeko-al-objid) | `vjeko.vjeko-al-objid` |
| [AL Pocket Tools](https://marketplace.visualstudio.com/items?itemName=teddyherryanto.al-pocket-tools) | `teddyherryanto.al-pocket-tools` |
| [XLIFF Sync](https://marketplace.visualstudio.com/items?itemName=rvanbekkum.xliff-sync) | `rvanbekkum.xliff-sync` |

## AL additional

| Extension | ID |
| --- | --- |
| [AL Prettier](https://marketplace.visualstudio.com/items?itemName=alexander-drogin.al-prettier-vscode) | `alexander-drogin.al-prettier-vscode` |
| [AL Navigator](https://marketplace.visualstudio.com/items?itemName=wbrakowski.al-navigator) | `wbrakowski.al-navigator` |
| [AL Companion](https://marketplace.visualstudio.com/items?itemName=DSaladin.al-companion) | `DSaladin.al-companion` |
| [NAB AL Tools](https://marketplace.visualstudio.com/items?itemName=nabsolutions.nab-al-tools) | `nabsolutions.nab-al-tools` |
| [AL Test Runner](https://marketplace.visualstudio.com/items?itemName=jamespearson.al-test-runner) | `jamespearson.al-test-runner` |

## Editor essentials

| Extension | ID |
| --- | --- |
| [Bracket Select](https://marketplace.visualstudio.com/items?itemName=chunsen.bracket-select) | `chunsen.bracket-select` |
| [Reload](https://marketplace.visualstudio.com/items?itemName=natqe.reload) | `natqe.reload` |
| [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) | `streetsidesoftware.code-spell-checker` |
| [Change Case](https://marketplace.visualstudio.com/items?itemName=wmaurer.change-case) | `wmaurer.change-case` |
| [Partial Diff](https://marketplace.visualstudio.com/items?itemName=ryu1kn.partial-diff) | `ryu1kn.partial-diff` |
| [Create GUID](https://marketplace.visualstudio.com/items?itemName=nwallace.createguid) | `nwallace.createguid` |
| [PowerShell](https://marketplace.visualstudio.com/items?itemName=ms-vscode.powershell) | `ms-vscode.powershell` |
| [Format JSON](https://marketplace.visualstudio.com/items?itemName=clemenspeters.format-json) | `clemenspeters.format-json` |

## Editor additional

| Extension | ID |
| --- | --- |
| [vscode-icons](https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons) | `vscode-icons-team.vscode-icons` |
| [Sort Lines](https://marketplace.visualstudio.com/items?itemName=tyriar.sort-lines) | `tyriar.sort-lines` |
| [Increment Selection](https://marketplace.visualstudio.com/items?itemName=albymor.increment-selection) | `albymor.increment-selection` |
| [Remove Empty Lines](https://marketplace.visualstudio.com/items?itemName=usernamehw.remove-empty-lines) | `usernamehw.remove-empty-lines` |
| [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one) | `yzhang.markdown-all-in-one` |
| [Code Spell Checker - Dutch](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker-dutch) | `streetsidesoftware.code-spell-checker-dutch` |

## Git

| Extension | ID |
| --- | --- |
| [Git History](https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory) | `donjayamanne.githistory` |
| [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) | `eamodio.gitlens` |
| [GitHub Pull Requests](https://marketplace.visualstudio.com/items?itemName=github.vscode-pull-request-github) | `github.vscode-pull-request-github` |
| [GitHub Actions](https://marketplace.visualstudio.com/items?itemName=github.vscode-github-actions) | `github.vscode-github-actions` |

## AI

| Extension | ID |
| --- | --- |
| [Claude Code](https://marketplace.visualstudio.com/items?itemName=anthropic.claude-code) | `anthropic.claude-code` |
| [AL Copilot Skills Collection](https://marketplace.visualstudio.com/items?itemName=FernandoArtigasAlfonso.al-copilot-skills-collection) | `FernandoArtigasAlfonso.al-copilot-skills-collection` |
| [AL Development Collection](https://marketplace.visualstudio.com/items?itemName=JavierArmestoGonzalez.al-development-collection) | `JavierArmestoGonzalez.al-development-collection` |
| [ACDC](https://marketplace.visualstudio.com/items?itemName=theframework.acdc) | `theframework.acdc` |

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
