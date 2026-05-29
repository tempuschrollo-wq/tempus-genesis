import Image from "next/image";
import Reveal from "../Reveal";
import InteractiveGlow from "../InteractiveGlow";
import { IconBrandTwitter } from "@tabler/icons-react";

const founders = [
  {
    name: "Murkz",
    tag: "Founder · 01",
    img: "murkz.jpg",
    handle: "@BitPixelCapsule",
    url: "https://x.com/BitPixelCapsule",
  },
  {
    name: "Revolutionro",
    tag: "Founder · 02",
    img: "revolutionro.jpg",
    handle: "@TG_Revo",
    url: "https://x.com/TG_Revo",
  },
  {
    name: "Sweet",
    tag: "Founder · 03",
    img: "sweet.jpg",
    handle: "@Sweetfn8",
    url: "https://x.com/Sweetfn8",
  },
];

export default function Founders() {
  return (
    <section id="founders" className="founders-section">
      <div className="section-bg-blobs">
        <div className="section-bg-blob"></div>
        <div className="section-bg-blob b2"></div>
      </div>
      <div className="section-frame tg-container">
        <Reveal>
          <div className="section-header">
            <div className="section-num">V</div>
            <div className="section-meta">
              <p className="section-eye">The Founders</p>
              <h2 className="section-title">
                Three builders, <em>one community</em>
              </h2>
              <p className="section-lead">
                Players first. Operators always. The team behind Tempus Genesis
                is in the game with you — not above it.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal stagger>
          <div className="founders-grid">
            {founders.map((f) => (
              <InteractiveGlow key={f.name} className="founder">
                <div className="founder-portrait">
                  <Image
                    src={`/assets/${f.img}`}
                    alt={f.name}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                  />
                  <div className="founder-meta">
                    <div className="founder-tag">{f.tag}</div>
                  </div>
                </div>
                <div className="founder-body">
                  <div className="founder-name">{f.name}</div>
                  <a
                    className="founder-handle"
                    href={f.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconBrandTwitter size={14} />
                    {f.handle}
                  </a>
                </div>
              </InteractiveGlow>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
