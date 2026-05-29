"use client";

import { useState } from "react";
import GameCard from "./GameCard";
import { games } from "./gamesData";

type Filter = "all" | "active" | "past";

const FILTERS: { key: Filter; label: string }[] = [
  { key: "all", label: "All" },
  { key: "active", label: "Active" },
  { key: "past", label: "Past" },
];

export default function GamesLibrary() {
  const [filter, setFilter] = useState<Filter>("all");

  const visible = games.filter((g) => {
    if (filter === "active") return g.status === "live";
    if (filter === "past") return g.status === "past";
    return true;
  });

  return (
    <div className="games-library">
      <div
        className="games-filter"
        role="group"
        aria-label="Filter featured games"
      >
        {FILTERS.map((f) => (
          <button
            key={f.key}
            type="button"
            className={`games-filter-pill ${filter === f.key ? "is-active" : ""}`}
            aria-pressed={filter === f.key}
            onClick={() => setFilter(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="games-layout">
        {visible.map((g, i) => (
          <GameCard key={g.name} game={g} index={i} />
        ))}
      </div>
    </div>
  );
}
