"use client"

import { title } from '@/lib/animationVariants'
import {motion} from 'framer-motion'
import { ReactNode } from 'react'

export default function AnimatedP({children}: {children: ReactNode}) {
  return (
    <motion.p
      initial="hidden"
      animate="visible"
      variants={title}
    >
      {children}
    </motion.p>
  )
}