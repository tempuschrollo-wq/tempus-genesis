const DISCORD_INVITE_URL = "https://discord.gg/nwRam2xxFZ";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <div className="footer-brand">
            Tempus <em>Genesis</em>
          </div>
          <p className="footer-tagline">
            An organized Web3 gaming community for players who take the game
            seriously. Daily coordination, on-chain alpha, scholarship program.
          </p>
          <div className="footer-est">— Est. MMXXIII · Worldwide —</div>
        </div>
        <div>
          <div className="footer-col-title">Connect</div>
          <ul className="footer-links">
            <li>
              <a href={DISCORD_INVITE_URL} target="_blank" rel="noopener noreferrer">
                Discord
              </a>
            </li>
            <li>
              <a href="https://twitter.com/TempusGenesisW3" target="_blank" rel="noopener noreferrer">
                Twitter / X
              </a>
            </li>
            <li>
              <a href="https://twitch.tv/tempusgenesisw3" target="_blank" rel="noopener noreferrer">
                Twitch
              </a>
            </li>
            <li>
              <a href="mailto:tempusgenesis@gmail.com">Email</a>
            </li>
          </ul>
        </div>
        <div>
          <div className="footer-col-title">Community</div>
          <ul className="footer-links">
            <li>
              <a href="#games">Portfolio</a>
            </li>
            <li>
              <a href="#scholarship">Scholarship</a>
            </li>
            <li>
              <a href="#founders">Founders</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <div className="footer-col-title">Legal</div>
          <ul className="footer-links">
            <li>
              <span>Terms</span>
            </li>
            <li>
              <span>Privacy</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span className="footer-copy">
          © 2026 TEMPUS GENESIS · ALL RIGHTS RESERVED
        </span>
        <span className="footer-credit">
          — BUILT BY MOWEN SOLUTIONS
          <span>·</span>
          DEVELOPED BY{" "}
          <a href="https://x.com/Kagalito" target="_blank" rel="noopener noreferrer">
            @KAGALI
          </a>{" "}
          —
        </span>
      </div>
    </footer>
  );
}
