"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import type { PointerEvent } from "react";

export default function HeroEmblem() {
  const tiltRef = useRef<HTMLDivElement>(null);
  const canTiltRef = useRef(false);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const motionQuery = window.matchMedia(
      "(prefers-reduced-motion: no-preference)"
    );
    const pointerQuery = window.matchMedia("(pointer: fine)");

    if (!motionQuery.matches || !pointerQuery.matches) return;
    const tiltNode = tiltRef.current;
    if (!tiltNode) return;
    const node = tiltNode;

    canTiltRef.current = true;
    let frame = 0;

    function animate() {
      const current = currentRef.current;
      const target = targetRef.current;
      current.x += (target.x - current.x) * 0.08;
      current.y += (target.y - current.y) * 0.08;

      node.style.transform = `rotateX(${current.x.toFixed(
        3
      )}deg) rotateY(${current.y.toFixed(3)}deg)`;

      frame = requestAnimationFrame(animate);
    }

    frame = requestAnimationFrame(animate);

    return () => {
      canTiltRef.current = false;
      cancelAnimationFrame(frame);
      node.style.transform = "";
    };
  }, []);

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (!canTiltRef.current) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;

    targetRef.current = {
      x: -py * 16,
      y: px * 24,
    };
  }

  function handlePointerLeave() {
    targetRef.current = { x: 0, y: 0 };
  }

  return (
    <div
      className="emblem-stage"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div className="emblem-tilt" ref={tiltRef}>
        <span className="emblem-aura" aria-hidden="true" />
        <span className="emblem-plate" aria-hidden="true" />
        <Image
          className="emblem-core"
          src="/assets/TG-logo.png"
          alt="Tempus Genesis"
          width={480}
          height={480}
          priority
        />
        <span className="emblem-sheen" aria-hidden="true" />
      </div>
    </div>
  );
}
