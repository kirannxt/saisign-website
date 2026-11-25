import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `Learn more about ${siteConfig.name}.`,
};

export default function AboutPage() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col items-start gap-6 px-6 py-24">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        About {siteConfig.name}
      </h1>
      <p className="max-w-xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
        This is a starter route demonstrating multi-page navigation with the
        Next.js App Router. Update this page with your own content.
      </p>
      <Button href="/" variant="secondary">
        Back to Home
      </Button>
    </section>
  );
}
