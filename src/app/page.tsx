import AboutMe from "@/components/About/AboutMe";
import Introduction from "@/components/Hero/Introduction";
import Links from "@/components/Hero/Links";

export default function Home() {
  return (
    <main>
      <section id="hero" className="h-screen flex flex-col gap-5 justify-center items-center">
        <Introduction />
        <Links />
      </section>
      <section id="about" className="mt-16">
        <AboutMe />
      </section>
    </main>
  );
}
