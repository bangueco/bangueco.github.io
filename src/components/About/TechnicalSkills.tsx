"use client"

import {motion} from 'framer-motion'
import Image from 'next/image'
import techStack from '@/lib/tech-stack'
import { itemFlipReveal, title } from '@/lib/animationVariants'

export default function TechnicalSkills() {
  return (
    <article className='flex flex-col items-center pt-56 gap-5'>
      <motion.h1 
        className="text-primary text-3xl md:text-4xl lg:text-5xl font-bold"
        initial="hidden"
        whileInView="visible"
        transition={{duration: 0.5}}
        viewport={{once: true, amount: 'all'}}
        variants={title}
      >
        Technical Skills
      </motion.h1>
      <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3'>
        {
          techStack.map((tech, index) => (
            <motion.div
              custom={index}
              className='flex flex-col justify-center items-center w-20 h-20 md:w-28 md:h-28 p-2 gap-2 border-1 rounded-md' key={index}
              initial="hidden"
              whileInView="reveal"
              variants={itemFlipReveal}
              viewport={{once: true}}
            >
              <Image
                width={0}
                height={0}
                className='h-10 w-10 md:h-14 md:w-14'
                src={tech.src}
                alt={tech.alt}
              />
              <p className='text-xs md:text-md'>{tech.alt}</p>
            </motion.div>
          ))
        }
      </div>
    </article>
  )
}