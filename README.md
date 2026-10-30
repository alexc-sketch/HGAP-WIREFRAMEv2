# HGAP homepage wireframe (V2)

A clickable wireframe of the new Hitachi Global Air Power homepage, header, footer and sitemap. Built for designer review. Plain HTML, CSS and JavaScript: no build step.

## What's inside

| File | What it is |
|---|---|
| `index.html` | Homepage. Resize the window to see the mobile layout |
| `mobile-preview.html` | Homepage inside a 390px phone frame |
| `sitemap.html` | Navigation, footer and policy pages |
| `assets/app.js` | Interactions: mega menu, mobile menu, search, carousel, More Filters, Build map |
| `docs/clickup-brief.md` | Design brief, ready to paste into ClickUp |
| `docs/design-spec.md` | Brand tokens, components and interactions |

## What works

- **Mega menu:** click a top item; hover a category to swap the right pane; Escape or outside click closes it.
- **Search:** opens a full-width search bar under the header.
- **Mobile menu:** accordion (open `index.html` at phone width, or `mobile-preview.html`).
- **Hero carousel:** 3 slides, auto-advances every 6 seconds, with pause, previous and next.
- **Product finder:** More Filters toggle on mobile.
- **Build map:** the toggle in the dark top bar shows how each section is built in WordPress.

Forms and links are placeholders; nothing submits.

## View it locally

Download the folder and open `index.html` in a browser.

## Put it on GitHub

1. Create a new repository (a **private** repo is recommended: this is unreleased client work).
2. Click **Add file > Upload files** and drag in everything in this folder, keeping the `assets` and `docs` folders.
3. Click **Commit changes**.

**Optional, a shareable link (GitHub Pages):** Settings > Pages > Source: "Deploy from a branch" > `main` / root > Save. Pages on private repos needs a paid GitHub plan; check yours first. Every page is set to `noindex`, so search engines won't list it.

## Notes

- Fonts load from Google Fonts (Figtree stands in for the Hitachi typeface).
- Bracketed text, like `[PHOTO: ...]`, marks content still needed from the client.
