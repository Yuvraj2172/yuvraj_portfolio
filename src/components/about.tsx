"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { HighlightedText } from "@/components/highlighted-text";

const { bio, education, certifications, achievements } = siteConfig.about;
const [teaser, ...rest] = bio;

export function About() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className="scroll-mt-20 py-16 text-center">
      <p className="font-mono text-xs text-zinc-400 dark:text-zinc-600">
        ~/portfolio/about.ts
      </p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
        About
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
        <HighlightedText text={teaser} term="Data Engineer" />
      </p>

      {expanded &&
        rest.map((paragraph) => (
          <p
            key={paragraph}
            className="mx-auto mt-4 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400"
          >
            {paragraph}
          </p>
        ))}

      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className="mt-4 text-sm text-zinc-500 underline decoration-zinc-400 underline-offset-4 transition-colors hover:text-zinc-950 dark:text-zinc-500 dark:hover:text-zinc-50"
      >
        {expanded ? "Show less" : "More about me"}
      </button>

      {expanded && (
        <div className="mt-10 grid gap-6 text-left sm:grid-cols-2">
          <div className="rounded-2xl border border-black/10 bg-zinc-50 p-5 dark:border-white/10 dark:bg-zinc-900">
            <h3 className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
              Education
            </h3>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              {education.degree}
            </p>
            <p className="text-sm text-zinc-500 dark:text-zinc-500">
              {education.school}
            </p>
            <p className="mt-1 text-xs text-zinc-400 dark:text-zinc-600">
              {education.period}
            </p>
          </div>

          <div className="rounded-2xl border border-black/10 bg-zinc-50 p-5 dark:border-white/10 dark:bg-zinc-900">
            <h3 className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
              Certifications
            </h3>
            <ul className="mt-2 flex flex-col gap-3">
              {certifications.map((cert) => (
                <li key={cert.name}>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300">
                    {cert.name}
                  </p>
                  <p className="text-xs text-zinc-400 dark:text-zinc-600">
                    {cert.issuer} · {cert.date}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-black/10 bg-zinc-50 p-5 transition duration-300 ease-out hover:-translate-y-1 hover:border-sky-500/40 hover:shadow-lg sm:col-span-2 dark:border-white/10 dark:bg-zinc-900">
            <h3 className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
              Achievements
            </h3>
            <ul className="mt-2 flex flex-col gap-2">
              {achievements.map((achievement) => (
                <li
                  key={achievement}
                  className="flex gap-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400"
                >
                  <span aria-hidden="true">•</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}
