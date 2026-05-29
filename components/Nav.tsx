"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { IconBrandDiscord } from "@tabler/icons-react";

const DISCORD_INVITE_URL = "https://discord.gg/nwRam2xxFZ";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-left">
        <div className="nav-logo-mini">
          <Image src="/assets/TG-logo.png" alt="" width={22} height={28} />
        </div>
        <span className="nav-name">
          Tempus <em>Genesis</em>
        </span>
      </div>
      <ul className="nav-center">
        <li>
          <a href="#games">Portfolio</a>
        </li>
        <li>
          <a href="#scholarship">Scholarship</a>
        </li>
        <li>
          <a href="#about">Manifesto</a>
        </li>
        <li>
          <a href="#founders">Founders</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="nav-right">
        <a
          className="nav-cta"
          href={DISCORD_INVITE_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandDiscord size={14} /> Enter Server
        </a>
      </div>
    </nav>
  );
}
