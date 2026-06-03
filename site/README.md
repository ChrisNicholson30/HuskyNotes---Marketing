# Husky Notes — Marketing Site

A static marketing site for **Husky Notes**, the native, open-source note-taking
app for iPhone, iPad and Mac (see [`../DESIGN.md`](../DESIGN.md) for the product).

Design inspired by [bear.app](https://bear.app/), themed in the project's
**Blue Husky** palette.

## What's here

```
site/
├── index.html        # Single-page marketing site (full SEO meta + JSON-LD)
├── styles.css        # Blue Husky styling, dark + light ("Husky Day") themes
├── script.js         # Theme toggle, mobile nav, scroll reveals (no dependencies)
├── 404.html          # Branded not-found page
├── robots.txt        # Crawler directives + sitemap reference
├── sitemap.xml       # XML sitemap for search engines
├── site.webmanifest  # PWA / installable web app manifest
├── _headers          # Cloudflare Pages caching + security headers
├── _redirects        # Cloudflare Pages www → apex 301 redirect
└── assets/
    ├── logo.svg            # Husky head glyph (favicon + in-page <use>)
    ├── og-image.svg        # Social share image (source)
    ├── og-image.png        # Rasterised 1200×630 social card (used by OG/Twitter)
    ├── icon-32.png         # Favicon PNG fallback
    ├── icon-192.png        # PWA icon
    ├── icon-512.png        # PWA icon / Organization logo
    └── apple-touch-icon.png# iOS home-screen icon (180×180)
```

No build step, no framework — just open `index.html`.

## SEO & performance

- **Discoverability:** canonical URL, descriptive title/description, keyword-rich
  copy, an internal-linked **FAQ** section, `robots.txt`, and an `sitemap.xml`.
- **Rich results:** JSON-LD structured data (`Organization`, `WebSite`,
  `SoftwareApplication`, and `FAQPage`) for eligibility in Google rich snippets.
- **Social:** Open Graph + Twitter card meta with a rasterised PNG share image
  (PNG is required — most platforms don't render SVG cards).
- **Speed:** fonts load non-render-blocking, the main script is `defer`red, theme
  is applied inline in `<head>` to avoid a flash, and `_headers` sets long
  immutable caching for static assets on Cloudflare Pages.
- **Mobile / PWA:** responsive layout, `viewport-fit=cover`, `theme-color` per
  colour scheme, apple-touch-icon, and an installable web manifest.

> **Note:** Update the absolute URLs (canonical, `og:url`, image URLs, sitemap,
> `robots.txt`) if the site is published on a domain other than
> `https://huskynotes.com/`.

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
