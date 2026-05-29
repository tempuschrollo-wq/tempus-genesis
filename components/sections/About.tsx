import Link from "next/link";
import Reveal from "../Reveal";
import InteractiveGlow from "../InteractiveGlow";

const pillars = [
  {
    num: "01",
    title: "Daily Active Coordination",
    desc: "Real channels per game — boss schedules, raid teams, quest tracking. No noise, no dead chat, no filler.",
  },
  {
    num: "02",
    title: "On-Chain Strategy & Alpha",
    desc: "Token analysis, early access drops, airdrop coordination, and on-chain moves — shared in real time.",
  },
  {
    num: "03",
    title: "Multi-Game Coverage",
    desc: "We follow the games that matter, across genres and chains. When a new title launches — we're already there.",
  },
  {
    num: "04",
    title: "Scholarship Program",
    desc: "We back skilled players without assets. Full lending, revenue split, and mentorship — a real opportunity, not a transaction.",
  },
];

export default function About() {
  return (
    <section id="about" className="about">
      <div className="section-bg-blobs">
        <div className="section-bg-blob"></div>
        <div className="section-bg-blob b2"></div>
      </div>
      <div className="section-frame tg-container">
        <Reveal>
          <div className="section-header">
            <div className="section-num">III</div>
            <div className="section-meta">
              <p className="section-eye">What We Stand For</p>
              <h2 className="section-title">
                Not just <em>another</em> server
              </h2>
              <p className="section-lead">
                Tempus Genesis is structured, organized, and serious about Web3
                gaming. We don&apos;t just collect members — we build players.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="about-grid">
          <Reveal stagger>
            <div className="about-pillars">
              {pillars.map((p) => (
                <InteractiveGlow key={p.num} className="about-pillar">
                  <div className="about-pillar-num">{p.num}</div>
                  <div>
                    <div className="about-pillar-title">{p.title}</div>
                    <div className="about-pillar-desc">{p.desc}</div>
                  </div>
                </InteractiveGlow>
              ))}
            </div>
          </Reveal>

          <Reveal stagger>
            <div className="about-stats">
              <InteractiveGlow className="about-stat">
                <div className="about-stat-number">1K+</div>
                <div className="about-stat-label">Community Members</div>
                <div className="about-stat-desc">
                  With 100–200 active every single day — across time zones,
                  across games.
                </div>
              </InteractiveGlow>
              <InteractiveGlow className="about-stat about-stat--link">
                <Link href="/games" className="about-stat-inner">
                  <div className="about-stat-number">40+</div>
                  <div className="about-stat-label">Web3 Games Covered</div>
                  <div className="about-stat-desc">
                    Active presence and organized participation since 2023.
                  </div>
                </Link>
              </InteractiveGlow>
              <InteractiveGlow className="about-stat">
                <div className="about-stat-number">
                  24<span style={{ fontSize: "3.5rem" }}>/</span>7
                </div>
                <div className="about-stat-label">Community Support</div>
                <div className="about-stat-desc">
                  Coordination running round the clock — no dead hours, no off
                  days.
                </div>
              </InteractiveGlow>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
