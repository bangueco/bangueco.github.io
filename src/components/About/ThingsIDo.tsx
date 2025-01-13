"use client"

import { motion } from 'framer-motion'
import thingsIDo from '@/lib/things-i-do'
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react"
import { itemContainer, itemFadeReveal, title } from '@/lib/animationVariants'

export default function ThingsIDo() {
  return (
    <article className="pt-96 flex justify-center items-center flex-col gap-5">
      <motion.h1
        className="text-light-primary dark:text-dark-primary text-3xl md:text-4xl lg:text-5xl font-bold"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        variants={title}
        viewport={{ once: true, amount: 'all' }}
      >
        Things I Do
      </motion.h1>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-2 w-[100%] lg:w-[70%]"
        initial="hidden"
        whileInView="reveal"
        variants={itemContainer}
        viewport={{ once: true }}
      >
        {
          thingsIDo.map((item, index) => (
            <motion.div
              key={index}
              variants={itemFadeReveal}
              className='flex justify-center items-center w-full'
            >
              <Card className='w-[90%] h-44 md:h-52 lg:h-52 md:w-[100%] shadow-md transition-shadow hover:shadow-lg'>
                <CardHeader className='text-xl font-bold text-light-primary dark:text-dark-primary'>
                  {index + 1}. {item.title}
                </CardHeader>
                <Divider />
                <CardBody className='text-xs'>
                  {item.description}
                </CardBody>
              </Card>
            </motion.div>
          ))
        }
      </motion.div>
    </article>
  )
}