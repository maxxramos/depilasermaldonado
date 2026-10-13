# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static one-page site for **Depilación Láser Maldonado** (Uruguay), live at `https://depilasermaldonado.com`. Plain HTML + CSS + vanilla JS, no build step, no package manager, no tests. Deployed as static files (Hostinger). To preview, open `index.html` in a browser or serve the folder with any static server (e.g. `python -m http.server`).

All site content and code comments are in Spanish (rioplatense "vos" forms: "Rasurá", "Llegá").

## Architecture

- `index.html`: every section (`#inicio` video hero, `#servicios` zone grid + promos, zone modal, `#nosotros`, `#contacto` with schedule bar and map, footer, WhatsApp FAB). The `<head>` holds the SEO, Open Graph, and Twitter meta tags.
- `script.js`: zone data, hamburger menu, navbar shadow and active link on scroll, scroll reveal, zone modal, smooth scroll with navbar offset, and navbar search. There's no GSAP layer; reveal uses only IntersectionObserver. Blocks are delimited with `/* ======================== NAME ======================== */` (this repo uses `/* */`, not `//`).
- `styles.css`: section order mirrors the HTML. All media queries live together near the end, at **960px / 660px / 440px**. These differ from the global 900/600 convention; keep this site's values. The navbar search has its own responsive block after them.
- `img/`: zone photos, carousel images, and the hero video. `video2.mp4` is the compressed version the page uses. `video2-original.mp4` (~17 MB) is kept only as the source.

### Treatment zones: the data lives in two places

Each treatment zone appears in two places that must stay in sync:
1. A `.zone-card[data-zone="<key>"]` in `index.html`, with its image, short description and `$price / sesión`.
2. `zoneData['<key>']` in `script.js`, with `title`, `price`, `fullDesc`, `woman`, `man`, `prep`.

Clicking a card opens the modal (`openModal(key)`), which is filled from `zoneData` and builds the WhatsApp CTA from `WA_NUMBER`. The navbar search (`#navSearch`) filters `zoneData` by title or key. `goToZone()` scrolls to the matching card (110px offset) and flashes `.zone-card--highlight`. **Adding, removing or repricing a zone means editing both the card and the `zoneData` entry.** The promo prices in `.promos-grid` are hardcoded separately in the HTML.

### WhatsApp number

`59891504410` appears in `script.js` (`WA_NUMBER`) and twice in `index.html` (the contact card and the floating button). Update all three if it changes.

### SEO files

`robots.txt`, `sitemap.xml` (update `<lastmod>` on meaningful content changes), `favicon.svg`. The canonical URL and the `og:image` (`img/nosotros.jpeg`) are absolute URLs on the production domain.

## Style specifics

- Colors: `--primary: #779788` (sage green) plus `--primary-dark` / `--primary-light`, and `--bg` / `--bg-alt` as page backgrounds. Don't introduce colors outside `:root`.
- Fonts: Bodoni Moda (display), Josefin Sans (brand/logo typography), Inter (body).
