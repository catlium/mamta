# AGENTS.md

## Project

React 19 + TypeScript 6 SPA for Mamta (nonprofit). Vite 8, deployed to Netlify.

## Commands

- `pnpm dev` — Vite dev server
- `pnpm build` — typecheck (`tsc -b`) then Vite build → `dist/`
- `pnpm lint` — ESLint (`.ts`/`.tsx` files)
- `pnpm typecheck` — `tsc --noEmit`
- `pnpm format` — Prettier write (all `.ts`/`.tsx`)

Pre-commit hook runs `pnpm lint && pnpm format` automatically. Commit messages are enforced by commitlint (conventional commits: `feat:`, `fix:`, etc.).

## Path Aliases

`@/` → `src/` (configured in both Vite and tsconfig). Always use `@/...` imports.

## UI Components

shadcn/ui with `base-nova` style. Components live in `src/components/ui/`. Use the `cn()` utility from `@/lib/utils` for merging Tailwind classes. Icons: lucide-react.

## Key Conventions

- Tailwind CSS v4 (uses `@tailwindcss/vite` plugin, `src/index.css` for theme vars)
- Dark mode via `next-themes` with `.dark` class strategy
- Prettier: no semicolons, double quotes, 2-space indent, trailing comma es5, Tailwind plugin auto-sorts classes
- Router: react-router v8 browser router in `src/router.tsx`
- Layout: `MainLayout` wraps all pages with Navbar + Footer
- Program data constants: `src/lib/contants/program-data.ts`

## Structure

- `src/pages/` — route page components
- `src/components/` — shared components + `ui/` for shadcn
- `src/lib/` — utilities and constants
