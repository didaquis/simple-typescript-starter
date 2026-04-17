# AGENTS.md

Instructions for AI agents working on this project.

## Project

Node.js boilerplate using TypeScript. Intended as a starting point for new projects.

## Stack

- **Runtime:** Node.js 22 (see `.nvmrc`)
- **Language:** TypeScript 5, strict mode
- **Module system:** ESM (`"type": "module"` in `package.json`)
- **Test runner:** Vitest (not Jest)
- **Linter:** ESLint v9 with flat config (`eslint.config.ts`)
- **Formatter:** Prettier
- **Dev server:** `tsx` (not `ts-node`, not `nodemon`)
- **Git hooks:** Husky — pre-commit runs Prettier, ESLint, and tests automatically

## Commands

```bash
npm run build        # Compile TypeScript to build/
npm test             # Run tests with Vitest (with coverage)
npm run test:watch   # Run tests in watch mode
npm run lint         # Run ESLint
npm run dev          # Start dev server with hot reload + Prettier watch
npm run start        # Build and run compiled output
npm run purge        # Remove build/, coverage/, node_modules/
```

## Project Structure

```
src/
  index.ts           # Entry point
  types/             # Shared TypeScript type definitions
tests/
  *.test.ts          # Test files (Vitest)
build/               # Compiled output (git-ignored)
eslint.config.ts     # ESLint v9 flat config
vitest.config.ts     # Vitest config
tsconfig.json        # TypeScript config
```

## Conventions

- **Indentation:** tabs (enforced by Prettier)
- **Imports:** use `.js` extension in TypeScript source files (required for ESM + `moduleResolution: nodenext`)
- **Tests:** import from `vitest`, not `@jest/globals`
- **TypeScript:** strict mode, `exactOptionalPropertyTypes`, `noUncheckedIndexedAccess` — handle `T | undefined` on index access

## ESLint

Config is in `eslint.config.ts` (ESLint v9 flat config format). Do not create or restore `.eslintrc` or `.eslintignore`.

Active rules beyond recommended:
- `no-console: warn`
- `curly: error`
- `no-return-await: error`
- `prettier/prettier: error`
