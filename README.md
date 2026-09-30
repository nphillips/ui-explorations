# ui-explorations

[![CI](https://github.com/nphillips/ui-explorations/actions/workflows/ci.yml/badge.svg)](https://github.com/nphillips/ui-explorations/actions/workflows/ci.yml)

Hand-written React + TypeScript components, one at a time, documented in [Storybook](https://nphillips.github.io/ui-explorations/).

Components are written by me; tooling and scaffolding were set up with Claude Code.

## Components

None yet. Each one lands with its stories, a few behavioral tests, and a line here on what it demonstrates. The backlog is in [docs/plan.md](docs/plan.md).

## Stack

Vite, React 19, strict TypeScript, CSS Modules with typed class names, Storybook, Vitest and React Testing Library, ESLint (`typescript-eslint` strict) and Prettier, managed with pnpm.

There is no component library, headless UI kit, utility CSS or CSS-in-JS. Accessibility, keyboard handling and motion are written by hand, because that is what this repo is for.

## Run it

Needs Node 22 and pnpm.

```sh
pnpm install
pnpm storybook   # http://localhost:6006
pnpm test        # Vitest, once
pnpm check       # typecheck, lint, format check
```
