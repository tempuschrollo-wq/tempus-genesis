"use client";

import { useEffect, useRef, useState } from "react";

export default function HourglassScroll() {
  const [percent, setPercent] = useState(0);
  const [faded, setFaded] = useState(true);
  const topRectRef = useRef<SVGRectElement>(null);
  const botRectRef = useRef<SVGRectElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const sy = window.scrollY;
      const dh =
        document.documentElement.scrollHeight - window.innerHeight;
      const p = Math.min(100, Math.max(0, (sy / dh) * 100));
      setPercent(Math.round(p));
      setFaded(sy < 50);

      if (topRectRef.current && botRectRef.current) {
        const topHeight = Math.max(0, 19 * (1 - p / 100));
        topRectRef.current.setAttribute("y", "5");
        topRectRef.current.setAttribute("height", String(topHeight));
        const botHeight = 18 * (p / 100);
        botRectRef.current.setAttribute("y", String(43 - botHeight));
        botRectRef.current.setAttribute("height", String(botHeight));
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`hg-scroll ${faded ? "faded" : ""}`}>
      <span className="hg-percent">{percent}</span>
      <svg
        className="hg-svg"
        viewBox="0 0 32 48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect className="hg-frame" x="3" y="2" width="26" height="3" rx="1" />
        <rect className="hg-frame" x="3" y="43" width="26" height="3" rx="1" />
        <line className="hg-frame" x1="5" y1="5" x2="16" y2="24" />
        <line className="hg-frame" x1="27" y1="5" x2="16" y2="24" />
        <line className="hg-frame" x1="5" y1="43" x2="16" y2="24" />
        <line className="hg-frame" x1="27" y1="43" x2="16" y2="24" />
        <clipPath id="topClip">
          <rect ref={topRectRef} x="0" y="5" width="32" height="19" />
        </clipPath>
        <polygon
          className="hg-sand"
          points="6,5 26,5 16,23"
          clipPath="url(#topClip)"
        />
        <clipPath id="botClip">
          <rect ref={botRectRef} x="0" y="43" width="32" height="0" />
        </clipPath>
        <polygon
          className="hg-sand"
          points="6,43 26,43 16,25"
          clipPath="url(#botClip)"
        />
        <line className="hg-stream" x1="16" y1="22" x2="16" y2="26" />
      </svg>
      <span className="hg-label">Tempus</span>
    </div>
  );
}
