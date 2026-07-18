import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pat Famous | Actor & Voice Talent",
  description: "Official casting site for Pat Famous—actor, voice talent, commercial performer, and background artist.",
  openGraph: { title: "Pat Famous | Actor & Voice Talent", description: "A real face. A memorable presence.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
