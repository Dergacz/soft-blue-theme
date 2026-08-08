# Repository Guidelines

## Project Structure & Module Organization

This repository is a VS Code color theme extension. Theme definitions live in `themes/`:
`soft-blue-light.json`, `soft-blue-dark.json`, `soft-blue-dark-deep.json`, and `soft-blue-night.json`.
Extension metadata, contributed theme labels, publisher, version, and icon settings are in
`package.json`. Screenshots used by the Marketplace README live in `images/`. Root-level
sample files (`test-syntax.js`, `test-typescript.ts`, `test-multi-lang.py`) are for visual
syntax-highlighting checks, not automated unit tests.

## Build, Test, and Development Commands

- `npm install`: install the extension package lock dependencies.
- `F5` in VS Code: launch an Extension Development Host for manual theme testing.
- `npx @vscode/vsce package`: create a `.vsix` package for local installation or review.
- `npx @vscode/vsce publish`: publish to the configured Marketplace publisher after versioning.

There are currently no `npm test`, `npm run build`, or lint scripts in `package.json`; do not
invent script names in documentation or automation unless you add them first.

## Coding Style & Naming Conventions

Keep JSON theme files in `themes/` formatted with tab indentation (matching the existing files) and
stable key ordering where possible; `package.json` uses two-space indentation.
Use lowercase kebab-case for theme file names, matching existing patterns such as
`soft-blue-dark-deep.json`. Color values should be uppercase hex strings (`#81D4E6`) and should be
chosen for readable contrast across editor UI and syntax scopes. Keep public theme labels in
`package.json` aligned with the corresponding file names and README sections.

## Testing Guidelines

Validate changes manually in the Extension Development Host. Open the sample JavaScript,
TypeScript, and Python files, switch between all four Soft Blue variants, and check editor chrome,
selection, cursor, diagnostics, comments, strings, keywords, variables, and function colors. When
visual behavior changes, update the relevant screenshot in `images/` and README references.

## Commit & Pull Request Guidelines

Git history uses concise Conventional Commit-style messages, mainly `feat:` and `fix:`
(example: `feat: Add new "Soft Blue Dark Deep" theme variant`). Keep commits focused on one theme
or documentation change. Pull requests should include a short description, changed theme variants,
manual verification notes, and screenshots for visible palette or UI changes.

## Security & Configuration Tips

Do not commit Marketplace personal access tokens or publisher credentials. Keep generated `.vsix`
files only when intentionally preserving release artifacts; otherwise prefer packaging on demand.
