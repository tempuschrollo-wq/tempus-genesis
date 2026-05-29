import type { Metadata } from "next";
import LegalPage, { type LegalBlock } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service · Tempus Genesis",
  description:
    "The terms that govern use of the Tempus Genesis website and participation in the community.",
  openGraph: {
    type: "website",
    siteName: "Tempus Genesis",
    title: "Terms of Service · Tempus Genesis",
    description:
      "The terms that govern use of the Tempus Genesis website and participation in the community.",
    images: ["/assets/OG-share.png"],
  },
};

const blocks: LegalBlock[] = [
  {
    type: "p",
    text: `These Terms govern your use of the Tempus Genesis website (tempusgenesis.space) and your participation in the Tempus Genesis community. Tempus Genesis is a Web3 gaming community built and operated together with Mowen Solutions. By using the site or joining the community, you agree to these Terms.`,
  },
  { type: "h2", text: `The community` },
  {
    type: "p",
    text: `Tempus Genesis is a player community focused on Web3 gaming coordination, strategy, and a scholarship program. Membership and participation are voluntary.`,
  },
  { type: "h2", text: `Not financial advice` },
  {
    type: "p",
    text: `Nothing on this site or in our community is financial, investment, legal, or tax advice. Web3 games, tokens, and digital assets carry risk, including the risk of losing value. You are responsible for your own decisions. Do your own research.`,
  },
  { type: "h2", text: `Scholarship program` },
  {
    type: "p",
    text: `The scholarship program lends in-game assets to selected players under an agreed revenue split. Participation, asset lending, and any revenue split are subject to the specific terms agreed between you and your guild manager. We do not guarantee any earnings, rewards, or outcomes. Terms can vary by game and by manager.`,
  },
  { type: "h2", text: `Acceptable use` },
  {
    type: "p",
    text: `When using our site and community channels you agree not to:`,
  },
  {
    type: "ul",
    items: [
      `Break the law or any platform's rules, including those of Discord, X, and Twitch`,
      `Harass, scam, impersonate, or harm other members`,
      `Attempt to disrupt or gain unauthorized access to our systems`,
    ],
  },
  {
    type: "p",
    text: `We may remove content or restrict access for conduct that breaks these Terms or our community rules.`,
  },
  { type: "h2", text: `Brand assets` },
  {
    type: "p",
    text: `Our logos and brand assets, including those in our media kit, are owned by Tempus Genesis. Use them only as described in our media kit usage guidelines. Do not use them to imply partnership or endorsement without permission.`,
  },
  { type: "h2", text: `Disclaimers` },
  {
    type: "p",
    text: `The site and community are provided "as is" without warranties of any kind. We do not guarantee the site will always be available, accurate, or error-free.`,
  },
  { type: "h2", text: `Limitation of liability` },
  {
    type: "p",
    text: `To the extent permitted by law, Tempus Genesis and Mowen Solutions are not liable for any indirect or consequential losses arising from your use of the site, the community, or the scholarship program, including losses related to digital assets.`,
  },
  { type: "h2", text: `Changes` },
  {
    type: "p",
    text: `We may update these Terms. Continued use after changes means you accept the updated Terms.`,
  },
  { type: "h2", text: `Governing law` },
  {
    type: "p",
    text: `These Terms are governed by the laws of Indonesia, and any disputes will be subject to the courts of Indonesia.`,
  },
  { type: "h2", text: `Contact` },
  {
    type: "p",
    text: `Questions about these Terms: tempusgenesis@gmail.com`,
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      lastUpdated="30 May 2026"
      blocks={blocks}
    />
  );
}
