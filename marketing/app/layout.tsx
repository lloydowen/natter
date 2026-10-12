import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://natter.talk"),
  title: "Natter — Coming soon",
  description:
    "Replace Discord, Slack, Teams, or Mattermost. Team chat, 4K 60fps screen sharing, and native apps. Self-host or choose managed hosting at £30/month per team. Coming soon.",
  icons: { icon: "/icon.svg" },
  openGraph: {
    title: "Natter — Coming soon",
    description: "Team chat, voice calls, 4K 60fps screen sharing, and native apps. Host it yourself or choose managed hosting at £30/month per team. Coming soon.",
    url: "https://natter.talk",
    siteName: "Natter",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
