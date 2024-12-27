"use client"

import { projects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";

export default function ListOfProjects() {
  return (
    <>
      <h1 className="text-light-primary dark:text-dark-primary text-3xl md:text-4xl lg:text-5xl font-bold">My projects</h1>
      <p>
        A list of my personal and school projects, more info can be found at my <a className="text-light-primary font-bold underline dark:text-dark-primary" href="https://www.github.com/bangueco">Github</a>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto"
      >
        {
          projects.map((project, index) => (
            <ProjectCard
              key={index}
              url={project.url}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              repo_url={project.repo_url}
              live_preview={project.live_preview}
            />
          ))
        }
      </div>
    </>
  )
}