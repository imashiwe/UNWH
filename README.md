# United With Heaven

A static ministry website built with vanilla HTML, CSS, and JavaScript. No framework, no build step — edit a file and refresh.

**Live:** [Deployed on Vercel](https://github.com/imashiwe/UNWH) · **Repo:** [github.com/imashiwe/UNWH](https://github.com/imashiwe/UNWH)

---

## Local development

**With live reload** (browser refreshes automatically on save):
```bash
npx browser-sync start --server --files "**/*.html,**/*.css,**/*.js" --port 3000 --no-open
```

**Plain server:**
```bash
npx serve . --listen 3000
```

Then open [http://localhost:3000](http://localhost:3000).

---

## Tech stack

| Layer | Choice |
|---|---|
| Markup | Semantic HTML5 |
| Styles | Vanilla CSS (custom properties, CSS Grid, Flexbox) |
| Scripts | Vanilla JS ES6 — no dependencies |
| Fonts | Google Fonts — Cormorant Garamond · Cinzel · Lora |
| Hosting | Vercel (static) |
| CI/CD | Auto-deploy on push to `main` |

---

## Project structure

```
index.html          — single page, all sections in DOM order
css/
  reset.css         — box model normalisation
  variables.css     — all design tokens (colours, fonts, spacing)
  typography.css    — type scale and utility classes
  layout.css        — container and section primitives
  components.css    — every component, in DOM order
  animations.css    — scroll-reveal system (.reveal / .revealed)
  responsive.css    — breakpoints at 1023px and 640px
js/
  animations.js     — IntersectionObserver scroll reveals
  main.js           — nav scroll state, mobile drawer, carousel, form
  parallax.js       — reserved (hero is portrait layout, not parallax)
images/
  hero-doors.png    — hero portrait (aspect-ratio 2/3, crop 50% 8%)
```

---

## Design system

All tokens live in `css/variables.css`. Change colours and fonts there only.

| Token | Value | Role |
|---|---|---|
| `--color-bg` | `#0E0707` | Page background |
| `--color-bg-card` | `#281818` | Card / raised surfaces |
| `--color-accent` | `#C9975A` | Gold — links, borders, CTAs |
| `--color-crimson` | `#7A1515` | Secondary accent, hover effects |
| `--color-burgundy` | `#5C0F0F` | Newsletter section background |
| `--color-text` | `#F5F0EA` | Primary text (cream) |
| `--font-display` | Cormorant Garamond | Headings, weight 300 |
| `--font-label` | Cinzel | Nav, buttons, tags (always uppercase) |
| `--font-body` | Lora | Body copy |

Cards use a maximum `border-radius` of 4px — no rounded pills.

---

## Page sections

| Section | ID | Notes |
|---|---|---|
| Navigation | `#nav` | Fixed; transparent → opaque on scroll; mobile slide-in drawer |
| Hero | `#hero` | 2-column: text left, portrait right with double CSS frame |
| Mission strip | `#mission` | Charcoal band + four commitment pillars |
| Teaching pillars | `#teaching` | Seamless grid with 1px gold dividers; crimson top-border on hover |
| Music | `#music` | Three cards with gradient covers and play buttons |
| Devotional | `#devotional` | Left-bordered scripture blockquote + reflection copy |
| Books | `#books` | Horizontal scroll carousel with prev/next controls |
| Community | `#community` | Burgundy background; flush email signup form |
| Footer | `#footer` | Brand column + three nav columns |

---

## Updating content

All content is inline in `index.html`. Replace placeholder text directly — no templating system.

**Hero portrait** — drop a replacement image into `images/` and update the `src` in the `.portrait-wrap img` element. Keep `object-position: 50% 8%` to maintain the crop.

**Colours / fonts** — edit `css/variables.css` only.

**Adding a section** — add the HTML to `index.html`, add a CSS block to the appropriate place in `css/components.css`, and add responsive overrides to `css/responsive.css`.

---

## Deployment

The repo is connected to Vercel. Every push to `main` triggers an automatic redeploy (~30 seconds).

```bash
git add -A
git commit -m "describe your change"
git push
```

No build command or output directory configuration is needed — Vercel serves the repo root as a static site.
