import type { Metadata } from "next";
import LegalPage, { type LegalBlock } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy · Tempus Genesis",
  description:
    "How Tempus Genesis handles the information you share through our website and community channels.",
  openGraph: {
    type: "website",
    siteName: "Tempus Genesis",
    title: "Privacy Policy · Tempus Genesis",
    description:
      "How Tempus Genesis handles the information you share through our website and community channels.",
    images: ["/assets/OG-share.png"],
  },
};

const blocks: LegalBlock[] = [
  {
    type: "p",
    text: `This Privacy Policy explains how Tempus Genesis ("Tempus Genesis", "we", "us"), a Web3 gaming community built and operated together with Mowen Solutions, handles information when you use our website (tempusgenesis.space) and our community channels.`,
  },
  { type: "h2", text: `Information we collect` },
  {
    type: "p",
    text: `We collect information you choose to give us, mainly through the contact form on our site:`,
  },
  {
    type: "ul",
    items: [
      `Your name`,
      `Your email address`,
      `Your Discord handle (optional)`,
      `Your selected reason for contact and your message`,
    ],
  },
  {
    type: "p",
    text: `You do not need to create an account on the website. If you join us on Discord, X (Twitter), or Twitch, those platforms collect and process data under their own privacy policies.`,
  },
  {
    type: "p",
    text: `Our site shows a live community presence count fetched from Discord's public widget. This is an aggregate number only and does not identify individual members.`,
  },
  { type: "h2", text: `How we use information` },
  { type: "p", text: `We use the information you submit to:` },
  {
    type: "ul",
    items: [
      `Respond to your message or inquiry`,
      `Process and coordinate scholarship applications, for example matching applicants with guild managers`,
      `Communicate with you about the community when you have asked us to`,
    ],
  },
  { type: "p", text: `We do not sell your personal information.` },
  { type: "h2", text: `Sharing` },
  {
    type: "p",
    text: `We share your information only as needed to respond to you or run the scholarship program. For scholarship inquiries this may include sharing relevant details with the guild manager you are matched with. We also rely on third-party services to operate, for example email and our hosting and deployment provider. We do not share your information for advertising.`,
  },
  { type: "h2", text: `Data retention` },
  {
    type: "p",
    text: `We keep contact submissions for as long as needed to handle your request and for reasonable record-keeping, then delete them. You can ask us to delete your information at any time.`,
  },
  { type: "h2", text: `Your choices` },
  {
    type: "p",
    text: `You can request access to, correction of, or deletion of the personal information you have given us by emailing tempusgenesis@gmail.com. We will respond within a reasonable time.`,
  },
  { type: "h2", text: `Children` },
  {
    type: "p",
    text: `Tempus Genesis is intended for users who meet the minimum age required to use Web3 games and the platforms we operate on. The site is not directed at children.`,
  },
  { type: "h2", text: `Third-party links` },
  {
    type: "p",
    text: `Our site links to external platforms such as Discord, X, Twitch, and partner sites. We are not responsible for the privacy practices of those sites.`,
  },
  { type: "h2", text: `Changes` },
  {
    type: "p",
    text: `We may update this policy. The "last updated" date above reflects the latest version.`,
  },
  { type: "h2", text: `Contact` },
  {
    type: "p",
    text: `Questions about this policy: tempusgenesis@gmail.com`,
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      lastUpdated="30 May 2026"
      blocks={blocks}
    />
  );
}
