import Image from "next/image";
import Reveal from "../Reveal";
import InteractiveGlow from "../InteractiveGlow";

const games = [
  { name: "RavenQuest", genre: "MMORPG · Web3", img: "raven-logo.png", status: "live" },
  { name: "Big Time", genre: "Action RPG · NFT", img: "bigtime-logo.jpg", status: "live" },
  { name: "Thetan Arena", genre: "MOBA · Esports", img: "thetanarena-logo.jpg", status: "live" },
  { name: "Call of the Void", genre: "FPS · Web3", img: "callofthevoyd-logo.png", status: "live" },
  { name: "Blast Royale", genre: "Battle Royale · P2E", img: "blastroyale-logo.jpg", status: "live" },
  { name: "The Desolation", genre: "Survival · Web3", img: "thedesolation-logo.jpg", status: "live" },
  { name: "Cambria", genre: "RPG · Web3", img: "cambria-logo.png", status: "past" },
  { name: "Sunflower Land", genre: "Farming · DeFi", img: "sunflowerland-logo.png", status: "past" },
  { name: "MapleStory Universe", genre: "MMORPG · NFT", img: "maplestory-logo.png", status: "past" },
];

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
                coordination to live-season raids — Tempus Genesis has been an
                active presence across the most significant Web3 titles.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal stagger>
          <div className="games-layout">
            {games.map((g, i) => (
              <InteractiveGlow key={g.name} className="game">
                <div className="game-cover">
                  <Image
                    src={`/assets/${g.img}`}
                    alt={g.name}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                  />
                  <span
                    className={`game-cover-status game-status-${g.status}`}
                  >
                    <span className="game-dot"></span>
                    {g.status === "live" ? "Live" : "Past"}
                  </span>
                  <span className="game-cover-num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="game-info">
                  <div className="game-name">{g.name}</div>
                  <div className="game-genre">{g.genre}</div>
                </div>
              </InteractiveGlow>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <InteractiveGlow className="more-games">
            <div className="more-games-num">+31</div>
            <div className="more-games-text">
              More titles in our history that didn&apos;t make this list.
              We&apos;ve shown up for 40+ Web3 games since 2023 — and we
              don&apos;t always announce it.
            </div>
          </InteractiveGlow>
        </Reveal>
      </div>
    </section>
  );
}
