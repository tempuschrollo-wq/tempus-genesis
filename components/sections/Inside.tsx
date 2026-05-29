import Reveal from "../Reveal";
import InteractiveGlow from "../InteractiveGlow";
import {
  IconSword,
  IconChartLine,
  IconUsersGroup,
  IconTrophy,
  IconBook,
  IconClock,
} from "@tabler/icons-react";

const cards = [
  {
    num: "i.",
    Icon: IconSword,
    title: "Game Channels",
    desc: "Dedicated per title — boss timers, meta discussions, daily quest tracking, party calls.",
  },
  {
    num: "ii.",
    Icon: IconChartLine,
    title: "On-Chain Alpha",
    desc: "Token news, early access drops, airdrop coordination — shared by the community, for the community.",
  },
  {
    num: "iii.",
    Icon: IconUsersGroup,
    title: "Party Finder",
    desc: "Assemble your squad fast. Role-based matching for dungeons, raids, and seasonal events.",
  },
  {
    num: "iv.",
    Icon: IconTrophy,
    title: "Events & Tournaments",
    desc: "Internal competitions, leaderboards, and seasonal community events with real prizes.",
  },
  {
    num: "v.",
    Icon: IconBook,
    title: "Guides & Resources",
    desc: "Curated beginner and advanced strategy guides — maintained and refined by the community.",
  },
  {
    num: "vi.",
    Icon: IconClock,
    title: "Live Dashboards",
    desc: "Auto-posted boss schedules, game events, daily alerts — twice a day, every day.",
  },
];

export default function Inside() {
  return (
    <section id="inside" className="inside-section">
      <div className="section-bg-blobs">
        <div className="section-bg-blob"></div>
        <div className="section-bg-blob b2"></div>
      </div>
      <div className="section-frame">
        <Reveal>
          <div className="section-header">
            <div className="section-num">IV</div>
            <div className="section-meta">
              <p className="section-eye">Inside the Server</p>
              <h2 className="section-title">
                Built for <em>serious</em> players
              </h2>
              <p className="section-lead">
                Every channel has a purpose. Every role has meaning. Here&apos;s
                what waits when you join.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal stagger>
          <div className="inside-grid">
            {cards.map((c) => (
              <InteractiveGlow key={c.num} className="inside-card">
                <span className="inside-card-num">{c.num}</span>
                <div className="inside-card-icon">
                  <c.Icon size={24} />
                </div>
                <div className="inside-card-title">{c.title}</div>
                <div className="inside-card-desc">{c.desc}</div>
              </InteractiveGlow>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
