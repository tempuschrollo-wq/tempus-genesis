"use client";

import { IconBrandDiscord } from "@tabler/icons-react";
import { useEffect, useState } from "react";

const DISCORD_INVITE_URL = "https://discord.gg/nwRam2xxFZ";

export default function MobileCtaBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.querySelector(".hero");
    const finalTargets = Array.from(document.querySelectorAll(".join, .footer"));
    if (!hero) return;
    const heroNode = hero;

    let finalInView = false;

    function update() {
      const heroBottom = heroNode.getBoundingClientRect().bottom;
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      setVisible(isMobile && heroBottom < 0 && !finalInView);
    }

    const finalObserver = new IntersectionObserver(
      (entries) => {
        finalInView = entries.some((entry) => entry.isIntersecting);
        update();
      },
      { threshold: 0.01 }
    );

    finalTargets.forEach((target) => finalObserver.observe(target));
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();

    return () => {
      finalObserver.disconnect();
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <a
      className={`mobile-cta-bar ${visible ? "is-visible" : ""}`}
      href={DISCORD_INVITE_URL}
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconBrandDiscord size={15} />
      Enter Server
    </a>
  );
}
