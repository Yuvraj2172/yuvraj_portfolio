import { siteConfig } from "@/lib/site-config";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 py-16">
      <p className="font-mono text-xs text-zinc-400 dark:text-zinc-600">
        ~/portfolio/projects.ts
      </p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
        Projects
      </h2>

      <div className="mt-8 flex flex-col gap-6">
        {siteConfig.projects.map((project) => (
          <div
            key={project.slug}
            className="rounded-2xl border border-black/10 p-6 dark:border-white/10"
          >
            <p className="font-mono text-xs text-sky-600 dark:text-sky-400">
              {project.kicker}
            </p>
            <h3 className="mt-1.5 text-lg font-semibold text-zinc-950 dark:text-zinc-50">
              {project.name}
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              {project.description}
            </p>

            <ul className="mt-4 flex flex-col gap-2">
              {project.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex gap-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400"
                >
                  <span aria-hidden="true">•</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-black/10 bg-zinc-50 px-2.5 py-1 font-mono text-xs text-zinc-600 dark:border-white/10 dark:bg-zinc-800/60 dark:text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
