export type GameStatus = "live" | "past";

export interface Game {
  name: string;
  genre: string;
  img: string;
  status: GameStatus;
}

// Featured games — single source of truth for asset filenames.
// (Call of the Void's file is intentionally "callofthevoyd-logo.png".)
export const games: Game[] = [
  { name: "RavenQuest", genre: "MMORPG · Web3", img: "raven-logo.png", status: "live" },
  { name: "Big Time", genre: "Action RPG · NFT", img: "bigtime-logo.jpg", status: "live" },
  { name: "Thetan Arena", genre: "MOBA · Esports", img: "thetanarena-logo.jpg", status: "live" },
  { name: "Call of the Void", genre: "FPS · Web3", img: "callofthevoyd-logo.png", status: "live" },
  { name: "Blast Royale", genre: "Battle Royale · P2E", img: "blastroyale-logo.jpg", status: "live" },
  { name: "The Desolation", genre: "Survival · Web3", img: "thedesolation-logo.jpg", status: "live" },
  { name: "Cambria", genre: "RPG · Web3", img: "cambria-logo.png", status: "past" },
  { name: "Sunflower Land", genre: "Farming · DeFi", img: "sunflowerland-logo.png", status: "past" },
  { name: "MapleStory Universe", genre: "MMORPG · NFT", img: "maplestory-logo.png", status: "past" },
];

// Full history — names only. We do NOT have verified live/past status for these,
// so they are shown without status or images. Do not fabricate a status here.
export const historyTitles: string[] = [
  "Axie Infinity",
  "The Sandbox",
  "Decentraland",
  "Splinterlands",
  "Gods Unchained",
  "Alien Worlds",
  "Upland",
  "Sorare",
  "Illuvium",
  "Star Atlas",
  "Guild of Guardians",
  "Ember Sword",
  "Pixels",
  "Pirate Nation",
  "Parallel",
  "Shrapnel",
  "Off The Grid",
  "Heroes of Mavia",
  "Nyan Heroes",
  "MetalCore",
  "Aavegotchi",
  "Nine Chronicles",
  "League of Kingdoms",
  "Zed Run",
  "DeFi Kingdoms",
  "Pegaxy",
  "Blankos Block Party",
  "Spider Tanks",
  "Town Star",
  "My Crypto Heroes",
  "CryptoKitties",
  "Mines of Dalarnia",
];
