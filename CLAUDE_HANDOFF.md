# Claude Handoff - Tempus Genesis

Last inspected: 2026-05-29

## 1. Project Overview

- Project name: Tempus Genesis
- Purpose: Web3 gaming community website / landing page.
- Current stack: Next.js 15, React 18, TypeScript.
- Current status: The homepage / landing page exists and has passed lint, build, and browser QA in the current Codex session. The full site is not finished yet.
- Important caveat: The current implementation is still a landing page, not a full multi-page production site.

## 2. Current Folder Structure

Root:

- `app/` - Next.js App Router entry files.
- `components/` - shared components and section components.
- `public/assets/` - all current image assets for logo, game logos, and founder portraits.
- Config files - package, TypeScript, ESLint, Next.js, gitignore, and generated Next type files.

Key files:

- `app/layout.tsx` - root layout, metadata, and Google font loading through `next/font/google`.
- `app/page.tsx` - homepage composition. Renders Nav, HourglassScroll, Hero, Ticker, Games, Scholarship, About, Inside, Founders, Contact, Join, and Footer.
- `app/globals.css` - global design system, layout, animation, responsive styling, card hover effects, hero logo animation, forms, and section styling.
- `components/Nav.tsx` - fixed top navigation with internal anchors and Discord CTA.
- `components/HourglassScroll.tsx` - client-side scroll progress hourglass indicator.
- `components/Reveal.tsx` - client-side IntersectionObserver reveal animation wrapper.
- `components/InteractiveGlow.tsx` - client-side reusable smoky card / cursor glow wrapper.
- `components/SectionTransition.tsx` - decorative divider between major sections.
- `components/sections/` - homepage section components:
  - `Hero.tsx`
  - `Ticker.tsx`
  - `Games.tsx`
  - `Scholarship.tsx`
  - `About.tsx`
  - `Inside.tsx`
  - `Founders.tsx`
  - `Contact.tsx`
  - `Join.tsx`
  - `Footer.tsx`
- `public/assets/` - current assets:
  - `TG-logo.png`
  - `TG-logo1.png`
  - `bigtime-logo.jpg`
  - `blastroyale-logo.jpg`
  - `callofthevoyd-logo.png`
  - `cambria-logo.png`
  - `maplestory-logo.png`
  - `murkz.jpg`
  - `raven-logo.png`
  - `revolutionro.jpg`
  - `sunflowerland-logo.png`
  - `sweet.jpg`
  - `thedesolation-logo.jpg`
  - `thetanarena-logo.jpg`
- `package.json` - scripts and dependencies. Next is currently `15.5.18`.
- `next.config.mjs` - strict mode, image formats, and `outputFileTracingRoot`.
- `.eslintrc.json` - basic Next.js ESLint config.
- `tsconfig.json` - strict TypeScript config with `@/*` path alias.
- `README.md` - older project notes. Some wording may be stale, but it does include the current Discord invite and credits.

## 3. Design System / Visual Direction

The site uses a black/gold luxury Web3 aesthetic. Keep it premium, smoky, ancient, and restrained. Avoid bright neon gaming-template visuals.

Main colors in `app/globals.css`:

- Gold: `#D4AF37`
- Ink / black: `#050505`
- Bone text: `#ede4cd`
- Supporting values include `--ink-soft`, `--gold-bright`, `--bone-dim`, `--bone-mute`, and gold-tinted borders.

Fonts:

- Cinzel Bold is loaded as `--font-cinzel` and used specifically for the main hero title.
- Fraunces is used for display and section headings.
- Inter is used for body text.
- JetBrains Mono is used for labels, nav, metadata, buttons, and small uppercase UI text.

Visual features currently implemented:

- Asymmetric hero layout.
- Rotating 3D TG logo / emblem in the hero.
- Subtle fake 3D logo plate with gold rim light and depth layers.
- Smoky card atmosphere through `InteractiveGlow`.
- Gold cursor / hover glow on card-like surfaces.
- Sand particles in the hero.
- Hourglass scroll indicator.
- Section transition dividers.
- Scroll reveal animation.
- Animated gradient blobs / ambient background glow.

## 4. Current Homepage Sections

### Nav

- File: `components/Nav.tsx`
- Purpose: Fixed site navigation.
- Contains: Mini TG logo, brand text, internal anchors to Portfolio, Scholarship, Manifesto, Founders, Contact.
- Important CTA: `Enter Server` links to Discord invite.

### Hero

- File: `components/sections/Hero.tsx`
- Purpose: First impression and primary CTA.
- Contains: Eyebrow "A Web3 Gaming Community", hero title "Tempus Genesis", subtitle "Where Time Meets Onchain", short community description, rotating TG emblem, sand particles, compass/ring decoration, and scroll cue.
- Important links/buttons:
  - `Enter the Server` -> Discord invite.
  - `View Portfolio` -> `#games`.

### Ticker

- File: `components/sections/Ticker.tsx`
- Purpose: Moving credibility / vibe strip.
- Messages include:
  - Built by players, for players
  - Where strategy meets the meta
  - Daily coordination, zero noise
  - Skill is the only entry fee
  - 40+ games, one community
  - Worldwide, always online
  - Real players, real strategy
  - Your next move starts here

### Games

- File: `components/sections/Games.tsx`
- Purpose: Shows current and past Web3 game participation.
- Notable content: "Games we've shown up for", 40+ game history, 9 visible game cards, and a `+31` more games card.
- Card styling uses `InteractiveGlow`.

### Scholarship

- File: `components/sections/Scholarship.tsx`
- Purpose: Explains scholarship program.
- Notable content:
  - Heading: "Skill is the only entry fee"
  - Benefits: Asset Lending, Revenue Split, Coaching & Mentorship, Path to Independence.
  - Flow: Apply via Discord, Get Matched, Play & Earn, Graduate.
- Important CTA: `Apply for Scholarship` -> Discord invite.

### About

- File: `components/sections/About.tsx`
- Purpose: Manifesto / positioning section.
- Notable content:
  - Heading: "Not just another server"
  - Pillars: Daily Active Coordination, On-Chain Strategy & Alpha, Multi-Game Coverage, Scholarship Program.
  - Stats: 1K+ Community Members, 40+ Web3 Games Covered, 24/7 Community Support.

### Inside

- File: `components/sections/Inside.tsx`
- Purpose: Shows what members get inside the Discord/community.
- Cards:
  - Game Channels
  - On-Chain Alpha
  - Party Finder
  - Events & Tournaments
  - Guides & Resources
  - Live Dashboards

### Founders

- File: `components/sections/Founders.tsx`
- Purpose: Founder profiles.
- Founders:
  - Murkz - `@BitPixelCapsule`
  - Revolutionro - `@TG_Revo`
  - Sweet - `@Sweetfn8`
- Each card uses an image from `public/assets/` and links to the founder's X profile.

### Contact

- File: `components/sections/Contact.tsx`
- Purpose: Contact channels plus basic client-side contact form.
- Contact channels:
  - Email
  - Twitter / X
  - Discord
  - Twitch
- Form fields:
  - Your name
  - Email address
  - Discord handle optional
  - Reason for contact select
  - Your message
- Important behavior: The form is client-side, prevents default submit, resets the form, and shows a success message.

### Join

- File: `components/sections/Join.tsx`
- Purpose: Final CTA section.
- Contains: "Your next Web3 move starts here", member/activity copy, Discord CTA, and social links.
- Important links:
  - Discord invite
  - Twitter / X
  - Twitch
  - Email

### Footer

- File: `components/sections/Footer.tsx`
- Purpose: Footer navigation, socials, legal placeholders, and credits.
- Contains: brand tagline, Connect links, Community links, Legal labels, copyright.
- Credits: Built by Mowen Solutions, developed by `@KAGALI`.

## 5. Content Data

Games currently shown:

- RavenQuest - MMORPG / Web3 - live
- Big Time - Action RPG / NFT - live
- Thetan Arena - MOBA / Esports - live
- Call of the Void - FPS / Web3 - live
- Blast Royale - Battle Royale / P2E - live
- The Desolation - Survival / Web3 - live
- Cambria - RPG / Web3 - past
- Sunflower Land - Farming / DeFi - past
- MapleStory Universe - MMORPG / NFT - past

Founders and handles:

- Murkz - `@BitPixelCapsule` - `https://x.com/BitPixelCapsule`
- Revolutionro - `@TG_Revo` - `https://x.com/TG_Revo`
- Sweet - `@Sweetfn8` - `https://x.com/Sweetfn8`

Social / contact links:

- Discord invite URL: `https://discord.gg/nwRam2xxFZ`
- Twitter / X URL: `https://twitter.com/TempusGenesisW3`
- Twitch URL: `https://twitch.tv/tempusgenesisw3`
- Email: `tempusgenesis@gmail.com`
- Email href: `mailto:tempusgenesis@gmail.com`

Credits:

- Built by Mowen Solutions.
- Developed by `@KAGALI`.
- Developer link: `https://x.com/Kagalito`

## 6. Recent QA Fixes Already Completed

These fixes are already present in the current codebase:

- Contact form made client-side with `"use client"`.
- Contact submit success feedback added.
- Contact select dropdown readability fixed with dark option styling.
- Dead CTA buttons changed to links.
- Discord links updated to `https://discord.gg/nwRam2xxFZ`.
- Hero title changed to Cinzel Bold.
- Hero logo animation smoothed.
- Hero logo given subtle fake 3D depth / plate styling.
- Cards given smoky/gold hover treatment through `InteractiveGlow`.
- Next upgraded to `15.5.18`.
- ESLint config added.
- Stray wrong folder from an earlier command was removed, if present.
- `outputFileTracingRoot` added in `next.config.mjs`.

## 7. Verification Status

Latest known verification from the current Codex session:

- `npm run lint` passed.
- `npm run build` passed.
- Local server returned HTTP 200 on `localhost:3000`.
- Desktop and mobile browser QA were checked.
- 390px mobile hero title did not overflow.
- Contact success state works.
- Discord links checked as correct in Nav, Hero, Scholarship, Join, Contact, Footer, and README.
- No known app-side visual caveats.

Notes:

- Browser tooling produced some external/plugin noise during QA in the session. It did not appear to be an app-side runtime error.
- During final handoff verification, one request to the already-running dev server briefly returned 500, then immediate retries returned 200. Treat this as a transient dev-server check unless it reappears.
- If Claude resumes in a new environment, rerun lint/build and browser checks before making deployment decisions.

## 8. Current Git / Deployment Status

- This is not production-launched yet.
- The website should not be considered finished.
- GitHub push/deploy may still need confirmation by the user.
- Do not rush production deployment.
- A Vercel preview can be used later for QA, but the next priority is continuing development.
- Current Git status at handoff creation: `CLAUDE_HANDOFF.md` is untracked. Inspect repo state again before commit, push, or deploy.

## 9. Remaining Work / Roadmap

Recommended page priority:

1. `/scholarship`
   - Build a full scholarship program page with requirements, application flow, revenue split explanation, FAQ, eligibility, and clear Discord application CTA.
2. `/games`
   - Build a portfolio/library page for all games, including current/past status, categories, game cards, filters, and stronger proof of activity.
3. `/events`
   - Build an events page for tournaments, community nights, raids, calendars, and recap content.
4. `/updates` or `/blog`
   - Build a content/news page for announcements, game updates, alpha notes, and community recaps.
5. `/team`
   - Build a fuller team/founders page with roles, founder bios, social links, and possibly contributor/moderator structure.

## 10. Recommended Next Step for Claude

Claude should:

1. Review the current homepage code and this handoff document.
2. Confirm repo state, especially Git status and any uncommitted changes.
3. Start with the `/scholarship` page first.
4. Keep the existing visual language consistent: black/gold, smoky, premium, ancient, not neon.
5. Avoid overbuilding deployment until the core pages are done.

Suggested implementation approach for `/scholarship`:

- Reuse current section patterns, typography, `InteractiveGlow`, `Reveal`, and section framing.
- Keep Discord application CTA pointed to `https://discord.gg/nwRam2xxFZ`.
- Add the page through the App Router with focused, maintainable components.
- Run lint/build and browser QA after implementation.

## 11. Important Working Style Notes

- The user prefers practical, direct guidance.
- The user calls Claude "Ndut", GPT "Pipit", Gemini "Gento", and Claude Code/Codex "Codex".
- The user wants controlled iteration, not rushed deploy.
- Keep prompts and implementation steps concise when possible.
- Preserve the premium black/gold smoky aesthetic.
- Avoid over-neon gaming-template visuals.
- When uncertain, state uncertainty clearly instead of guessing.
