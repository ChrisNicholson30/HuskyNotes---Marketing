# Husky Notes — Marketing Site

A static marketing site for **Husky Notes**, the native, open-source note-taking
app for iPhone, iPad and Mac (see [`../DESIGN.md`](../DESIGN.md) for the product).

Design inspired by [bear.app](https://bear.app/), themed in the project's
**Blue Husky** palette.

## What's here

```
site/
├── index.html      # Single-page marketing site
├── styles.css      # Blue Husky styling, dark + light ("Husky Day") themes
├── script.js       # Theme toggle, mobile nav, scroll reveals (no dependencies)
└── assets/
    ├── logo.svg    # Husky head glyph (favicon + in-page <use>)
    └── og-image.svg# Social share image
```

No build step, no framework — just open `index.html`.

## Run locally

```bash
cd site
python3 -m http.server 8000
# then open http://localhost:8000
```

Or simply open `site/index.html` in a browser.

## Features

- Responsive, single-page layout (hero, features, editor, themes, sync, open
  source, pricing, download CTA, footer)
- **Dark / light theme toggle** — defaults to Blue Husky, remembers your choice,
  and respects `prefers-color-scheme`
- CSS-built app mockups (no binary screenshots to maintain)
- Accessible: skip link, semantic landmarks, keyboard-friendly nav,
  `prefers-reduced-motion` support
- Zero JavaScript dependencies

## Deploying to GitHub Pages

Point Pages at this folder (Settings → Pages → Branch → `/site`), or copy the
contents to the publish root. All asset paths are relative, so it works from any
sub-path.

## Editing content

Copy, pricing, and theme swatches all live directly in `index.html`. Brand
colours are CSS custom properties at the top of `styles.css` (`:root` for Blue
Husky dark, `html[data-theme="light"]` for Husky Day).
