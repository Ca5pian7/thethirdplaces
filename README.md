# The Third Place

A website for The Third Place, an international café-themed Discord community. It introduces the community, tells its story, shows off the people who run it, highlights partner communities and achievements, shares photo moments, and provides a way to get in touch or join the Discord server.

## Tech stack

- [TanStack Start](https://tanstack.com/start) with [TanStack Router](https://tanstack.com/router) (file-based routing)
- React 19
- Tailwind CSS 4 (theme tokens defined in `src/styles.css` via `@theme`)
- Netlify Forms for the contact form
- Deployed on Netlify

## Project structure

- `src/routes/` — one file per page (`index.tsx`, `journey.tsx`, `staff.tsx`, `partners.tsx`, `achievements.tsx`, `moments.tsx`, `contact.tsx`), plus `__root.tsx` for the shared document shell (fonts, nav, footer).
- `src/components/` — shared `Nav`, `Footer`, scroll-reveal helper, inline SVG icons, and small `ui/` primitives (`Button`, `Card`, `Badge`, `SectionHeading`).
- `src/lib/useScrollReveal.ts` — IntersectionObserver hook powering the fade-in-on-scroll effect used across pages.
- `public/contact-form.html` — a static, hidden copy of the contact form. Netlify's build bot only detects forms in static HTML, so this file exists purely to register the form at deploy time; the real form users interact with lives in `src/routes/contact.tsx` and submits to this file's path via AJAX.

## Running locally

```bash
npm install
npm run dev
```

This starts the Vite dev server. Note that Netlify Forms submissions only work on a deployed site (Netlify's form processing isn't emulated by the plain dev server).

## Building

```bash
npm run build
```
