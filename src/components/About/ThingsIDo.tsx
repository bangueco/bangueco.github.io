"use client"

import {motion} from 'framer-motion'
import thingsIDo from '@/lib/things-i-do'
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react"
import { itemFadeReveal, title } from '@/lib/animationVariants'

export default function ThingsIDo() {
  return (
    <article className="pt-56 flex justify-center items-center flex-col gap-5">
      <motion.h1
        className="text-primary text-3xl md:text-4xl lg:text-5xl font-bold"
        initial="hidden"
        whileInView="visible"
        transition={{duration: 0.5}}
        variants={title}
        viewport={{once: true, amount: 'all'}}
      >
        Things I Do
      </motion.h1>
      <div className="grid grid-cols-2 md:grid-cols-3 justify-center items-center gap-2 w-[100%] lg:w-[70%]">
        {
          thingsIDo.map((item, index)=> (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="reveal"
              variants={itemFadeReveal}
              viewport={{once: true}}
            >
              <Card className='h-44 md:h-52 lg:h-44'>
                <CardHeader className='text-xl md:text-2xl font-bold'>
                  {item.title}
                </CardHeader>
                <Divider/>
                <CardBody className='text-sm md:text-md'>
                  {item.description}
                </CardBody>
              </Card>
            </motion.div>
          ))
        }
      </div>
    </article>
  )
}