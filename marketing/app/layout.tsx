import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sfw.team"),
  title: "SFW — Coming soon",
  description:
    "Safe for work. Room for fun. An open source home for team chat, channels, and crystal-clear live streaming. Coming soon to sfw.team.",
  icons: { icon: "/icon.svg" },
  openGraph: {
    title: "SFW — Coming soon",
    description: "Good work. Great company. A new, open source home for your team.",
    url: "https://sfw.team",
    siteName: "SFW",
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
