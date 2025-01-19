import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import techStack from '@/lib/tech-stack';
import { projects } from '@/lib/projects';
import Image from "next/image";

export default function Home() {
  return (
    <div className="px-8 py-8 lg:px-16 lg:py-16 lg:flex lg:justify-between lg:h-full lg:relative overflow-auto">
      <header className="flex flex-col gap-3 lg:h-full lg:sticky lg:top-0 lg:w-[50%]">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-200">Justine Ivan Gueco</h1>
        <h2 className="text-sm sm:text-lg md:text-xl font-medium text-slate-200">Full Stack Developer | Mobile Developer</h2>
        <p className="max-w-xs text-sm md:text-base leading-relaxed">I specialize in building mobile and web applications from scratch</p>
        <div className="mt-5 flex gap-3">
          <Link className="hover:text-slate-200" href="https://github.com/bangueco" target="_blank">
            <FaGithub size={24} />
          </Link>
          <Link className="hover:text-slate-200" href="https://www.linkedin.com/in/justine-ivan-gueco-4a8a3a312/" target="_blank">
            <FaLinkedin size={24} />
          </Link>
          <Link className="hover:text-slate-200" href="https://www.instagram.com/aybancaughtin4k/" target="_blank">
            <FaInstagram size={24} />
          </Link>
        </div>
      </header>
      <main className="pt-12 lg:pt-0 lg:w-[50%]">
        <section id="about" className="mb-24">
          <h1 className="mb-8 font-bold text-slate-200 text-2xl sm:text-3xl md:text-4xl">👨🏻‍🎓 ABOUT ME</h1>
          <div className="space-y-5">
            <p className="text-justify text-sm md:text-base leading-relaxed">
              I&apos;m a self-taught college student from Philippines with
              a deep passion for technology and continuous learning. I specialize in building innovative applications
              for mobile and web platforms, transforming ideas into
              functional and user-friendly solutions.
            </p>
            <p className="text-justify text-sm md:text-base leading-relaxed">
              My journey started in my sophomore year (2022) in college when i finally have my own laptop.
              I started learning through online resources and tutorials, and eventually started building my own projects.
              As the years went by, I have gained experience in various technologies and frameworks, and have worked on
              several projects that have helped me grow as a developer as i am today.
            </p>
            <p className="text-justify text-sm md:text-base leading-relaxed">
              Having a strong foundation in both front-end and back-end development especially in mobile development, I am confident
              in my ability to build applications from scratch, learn new technologies, adapt to new environments and face some challenges.
            </p>
            <p className="text-justify text-sm md:text-base leading-relaxed">
              When I&apos;m not coding, I enjoy playing video games, watching movies and tv series, listening to music, and lifting some weights at the gym.
            </p>
          </div>
          <div className="mt-12">
            <h2 className="mb-8 font-bold text-slate-200 text-xl sm:text-2xl md:text-3xl text-center">🖥️ TECHNICAL SKILLS</h2>
            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-2">
              {techStack.map((tech, index) => (
                <div
                  className="flex flex-col justify-center items-center p-3 gap-2 border border-zinc-900 rounded-lg hover:bg-neutral-800/50 transition-colors cursor-pointer"
                  key={index}
                >
                  <Image
                    width={0}
                    height={0}
                    className="w-8 h-8 sm:w-10 sm:h-10"
                    src={tech.src}
                    alt={tech.alt}
                  />
                  <p className="text-[10px] sm:text-xs md:text-sm text-center">{tech.alt}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12">
            <h2 className="mb-8 font-bold text-slate-200 text-xl sm:text-2xl md:text-3xl text-center">💼 EXPERIENCE</h2>
            <div>
              <div className="mb-4 hover:bg-neutral-800/50 border border-zinc-900 transition-colors p-3 rounded-lg cursor-pointer">
                <h3 className="text-slate-200 font-bold text-sm sm:text-md md:text-lg">Hire Me So I Could Get Experience</h3>
                <p className="text-xs sm:text-sm md:text-base">202x - Hire me pls</p>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="mb-24">
          <h1 className="mb-8 font-bold text-slate-200 text-2xl sm:text-3xl md:text-4xl">📌 FEATURED PROJECTS</h1>
          <div className="grid grid-cols-1 gap-5">
            {
              projects.map((project, index) => (
                <div className="p-4 rounded-lg hover:bg-neutral-800/50 border border-zinc-900 transition-colors relative cursor-pointer" key={index}>
                  <h2 className="text-slate-200 font-bold text-lg lg:text-2xl mb-4">{project.title}</h2>
                  <p className="text-sm sm:text-base">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-8 pb-16">
                    {
                      project.technologies.map((tech, index) => (
                        <p className="text-slate-200 text-xs sm:text-sm bg-neutral-800 p-1 rounded-md" key={index}>{tech}</p>
                      ))
                    }
                  </div>
                  <div className="flex gap-3 justify-end items-center absolute bottom-2 right-3">
                    <Link href={project.repo_url} target="_blank" className="text-sm lg:text-md hover:text-slate-200">Github</Link>
                    |
                    <Link href={project.live_preview || "#"} target="_blank" className="text-sm lg:text-md hover:text-slate-200">View</Link>
                  </div>
                </div>
              ))
            }
          </div>
          <p className="text-sm sm:text-base text-center sm:text-left mt-5">More of my projects can be found at my <Link className="hover:text-slate-200 font-medium underline" href="https://github.com/bangueco">Github</Link>.</p>
        </section>
        <section id="contact">
          <h1 className="mb-8 font-bold text-slate-200 text-2xl sm:text-3xl md:text-4xl">📲 CONNECT WITH ME</h1>
          <p className="text-justify text-sm md:text-base leading-relaxed">
            If you have any questions, inquiries, or just want to say hello, feel free to reach out to me through the following platforms provided <span className="lg:hidden">below</span><span className="hidden lg:inline-block">on the side</span>. I&apos;ll try to get back to you as soon as possible.
            I don&apos;t provide my email address here to avoid potential spam. Thank you for understanding.
          </p>
          <div className="mt-5 flex flex-col gap-3 lg:hidden">
            <Link className="hover:text-slate-200 flex items-center gap-2 text-sm md:text-base" href="https://github.com/bangueco" target="_blank">
              <FaGithub size={24} /> Visit my Github
            </Link>
            <Link className="hover:text-slate-200 flex items-center gap-2 text-sm md:text-base" href="https://www.linkedin.com/in/justine-ivan-gueco-4a8a3a312/" target="_blank">
              <FaLinkedin size={24} />Connect with me on LinkedIn
            </Link>
            <Link className="hover:text-slate-200 flex items-center gap-2 text-sm md:text-base" href="https://www.instagram.com/aybancaughtin4k/" target="_blank">
              <FaInstagram size={24} />Become mutuals in Instagram
            </Link>
          </div>
        </section>
        <section className="mt-24 py-8">
          <div className="max-w-6xl mx-auto px-8 text-center text-slate-300 text-sm">
            <p>© {new Date().getFullYear()} Justine Ivan Gueco. Built with Next.js and Tailwind CSS.</p>
          </div>
        </section>
      </main>
    </div>
  );
}
