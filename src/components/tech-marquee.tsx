import { siteConfig } from "@/lib/site-config";

const techList = Array.from(
  new Set(siteConfig.skills.flatMap((group) => group.items))
);
const loopedList = [...techList, ...techList];

export function TechMarquee() {
  return (
    <div
      aria-hidden="true"
      className="group relative left-1/2 right-1/2 -mx-[50vw] w-screen overflow-hidden border-y border-black/10 bg-white py-6 dark:border-white/10 dark:bg-zinc-900/50"
    >
      <div className="animate-marquee flex w-max gap-4 group-hover:[animation-play-state:paused]">
        {loopedList.map((tech, index) => (
          <span
            key={`${tech}-${index}`}
            className="whitespace-nowrap rounded-lg border border-black/10 bg-white px-5 py-2.5 font-mono text-sm font-bold text-zinc-600 dark:border-white/10 dark:bg-zinc-800 dark:text-zinc-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
