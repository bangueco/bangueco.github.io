import AboutMe from "@/components/About/AboutMe";
import TechnicalSkills from "@/components/About/TechnicalSkills";
import ThingsIDo from "@/components/About/ThingsIDo";
import Contact from "@/components/Contact/Contact";
import GridBackground from "@/components/GridBackground";
import Introduction from "@/components/Hero/Introduction";
import Links from "@/components/Hero/Links";
import ListOfProjects from "@/components/Projects/ListOfProjects";

export default function Home() {
  return (
    <main>
      <section id="hero" className="h-screen">
        <GridBackground>
          <Introduction />
          <Links />
        </GridBackground>
      </section>
      <section id="about" className="pt-24 pb-56 p-3">
        <AboutMe />
        <ThingsIDo />
        <TechnicalSkills />
      </section>
      <section id="projects" className="pt-24 pb-40 p-3 flex flex-col justify-center items-center">
        <ListOfProjects />
      </section>
      <section id="contact" className="pt-24 pb-40 gap-5">
        <Contact />
      </section>
    </main>
  );
}
