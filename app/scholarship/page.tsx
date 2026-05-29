import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { IconArrowRight, IconArrowUpRight } from "@tabler/icons-react";
import Nav from "@/components/Nav";
import Footer from "@/components/sections/Footer";
import Reveal from "@/components/Reveal";
import InteractiveGlow from "@/components/InteractiveGlow";
import SectionTransition from "@/components/SectionTransition";

const DISCORD_INVITE_URL = "https://discord.gg/nwRam2xxFZ";

export const metadata: Metadata = {
  title: "Scholarship Program · Tempus Genesis",
  description:
    "Skill is the only entry fee. Tempus Genesis backs talented Web3 players with assets, a transparent revenue split, mentorship, and real hardware. See the rigs we've delivered to scholars.",
  openGraph: {
    type: "website",
    siteName: "Tempus Genesis",
    title: "Scholarship Program · Tempus Genesis",
    description:
      "Full asset support, transparent revenue split, coaching, and a path to independence for skilled Web3 players. Real PC builds delivered to scholars.",
    images: ["/assets/OG-share.png"],
  },
};

const benefits = [
  {
    num: "i.",
    title: "Asset Lending",
    desc: "NFT assets and in-game items provided by guild managers. Zero upfront cost. You play, we provide. Every scholar is matched to a portfolio sized for their game and skill level.",
  },
  {
    num: "ii.",
    title: "Revenue Split",
    desc: "Transparent profit sharing every cycle. No hidden fees, no surprises. The split is agreed up front, and your earnings scale with your performance, not with how much you can afford to buy in.",
  },
  {
    num: "iii.",
    title: "Coaching & Mentorship",
    desc: "Senior players guide scholars through game mechanics, strategy, and on-chain earning optimization. You learn the meta from people who have already won in it.",
  },
  {
    num: "iv.",
    title: "Path to Independence",
    desc: "Top performers build their own asset portfolio and graduate to full players or guild managers. The scholarship is a launchpad, not a ceiling.",
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

// Built from the exact filenames in public/assets/page (verified via ls).
// NOTE: build 1 photo 3 is the misspelled "shcolar1-3.jpg"; scholar3-1 and
// scholar5-1 are .png while the rest are .jpg. Do not normalize these.
const builds = [
  {
    label: "Build 01",
    photos: [
      "scholar1-1.jpg",
      "scholar1-2.jpg",
      "shcolar1-3.jpg",
      "scholar1-4.jpg",
    ],
  },
  {
    label: "Build 02",
    photos: ["scholar2-1.jpg", "scholar2-2.jpg", "scholar2-3.jpg"],
  },
  {
    label: "Build 03",
    photos: [
      "scholar3-1.png",
      "scholar3-2.jpg",
      "scholar3-3.jpg",
      "scholar3-4.jpg",
    ],
  },
  {
    label: "Build 04",
    photos: ["scholar4-1.jpg", "scholar4-2.jpg"],
  },
  {
    label: "Build 05",
    photos: ["scholar5-1.png", "scholar5-2.jpg", "scholar5-3.jpg"],
  },
];

const rigCount = builds.length;

const eligibility = [
  "Genuine skill in at least one supported Web3 title. Ranked, competitive, or proven track record.",
  "A consistent weekly time commitment (we'll align on hours during matching).",
  "An active Discord presence. Daily coordination happens there.",
  "A wallet you control, and a willingness to learn on-chain basics if you're new.",
  "Good standing: no asset misuse, account sharing, or toxic behavior.",
];

const faqs = [
  {
    q: "Does the scholarship cost anything?",
    a: "No. There is zero upfront cost. We provide the NFT assets and in-game items; you bring the skill and the hours. You never pay to join.",
  },
  {
    q: "How does the revenue split work?",
    a: "Earnings are shared on a transparent split agreed before you start, settled every cycle. The exact ratio depends on the game and the asset value, but it's always stated up front with no hidden fees.",
  },
  {
    q: "What time commitment is expected?",
    a: "It varies by game and season, but scholars are active players, not passive holders. We'll align on a realistic weekly commitment during matching so it fits your schedule.",
  },
  {
    q: "Who owns the assets and the hardware?",
    a: "Lent NFT assets remain guild-owned while you play with them. Hardware delivered to a scholar is part of that scholar's setup, built and shipped to support serious, consistent performers.",
  },
  {
    q: "How does matching work?",
    a: "After you apply on Discord, we pair you with a guild manager based on your game, timezone, and skill profile, so you're set up with the right portfolio and the right mentor from day one.",
  },
];

export default function ScholarshipPage() {
  return (
    <>
      <Nav />
      <main>
        {/* 1 — PAGE HERO */}
        <section className="schp-hero">
          <div className="section-bg-blobs">
            <div className="section-bg-blob"></div>
            <div className="section-bg-blob b2"></div>
          </div>
          <div className="schp-hero-inner tg-container">
            <Reveal>
              <p className="section-eye schp-hero-eye">Scholarship Program</p>
              <h1 className="schp-hero-title">
                Skill is the <span>only</span> entry fee
              </h1>
              <p className="schp-hero-sub">
                We back talented players who have the skill but not the assets.
                Full asset support, a transparent revenue split, real
                mentorship, and a path to independence.
              </p>
              <div className="schp-hero-actions">
                <a
                  className="btn btn-primary"
                  href={DISCORD_INVITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply via Discord <IconArrowRight size={14} />
                </a>
                <a className="btn btn-ghost" href="#rigs">
                  See delivered rigs
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 2 — BENEFITS */}
        <section className="schp-section">
          <div className="section-frame tg-container">
            <Reveal>
              <div className="section-header">
                <div className="section-num">i</div>
                <div className="section-meta">
                  <p className="section-eye">What you get</p>
                  <h2 className="section-title">
                    Everything but the <em>buy-in</em>
                  </h2>
                  <p className="section-lead">
                    Four pillars that turn raw skill into real, compounding
                    on-chain earning.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="schol-benefits schp-benefits">
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
          </div>
        </section>

        {/* 3 — HOW IT WORKS */}
        <section className="schp-section is-tight">
          <div className="section-frame tg-container">
            <Reveal>
              <div className="section-header">
                <div className="section-num">ii</div>
                <div className="section-meta">
                  <p className="section-eye">How it works</p>
                  <h2 className="section-title">
                    From application to <em>independence</em>
                  </h2>
                </div>
              </div>
            </Reveal>
            <Reveal stagger>
              <div className="schp-steps-grid">
                {steps.map((s) => (
                  <InteractiveGlow key={s.num} className="schp-step-card">
                    <div className="schol-step-num">{s.num}</div>
                    <div className="schp-step-title">{s.title}</div>
                    <div className="schp-step-desc">{s.desc}</div>
                  </InteractiveGlow>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <SectionTransition num="◆" label="REAL RIGS" major />

        {/* 4 — REAL RIGS GALLERY */}
        <section id="rigs" className="schp-section">
          <div className="section-frame tg-container">
            <Reveal>
              <div className="section-header">
                <div className="section-num">iii</div>
                <div className="section-meta">
                  <p className="section-eye">Real rigs, real scholars</p>
                  <h2 className="section-title">
                    We deliver <em>hardware</em>, not just promises
                  </h2>
                  <p className="section-lead">
                    Every scholarship is backed by real support, including the
                    machines our scholars play on. These are builds we&apos;ve
                    assembled and delivered.
                  </p>
                  <p className="schp-stat">
                    <span className="schp-stat-num">{rigCount}</span>
                    <span className="schp-stat-label">
                      rigs built &amp; delivered
                    </span>
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="schp-builds">
              {builds.map((build) => (
                <Reveal key={build.label}>
                  <div className="schp-build">
                    <p className="schp-build-label">{build.label}</p>
                    <div className="schp-gallery-grid">
                      {build.photos.map((file) => (
                        <InteractiveGlow key={file} className="schp-tile">
                          <Image
                            src={`/assets/page/${file}`}
                            alt={`PC build delivered to a Tempus Genesis scholar, ${build.label}`}
                            fill
                            loading="lazy"
                            sizes="(max-width: 900px) 50vw, 33vw"
                          />
                        </InteractiveGlow>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <SectionTransition num="◆" label="DETAILS" />

        {/* 5 — ELIGIBILITY */}
        <section className="schp-section is-tight">
          <div className="section-frame tg-container">
            <div className="schp-two-col">
              <Reveal>
                <div className="section-header schp-header-stacked">
                  <div className="section-num">iv</div>
                  <div className="section-meta">
                    <p className="section-eye">Who can apply</p>
                    <h2 className="section-title">
                      The <em>requirements</em>
                    </h2>
                  </div>
                </div>
              </Reveal>
              <Reveal>
                <ul className="schp-elig">
                  {eligibility.map((item, i) => (
                    <li key={i} className="schp-elig-item">
                      <span className="schp-elig-mark">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 6 — FAQ */}
        <section className="schp-section is-tight">
          <div className="section-frame tg-container">
            <Reveal>
              <div className="section-header">
                <div className="section-num">v</div>
                <div className="section-meta">
                  <p className="section-eye">Questions</p>
                  <h2 className="section-title">
                    Before you <em>apply</em>
                  </h2>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="schp-faq">
                {faqs.map((f, i) => (
                  <details key={i} className="schp-faq-item">
                    <summary className="schp-faq-q">
                      <span>{f.q}</span>
                      <span className="schp-faq-icon" aria-hidden="true" />
                    </summary>
                    <p className="schp-faq-a">{f.a}</p>
                  </details>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* 7 — FINAL CTA BAND */}
        <section className="schp-section is-tight">
          <div className="tg-container">
            <Reveal>
              <InteractiveGlow className="schp-cta">
                <span className="schol-flow-corner tl"></span>
                <span className="schol-flow-corner tr"></span>
                <span className="schol-flow-corner bl"></span>
                <span className="schol-flow-corner br"></span>
                <p className="section-eye schp-cta-eye">Ready when you are</p>
                <h2 className="schp-cta-title">
                  Bring the skill. We&apos;ll bring the rest.
                </h2>
                <div className="schp-hero-actions">
                  <a
                    className="btn btn-primary"
                    href={DISCORD_INVITE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Apply via Discord <IconArrowRight size={14} />
                  </a>
                  <Link className="btn btn-ghost" href="/">
                    Back to home <IconArrowUpRight size={14} />
                  </Link>
                </div>
              </InteractiveGlow>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
