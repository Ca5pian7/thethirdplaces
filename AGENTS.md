# AGENTS.md

Guidance for AI agents working on this codebase.

## Project overview

The Third Place is a marketing/community website for an international café-themed Discord server. It is a content-forward, mostly-static site (no auth, no database, no user-generated content) built to feel like a cozy premium café rather than a tech product.

## Tech stack

| Layer | Technology |
|---|---|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 (file-based routing) |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 (`@theme` tokens in `src/styles.css`) |
| Forms | Netlify Forms |
| Language | TypeScript (strict) |
| Deployment | Netlify |

## Directory structure

```
src/
├── routes/
│   ├── __root.tsx        # document shell: Google Fonts, Nav, Footer, meta
│   ├── index.tsx         # home page
│   ├── journey.tsx       # timeline page
│   ├── staff.tsx         # staff cards
│   ├── partners.tsx      # partner community cards
│   ├── achievements.tsx  # animated counters + achievement cards
│   ├── moments.tsx       # masonry gallery + lightbox
│   └── contact.tsx       # contact form (Netlify Forms) + socials
├── components/
│   ├── Nav.tsx, Footer.tsx
│   ├── ScrollReveal.tsx
│   ├── icons.tsx          # inline SVG icons (no icon font/emoji)
│   └── ui/                # Button, Card, Badge, SectionHeading
├── lib/
│   └── useScrollReveal.ts # IntersectionObserver-based scroll reveal hook
├── router.tsx
└── styles.css             # Tailwind import + @theme design tokens + keyframes

public/
└── contact-form.html      # static skeleton so Netlify registers the "contact" form at build time
```

## Design system

Color palette, fonts, and animation keyframes are centralized in `src/styles.css` under the `@theme` block: `--color-cream`, `--color-espresso`, `--color-coffee`, `--color-caramel`, `--color-sage`, `--color-clay`, `--font-display` (Fraunces), `--font-body` (Public Sans). Reuse these tokens (as Tailwind utility classes, e.g. `bg-cream`, `text-espresso`, `font-display`) rather than introducing new colors or fonts — the café aesthetic depends on staying within this palette.

Scroll-triggered fade-ins use the shared `useScrollReveal` hook / `ScrollReveal` component and the `.reveal` / `.reveal-left` CSS classes in `styles.css`. Reuse these rather than adding a new animation library.

## Conventions

- Routes are one file per page under `src/routes/`, following TanStack Router's file-based convention (`index.tsx` → `/`, `staff.tsx` → `/staff`, etc.).
- Shared chrome (nav, footer, fonts) lives only in `__root.tsx` — individual route files should contain page content only.
- No emoji in UI copy or alt text; use the SVG icons in `src/components/icons.tsx` or `lucide-react` (already a dependency) for simple utility icons.
- Animate `transform`/`opacity` only, for performance.

## Netlify Forms — non-obvious setup

Netlify's build-time form detection only scans static HTML output, so a React-rendered `<form>` alone is never registered. `public/contact-form.html` is a hidden, unused-by-users duplicate of the contact form's fields that exists solely so Netlify's build bot registers the form. The real form in `src/routes/contact.tsx` submits via `fetch('/contact-form.html', ...)` (not `/`, which would be intercepted by the SSR handler) with `application/x-www-form-urlencoded` body and a hidden `form-name` field. If you add or rename a field in the contact form, update `public/contact-form.html` to match exactly, or submissions will be rejected.

## Non-goals

No database, no authentication, no dynamic/user-submitted content beyond the contact form. Stats, staff bios, partner listings, and achievements are static content maintained directly in the route files.
