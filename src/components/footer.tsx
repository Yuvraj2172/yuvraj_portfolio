import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { GithubIcon, MailIcon, LinkedinIcon } from "@/components/icons";

const socialLinks = [
  { label: "Email", href: `mailto:${siteConfig.social.email}`, icon: MailIcon },
  { label: "GitHub", href: siteConfig.social.github, icon: GithubIcon },
  { label: "LinkedIn", href: siteConfig.social.linkedin, icon: LinkedinIcon },
];

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white/80 backdrop-blur-sm dark:border-white/10 dark:bg-zinc-900/80">
      <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-6 text-sm text-zinc-600 dark:text-zinc-400">
        <p className="truncate">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        <div className="flex shrink-0 items-center gap-2">
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={link.label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-zinc-700 transition-colors hover:border-sky-500/40 hover:text-sky-600 dark:border-white/15 dark:text-zinc-300 dark:hover:text-sky-400"
            >
              <link.icon className="h-4 w-4" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
