import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { GithubIcon, MailIcon, LinkedinIcon } from "@/components/icons";
import { TrafficLights } from "@/components/traffic-lights";

const initials = siteConfig.name
  .split(" ")
  .map((part) => part[0])
  .join("");

export function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-8 py-16 text-center"
    >
      <div
        aria-hidden="true"
        className="flex h-28 w-28 items-center justify-center rounded-2xl border border-black/10 bg-zinc-100 text-2xl font-semibold tracking-wide text-zinc-500 dark:border-white/10 dark:bg-zinc-800 dark:text-zinc-400"
      >
        {initials}
      </div>

      <div className="flex flex-col items-center gap-3">
        <p className="font-mono text-sm font-medium text-sky-600 dark:text-sky-400">
          Hi, I&rsquo;m
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-5xl">
          {siteConfig.name}
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          {siteConfig.tagline}
        </p>
      </div>

      <div className="w-full max-w-lg overflow-hidden rounded-xl border border-black/10 bg-zinc-950 text-left shadow-sm dark:border-white/10">
        <div className="flex items-center gap-3 border-b border-white/10 px-4 py-2.5">
          <TrafficLights />
          <span className="font-mono text-xs text-zinc-400">
            {siteConfig.codeFileName}
          </span>
        </div>
        <div className="flex flex-col gap-1.5 px-5 py-5 font-mono text-sm leading-6">
          <p className="text-zinc-500 italic">
            # Hi, I&rsquo;m {siteConfig.name}
          </p>
          <p>
            <span className="text-sky-300">role</span>{" "}
            <span className="text-zinc-500">=</span>{" "}
            <span className="text-emerald-400">
              &quot;{siteConfig.tagline}&quot;
            </span>
          </p>
          <p className="text-zinc-500 italic">
            # {siteConfig.heroStack.join(" · ")}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link
          href={siteConfig.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-sky-400"
        >
          Resume
        </Link>
        <Link
          href={siteConfig.social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-black/10 px-5 py-2.5 text-sm font-medium text-zinc-800 transition-colors hover:bg-black/5 dark:border-white/15 dark:text-zinc-200 dark:hover:bg-white/10"
        >
          <GithubIcon className="h-4 w-4" />
          GitHub
        </Link>
        <Link
          href="#contact"
          className="rounded-md border border-black/10 px-5 py-2.5 text-sm font-medium text-zinc-800 transition-colors hover:bg-black/5 dark:border-white/15 dark:text-zinc-200 dark:hover:bg-white/10"
        >
          Get in Touch
        </Link>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-mono text-sm text-zinc-500 dark:text-zinc-500">
        <Link
          href={`mailto:${siteConfig.social.email}`}
          className="inline-flex items-center gap-1.5 transition-colors hover:text-zinc-950 dark:hover:text-zinc-50"
        >
          <MailIcon className="h-4 w-4" />
          {siteConfig.social.email}
        </Link>
        <span aria-hidden="true">·</span>
        <Link
          href={siteConfig.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 transition-colors hover:text-zinc-950 dark:hover:text-zinc-50"
        >
          <LinkedinIcon className="h-4 w-4" />
          LinkedIn
        </Link>
      </div>
    </section>
  );
}
