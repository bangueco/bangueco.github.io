"use client"

import { title } from '@/lib/animationVariants'
import {motion} from 'framer-motion'
import { ReactNode } from 'react'

export default function AnimatedH1({children}: {children: ReactNode}) {
  return (
    <motion.h1
      className="text-light-primary dark:text-dark-primary text-3xl md:text-4xl lg:text-5xl font-bold"
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 'all'}}
      variants={title}
    >
      {children}
    </motion.h1>
  )
}