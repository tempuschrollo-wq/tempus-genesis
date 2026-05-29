"use client";

import { useState } from "react";
import type { CSSProperties } from "react";
import { IconCopy, IconCheck } from "@tabler/icons-react";

interface Props {
  name: string;
  hex: string;
}

export default function ColorSwatch({ name, hex }: Props) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(hex);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      /* clipboard unavailable — non-critical */
    }
  }

  return (
    <button
      type="button"
      className="mk-color"
      onClick={copy}
      aria-label={`Copy ${name} hex ${hex}`}
    >
      <span
        className="mk-color-chip"
        style={{ background: hex } as CSSProperties}
        aria-hidden="true"
      />
      <span className="mk-color-info">
        <span className="mk-color-name">{name}</span>
        <span className="mk-color-hex">{copied ? "Copied!" : hex}</span>
      </span>
      <span className="mk-color-copy" aria-hidden="true">
        {copied ? <IconCheck size={14} /> : <IconCopy size={14} />}
      </span>
    </button>
  );
}
