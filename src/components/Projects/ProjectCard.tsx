"use client"

import { ProjectsProps } from "@/lib/projects";
import { Card, CardBody, CardFooter, CardHeader, Divider } from "@nextui-org/react";
import Image from "next/image";
// import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import {motion} from 'framer-motion'
import { itemFadeReveal } from "@/lib/animationVariants";

export default function ProjectCard({url, title, description, technologies, repo_url, live_preview}: ProjectsProps) {

  // const [isExpand, setIsExpand] = useState<boolean>(false)

  return (
    <motion.article
      variants={itemFadeReveal}
    >
      <Card className="w-[21rem] h-full">
        <CardHeader className="flex-col gap-3 justify-center items-center">
          <Image
            src={url}
            alt={title}
            width={500}
            height={500}
            className="rounded-md object-contain h-[150px] w-full"
          />
          <h1 className="text-lg font-bold">{title.toUpperCase()}</h1>
        </CardHeader>
        <CardBody className="flex justify-center items-center pb-5 pt-2">
          <p 
            className={`text-sm w-full`}
          >
              {description}
          </p>
          <button
            className="text-xs text-light-primary dark:text-dark-primary w-16 pt-2 self-start" 
            // onClick={() => setIsExpand(!isExpand)}
          >
            {/* {isExpand ? 'Read Less' : 'Read More'} */}
          </button>
          <div className="pt-3 flex flex-wrap gap-2">
            {technologies.map((tech, index) => <p key={index} className="border-1 rounded-xl p-2 text-xs">{tech.tech}</p>)}
          </div>
        </CardBody>
        <Divider />
        <CardFooter className="flex justify-end items-center gap-3">
          <a 
            href={repo_url} 
            target="_blank" 
            className="flex flex-row gap-1 items-center justify-center hover:text-light-primary hover:dark:text-dark-primary text-xs"
          >
            <FaGithub size={15} />
            View
          </a>
          |
          <a 
            href={live_preview ? `${live_preview}` : ''} 
            target="_blank"
            className="flex flex-row gap-1 items-center justify-center hover:text-light-primary hover:dark:text-dark-primary text-xs"
          >
            <MdArrowOutward size={15} />
            {live_preview ? 'View' : 'Unavailable'}
          </a>
        </CardFooter>
      </Card>
    </motion.article>
  )
}