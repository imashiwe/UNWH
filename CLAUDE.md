# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

**Serve locally with live reload (browser auto-refreshes on save):**
```bash
npx browser-sync start --server --files "**/*.html,**/*.css,**/*.js" --port 3000 --no-open
```

**Plain static server (no live reload):**
```bash
npx serve . --listen 3000
```

**Commit and push to GitHub:**
```bash
git add -A && git commit -m "message" && git push
```

There is no build step, bundler, or framework. Changes to any file are immediately reflected on refresh.

## Architecture

The entire site is **one page: `index.html`**. All styles are split across seven CSS files loaded in order; all JavaScript is three small files loaded with `defer`. The only network dependency is Google Fonts.

### CSS load order (matters — each file builds on the previous)

| File | Responsibility |
|---|---|
| `reset.css` | Box-sizing, margin/padding zero, base element normalisation |
| `variables.css` | All design tokens — edit colours, fonts, spacing, and radii **here only** |
| `typography.css` | Font stacks, heading sizes, `p`, `a`, `.label`, `.section-tag`, `.divider` |
| `layout.css` | `.container`, `.section`, `.section-header` |
| `components.css` | Every component in DOM order: buttons → nav → drawer → hero → mission strip → pillar cards → music → devotional → books → community → footer |
| `animations.css` | `.reveal` / `.revealed` scroll-reveal system and keyframes |
| `responsive.css` | Single `@media(max-width:1023px)` block and `@media(max-width:640px)` block — all responsive overrides live here, not inline |

### Design tokens (`css/variables.css`)

| Token | Value | Role |
|---|---|---|
| `--color-bg` | `#0E0707` | Page background (deep crimson-black) |
| `--color-bg-raised` / `--color-bg-card` | `#281818` | Charcoal surfaces |
| `--color-bg-card-hover` | `#3A1E1E` | Hovered card bg |
| `--color-accent` | `#C9975A` | Gold — primary accent |
| `--color-crimson` | `#7A1515` | Dark red — secondary accent, card hover top-border |
| `--color-burgundy` | `#5C0F0F` | Community/newsletter section background |
| `--color-text` | `#F5F0EA` | Cream — primary text |
| `--color-text-muted` | `#D8D0C4` | Body copy |
| `--color-text-faint` | `#A89080` | Labels, captions, muted UI |
| `--font-display` | Cormorant Garamond | All headings, weight 300–400 |
| `--font-label` | Cinzel | Nav links, buttons, tags — always uppercase |
| `--font-body` | Lora | Body text |
| `--radius-*` | max 4px | Sharp corners throughout — no pills |

### JavaScript (`js/`)

| File | Responsibility |
|---|---|
| `animations.js` | `IntersectionObserver` that adds `.revealed` to every `.reveal` element as it enters the viewport |
| `main.js` | Nav scroll state (`.scrolled` class on `#nav`), slide-in drawer (`#drawer` / `#overlay` / `#hamburger`), books carousel prev/next, community form submit feedback |
| `parallax.js` | Currently a no-op comment — hero is a 2-column layout, no full-bleed background to parallax |

### Page sections (DOM order)

1. **Nav** — fixed, transparent → opaque on scroll; desktop links inline, mobile uses right-anchored `#drawer` with `#overlay`
2. **Hero** — `min-height:100vh` 2-column grid: text left, `images/hero-doors.png` portrait right with double-frame border effect (gold outer, crimson inner)
3. **Mission strip** — charcoal band, italic mission statement, four `✦` pillars
4. **Content pillars** — seamless grid separated by 1px gold lines; each card has a `pillar-num` label and a crimson→gold top-border gradient that fades in on hover
5. **Music** — three cards with gradient placeholder covers and a play button
6. **Devotional** — left-bordered blockquote (`border-left: 3px solid var(--color-crimson)`) with Cormorant Garamond italic scripture
7. **Books** — horizontally scrollable `books-track` with prev/next buttons
8. **Community** — burgundy background, flush email input + submit button (no gap, no rounded corners)
9. **Footer** — `grid-template-columns: 1.4fr repeat(3, 1fr)` brand + three nav columns

### Hero portrait

`images/hero-doors.png` must render with `object-fit: cover; object-position: 50% 8%` on an `aspect-ratio: 2/3` container. Do not change these values — they crop the watermark. The double-frame is pure CSS `::before` / `::after` on `.portrait-frame`.

### Deployment

- **GitHub:** `https://github.com/imashiwe/UNWH.git` — branch `main`
- **Vercel:** connect to the GitHub repo, no build settings required (static site auto-detected)
- Every push to `main` triggers an automatic Vercel redeploy
