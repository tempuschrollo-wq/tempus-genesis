import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";
import HeroEmblem from "../HeroEmblem";
import DiscordPresence from "../DiscordPresence";

const DISCORD_INVITE_URL = "https://discord.gg/nwRam2xxFZ";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-bg-grid"></div>
        <div className="hero-bg-blob-1"></div>
        <div className="hero-bg-blob-2"></div>
        {[
          { left: "8%", duration: "9s", delay: "0s" },
          { left: "18%", duration: "12s", delay: "2s" },
          { left: "30%", duration: "11s", delay: "4s" },
          { left: "42%", duration: "10s", delay: "1s" },
          { left: "55%", duration: "13s", delay: "5s" },
          { left: "68%", duration: "11s", delay: "3s" },
          { left: "80%", duration: "9s", delay: "6s" },
          { left: "92%", duration: "12s", delay: "2.5s" },
        ].map((p, i) => (
          <div
            key={i}
            className="sand-particle"
            style={{
              left: p.left,
              animationDuration: p.duration,
              animationDelay: p.delay,
            }}
          ></div>
        ))}
      </div>

      <span className="hero-mark tl">
        N° 001 / TG
        <br />
        <span style={{ color: "rgba(212,175,55,0.25)" }}>Web3 · Gaming</span>
      </span>
      <span className="hero-mark tr">
        Est. MMXXIII
        <br />
        <span style={{ color: "rgba(212,175,55,0.25)" }}>Worldwide</span>
      </span>
      <span className="hero-mark bl">Built by players, for players</span>
      <span className="hero-mark br">Scroll to descend ↘</span>

      <div className="hero-inner tg-container">
      <div className="hero-left">
        <div className="hero-eyebrow">
          <span className="hero-eyebrow-line"></span>
          <span className="hero-eyebrow-text">A Web3 Gaming Community</span>
          <span className="hero-eyebrow-dot"></span>
        </div>
        <h1 className="hero-title">
          <span className="l1">Tempus</span>
          <span className="l2">Genesis</span>
        </h1>
        <p className="hero-sub">Where Time Meets Onchain</p>
        <p className="hero-desc">
          An organized community of Web3 players who take the game seriously.
          Daily coordination, on-chain alpha, and a scholarship program that
          opens the door for anyone with skill.
        </p>
        <div className="hero-actions">
          <a
            className="btn btn-primary"
            href={DISCORD_INVITE_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Enter the Server <IconArrowRight size={14} />
          </a>
          <Link className="btn btn-ghost" href="/games">
            View Portfolio
          </Link>
        </div>
        <DiscordPresence />
      </div>

      <div className="hero-right">
        <div className="hero-stage">
          <div className="stage-ring stage-ring-1"></div>
          <div className="stage-ring stage-ring-2"></div>
          <div className="stage-ring stage-ring-3"></div>
          <div className="stage-compass"></div>
          <span className="stage-cardinal n">N</span>
          <span className="stage-cardinal s">S</span>
          <span className="stage-cardinal e">E</span>
          <span className="stage-cardinal w">W</span>
          <div className="stage-corner tl"></div>
          <div className="stage-corner tr"></div>
          <div className="stage-corner bl"></div>
          <div className="stage-corner br"></div>
          <HeroEmblem />
        </div>
      </div>

      </div>

      <div className="hero-scroll-cue">Scroll</div>
    </section>
  );
}
