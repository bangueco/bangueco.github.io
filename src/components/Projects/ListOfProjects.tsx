"use client"

import { projects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";

export default function ListOfProjects() {
  return (
    <>
      <h1 className="text-light-primary dark:text-dark-primary text-3xl md:text-4xl lg:text-5xl font-bold">My projects</h1>
      <p className="text-justify text-sm md:text-md p-3 max-sm:w-full sm:w-3/4 md:w-2/3">
        A list of my personal, school and learning projects. This projects are part of my journey as a self taught college student aspiring to become a developer. These projects are hosted on my&nbsp;
        <a
          className="text-light-primary font-bold underline dark:text-dark-primary"
          href="https://www.github.com/bangueco"
        >
          Github
        </a>
        .&nbsp;More information about the projects I have created, you can check my github! &gt;_&lt;
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto pt-10"
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