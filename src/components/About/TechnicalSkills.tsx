"use client"

import {motion} from 'framer-motion'
import Image from 'next/image'
import techStack from '@/lib/tech-stack'

export default function TechnicalSkills() {
  return (
    <article className='flex flex-col items-center pt-20 gap-5'>
      <motion.h1 
        className="text-primary text-3xl md:text-4xl lg:text-5xl font-bold"
        initial={{x: -20, opacity: 0, filter: 'blur(5px)'}}
        whileInView={{x: 0, opacity: 1, filter: 'blur(0px)'}}
        transition={{duration: 0.4, delay: 0.3}}
        viewport={{once: true, amount: 0.4}}
      >
        Technical Skills
      </motion.h1>
      <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-3'>
        {
          techStack.map((tech, index) => (
            <motion.div 
              className='flex flex-col justify-center items-center w-28 p-3 border-1 rounded-lg' key={index}
              initial={{x: -30, opacity: 0, filter: 'blur(5px)'}}
              whileInView={{x: 0, opacity: 1, filter: 'blur(0px)'}}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{once: true}}
            >
              <Image
                width={50}
                height={50}
                src={tech.src}
                alt={tech.alt}
              />
              <p>{tech.alt}</p>
            </motion.div>
          ))
        }
      </div>
    </article>
  )
}