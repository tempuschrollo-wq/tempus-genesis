import Reveal from "../Reveal";
import InteractiveGlow from "../InteractiveGlow";
import { IconArrowRight } from "@tabler/icons-react";

const DISCORD_INVITE_URL = "https://discord.gg/nwRam2xxFZ";

const benefits = [
  {
    num: "i.",
    title: "Asset Lending",
    desc: "NFT assets and in-game items provided by guild managers. Zero upfront cost — you play, we provide.",
  },
  {
    num: "ii.",
    title: "Revenue Split",
    desc: "Transparent profit sharing every cycle. No hidden fees, no surprises. The split is agreed up front.",
  },
  {
    num: "iii.",
    title: "Coaching & Mentorship",
    desc: "Senior players guide scholars through game mechanics, strategy, and on-chain earning optimization.",
  },
  {
    num: "iv.",
    title: "Path to Independence",
    desc: "Top performers build their own asset portfolio and graduate to full players or guild managers.",
  },
];

const steps = [
  {
    num: "01",
    title: "Apply via Discord",
    desc: "Tell us which game you play, your skill level, and how many hours you can commit.",
  },
  {
    num: "02",
    title: "Get Matched",
    desc: "We pair you with a guild manager based on game, timezone, and skill profile.",
  },
  {
    num: "03",
    title: "Play & Earn",
    desc: "Receive assets, start playing, earn your split of rewards every cycle.",
  },
  {
    num: "04",
    title: "Graduate",
    desc: "Build your own portfolio and become an independent player or manager.",
  },
];

export default function Scholarship() {
  return (
    <section id="scholarship" className="scholarship">
      <div className="section-bg-blobs">
        <div className="section-bg-blob"></div>
        <div className="section-bg-blob b2"></div>
      </div>
      <div className="section-frame tg-container">
        <Reveal>
          <div className="section-header">
            <div className="section-num">II</div>
            <div className="section-meta">
              <p className="section-eye">Scholarship Program</p>
              <h2 className="section-title">
                Skill is the <em>only</em> entry fee
              </h2>
              <p className="section-lead">
                We back talented players who have the skill but not the
                assets. Full asset support, transparent revenue split, and a
                real path to independence.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="scholarship-grid">
          <Reveal>
            <div className="schol-quote">
              &quot;<em>Web3 gaming shouldn&apos;t be locked behind a paywall.</em>{" "}
              If you have the skill and the time, we have the assets and the
              path.&quot;
            </div>
            <div className="schol-benefits">
              {benefits.map((b) => (
                <InteractiveGlow key={b.num} className="schol-benefit">
                  <div className="schol-benefit-num">{b.num}</div>
                  <div>
                    <div className="schol-benefit-title">{b.title}</div>
                    <div className="schol-benefit-desc">{b.desc}</div>
                  </div>
                </InteractiveGlow>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <InteractiveGlow className="schol-flow">
              <span className="schol-flow-corner tl"></span>
              <span className="schol-flow-corner tr"></span>
              <span className="schol-flow-corner bl"></span>
              <span className="schol-flow-corner br"></span>
              <p className="schol-flow-title">How It Works</p>
              <div className="schol-steps">
                {steps.map((s) => (
                  <div key={s.num} className="schol-step">
                    <div className="schol-step-num">{s.num}</div>
                    <div>
                      <div className="schol-step-title">{s.title}</div>
                      <div className="schol-step-desc">{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <a
                className="btn btn-primary schol-apply"
                href={DISCORD_INVITE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply for Scholarship <IconArrowRight size={14} />
              </a>
            </InteractiveGlow>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
