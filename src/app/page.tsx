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
        <h2 className="text-sm sm:text-md md:text-lg font-medium text-slate-200">Full Stack Developer | Mobile Developer</h2>
        <p className="max-w-xs text-xs sm:text-sm md:text-base">I specialize in building mobile and web applications from scratch</p>
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
          <h1 className="mb-8 font-bold text-slate-200 text-2xl sm:text-3xl md:text-4xl"># ABOUT ME</h1>
          <div className="space-y-5">
            <p className="text-justify text-sm md:text-base leading-relaxed">
              I&apos;m a self-taught college student from <span className="text-slate-200 font-medium">Philippines</span> with
              a deep passion for technology and continuous learning. I specialize in building innovative applications
              for <span className="text-slate-200 font-medium">mobile and web platforms</span>, transforming ideas into
              functional and user-friendly solutions.
            </p>
            <p className="text-justify text-sm md:text-base leading-relaxed">
              My journey began in <span className="text-slate-200 font-medium">2022</span> when I started learning web
              development through online resources. Starting with frontend basics, I progressively expanded into backend
              development with PHP and Laravel. Eventually I transitioned to <span className="text-slate-200 font-medium">Fullstack Development</span> and JavaScript ecosystem.
            </p>
            <p className="text-justify text-sm md:text-base leading-relaxed">
              As the <span className="text-slate-200 font-medium">lead developer</span> for our capstone project (2024),
              I embraced the challenge of mobile development with React Native and Express.js, showcasing my ability to
              adapt and learn new technologies quickly.
            </p>
            <p className="text-justify text-sm md:text-base leading-relaxed">
              When I&apos;m not coding, I enjoy playing video games, watching movies and tv series, listening to music, and lifting some weights at the gym.
            </p>
          </div>
          <div className="mt-12">
            <h2 className="mb-8 font-bold text-slate-200 text-xl sm:text-2xl md:text-3xl text-center">TECHNICAL SKILLS</h2>
            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-9">
              {
                techStack.map((tech, index) => (
                  <div
                    className='flex flex-col justify-center items-center p-2 gap-3 rounded-lg hover:bg-neutral-800/50 transition-colors cursor-pointer' key={index}
                  >
                    <Image
                      width={0}
                      height={0}
                      className='h-10 w-10'
                      src={tech.src}
                      alt={tech.alt}
                    />
                    <p className='text-xs'>{tech.alt}</p>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="mt-12">
            <h2 className="mb-8 font-bold text-slate-200 text-xl sm:text-2xl md:text-3xl text-center">EXPERIENCE</h2>
            <div>
              <div className="mb-4 hover:bg-neutral-800/50 border border-zinc-900 transition-colors p-3 rounded-lg cursor-pointer">
                <h3 className="text-slate-200 font-bold text-sm sm:text-md md:text-lg">Hire Me So I Could Get Experience</h3>
                <p className="text-xs sm:text-sm md:text-base">202x - Hire me pls</p>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <h2 className="mb-8 font-bold text-slate-200 text-xl sm:text-2xl md:text-3xl text-center">EDUCATION</h2>
            <div>
              <div className="mb-4 hover:bg-neutral-800/50 border border-zinc-900 transition-colors p-3 rounded-lg cursor-pointer">
                <h3 className="text-slate-200 font-bold text-sm sm:text-md md:text-lg">Eastwoods Professional College of Science and Technology</h3>
                <p className="text-xs sm:text-sm md:text-base">BS in Information Technology (2021 - 2025)</p>
              </div>
              <div className="hover:bg-neutral-800/50 border border-zinc-900 transition-colors p-3 rounded-lg cursor-pointer">
                <h3 className="text-slate-200 font-bold text-sm sm:text-md md:text-lg">ACLC College of Balanga</h3>
                <p className="text-xs sm:text-sm md:text-base">TVL-ICT (2019 - 2021)</p>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="mb-24">
          <h1 className="mb-8 font-bold text-slate-200 text-2xl sm:text-3xl md:text-4xl"># FEATURED PROJECTS</h1>
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
          <p className="text-sm sm:text-base text-center sm:text-left mt-10">More of my projects can be found at my <Link className="hover:text-slate-200 font-medium underline" href="https://github.com/bangueco">Github</Link>.</p>
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
