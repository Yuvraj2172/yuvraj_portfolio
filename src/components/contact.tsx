import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { GithubIcon, MailIcon, LinkedinIcon } from "@/components/icons";

const contactMethods = [
  {
    label: "Email",
    value: siteConfig.social.email,
    href: `mailto:${siteConfig.social.email}`,
    icon: MailIcon,
  },
  {
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: siteConfig.social.linkedin,
    icon: LinkedinIcon,
  },
  {
    label: "GitHub",
    value: "View my work",
    href: siteConfig.social.github,
    icon: GithubIcon,
  },
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-16">
      <p className="font-mono text-xs text-zinc-400 dark:text-zinc-600">
        ~/portfolio/contact.ts
      </p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
        Get in Touch
      </h2>

      <p className="mt-4 max-w-xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
        {siteConfig.contactMessage}
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {contactMethods.map((method) => (
          <Link
            key={method.label}
            href={method.href}
            target={method.href.startsWith("http") ? "_blank" : undefined}
            rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="group flex flex-col gap-3 rounded-2xl border border-black/10 p-5 transition-colors hover:border-sky-500/40 hover:bg-sky-500/5 dark:border-white/10"
          >
            <method.icon className="h-5 w-5 text-zinc-400 transition-colors group-hover:text-sky-500 dark:text-zinc-500" />
            <div>
              <p className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
                {method.label}
              </p>
              <p className="mt-0.5 truncate text-sm text-zinc-500 dark:text-zinc-500">
                {method.value}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
