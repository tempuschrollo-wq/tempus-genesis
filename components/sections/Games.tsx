import Link from "next/link";
import Reveal from "../Reveal";
import InteractiveGlow from "../InteractiveGlow";
import GameCard from "../GameCard";
import { featuredGames } from "../gamesData";

export default function Games() {
  return (
    <section id="games" className="games-section">
      <div className="section-bg-blobs">
        <div className="section-bg-blob"></div>
        <div className="section-bg-blob b2"></div>
      </div>
      <div className="section-frame tg-container">
        <Reveal>
          <div className="section-header">
            <div className="section-num">I</div>
            <div className="section-meta">
              <p className="section-eye">Game Portfolio</p>
              <h2 className="section-title">
                Games we&apos;ve <em>shown up for</em>
              </h2>
              <p className="section-lead">
                A selection from our 40+ game history. From pre-launch
                coordination to live-season raids. Tempus Genesis has been an
                active presence across the most significant Web3 titles.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal stagger>
          <div className="games-layout">
            {featuredGames.map((g, i) => (
              <GameCard key={g.name} game={g} index={i} />
            ))}
            <InteractiveGlow className="more-games">
              <div className="more-games-num">+32</div>
              <div className="more-games-text">
                More titles in our history that didn&apos;t make this list.
                We&apos;ve shown up for 40+ Web3 games since 2023, and we
                don&apos;t always announce it.
              </div>
              <Link
                href="/games"
                className="more-games-overlay"
                aria-label="View the full games library"
              />
            </InteractiveGlow>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
