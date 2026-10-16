import { Contact } from "@/features/home/contact";
import { Francais } from "@/features/home/francais";
import { Hero } from "@/features/home/hero";
import { Highlights } from "@/features/home/highlights";
import { Passions } from "@/features/home/passions";
import { Projects } from "@/features/home/projects";
import { SiteHeader } from "@/features/home/site-header";
import { Work } from "@/features/home/work";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Highlights />
        <Passions />
        <Work />
        <Projects />
        <Francais />
      </main>
      <Contact />
    </>
  );
}
