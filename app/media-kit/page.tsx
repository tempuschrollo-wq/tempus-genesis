import type { Metadata } from "next";
import Image from "next/image";
import {
  IconDownload,
  IconMail,
  IconBrandX,
} from "@tabler/icons-react";
import Nav from "@/components/Nav";
import Footer from "@/components/sections/Footer";
import Reveal from "@/components/Reveal";
import InteractiveGlow from "@/components/InteractiveGlow";
import SectionTransition from "@/components/SectionTransition";
import ColorSwatch from "@/components/ColorSwatch";

export const metadata: Metadata = {
  title: "Media Kit · Tempus Genesis",
  description:
    "Press and brand assets for Tempus Genesis. Logos, brand graphics, color palette, and usage guidelines. Everything you need to feature the community.",
  openGraph: {
    type: "website",
    siteName: "Tempus Genesis",
    title: "Media Kit · Tempus Genesis",
    description:
      "Download Tempus Genesis logos and brand assets, with color palette and usage guidelines.",
    images: ["/assets/OG-share.png"],
  },
};

const ASSET_BASE = "/assets/page";

// Primary logo marks (verified via ls — exact filenames, both .png).
const primaryMarks = [
  {
    file: "media-kit1.png",
    label: "Primary mark · dimensional",
    note: "The full chrome-and-gold hourglass. Use as the hero mark where you have room for detail.",
  },
  {
    file: "media-kit2.png",
    label: "Mono mark · reversed",
    note: "Clean white hourglass with the gold compass. Built for dark backgrounds; keep it off light fills.",
  },
];

// All brand graphics — exact filenames from public/assets/page.
const brandGraphics = [
  "media-kit1.png",
  "media-kit2.png",
  "media-kit3.png",
  "media-kit4.png",
  "media-kit5.png",
  "media-kit6.png",
  "media-kit7.png",
  "media-kit8.png",
  "media-kit9.png",
];

// Misc / other — TG-branded photo, kept apart from the clean logos.
const miscAsset = "IMG_20250422_150403.jpg";

const palette = [
  { name: "Gold", hex: "#D4AF37" },
  { name: "Ink", hex: "#050505" },
  { name: "Bone", hex: "#ede4cd" },
];

const guidelines = [
  { kind: "do", text: "Keep clear space around the mark, at least the height of the hourglass on every side." },
  { kind: "do", text: "Use the reversed white mark on dark backgrounds, and the full-color mark where contrast allows." },
  { kind: "do", text: "Scale the logo proportionally so the hourglass and compass stay legible." },
  { kind: "dont", text: "Don't recolor, add gradients, or swap the gold for another accent." },
  { kind: "dont", text: "Don't stretch, skew, rotate, or add drop shadows and outlines to the mark." },
  { kind: "dont", text: "Don't place the logo on busy imagery without a solid or darkened backing." },
];

export default function MediaKitPage() {
  return (
    <>
      <Nav />
      <main>
        {/* 1 — HERO */}
        <section className="mk-hero">
          <div className="section-bg-blobs">
            <div className="section-bg-blob"></div>
            <div className="section-bg-blob b2"></div>
          </div>
          <div className="mk-hero-inner tg-container">
            <Reveal>
              <p className="section-eye mk-hero-eye">Media Kit</p>
              <h1 className="mk-hero-title">Press &amp; brand assets</h1>
              <p className="mk-hero-sub">
                Everything you need to feature Tempus Genesis. Logos, brand
                graphics, colors, and the rules that keep them looking right.
              </p>
            </Reveal>
          </div>
        </section>

        {/* 2 — LOGO / MARK */}
        <section className="mk-section">
          <div className="section-frame tg-container">
            <Reveal>
              <div className="section-header">
                <div className="section-num">i</div>
                <div className="section-meta">
                  <p className="section-eye">The mark</p>
                  <h2 className="section-title">
                    The <em>hourglass</em>
                  </h2>
                  <p className="section-lead">
                    Our primary mark on both dark and light backgrounds.
                    Download the PNG you need.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="mk-marks">
                {primaryMarks.map((mark) => (
                  <div key={mark.file} className="mk-mark">
                    <div className="mk-mark-swatches">
                      <div className="mk-swatch mk-swatch-dark">
                        <Image
                          src={`${ASSET_BASE}/${mark.file}`}
                          alt={`${mark.label} on a dark background`}
                          fill
                          loading="lazy"
                          sizes="(max-width: 768px) 45vw, 22vw"
                        />
                        <span className="mk-swatch-tag">On dark</span>
                      </div>
                      <div className="mk-swatch mk-swatch-light">
                        <Image
                          src={`${ASSET_BASE}/${mark.file}`}
                          alt={`${mark.label} on a light background`}
                          fill
                          loading="lazy"
                          sizes="(max-width: 768px) 45vw, 22vw"
                        />
                        <span className="mk-swatch-tag">On light</span>
                      </div>
                    </div>
                    <div>
                      <div className="mk-mark-label">{mark.label}</div>
                      <p className="mk-mark-note">{mark.note}</p>
                    </div>
                    <a
                      className="btn btn-ghost"
                      href={`${ASSET_BASE}/${mark.file}`}
                      download
                    >
                      Download PNG <IconDownload size={14} />
                    </a>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <SectionTransition num="◆" label="ASSETS" major />

        {/* 3 — BRAND GRAPHICS GRID */}
        <section className="mk-section">
          <div className="section-frame tg-container">
            <Reveal>
              <div className="section-header">
                <div className="section-num">ii</div>
                <div className="section-meta">
                  <p className="section-eye">Brand graphics</p>
                  <h2 className="section-title">
                    Logos, wordmarks &amp; <em>key art</em>
                  </h2>
                  <p className="section-lead">
                    Every brand graphic, ready to download. Click any tile to
                    save the original file.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal stagger>
              <div className="mk-grid">
                {brandGraphics.map((file) => (
                  <InteractiveGlow key={file} className="mk-tile">
                    <div className="mk-tile-img">
                      <Image
                        src={`${ASSET_BASE}/${file}`}
                        alt={`Tempus Genesis brand graphic, ${file}`}
                        fill
                        loading="lazy"
                        sizes="(max-width: 900px) 50vw, 33vw"
                      />
                    </div>
                    <a
                      className="mk-tile-dl"
                      href={`${ASSET_BASE}/${file}`}
                      download
                    >
                      <span>{file}</span>
                      <IconDownload size={14} />
                    </a>
                  </InteractiveGlow>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <p className="mk-subhead">Other / misc</p>
              <div className="mk-grid-misc">
                <InteractiveGlow className="mk-tile mk-tile--photo">
                  <div className="mk-tile-img">
                    <Image
                      src={`${ASSET_BASE}/${miscAsset}`}
                      alt="Tempus Genesis branded sticker, community photo"
                      fill
                      loading="lazy"
                      sizes="(max-width: 900px) 50vw, 33vw"
                    />
                  </div>
                  <a
                    className="mk-tile-dl"
                    href={`${ASSET_BASE}/${miscAsset}`}
                    download
                  >
                    <span>{miscAsset}</span>
                    <IconDownload size={14} />
                  </a>
                </InteractiveGlow>
              </div>
            </Reveal>
          </div>
        </section>

        <SectionTransition num="◆" label="SYSTEM" />

        {/* 4 — COLOR PALETTE */}
        <section className="mk-section is-tight">
          <div className="section-frame tg-container">
            <Reveal>
              <div className="section-header">
                <div className="section-num">iii</div>
                <div className="section-meta">
                  <p className="section-eye">Color palette</p>
                  <h2 className="section-title">
                    Three <em>colors</em>
                  </h2>
                  <p className="section-lead">
                    Black, gold, and bone. Click a swatch to copy its hex.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal stagger>
              <div className="mk-palette">
                {palette.map((c) => (
                  <ColorSwatch key={c.hex} name={c.name} hex={c.hex} />
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* 5 — USAGE GUIDELINES */}
        <section className="mk-section is-tight">
          <div className="section-frame tg-container">
            <Reveal>
              <div className="section-header">
                <div className="section-num">iv</div>
                <div className="section-meta">
                  <p className="section-eye">Usage</p>
                  <h2 className="section-title">
                    Keep it <em>sharp</em>
                  </h2>
                </div>
              </div>
            </Reveal>
            <Reveal stagger>
              <div className="mk-guides">
                {guidelines.map((g, i) => (
                  <div key={i} className={`mk-guide ${g.kind}`}>
                    <span className="mk-guide-mark" aria-hidden="true">
                      {g.kind === "do" ? "✓" : "✕"}
                    </span>
                    <span className="mk-guide-text">{g.text}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* 6 — PRESS CONTACT */}
        <section className="mk-section is-tight">
          <div className="section-frame tg-container">
            <Reveal>
              <div className="section-header">
                <div className="section-num">v</div>
                <div className="section-meta">
                  <p className="section-eye">Press contact</p>
                  <h2 className="section-title">
                    Get in <em>touch</em>
                  </h2>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="mk-contact">
                <a
                  className="mk-contact-card"
                  href="mailto:tempusgenesis@gmail.com"
                >
                  <span className="mk-contact-label">
                    <IconMail size={13} /> Email
                  </span>
                  <span className="mk-contact-value">
                    tempusgenesis@gmail.com
                  </span>
                </a>
                <a
                  className="mk-contact-card"
                  href="https://x.com/TempusGenesisW3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="mk-contact-label">
                    <IconBrandX size={13} /> X / Twitter
                  </span>
                  <span className="mk-contact-value">@TempusGenesisW3</span>
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
