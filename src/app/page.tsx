import { Hero } from "@/components/hero";

const placeholderSections = [
  { id: "about", label: "About section" },
  { id: "skills", label: "Skills section" },
  { id: "projects", label: "Projects section" },
  { id: "contact", label: "Contact section" },
];

export default function Home() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-24 px-6">
      <Hero />
      {placeholderSections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="flex min-h-[40vh] scroll-mt-20 items-center justify-center rounded-2xl border border-dashed border-black/10 text-zinc-400 dark:border-white/15 dark:text-zinc-600"
        >
          {section.label}
        </section>
      ))}
    </div>
  );
}
