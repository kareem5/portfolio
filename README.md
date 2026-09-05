# Kareem Ahmed — Portfolio

Personal portfolio site for **Kareem Mohammed Ahmed**, Senior iOS Engineer & Mobile Architect.

**Live site:** [kareemahmed.dev](https://kareemahmed.dev)

## Overview

A static, single-page portfolio focused on experience, technical writing, and contact. Built for GitHub Pages with a light/dark theme and a layout inspired by senior-engineer personal sites (sidebar navigation + case-style experience).

## Sections

- **About** — background and profile
- **Experience** — roles at NBK, Tatayab, Glovo, Tap Payments, Carriage / Delivery Hero
- **Skills** — languages, architecture, tooling
- **Writing** — selected [Medium](https://medium.com/@kareem-ahmed) articles
- **Contact** — email and phone

## Tech stack

- HTML, CSS, and vanilla JavaScript (no frameworks)
- Google Fonts (Outfit, Source Sans 3)
- Hosted on [GitHub Pages](https://pages.github.com/) with a custom domain

## Local development

Open `index.html` in a browser, or serve the folder:

```bash
# Python
python3 -m http.server 8000

# or Node
npx serve .
```

Then visit `http://localhost:8000`.

## Project structure

```
.
├── index.html          # Page markup
├── index.css           # Layout, themes, components
├── index.js            # Theme toggle, scroll spy, reveals
├── CNAME               # Custom domain (kareemahmed.dev)
├── images/             # Profile photo and assets
└── Kareem Ahmed CV Updated.pdf
```

## Custom domain

DNS for `kareemahmed.dev` points to GitHub Pages. The `CNAME` file in this repo must remain as `kareemahmed.dev` for the custom domain to keep working.

## License

See [LICENSE.md](LICENSE.md).
