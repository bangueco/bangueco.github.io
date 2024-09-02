"use client"

import AnimatedH1 from "../AnimatedH1";
import { projects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";
import AnimatedP from "../AnimatedP";
import {motion} from 'framer-motion'
import { itemContainer } from "@/lib/animationVariants";

export default function ListOfProjects() {
  return (
    <>
      <AnimatedH1>My Projects</AnimatedH1>
      <AnimatedP>
        A list of my personal and school projects, more info can be found at my <a className="text-primary" href="https://www.github.com/bangueco">Github</a>
      </AnimatedP>
      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
        initial="hidden"
        whileInView="reveal"
        variants={itemContainer}
        viewport={{amount: 'some'}}
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
      </motion.div>
    </>
  )
}