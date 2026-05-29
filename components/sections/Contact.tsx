"use client";

import { useState } from "react";
import Reveal from "../Reveal";
import InteractiveGlow from "../InteractiveGlow";
import {
  IconMail,
  IconBrandTwitter,
  IconBrandDiscord,
  IconDeviceTv,
  IconArrowRight,
} from "@tabler/icons-react";

const DISCORD_INVITE_URL = "https://discord.gg/nwRam2xxFZ";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <section id="contact" className="contact">
      <div className="section-bg-blobs">
        <div className="section-bg-blob"></div>
        <div className="section-bg-blob b2"></div>
      </div>
      <div className="section-frame tg-container">
        <Reveal>
          <div className="section-header">
            <div className="section-num">VI</div>
            <div className="section-meta">
              <p className="section-eye">Get in Touch</p>
              <h2 className="section-title">
                Let&apos;s <em>build something</em>
              </h2>
              <p className="section-lead">
                Join the community, explore a scholarship, or collaborate with
                Tempus Genesis — we read every message.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="contact-grid">
          <Reveal>
            <div className="contact-left">
              <h3>
                Reach <em>us</em> directly.
              </h3>
              <p>
                Whether you&apos;re a player, a project, or a partner — start
                with one of these.
              </p>
              <div className="contact-channels">
                <InteractiveGlow className="contact-channel">
                  <div className="contact-channel-icon">
                    <IconMail size={15} />
                  </div>
                  <div>
                    <div className="contact-channel-label">Email</div>
                    <div className="contact-channel-value">
                      <a href="mailto:tempusgenesis@gmail.com">
                        tempusgenesis@gmail.com
                      </a>
                    </div>
                  </div>
                </InteractiveGlow>
                <InteractiveGlow className="contact-channel">
                  <div className="contact-channel-icon">
                    <IconBrandTwitter size={15} />
                  </div>
                  <div>
                    <div className="contact-channel-label">Twitter / X</div>
                    <div className="contact-channel-value">
                      <a
                        href="https://twitter.com/TempusGenesisW3"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        @TempusGenesisW3
                      </a>
                    </div>
                  </div>
                </InteractiveGlow>
                <InteractiveGlow className="contact-channel">
                  <div className="contact-channel-icon">
                    <IconBrandDiscord size={15} />
                  </div>
                  <div>
                    <div className="contact-channel-label">Discord</div>
                    <div className="contact-channel-value">
                      <a
                        href={DISCORD_INVITE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Join the server
                      </a>
                    </div>
                  </div>
                </InteractiveGlow>
                <InteractiveGlow className="contact-channel">
                  <div className="contact-channel-icon">
                    <IconDeviceTv size={15} />
                  </div>
                  <div>
                    <div className="contact-channel-label">Twitch</div>
                    <div className="contact-channel-value">
                      <a
                        href="https://twitch.tv/tempusgenesisw3"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        tempusgenesisw3
                      </a>
                    </div>
                  </div>
                </InteractiveGlow>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <InteractiveGlow className="contact-form-shell">
              <span className="contact-form-corner tl"></span>
              <span className="contact-form-corner tr"></span>
              <span className="contact-form-corner bl"></span>
              <span className="contact-form-corner br"></span>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-field" style={{ marginBottom: 0 }}>
                    <label className="form-label" htmlFor="contact-name">
                      Your name
                    </label>
                    <input
                      id="contact-name"
                      className="form-input"
                      type="text"
                      placeholder="—"
                    />
                  </div>
                  <div className="form-field" style={{ marginBottom: 0 }}>
                    <label className="form-label" htmlFor="contact-email">
                      Email address
                    </label>
                    <input
                      id="contact-email"
                      className="form-input"
                      type="email"
                      placeholder="—"
                    />
                  </div>
                </div>
                <div className="form-field">
                  <label className="form-label" htmlFor="contact-discord">
                    Discord handle{" "}
                    <span style={{ color: "var(--bone-faint)" }}>
                      (optional)
                    </span>
                  </label>
                  <input
                    id="contact-discord"
                    className="form-input"
                    type="text"
                    placeholder="—"
                  />
                </div>
                <div className="form-field">
                  <label className="form-label" htmlFor="contact-reason">
                    Reason for contact
                  </label>
                  <select
                    id="contact-reason"
                    className="form-input form-select"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      — Select —
                    </option>
                    <option value="join">Join the Community</option>
                    <option value="schol">Scholarship Inquiry</option>
                    <option value="collab">Collaboration / Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-field">
                  <label className="form-label" htmlFor="contact-message">
                    Your message
                  </label>
                  <textarea
                    id="contact-message"
                    className="form-input"
                    placeholder="—"
                  />
                </div>
                <button type="submit" className="btn btn-primary form-submit">
                  Send Message <IconArrowRight size={14} />
                </button>
                {sent && (
                  <p className="form-status" role="status" aria-live="polite">
                    Message noted. We&apos;ll follow up through the channel you
                    provided.
                  </p>
                )}
              </form>
            </InteractiveGlow>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
