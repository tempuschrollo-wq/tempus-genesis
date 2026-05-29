import Image from "next/image";
import InteractiveGlow from "./InteractiveGlow";
import type { Game } from "./gamesData";

interface Props {
  game: Game;
  index: number;
}

export default function GameCard({ game, index }: Props) {
  return (
    <InteractiveGlow className="game">
      <div className="game-cover">
        <Image
          src={`/assets/${game.img}`}
          alt={game.name}
          fill
          sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
        />
        <span className={`game-cover-status game-status-${game.status}`}>
          <span className="game-dot"></span>
          {game.status === "live" ? "Live" : "Past"}
        </span>
        <span className="game-cover-num">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="game-info">
        <div className="game-name">{game.name}</div>
        <div className="game-genre">{game.genre}</div>
      </div>
    </InteractiveGlow>
  );
}
