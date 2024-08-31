"use client"

import {motion} from 'framer-motion'

export default function Introduction() {
  const texts = ["Frontend Developer", "Backend Developer", "Mobile Developer"];

  return (
    <div className="text-center">
      <motion.p 
        className="text-xl sm:text-2xl md:text-3xl"
        initial={{opacity: 0, x: -20, filter: 'blur(5px)'}}
        animate={{opacity: 1, x: 0, filter: 'blur(0px)'}}
        transition={{duration: 0.5}}
      >
        <motion.span
          className='inline-block'
          initial={{ rotate: 0}}
          animate={{ rotate: [0, 20, -30, 0]}}
          transition={{ repeat: Infinity, duration: 0.5, repeatDelay: 1.2, delay: 1.8 }}
        >
          👋🏻
        </motion.span> hello, i am
        <strong className="text-primary"> Justine Ivan Gueco </strong>
      </motion.p>
      <motion.strong 
        className="text-primary text-4xl md:text-5xl lg:text-6xl"
        initial={{opacity: 0, x: -20, filter: 'blur(5px)'}}
        animate={{opacity: 1, x: 0, filter: 'blur(0px)'}}
        transition={{duration: 0.5, delay: 0.2}}
      >
        Full Stack Developer
      </motion.strong>
      <motion.p 
        className="text-xl sm:text-2xl md:text-3xl"
        initial={{opacity: 0, x: -20, filter: 'blur(5px)'}}
        animate={{opacity: 1, x: 0, filter: 'blur(0px)'}}
        transition={{duration: 0.5, delay: 0.4}}
      >
        based from the Philippines 📌
      </motion.p>
    </div>
  )
}