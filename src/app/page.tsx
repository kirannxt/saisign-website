import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

export default function HomePage() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col items-start gap-6 px-6 py-24">
      <span className="rounded-full border border-black/[.1] px-3 py-1 text-xs font-medium text-zinc-600 dark:border-white/[.15] dark:text-zinc-400">
        Next.js App Router Starter
      </span>
      <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
        Welcome to {siteConfig.name}
      </h1>
      <p className="max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
        Your initial Next.js project structure is ready. Start building pages
        in <code className="font-mono text-sm">src/app</code> and reusable UI
        in <code className="font-mono text-sm">src/components</code>.
      </p>
      <div className="flex flex-wrap gap-3 pt-2">
        <Button href="/about">About</Button>
        <Button
          href="https://nextjs.org/docs"
          variant="secondary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Next.js Docs
        </Button>
      </div>
    </section>
  );
}
