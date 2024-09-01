import AboutMe from "@/components/About/AboutMe";
import TechnicalSkills from "@/components/About/TechnicalSkills";
import ThingsIDo from "@/components/About/ThingsIDo";
import GridBackground from "@/components/GridBackground";
import Introduction from "@/components/Hero/Introduction";
import Links from "@/components/Hero/Links";

export default function Home() {
  return (
    <main>
      <section id="hero" className="h-screen">
        <GridBackground>
          <Introduction />
          <Links />
        </GridBackground>
      </section>
      <section id="about" className="pt-24 p-3">
        <AboutMe />
        <ThingsIDo />
        <TechnicalSkills />
      </section>
      <section id="projects" className="pt-24 p-3">
      </section>
    </main>
  );
}
