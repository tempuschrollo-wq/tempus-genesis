"use client";

import type { PointerEvent, ReactNode } from "react";

interface InteractiveGlowProps {
  children: ReactNode;
  className?: string;
}

export default function InteractiveGlow({
  children,
  className = "",
}: InteractiveGlowProps) {
  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType === "touch") return;

    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty(
      "--mx",
      `${event.clientX - rect.left}px`
    );
    event.currentTarget.style.setProperty(
      "--my",
      `${event.clientY - rect.top}px`
    );
  }

  function handlePointerLeave(event: PointerEvent<HTMLDivElement>) {
    event.currentTarget.style.setProperty("--mx", "50%");
    event.currentTarget.style.setProperty("--my", "50%");
  }

  return (
    <div
      className={`interactive-glow ${className}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <span className="interactive-glow-smoke" aria-hidden="true" />
      <span className="interactive-glow-cursor" aria-hidden="true" />
      {children}
    </div>
  );
}
