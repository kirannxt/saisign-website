import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-black/[.08] py-8 dark:border-white/[.12]">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 text-sm text-zinc-500 sm:flex-row dark:text-zinc-400">
        <p>{siteConfig.name}. All rights reserved.</p>
        <p>Built with Next.js</p>
      </div>
    </footer>
  );
}
