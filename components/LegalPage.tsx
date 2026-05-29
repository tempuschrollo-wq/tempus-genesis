import Nav from "@/components/Nav";
import Footer from "@/components/sections/Footer";
import Reveal from "@/components/Reveal";

export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

interface Props {
  eyebrow: string;
  title: string;
  lastUpdated: string;
  blocks: LegalBlock[];
}

export default function LegalPage({
  eyebrow,
  title,
  lastUpdated,
  blocks,
}: Props) {
  return (
    <>
      <Nav />
      <main className="legal">
        <div className="tg-container">
          <div className="legal-inner">
            <Reveal>
              <p className="legal-eyebrow">{eyebrow}</p>
              <h1 className="legal-title">{title}</h1>
              <p className="legal-updated">Last updated: {lastUpdated}</p>
            </Reveal>
            <Reveal>
              <div className="legal-body">
                {blocks.map((block, i) => {
                  if (block.type === "h2") {
                    return <h2 key={i}>{block.text}</h2>;
                  }
                  if (block.type === "ul") {
                    return (
                      <ul key={i}>
                        {block.items.map((item, j) => (
                          <li key={j}>{item}</li>
                        ))}
                      </ul>
                    );
                  }
                  return <p key={i}>{block.text}</p>;
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
