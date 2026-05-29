import {
  IconArrowRight,
  IconBrandDiscord,
  IconBrandTwitter,
  IconDeviceTv,
  IconMail,
} from "@tabler/icons-react";

const DISCORD_INVITE_URL = "https://discord.gg/nwRam2xxFZ";

export default function Join() {
  return (
    <section className="join">
      <div className="section-bg-blobs">
        <div className="section-bg-blob"></div>
        <div className="section-bg-blob b2"></div>
      </div>
      <div className="join-bg"></div>
      <svg className="join-hg-finale" viewBox="0 0 32 48">
        <rect x="3" y="2" width="26" height="3" rx="1" fill="#D4AF37" opacity="0.6" />
        <rect x="3" y="43" width="26" height="3" rx="1" fill="#D4AF37" opacity="0.6" />
        <line x1="5" y1="5" x2="16" y2="24" stroke="#D4AF37" strokeWidth="1" opacity="0.4" />
        <line x1="27" y1="5" x2="16" y2="24" stroke="#D4AF37" strokeWidth="1" opacity="0.4" />
        <line x1="5" y1="43" x2="16" y2="24" stroke="#D4AF37" strokeWidth="1" opacity="0.4" />
        <line x1="27" y1="43" x2="16" y2="24" stroke="#D4AF37" strokeWidth="1" opacity="0.4" />
        <polygon points="6,43 26,43 16,25" fill="#D4AF37" opacity="0.5" />
      </svg>
      <p className="join-eye">Ready to descend</p>
      <h1 className="join-title">
        Your next <em>Web3 move</em>
        <br />
        starts here
      </h1>
      <p className="join-sub">
        — 1,000+ members. Active every day. Find your game. —
      </p>
      <a
        className="btn btn-primary join-cta"
        href={DISCORD_INVITE_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        Enter the Server <IconArrowRight size={14} />
      </a>
      <div className="join-socials">
        <a
          className="join-social"
          href={DISCORD_INVITE_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandDiscord size={14} /> Discord
        </a>
        <a
          className="join-social"
          href="https://twitter.com/TempusGenesisW3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandTwitter size={14} /> Twitter
        </a>
        <a
          className="join-social"
          href="https://twitch.tv/tempusgenesisw3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconDeviceTv size={14} /> Twitch
        </a>
        <a className="join-social" href="mailto:tempusgenesis@gmail.com">
          <IconMail size={14} /> Email
        </a>
      </div>
    </section>
  );
}
