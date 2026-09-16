"use client";

import { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { TrafficLights } from "@/components/traffic-lights";
import { GithubIcon } from "@/components/icons";
import { useActiveSection } from "@/hooks/use-active-section";
import { siteConfig } from "@/lib/site-config";

const sectionIds = siteConfig.navLinks.map((link) => link.href.slice(1));

function navLinkClasses(isActive: boolean) {
  return `rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
    isActive
      ? "bg-sky-500/10 text-sky-600 dark:text-sky-400"
      : "text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
  }`;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const activeId = useActiveSection(sectionIds);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur-sm dark:border-white/10 dark:bg-zinc-900/80">
      <div className="mx-auto flex h-16 max-w-3xl items-center justify-between gap-4 px-6">
        <Link
          href="#"
          className="flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <TrafficLights />
          <span className="text-base font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
            {siteConfig.name.split(" ")[0]}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 sm:flex">
          {siteConfig.navLinks.map((link) => {
            const id = link.href.slice(1);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={navLinkClasses(activeId === id)}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hidden h-9 w-9 items-center justify-center rounded-full border border-black/10 text-zinc-700 transition-colors hover:bg-black/5 dark:border-white/15 dark:text-zinc-300 dark:hover:bg-white/10 sm:flex"
          >
            <GithubIcon className="h-[18px] w-[18px]" />
          </Link>
          <Link
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-md bg-sky-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-sky-400 sm:inline-flex"
          >
            Resume
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-zinc-700 transition-colors hover:bg-black/5 dark:border-white/15 dark:text-zinc-300 dark:hover:bg-white/10 sm:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-[18px] w-[18px]"
            >
              {open ? (
                <path d="M18 6 6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-black/10 px-6 py-4 dark:border-white/10 sm:hidden">
          <ul className="flex flex-col gap-1">
            {siteConfig.navLinks.map((link) => {
              const id = link.href.slice(1);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block ${navLinkClasses(activeId === id)}`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-3 flex items-center gap-3 border-t border-black/10 pt-3 dark:border-white/10">
            <Link
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-2 rounded-md border border-black/10 px-3 py-1.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-black/5 dark:border-white/15 dark:text-zinc-300 dark:hover:bg-white/10"
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
            </Link>
            <Link
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="rounded-md bg-sky-500 px-3 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-sky-400"
            >
              Resume
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
