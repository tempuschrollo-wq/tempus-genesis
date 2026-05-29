# Tempus Genesis — Polish Spec v3 (WS11–WS16)

Source: post-launch QA (desktop + mobile) on https://tempusgenesis.space + Ndut review.
Drop this into `/docs`. Feed ONE workstream per IDE prompt. Each ends in **STOP**.

## GOLDEN WORKFLOW (unchanged)
- ONE workstream per prompt → `npm run lint && npm run build` → **normal-viewport** visual QA → commit → next.
- NORMAL-viewport screenshots only. NOT full-page stitched captures (false "missing content" artifacts).
- IDE must `ls` / `grep` first and use EXACT filenames.
- "Build clean ≠ visually correct." Always eyeball QA.

## RECOMMENDED ORDER
WS11 (quick win, wajib) → WS12 (big mobile pass) → WS13 (pre-Founders area) → WS14 (ticker) → WS15 (hero) → WS16 (OG fix — independent, slot anytime) → Final QA sweep.

## DESIGN GUARDRAILS (all WS)
- Colors: gold `#D4AF37`, ink `#050505`, bone `#ede4cd`. No neon, no new colors.
- Fonts: Cinzel (hero title), Fraunces (display), Inter (body), JetBrains Mono (labels).
- Emblem: layered tilt-parallax ONLY. NEVER 360° spin, NEVER `backface-visibility:hidden`. Keep reduced-motion fallback.
- Use the existing spacing-token system (`--section-y`, `--section-y-tight`, `--block-gap`, `--container-max` 1320px). Don't hardcode random px where a token exists.

---

## WS11 — Navbar brand → home + nav readability

**GOAL:** Brand cluster returns to `/` from every route; nudge nav-link readability up slightly without losing muted-premium feel.

**STEPS**
1. Locate the Nav component (likely `components/Nav.tsx`).
2. Wrap the TG logo + "Tempus Genesis" wordmark in a single Next.js `<Link href="/">` (one clickable target). Add `aria-label="Tempus Genesis — home"`. Must work from `/games`, `/scholarship`, `/media-kit`, and `/`.
3. Nav links resting state is slightly too dim. Raise resting color/opacity ONE small step brighter (e.g. ~0.55–0.6 → ~0.7 alpha of bone). Keep hover state distinct. Do NOT go full-bone/bright — preserve muted premium.

**CONSTRAINTS:** Nav component only. Don't touch section layouts. Stay within tokens.

**ACCEPTANCE**
- Click brand from each of the 4 routes → lands on `/`.
- Nav text subtly more legible; hover still reads clearly.

**QA:** normal-viewport screenshots, desktop + mobile, from `/games` (confirm brand link works off-home).
Run lint+build. Commit: `WS11: navbar brand→home link + nav readability`. **STOP.**

---

## WS12 — Mobile spacing audit & blank-space cleanup

**GOAL:** Kill mobile scroll fatigue. Content sections must be content-driven height on mobile, not full-viewport. Tighten oversized mobile padding/divider margins on `/`, `/scholarship`, `/media-kit`. **`/games` mobile must NOT regress** (it is the reference for "good").

**AUDIT FIRST (report findings before editing)**
1. `grep` for: `100vh`, `min-h-screen`, `h-screen`, `min-height`, and usages of `--section-y` / `--section-y-tight` / `--block-gap`.
2. Identify which CONTENT sections (not the hero) force full-viewport height or huge vertical padding on mobile.
3. Check `SectionTransition` / divider components for large mobile margins.

**FIX**
4. Content sections at `100vh`/`min-h-screen`: on the mobile breakpoint switch to content-driven height with padding from `--section-y` / `--section-y-tight`. Desktop unchanged. (Hero may keep its full height.)
5. Reduce mobile-only vertical padding + divider margins where they create dead space. Prefer mobile-scoped overrides. If you change a global token's mobile value, you MUST re-QA `/games`.
6. Each section heading must sit close to its content — no heading floating above a tall empty gap.
7. Target the known offenders: `/scholarship` region after the scholarship intro/"entry fee" block; `/media-kit` region after the asset/logo cards before footer; homepage inter-section gaps.

**EXCLUDE:** the decorative area immediately BEFORE the Founders section — handled in WS13. Leave it alone here.

**CONSTRAINTS:** Desktop layouts unchanged (mobile-scoped pass). `/games` mobile must not regress. Keep token system.

**ACCEPTANCE**
- Scrolling `/`, `/scholarship`, `/media-kit` on mobile shows no large empty viewport-height gaps between content.
- `/games` mobile visually identical to before.

**QA:** normal-viewport MOBILE screenshots of `/`, `/scholarship`, `/media-kit`, AND `/games` (regression check).
Run lint+build. Commit: `WS12: mobile spacing audit + blank-space cleanup`. **STOP.**

---

## WS13 — Homepage decorative area before Founders

**GOAL:** The visual/decorative block between "Inside the Server" (IV) and "Founders" (V) reads as a long empty stretch on desktop AND mobile. Make it intentional OR reduce it.

**STEPS**
1. Locate the section/div rendered between "Inside the Server" and "Founders" on the homepage.
2. Decide per actual content:
   - **If it carries decorative intent** (transition motif / emblem / divider statement): tighten its height and make the decoration deliberate + centered so it reads as a designed beat. A single kicker line / motif consistent with the design system is fine.
   - **If it's effectively empty:** significantly reduce its height (both viewports) so Founders follows Inside-the-Server with a clean, compact transition.
3. Apply mobile reduction more aggressively than desktop.

**CONSTRAINTS:** Stay within tokens/fonts. No neon. Don't disturb adjacent sections' internal spacing.

**ACCEPTANCE**
- Desktop: pre-Founders area feels like an intentional beat, not a void.
- Mobile: no oversized empty gap before Founders.

**QA:** normal-viewport screenshots, desktop + mobile, of the Inside→Founders transition.
Run lint+build. Commit: `WS13: intentional/compacted decorative area before Founders`. **STOP.**

---

## WS14 — Ticker clipping fix (desktop)

**GOAL:** The bottom marquee/ticker ("01 Built by players… ◆ 02 …") sits too tight / risks clipping on desktop. Fix height, overflow, and bottom spacing.

**STEPS**
1. Locate the ticker/marquee component.
2. Check: container height vs content height; overflow (horizontal hidden for the scroll, but NO vertical clipping of glyphs / the ◆ separators); bottom spacing so it isn't flush against the viewport edge or the next block.
3. Give line-height / vertical padding enough breathing room — confirm descenders and the diamond aren't cut.

**CONSTRAINTS:** Don't change ticker content or animation behavior — only its box (height/overflow/spacing). Stay within design system.

**ACCEPTANCE:** Ticker fully visible, vertically centered in its band, comfortable bottom spacing, no clipping at standard desktop widths.

**QA:** normal-viewport desktop screenshot of the ticker; quick mobile glance for regression.
Run lint+build. Commit: `WS14: ticker clipping/height/spacing fix`. **STOP.**

---

## WS15 — Hero title scale + emblem tone-down (desktop polish)

**GOAL:** Two CSS-only refinements on the desktop hero. NO asset changes.

**STEPS**
1. "TEMPUS GENESIS" hero title is slightly too dominant on desktop. Reduce font-size by ~5–8% at desktop breakpoints only. Mobile size unchanged (re-check it still balances). Keep Cinzel + current tracking.
2. TG emblem reads too white / sticker-like against the dark-gold ambience. CSS-only tone-down so it integrates: e.g. slight `filter` (brightness/contrast down a touch + warm gold wash via subtle overlay/multiply or hue), or reduced opacity + soft gold glow — whatever reads best. Must stay clearly visible — tone down, don't hide.
3. DO NOT replace or re-export the asset. CSS only. Keep tilt-parallax (no 360°, no `backface-visibility:hidden`); reduced-motion fallback intact.

**CONSTRAINTS:** CSS only; no asset edits, no markup restructure. Tokens only.

**ACCEPTANCE**
- Hero title less overpowering but still the focal point.
- Emblem feels part of the scene, not a pasted sticker; tilt-parallax + reduced-motion fallback still work.

**QA:** normal-viewport desktop screenshot of hero; mobile glance for regression.
Run lint+build. Commit: `WS15: hero title scale + emblem CSS tone-down`. **STOP.**

---

## WS16 — Fix production domain in metadata (OG/Twitter)  [independent]

**CONTEXT:** Live site is `https://tempusgenesis.space`, but metadata currently emits `https://tempusgenesis.com` — `og:url`, `og:image`, and `twitter:image` all point to `.com`. Shared links fetch the OG image from the wrong domain → broken previews.

**STEPS**
1. Find `metadataBase` (likely `app/layout.tsx`) and any hardcoded `tempusgenesis.com`.
2. Set `metadataBase: new URL("https://tempusgenesis.space")`. Replace all `tempusgenesis.com` → `tempusgenesis.space` in metadata (og:url, og:image, twitter:image, og site url).
3. Confirm the OG image resolves: `https://tempusgenesis.space/assets/OG-share.png` returns 200.

**ACCEPTANCE**
- Rendered metadata shows `og:url` and `og:image` on the `.space` domain.
- OG image URL loads.

**QA:** check deployed page source or an OG/link-preview validator → `.space` everywhere.
Run lint+build. Commit: `WS16: fix metadataBase + OG/Twitter domain to .space`. **STOP.**

---

## FINAL QA ROUTE SWEEP (after WS11–WS16)
Normal-viewport screenshots, desktop + mobile, of: `/`, `/games`, `/scholarship`, `/media-kit`.
Confirm: no mobile blank-space; brand link works on all routes; ticker uncut; hero balanced; emblem integrated; OG preview valid.
Then proceed to pre-launch polish backlog (themed `/404`, `sitemap.xml` + `robots.txt`, Lighthouse on photo-heavy galleries).
