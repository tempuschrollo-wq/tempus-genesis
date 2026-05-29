// Single source of truth for the production origin. Defaults to the live
// .space domain (WS16); override per-environment via NEXT_PUBLIC_SITE_URL.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://tempusgenesis.space";
