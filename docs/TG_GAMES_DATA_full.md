# TG Games — Full Verified Dataset (41 titles)

Two exports, identical shape. `featuredGames` (9, web-verified by Ndut+Claude) render as cards with logos. `historyGames` (32, verified via Research) render as enriched text entries (NO logos exist for these, do not load images).

Status tiers: "active" and "past" for featured; "history" for the 32.

## Decisions applied (Ndut, May 2026)
- No shutdown/defunct language anywhere: descriptions for Ember Sword, Nyan Heroes, Blankos Block Party, and Pirate Nation are neutral, with no "shut down" or "rug" claims.
- Sorare chain: Solana.
- Big Time chain: Ethereum (Open Loot).
- Genre fixes confirmed: Call of the VoYd = Roguelite / Top-down Shooter; The Desolation = Looter-Shooter / Co-op.

---

```ts
export const featuredGames = [
  {
    name: "RavenQuest",
    status: "active",
    genre: ["MMORPG"],
    chain: "Immutable zkEVM",
    platform: ["PC"],
    description: "Top-down fantasy MMORPG by Tavernlight Games, built on the Ravendawn foundation. Free to play, with NFT land, a player-driven economy, and the QUEST token.",
    tags: ["MMORPG", "Free-to-Play", "NFT", "Immutable"],
    officialLink: null,
  },
  {
    name: "Big Time",
    status: "active",
    genre: ["Action RPG"],
    chain: "Ethereum (Open Loot)",
    platform: ["PC"],
    description: "Multiplayer action RPG where squads travel through time and space across procedurally generated dungeons. Free to play, with a cosmetic NFT economy via Open Loot.",
    tags: ["Action RPG", "Free-to-Play", "NFT", "Open Loot"],
    officialLink: null,
  },
  {
    name: "Thetan Arena",
    status: "active",
    genre: ["MOBA", "Battle Royale"],
    chain: "BNB Chain",
    platform: ["PC", "Android", "iOS"],
    description: "Blockchain MOBA and battle royale by Wolffun Games, with fast solo and team matches. Free to play, with NFT heroes and the THC and THG tokens.",
    tags: ["MOBA", "Battle Royale", "Free-to-Play", "Esports"],
    officialLink: "https://thetanarena.com",
  },
  {
    name: "Call of the VoYd",
    status: "active",
    genre: ["Roguelite", "Top-down Shooter"],
    chain: "Immutable zkEVM (Polygon)",
    platform: ["Android", "iOS"],
    description: "Roguelite top-down shooter for mobile by Mystic Games. Free to play, with optional NFT abilities and the VoYd token.",
    tags: ["Roguelite", "Shooter", "Mobile", "Free-to-Play"],
    officialLink: null,
  },
  {
    name: "Blast Royale",
    status: "active",
    genre: ["Battle Royale"],
    chain: "Immutable zkEVM (Polygon)",
    platform: ["iOS", "Android"],
    description: "Mobile top-down battle royale by First Light Games, with short six-minute matches. Free to play, with NFT equipment and the BLST token.",
    tags: ["Battle Royale", "Mobile", "Free-to-Play", "NFT"],
    officialLink: "https://blastroyale.com",
  },
  {
    name: "The Desolation",
    status: "active",
    genre: ["Looter-Shooter", "Co-op"],
    chain: "Immutable (Open Loot)",
    platform: ["PC", "Mobile"],
    description: "Co-op sci-fi looter-shooter by Stratosphere Games, set on a devastated future Earth. Players run extraction missions and customize Exo Suits, with NFT gear via Open Loot.",
    tags: ["Looter-Shooter", "Co-op", "Sci-fi", "Open Loot"],
    officialLink: "https://www.thedesolation-online.com",
  },
  {
    name: "Cambria",
    status: "past",
    genre: ["MMO"],
    chain: "Blast, Ronin, Abstract",
    platform: ["Browser"],
    description: "Risk-to-earn MMO with a RuneScape-inspired top-down fantasy world. Features Gold Rush resource runs and a Duel Arena where players wager ETH. Runs across Blast, Ronin, and Abstract.",
    tags: ["MMO", "Risk-to-Earn", "PvP", "Multi-chain"],
    officialLink: null,
  },
  {
    name: "Sunflower Land",
    status: "past",
    genre: ["Farming Sim", "RPG"],
    chain: "Polygon",
    platform: ["Browser"],
    description: "Open-source Web3 farming simulator by Thought Farm. Players grow crops, raise animals, and craft NFTs, with the FLOWER token. Free to start.",
    tags: ["Farming", "Open-source", "Free-to-Play", "Polygon"],
    officialLink: "https://www.sunflower-land.com",
  },
  {
    name: "MapleStory Universe",
    status: "past",
    genre: ["MMORPG"],
    chain: "Avalanche (custom L1)",
    platform: ["PC"],
    description: "Nexon's Web3 expansion of MapleStory, led by its blockchain arm Nexpace. Flagship title MapleStory N is a 2D side-scrolling MMORPG with player-owned assets and the NXPC and NESO tokens.",
    tags: ["MMORPG", "Nexon", "Avalanche", "Free-to-Play"],
    officialLink: null,
  },
] as const;

export const historyGames = [
  { name: "Axie Infinity", status: "history", genre: ["Creature Battler", "Card Battler", "Strategy"], chain: "Ronin", platform: ["PC", "Mobile"], description: "Axie Infinity is a creature collecting and battling game built around Axies. Players collect, breed, and battle teams of digital pets across multiple Axie game modes.", tags: ["creatures", "battler", "ronin", "collectibles"], officialLink: "https://axieinfinity.com/" },
  { name: "The Sandbox", status: "history", genre: ["Metaverse", "Creator Platform", "Sandbox"], chain: "Ethereum, Polygon", platform: ["PC", "Browser"], description: "The Sandbox is a creator focused metaverse where users build worlds, experiences, and voxel assets. LAND and ecosystem assets use blockchain ownership across Ethereum and Polygon infrastructure.", tags: ["metaverse", "creator", "land", "voxel"], officialLink: "https://www.sandbox.game/" },
  { name: "Decentraland", status: "history", genre: ["Metaverse", "Virtual World", "Social"], chain: "Ethereum, Polygon", platform: ["Browser", "PC"], description: "Decentraland is a user owned virtual world with LAND, wearables, scenes, events, and creator tools. Ethereum is used for core ownership while Polygon is used for lower cost transactions such as wearables.", tags: ["metaverse", "land", "social", "events"], officialLink: "https://decentraland.org/" },
  { name: "Splinterlands", status: "history", genre: ["Trading Card Game", "Strategy"], chain: "Hive", platform: ["Browser", "Mobile"], description: "Splinterlands is a blockchain trading card game where players collect, rent, trade, and battle with card decks. Its core card economy is tied to the Hive ecosystem.", tags: ["cards", "strategy", "hive", "battler"], officialLink: "https://splinterlands.com/" },
  { name: "Gods Unchained", status: "history", genre: ["Trading Card Game", "Strategy"], chain: "Immutable", platform: ["PC", "Mobile"], description: "Gods Unchained is a tactical digital card game with collectible cards and competitive deck building. It is part of the Immutable gaming ecosystem.", tags: ["cards", "strategy", "immutable", "deckbuilding"], officialLink: "https://godsunchained.com/" },
  { name: "Alien Worlds", status: "history", genre: ["Mining", "Metaverse", "Strategy"], chain: "WAX, BNB Chain, Ethereum", platform: ["Browser", "Mobile"], description: "Alien Worlds is a blockchain metaverse where players mine, use NFTs, and interact with planet based systems. Its ecosystem spans WAX, BNB Chain, and Ethereum.", tags: ["mining", "metaverse", "wax", "bnb"], officialLink: "https://alienworlds.io/" },
  { name: "Upland", status: "history", genre: ["City Builder", "Property Trading", "Simulation"], chain: "EOS, Ethereum", platform: ["Browser", "Mobile"], description: "Upland is a real world map based city builder where players collect, trade, and develop virtual properties linked to physical addresses. It was built on EOS with interoperability for selected assets on Ethereum.", tags: ["property", "city builder", "simulation", "eos"], officialLink: "https://www.upland.me/" },
  { name: "Sorare", status: "history", genre: ["Fantasy Sports", "Collectible Cards"], chain: "Solana", platform: ["Browser", "Mobile"], description: "Sorare is a fantasy sports platform where users collect digital player cards and build lineups based on real match performance. The project announced a migration from StarkEx to Solana.", tags: ["sports", "fantasy", "cards", "solana"], officialLink: "https://sorare.com/" },
  { name: "Illuvium", status: "history", genre: ["RPG", "Auto Battler", "Open World"], chain: "Immutable", platform: ["PC"], description: "Illuvium is an interconnected game universe with creature collection, open world exploration, auto battling, and land based management. Its Web3 layer uses Immutable infrastructure.", tags: ["rpg", "auto battler", "open world", "immutable"], officialLink: "https://illuvium.io/" },
  { name: "Star Atlas", status: "history", genre: ["Space MMO", "Strategy", "Simulation"], chain: "Solana", platform: ["Browser", "PC"], description: "Star Atlas is a space themed MMO and strategy game with ships, factions, fleet systems, and a player driven economy. The project is built around the Solana ecosystem.", tags: ["space", "mmo", "strategy", "solana"], officialLink: "https://staratlas.com/" },
  { name: "Guild of Guardians", status: "history", genre: ["Idle RPG", "Dungeon Crawler", "Squad RPG"], chain: "Immutable", platform: ["Mobile"], description: "Guild of Guardians is a mobile fantasy idle RPG where players build squads and run dungeon based battles. It is published through the Immutable gaming ecosystem.", tags: ["mobile", "rpg", "dungeon", "immutable"], officialLink: "https://www.guildofguardians.com/" },
  { name: "Ember Sword", status: "history", genre: ["MMORPG", "Sandbox"], chain: "Mantle", platform: ["PC"], description: "Ember Sword is a sandbox MMORPG with blockchain based cosmetic ownership, a classless skill driven combat system, and player owned territory.", tags: ["mmorpg", "sandbox", "mantle", "fantasy"], officialLink: null },
  { name: "Pixels", status: "history", genre: ["Farming Sim", "Social MMO", "Casual"], chain: "Ronin", platform: ["Browser"], description: "Pixels is a social farming game where players gather resources, craft, progress skills, and build communities. The game is part of the Ronin gaming ecosystem.", tags: ["farming", "social", "ronin", "browser"], officialLink: "https://www.pixels.xyz/" },
  { name: "Pirate Nation", status: "history", genre: ["RPG", "Fully Onchain Game"], chain: "Proof of Play Apex, Proof of Play Boss", platform: ["Browser"], description: "Pirate Nation is a fully onchain pirate themed RPG where players send pirates on adventures, craft items, and explore the Infinite Isles.", tags: ["pirates", "rpg", "fully onchain", "proof of play"], officialLink: "https://docs.piratenation.game/" },
  { name: "Parallel", status: "history", genre: ["Trading Card Game", "Strategy"], chain: "Ethereum", platform: ["PC", "Browser"], description: "Parallel is a sci fi trading card game where players build decks from factions and battle in strategic matches. Its collectible card assets are tied to Ethereum based ownership.", tags: ["cards", "strategy", "sci fi", "ethereum"], officialLink: "https://parallel.life/" },
  { name: "Shrapnel", status: "history", genre: ["FPS", "Extraction Shooter"], chain: "Avalanche", platform: ["PC"], description: "Shrapnel is an objective based FPS where teams fight in the Sacrifice Zone and secure Sigma resources. Its blockchain layer has been associated with Avalanche subnet infrastructure.", tags: ["fps", "extraction", "avalanche", "pc"], officialLink: "https://www.shrapnel.com/" },
  { name: "Off The Grid", status: "history", genre: ["Battle Royale", "Third Person Shooter"], chain: "GUNZ", platform: ["PC", "PlayStation 5", "Xbox Series X/S"], description: "Off The Grid is a cyberpunk battle royale and third person shooter from Gunzilla Games. Its Web3 item system is connected to the GUNZ blockchain ecosystem.", tags: ["battle royale", "shooter", "gunz", "console"], officialLink: "https://gameoffthegrid.com/" },
  { name: "Heroes of Mavia", status: "history", genre: ["Strategy", "Base Builder"], chain: "Base", platform: ["Mobile"], description: "Heroes of Mavia is a mobile multiplayer strategy game where players build bases, train armies, and battle for resources. Its Web3 economy has been associated with Base.", tags: ["mobile", "strategy", "base builder", "base"], officialLink: "https://www.mavia.com/" },
  { name: "Nyan Heroes", status: "history", genre: ["Hero Shooter", "FPS"], chain: "Solana", platform: ["PC"], description: "Nyan Heroes is a team based hero shooter where cats pilot powerful mechs called Guardians, blending fast paced combat with squad strategy.", tags: ["shooter", "hero shooter", "solana", "mechs"], officialLink: null },
  { name: "MetalCore", status: "history", genre: ["Shooter", "Mech Combat", "MMO"], chain: "Solana", platform: ["PC"], description: "MetalCore is a multiplayer mech combat game with large scale PvPvE battles, vehicles, and faction warfare. The project announced a move from Immutable to Solana.", tags: ["mechs", "shooter", "pvpve", "solana"], officialLink: "https://www.metalcore.gg/" },
  { name: "Aavegotchi", status: "history", genre: ["Digital Pet", "Collectible", "Minigames"], chain: "Polygon, Base", platform: ["Browser"], description: "Aavegotchi is a digital pet and collectible game where players customize Gotchis with wearables and use them across minigames. The project has operated on Polygon and later approved a migration to Base.", tags: ["pets", "collectibles", "polygon", "base"], officialLink: "https://polygon.aavegotchi.com/" },
  { name: "Nine Chronicles", status: "history", genre: ["Idle RPG", "MMORPG"], chain: "Odin, Heimdall", platform: ["PC", "Mobile"], description: "Nine Chronicles is an open source idle RPG powered by a distributed game network. The PC version is associated with Odin while the mobile version introduced Heimdall.", tags: ["rpg", "open source", "odin", "heimdall"], officialLink: "https://nine-chronicles.com/" },
  { name: "League of Kingdoms", status: "history", genre: ["MMO Strategy", "4X Strategy"], chain: "Ethereum, Polygon", platform: ["PC", "Mobile"], description: "League of Kingdoms is an MMO strategy game where players build kingdoms, join alliances, and fight for territory. Land and selected assets have used Ethereum and Polygon based NFT infrastructure.", tags: ["strategy", "4x", "kingdoms", "polygon"], officialLink: "https://www.leagueofkingdoms.com/" },
  { name: "Zed Run", status: "history", genre: ["Horse Racing", "Collectible"], chain: "Ethereum, Polygon, Base", platform: ["Browser"], description: "Zed Run is a digital horse racing game where players own, breed, and race NFT horses. The original game used Ethereum and Polygon, while the reimagined Zed Champions project moved to Base.", tags: ["racing", "horses", "nft", "base"], officialLink: "https://zed.run/" },
  { name: "DeFi Kingdoms", status: "history", genre: ["RPG", "DeFi Game", "Pixel Art"], chain: "DFK Chain, Avalanche", platform: ["Browser"], description: "DeFi Kingdoms is a fantasy pixel RPG that combines hero NFTs, quests, markets, and DeFi mechanics. Crystalvale runs on DFK Chain, an Avalanche subnet.", tags: ["rpg", "defi", "pixel art", "avalanche"], officialLink: "https://defikingdoms.com/" },
  { name: "Pegaxy", status: "history", genre: ["Horse Racing", "Simulation"], chain: "Polygon, Avalanche Subnet", platform: ["Browser"], description: "Pegaxy was a horse racing game with NFT Pegas, breeding, and rental systems. It began on Polygon and its studio later moved the Mirai Labs ecosystem to an Avalanche subnet.", tags: ["racing", "horses", "polygon", "avalanche"], officialLink: null },
  { name: "Blankos Block Party", status: "history", genre: ["Party Game", "Platformer", "User Generated Content"], chain: "Mythos, Polkadot", platform: ["PC"], description: "Blankos Block Party is a multiplayer party game by Mythical Games, featuring collectible vinyl toy style characters and a creator toolset for user made levels and games.", tags: ["party", "ugc", "mythical", "platformer"], officialLink: null },
  { name: "Spider Tanks", status: "history", genre: ["Arena Brawler", "PvP"], chain: "GalaChain", platform: ["PC", "Mac", "Mobile"], description: "Spider Tanks is a tank arena brawler where players customize tank bodies and weapons for team based battles. Gala describes it as one of the games using GalaChain infrastructure.", tags: ["brawler", "pvp", "gala", "tanks"], officialLink: "https://www.spidertanks.game/" },
  { name: "Town Star", status: "history", genre: ["Farming Sim", "Town Builder", "Simulation"], chain: "GalaChain", platform: ["Browser"], description: "Town Star is a farming and town building simulation from Gala Games where players manage production chains and compete through town efficiency. The project later evolved under Gala's broader game ecosystem.", tags: ["farming", "simulation", "town builder", "gala"], officialLink: "https://games.gala.com/game/town-star" },
  { name: "My Crypto Heroes", status: "history", genre: ["RPG", "Turn Based Battle"], chain: "Ethereum", platform: ["Browser", "Mobile"], description: "My Crypto Heroes is a Japanese blockchain RPG where players collect historical heroes, train them, complete quests, and battle in tournaments. Its game assets have used Ethereum based NFT standards.", tags: ["rpg", "turn based", "ethereum", "heroes"], officialLink: "https://www.mycryptoheroes.net/" },
  { name: "CryptoKitties", status: "history", genre: ["Digital Pet", "Collectible"], chain: "Ethereum", platform: ["Browser"], description: "CryptoKitties is an early blockchain game where players collect, breed, and trade digital cats. Each kitty is represented as an NFT on Ethereum.", tags: ["collectibles", "cats", "ethereum", "early web3"], officialLink: "https://www.cryptokitties.co/" },
  { name: "Mines of Dalarnia", status: "history", genre: ["Action", "Platform Mining", "Adventure"], chain: "BNB Chain, Chromia", platform: ["PC", "Browser"], description: "Mines of Dalarnia is a platform mining adventure game where players gather resources, craft equipment, and explore deeper mines. It has been listed on BNB Chain and later integrated Chromia infrastructure.", tags: ["mining", "platformer", "adventure", "bnb"], officialLink: "https://www.minesofdalarnia.com/" },
] as const;
```
