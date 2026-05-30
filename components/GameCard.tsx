import Image from "next/image";
import InteractiveGlow from "./InteractiveGlow";
import type { FeaturedGame } from "./gamesData";

interface Props {
  game: FeaturedGame;
  index: number;
}

export default function GameCard({ game, index }: Props) {
  const isActive = game.status === "active";
  return (
    <InteractiveGlow className="game">
      <div className="game-cover">
        <Image
          src={`/assets/${game.img}`}
          alt={game.name}
          fill
          sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
        />
        <span
          className={`game-cover-status game-status-${isActive ? "live" : "past"}`}
        >
          <span className="game-dot"></span>
          {isActive ? "Active" : "Past"}
        </span>
        <span className="game-cover-num">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="game-info">
        <div className="game-name">
          {game.officialLink ? (
            <a
              className="game-name-link"
              href={game.officialLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {game.name}
            </a>
          ) : (
            game.name
          )}
        </div>
        <div className="game-genre">{game.genre.join(" / ")}</div>
        <div className="game-chain">{game.chain}</div>
      </div>
    </InteractiveGlow>
  );
}
