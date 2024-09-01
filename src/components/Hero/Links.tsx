"use client"

import {motion} from 'framer-motion'

export default function Links() {
  return (
    <motion.div 
      className="flex gap-2"
      initial={{y: -20, opacity: 0, filter: 'blur(5px)'}}
      animate={{y: 0, opacity: 1, filter: 'blur(0px)'}}
      transition={{delay: 1, duration: 0.4}}
    >
      <a
        href="https://www.facebook.com"
        className="border-2 p-2 rounded-lg hover:border-primary text-sm lg:text-md"
      >
        Download CV
      </a>
    </motion.div>
  )
}