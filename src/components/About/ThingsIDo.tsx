"use client"

import {motion} from 'framer-motion'
import thingsIDo from '@/lib/things-i-do'
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react"

export default function ThingsIDo() {
  return (
    <article className="pt-40 flex justify-center items-center flex-col gap-5">
      <motion.h1
        className="text-primary text-3xl md:text-4xl lg:text-5xl font-bold"
        initial={{x: -20, opacity: 0, filter: 'blur(5px)'}}
        whileInView={{x: 0, opacity: 1, filter: 'blur(0px)'}}
        transition={{duration: 0.8}}
        viewport={{once: true, amount: 'all'}}
      >
        Things I Do
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-2 w-[80%]">
        {
          thingsIDo.map((item, index)=> (
            <motion.div
              key={index}
              initial={{x: -20, opacity: 0, filter: 'blur(5px)'}}
              whileInView={{x: 0, opacity: 1, filter: 'blur(0px)'}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{once: true, amount: 'all'}}
            >
              <Card className='h-40'>
                <CardHeader className='text-3xl font-bold'>
                  {item.title}
                </CardHeader>
                <Divider/>
                <CardBody className='text-md'>
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