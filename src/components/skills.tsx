import { siteConfig } from "@/lib/site-config";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 py-16">
      <p className="font-mono text-xs text-zinc-400 dark:text-zinc-600">
        ~/portfolio/skills.ts
      </p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
        Technical Skills
      </h2>

      <div className="mt-8 flex flex-col gap-8">
        {siteConfig.skills.map((group) => (
          <div key={group.category}>
            <h3 className="text-xs font-semibold tracking-wider text-sky-600 uppercase dark:text-sky-400">
              {group.category}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-black/10 bg-zinc-50 px-3 py-1.5 font-mono text-sm text-zinc-700 dark:border-white/10 dark:bg-zinc-800/60 dark:text-zinc-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
