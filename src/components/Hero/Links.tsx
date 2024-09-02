"use client"

import {motion} from 'framer-motion'
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa6";

export default function Links() {
  return (
    <motion.div 
      className="flex gap-2"
      initial={{y: -20, opacity: 0, filter: 'blur(5px)'}}
      animate={{y: 0, opacity: 1, filter: 'blur(0px)'}}
      transition={{delay: 1, duration: 0.4}}
    >
      <a
        href="https://www.facebook.com/xxxjustentacion"
        target='_blank'
        className="border-2 p-2 rounded-lg border-light-primary dark:border-dark-primary text-sm lg:text-md hover:bg-light-primary dark:hover:bg-dark-primary hover:text-white dark:hover:text-black"
      >
        <FaFacebookF size={15}/>
      </a>
      <a
        href="https://www.linkedin.com/in/justine-ivan-gueco-4a8a3a312/"
        target='_blank'
        className="border-2 p-2 rounded-lg border-light-primary dark:border-dark-primary text-sm lg:text-md hover:bg-light-primary dark:hover:bg-dark-primary hover:text-white dark:hover:text-black"
      >
        <FaLinkedinIn size={15}/>
      </a>
      <a
        href="https://www.github.com/bangueco"
        target='_blank'
        className="border-2 p-2 rounded-lg border-light-primary dark:border-dark-primary text-sm lg:text-md hover:bg-light-primary dark:hover:bg-dark-primary hover:text-white dark:hover:text-black"
      >
        <FaGithub size={15}/>
      </a>
      <a
        href="https://www.facebook.com"
        className="border-2 p-2 rounded-lg border-light-primary dark:border-dark-primary text-sm lg:text-md hover:bg-light-primary dark:hover:bg-dark-primary hover:text-white dark:hover:text-black"
      >
        Download CV
      </a>
    </motion.div>
  )
}