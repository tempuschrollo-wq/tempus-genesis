"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
      <Link
        href="/"
        className="nav-left nav-brand"
        aria-label="Tempus Genesis — home"
      >
        <div className="nav-logo-mini">
          <Image src="/assets/TG-logo.png" alt="" width={22} height={28} />
        </div>
        <span className="nav-name">
          Tempus <em>Genesis</em>
        </span>
      </Link>
      <ul className="nav-center">
        <li>
          <Link href="/games">Portfolio</Link>
        </li>
        <li>
          <Link href="/scholarship">Scholarship</Link>
        </li>
        <li>
          <Link href="/#about">Manifesto</Link>
        </li>
        <li>
          <Link href="/#founders">Founders</Link>
        </li>
        <li>
          <Link href="/#contact">Contact</Link>
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
