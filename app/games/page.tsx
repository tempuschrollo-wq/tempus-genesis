import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/sections/Footer";
import Reveal from "@/components/Reveal";
import SectionTransition from "@/components/SectionTransition";
import GamesLibrary from "@/components/GamesLibrary";
import { historyTitles } from "@/components/gamesData";

export const metadata: Metadata = {
  title: "Game Library · Tempus Genesis",
  description:
    "The full Tempus Genesis game library. 40+ Web3 titles across live and past seasons, from featured games we actively cover to our wider history.",
  openGraph: {
    type: "website",
    siteName: "Tempus Genesis",
    title: "Game Library · Tempus Genesis",
    description:
      "40+ Web3 games across live and past seasons. Featured titles plus the full history Tempus Genesis has shown up for.",
    images: ["/assets/OG-share.png"],
  },
};

export default function GamesPage() {
  return (
    <>
      <Nav />
      <main>
        {/* 1 — HERO */}
        <section className="games-page-hero">
          <div className="section-bg-blobs">
            <div className="section-bg-blob"></div>
            <div className="section-bg-blob b2"></div>
          </div>
          <div className="games-page-hero-inner tg-container">
            <Reveal>
              <p className="section-eye games-page-eye">Game Portfolio</p>
              <h1 className="games-page-title">The full library</h1>
              <p className="games-page-sub">
                40+ Web3 titles across live and past seasons, from the games
                we actively cover today to the wider history Tempus Genesis has
                shown up for since 2023.
              </p>
            </Reveal>
          </div>
        </section>

        {/* 2 — FEATURED GRID + FILTER */}
        <section className="games-page-section">
          <div className="section-frame tg-container">
            <Reveal>
              <div className="section-header">
                <div className="section-num">i</div>
                <div className="section-meta">
                  <p className="section-eye">Featured</p>
                  <h2 className="section-title">
                    Games we&apos;ve <em>shown up for</em>
                  </h2>
                  <p className="section-lead">
                    The titles with verified status, currently active seasons
                    and past campaigns. Filter by where they stand today.
                  </p>
                </div>
              </div>
            </Reveal>
            <GamesLibrary />
          </div>
        </section>

        <SectionTransition num="◆" label="HISTORY" major />

        {/* 3 — FULL HISTORY CHIPS */}
        <section className="games-page-section is-tight">
          <div className="section-frame tg-container">
            <Reveal>
              <div className="section-header">
                <div className="section-num">ii</div>
                <div className="section-meta">
                  <p className="section-eye">The wider history</p>
                  <h2 className="section-title">
                    Everywhere else we&apos;ve <em>played</em>
                  </h2>
                  <p className="section-lead">
                    A selection of the other Web3 titles we&apos;ve taken part
                    in over the years. Names only, no live/past status claimed.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <ul className="games-history" aria-label="Other Web3 games played">
                {historyTitles.map((name) => (
                  <li key={name} className="games-chip">
                    {name}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
