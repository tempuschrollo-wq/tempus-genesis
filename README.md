# Tempus Genesis — Web3 Gaming Community

Production-ready Next.js website untuk Tempus Genesis.

## Stack

- **Next.js 15** (App Router)
- **React 18** + **TypeScript**
- **next/font** — font optimization untuk Fraunces, Inter, JetBrains Mono
- **next/image** — image optimization otomatis (AVIF, WebP)
- **@tabler/icons-react** — icon library
- Pure CSS (no Tailwind) — matches v8 mockup exactly

## Folder Structure

```
tempus-genesis/
├── app/
│   ├── layout.tsx          # Root layout with font loading
│   ├── page.tsx            # Main landing page
│   └── globals.css         # All styling (~900 lines)
├── components/
│   ├── Nav.tsx
│   ├── HourglassScroll.tsx
│   ├── Reveal.tsx
│   ├── SectionTransition.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── Ticker.tsx
│       ├── Games.tsx
│       ├── Scholarship.tsx
│       ├── About.tsx
│       ├── Inside.tsx
│       ├── Founders.tsx
│       ├── Contact.tsx
│       ├── Join.tsx
│       └── Footer.tsx
├── public/
│   └── assets/             # All images (logos, photos)
├── package.json
├── tsconfig.json
└── next.config.mjs
```

## Local Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev
# Buka http://localhost:3000

# Build production
npm run build
npm run start
```

## Deploy ke Vercel

**Option 1: GitHub + Vercel Dashboard (Recommended)**

1. Push project ke GitHub repo
2. Buka https://vercel.com/new
3. Import repo dari GitHub
4. Vercel auto-detect Next.js — click **Deploy**
5. Done. Custom domain bisa di-add di settings.

**Option 2: Vercel CLI**

```bash
# Install Vercel CLI
npm i -g vercel

# Di root project
vercel

# Deploy production
vercel --prod
```

## What's Different from HTML mockup

1. **Font loading instant** — `next/font` inline kan font CSS jadi gak ada FOUT
2. **Image optimization** — `next/image` otomatis serve AVIF/WebP, lazy load, dan responsive sizing
3. **Component-based** — Easy maintenance, edit per section
4. **TypeScript** — Type safety, autocomplete
5. **SEO-ready** — Metadata di layout, OpenGraph tags
6. **Production-grade** — SSR/SSG, hydration handled properly

## Editing Content

- **Games list** — `components/sections/Games.tsx` (array `games`)
- **Founders** — `components/sections/Founders.tsx` (array `founders`)
- **Scholarship benefits & steps** — `components/sections/Scholarship.tsx`
- **About pillars** — `components/sections/About.tsx`
- **Inside cards** — `components/sections/Inside.tsx`
- **Ticker messages** — `components/sections/Ticker.tsx`
- **Hero copy** — `components/sections/Hero.tsx`
- **Metadata / SEO** — `app/layout.tsx`

## Notes

- Discord invite link is set to `https://discord.gg/nwRam2xxFZ`
- Form contact belum connected ke backend — perlu setup API route atau form service (Formspree, Resend, dll)

---

Built by **Mowen Solutions** · Developed by [@Kagalito](https://x.com/Kagalito)
