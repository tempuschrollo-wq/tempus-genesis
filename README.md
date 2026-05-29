# Tempus Genesis

Website for Tempus Genesis, a Web3 gaming community. Built with Next.js.

## Stack

- Next.js 15 (App Router)
- React 18
- TypeScript 5
- Plain CSS (no UI framework)
- @tabler/icons-react for icons

## Prerequisites

- Node.js 18.18 or later
- npm

## Setup

```
git clone https://github.com/tempuschrollo-wq/tempus-genesis.git
cd tempus-genesis
npm install
npm run dev
```

The dev server runs at http://localhost:3000.

## Scripts

- `npm run dev` starts the development server
- `npm run build` creates a production build
- `npm run start` serves the production build
- `npm run lint` runs ESLint via next lint

## Environment variables

Both are optional and read at build time.

- `NEXT_PUBLIC_SITE_URL` sets the production origin used for metadata, Open Graph URLs, the sitemap, and robots. Defaults to `https://tempusgenesis.space`.
- `NEXT_PUBLIC_GSC_VERIFICATION` sets the Google Search Console verification token. When set, it adds the `google-site-verification` meta tag. When unset, no tag is emitted.

## Project structure

```
app/                 App Router routes, layout, and metadata
  page.tsx           Home
  games/             Game library
  scholarship/       Scholarship program
  media-kit/         Brand assets
  privacy/           Privacy policy
  terms/             Terms of service
  api/discord/       Discord widget presence endpoint
  sitemap.ts         Sitemap
  robots.ts          robots.txt
  globals.css        Global styles and design tokens
components/          Shared and section components
  sections/          Page sections (Hero, Games, Contact, Footer, and others)
lib/site.ts          Shared SITE_URL constant
public/assets/       Images (game logos at the root, page assets under page/)
```

## Deployment

Deployed on Vercel at https://tempusgenesis.space. Vercel detects Next.js and runs the build automatically. Set `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_GSC_VERIFICATION` in the Vercel project to override the defaults.

## Credits

Built by Mowen Solutions. Developed by @KAGALI.
