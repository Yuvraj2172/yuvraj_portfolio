import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const socialLinks = [
  { label: "GitHub", href: siteConfig.social.github },
  { label: "LinkedIn", href: siteConfig.social.linkedin },
  { label: "Email", href: `mailto:${siteConfig.social.email}` },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-[calc(100vh-4rem)] flex-col justify-center gap-8 py-16"
    >
      <div className="flex flex-col gap-4">
        <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
          Hi, I&rsquo;m
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-5xl">
          {siteConfig.name}
        </h1>
        <p className="text-lg font-medium text-zinc-700 dark:text-zinc-300">
          {siteConfig.tagline}
        </p>
        <p className="max-w-xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
          {siteConfig.summary}
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <Link
          href="#projects"
          className="rounded-full bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200"
        >
          View Projects
        </Link>
        <Link
          href="#contact"
          className="rounded-full border border-black/10 px-5 py-2.5 text-sm font-medium text-zinc-800 transition-colors hover:bg-black/5 dark:border-white/15 dark:text-zinc-200 dark:hover:bg-white/10"
        >
          Get in Touch
        </Link>
        <Link
          href={siteConfig.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-black/10 px-5 py-2.5 text-sm font-medium text-zinc-800 transition-colors hover:bg-black/5 dark:border-white/15 dark:text-zinc-200 dark:hover:bg-white/10"
        >
          Download Resume
        </Link>
      </div>

      <div className="flex items-center gap-5 text-sm text-zinc-500 dark:text-zinc-400">
        {socialLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="transition-colors hover:text-zinc-950 dark:hover:text-zinc-50"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
