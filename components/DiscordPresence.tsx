"use client";

import { useEffect, useState } from "react";

export default function DiscordPresence() {
  const [online, setOnline] = useState<number | null>(null);

  useEffect(() => {
    let active = true;

    async function load() {
      try {
        const res = await fetch("/api/discord");
        const data = await res.json();
        if (active) {
          setOnline(typeof data?.online === "number" ? data.online : null);
        }
      } catch {
        if (active) setOnline(null);
      }
    }

    load();
    const id = setInterval(load, 60000); // re-poll every 60s
    return () => {
      active = false;
      clearInterval(id);
    };
  }, []);

  // Only show a live count when it's a meaningful number; otherwise fall back
  // to a steady "Active community" label (no small/empty live number).
  const isLive = typeof online === "number" && online >= 10;

  return (
    <div
      className={`discord-presence ${isLive ? "is-live" : ""}`}
      role="status"
      aria-live="polite"
    >
      <span className="discord-presence-dot" aria-hidden="true" />
      <span>
        {isLive ? `${Math.round(online as number)} online now` : "Active community"}
      </span>
    </div>
  );
}
