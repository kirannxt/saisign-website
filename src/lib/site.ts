import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Saisign",
  description: "Welcome to the Saisign website.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  navItems: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
  ],
};
