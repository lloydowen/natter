import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://natter.talk"),
  title: "Natter — Coming soon",
  description:
    "Good company. Great conversation. An open source home for team chat, channels, and crystal-clear live streaming. Coming soon to natter.talk.",
  icons: { icon: "/icon.svg" },
  openGraph: {
    title: "Natter — Coming soon",
    description: "Good work. Great company. A new, open source home for your team.",
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
