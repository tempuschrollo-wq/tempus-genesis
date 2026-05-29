const messages = [
  "Built by players, for players",
  "Where strategy meets the meta",
  "Daily coordination, zero noise",
  "Skill is the only entry fee",
  "40+ games, one community",
  "Worldwide, always online",
  "Real players, real strategy",
  "Your next move starts here",
];

export default function Ticker() {
  // Double the list for seamless loop
  const items = [...messages, ...messages];
  return (
    <div className="ticker">
      <div className="ticker-inner">
        {items.map((msg, i) => (
          <span key={i} className="ti">
            <b>{String((i % messages.length) + 1).padStart(2, "0")}</b> {msg}
            <span className="ti-sep">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
