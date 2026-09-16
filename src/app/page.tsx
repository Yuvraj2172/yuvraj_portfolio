import { Hero } from "@/components/hero";
import { TechMarquee } from "@/components/tech-marquee";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-24 px-6">
      <Hero />
      <TechMarquee />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
