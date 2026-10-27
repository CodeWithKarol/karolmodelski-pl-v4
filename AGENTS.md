# AGENTS.md

Astro + React island + shadcn/ui site. Node `>=22.12.0`, ESM (`"type": "module"`).

## Commands

- `npm run dev` — Astro dev server
- `npm run build` — static build to `dist/`
- `npm run preview` — preview the built site
- `npm run lint` — ESLint (ts/tsx only; ignores `dist`, `.astro`)
- `npm run typecheck` — `astro check`
- `npm run format` — Prettier over `**/*.{ts,tsx,astro}`

No test runner is configured. `.astro/` is generated (gitignored) — run `npx astro sync` if `astro check` complains about missing types.

## Stack quirks (easy to get wrong)

- **Astro-first, not a SPA.** Pages live in `src/pages/*.astro`; layout is `src/layouts/main.astro`. React components are server-rendered by default and only hydrate when given a `client:*` directive in the `.astro` file (see `client:load` on `<Button>` in `src/pages/index.astro`). Never assume React interactivity works without one.
- **shadcn uses Base UI, not Radix.** `components.json` style is `base-nova`; primitives come from `@base-ui/react` (e.g. `src/components/ui/button.tsx` imports `@base-ui/react/button`). Add components with `npx shadcn@latest add <name>`; they land in `src/components/ui/`. Do not introduce Radix packages.
- **Tailwind v4, CSS-first.** No `tailwind.config.*`. Theme tokens/`@theme` and design variables live in `src/styles/global.css`. The Vite plugin is wired in `astro.config.mjs`.
- **`cn` is the `cn` npm package** (compiled clsx + tailwind-merge replacement), not `clsx`/`tailwind-merge`. It's re-exported from `@/lib/utils`; shadcn components may import it directly from `"cn"`.
- **Path alias** `@/*` → `src/*` (defined in `tsconfig.json`; resolved by Astro/Vite).

## Conventions

- Prettier: no semicolons, double quotes, 2-space, width 80, Astro + Tailwind class-sorting plugins (`tailwindStylesheet: src/styles/global.css`, sorts `cn`/`cva` args).
- ESLint is flat config (`eslint.config.js`) and covers only `.ts`/`.tsx`; `.astro` files are not linted.
- `opencode.json` wires two MCP servers: Astro docs and shadcn — prefer them for framework/component API questions.

## Copy changes — consistency check (required)

After ANY change to user-facing copy, re-check every place that repeats it. Do not stop at the visible section:

- `src/layouts/main.astro` — `<title>`, default `description`, Open Graph/Twitter meta and JSON-LD (`WebPage`, `Organization`, `Person`, `Service`/`Offer` with price + `priceValidUntil`, `FAQPage`).
- `src/data/faq.ts` — single source for both the FAQ accordion and `FAQPage` schema.
- `public/llms.txt` — short AI summary of the offer.
- `public/llms-full.txt` — full text mirror of the homepage; keep it in sync section by section (`## 00 · Wstęp` = HERO, headings/CTA/stats table).
- `public/pricing.md` — price, timeline, scope, payment split, guarantee, NDA.
- `public/og-image.png` — text baked into the social preview image (regenerate the asset if the claim changes).
- Other pages/sections that repeat the claim: `src/pages/404.astro`, footer, contact section, nav/mobile CTA labels.

Hard rules:

- Numbers (price, 4 weeks, 6–8 weeks, 3-month guarantee, payment split) must match everywhere, including schema `price` and `priceValidUntil`.
- Keep the meta description ≤ ~160 characters; changes to it also change the `WebPage` JSON-LD description.
- Audience and CTA wording must not contradict `llms*.txt`, `pricing.md` or schema `audience`/`description`. Use "umowa o poufności / NDA" consistently.
- `dist/` is generated — never edit it. Rebuild (`npm run build`) and, when JSON-LD changed, verify the emitted schema in `dist/index.html`.
- When reporting back, state explicitly which files were checked and updated, and which were checked and left unchanged.

