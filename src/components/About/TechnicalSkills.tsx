"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import techStack from '@/lib/tech-stack'
import { itemFlipContainer, itemFlipReveal, title } from '@/lib/animationVariants'

export default function TechnicalSkills() {
  return (
    <article className='flex flex-col items-center pt-56 gap-5'>
      <motion.h1
        className="text-light-primary dark:text-dark-primary text-3xl md:text-4xl lg:text-5xl font-bold"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 'all' }}
        variants={title}
      >
        Technical Skills
      </motion.h1>
      <motion.div className='grid grid-cols-3 md:grid-cols-7 lg:grid-cols-9 gap-3'
        initial="hidden"
        whileInView="reveal"
        variants={itemFlipContainer}
        viewport={{ once: true, amount: 'some' }}
      >
        {
          techStack.map((tech, index) => (
            <motion.div
              custom={index}
              className='flex flex-col justify-center items-center w-24 h-24 p-2 gap-2 border-1 rounded-md' key={index}
              variants={itemFlipReveal}
            >
              <Image
                width={0}
                height={0}
                className='h-10 w-10 md:h-12 md:w-12'
                src={tech.src}
                alt={tech.alt}
              />
              <p className='text-xs md:text-md'>{tech.alt}</p>
            </motion.div>
          ))
        }
      </motion.div>
    </article>
  )
}