import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saisign – Innovative Technology for a Smarter Tomorrow",
  description:
    "Saisign delivers reliable, high-performance LED display and digital signage products designed for your evolving business needs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="antialiased">
      <body className="min-h-screen bg-white text-[#091322]">{children}</body>
    </html>
  );
}
