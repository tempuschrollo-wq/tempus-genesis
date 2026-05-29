"use client";
import { useEffect, useRef } from "react";

const clamp = (v: number, min: number, max: number) =>
  Math.max(min, Math.min(max, v));

export default function HeroEmblem() {
  const stageRef = useRef<HTMLDivElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const tilt = tiltRef.current;
    if (!stage || !tilt) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      tilt.style.transform = "rotateY(-8deg)";
      return;
    }
    // pointer tilt is desktop-only; mobile relies on the CSS idle float
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const MAXY = 12, MAXX = 8;
    let tX = 0, tY = 0, cX = 0, cY = 0, raf = 0;

    const onMove = (e: PointerEvent) => {
      const r = stage.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;   // -0.5..0.5
      const py = (e.clientY - r.top) / r.height - 0.5;
      tY = clamp(px * MAXY * 2, -MAXY, MAXY);
      tX = clamp(-py * MAXX * 2, -MAXX, MAXX);
    };
    const onLeave = () => { tX = 0; tY = 0; };
    const loop = () => {
      cX += (tX - cX) * 0.08;
      cY += (tY - cY) * 0.08;
      tilt.style.transform = `rotateX(${cX.toFixed(2)}deg) rotateY(${cY.toFixed(2)}deg)`;
      raf = requestAnimationFrame(loop);
    };

    stage.addEventListener("pointermove", onMove);
    stage.addEventListener("pointerleave", onLeave);
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      stage.removeEventListener("pointermove", onMove);
      stage.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div ref={stageRef} className="emblem-stage" aria-hidden="true">
      <div ref={tiltRef} className="emblem-tilt">
        {/* idle float lives on a SEPARATE layer so it never fights the JS tilt */}
        <div className="emblem-float">
          <div className="emblem-aura" />
          <div className="emblem-plate" />
          <div className="emblem-core">
            <img src="/assets/TG-logo.png" alt="" />
          </div>
          <div className="emblem-sheen" />
        </div>
      </div>
    </div>
  );
}
