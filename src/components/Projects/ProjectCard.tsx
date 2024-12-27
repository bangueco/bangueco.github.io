"use client";

import { ProjectsProps } from "@/lib/projects";
import { Card, CardBody, CardFooter, CardHeader, Divider } from "@nextui-org/react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { itemFadeReveal } from "@/lib/animationVariants";

const ProjectCard: React.FC<ProjectsProps> = ({
  url,
  title,
  description,
  technologies,
  repo_url,
  live_preview,
}) => {
  return (
    <article>
      <Card className="w-[22rem] shadow-md transition-shadow hover:shadow-lg">
        <CardHeader className="flex-col gap-3 justify-center items-center">
          <Image
            src={url}
            alt={title}
            width={500}
            height={500}
            className="rounded-md object-contain h-[150px] w-full"
          />
          <h1 className="text-lg font-bold text-primary">{title.toUpperCase()}</h1>
        </CardHeader>
        <CardBody className="relative flex flex-col gap-5 justify-center items-center pb-5 pt-2 overflow-hidden">
          <div className="text-[0.7rem] w-full text-justify h-[75px] overflow-y-auto scrollbar-default scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-600 relative">
            {description}
          </div>
          <div className="pt-3 flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 py-1 px-3 rounded-full text-xs"
              >
                {tech.tech}
              </span>
            ))}
          </div>
        </CardBody>
        <Divider className="my-3 border-gray-300 dark:border-gray-700" />
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
    </article>
  );
};

export default ProjectCard;
