"use client"

import { title } from "@/lib/animationVariants";
import {Image} from "@nextui-org/react";
import {motion} from 'framer-motion'
import NextImage from "next/image";

export default function AboutMe() {
  return (
    <article className="gap-5 flex flex-col items-center">
      <motion.h1 
        className="text-primary text-3xl md:text-4xl lg:text-5xl font-bold"
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 'all'}}
        variants={title}
      >
        About Me
      </motion.h1>
      <div className='flex flex-col justify-center items-center gap-8 lg:flex-row p-3 rounded-sm'>
        <motion.div
          initial={{x: -20, opacity: 0, filter: 'blur(5px)'}}
          whileInView={{x: 0, opacity: 1, filter: 'blur(0px)'}}
          transition={{duration: 0.8, delay: 0.3}}
          viewport={{once: true, amount: 'all'}}
        >
          <Image
            as={NextImage}
            radius="full"
            loading="eager"
            src="/images/me.jpg"
            alt='My photo'
            width={200}
            height={200}
          />
        </motion.div>
        <motion.div 
          className='lg:w-[60%] flex flex-col gap-3'
          initial={{x: -20, opacity: 0, filter: 'blur(5px)'}}
          whileInView={{x: 0, opacity: 1, filter: 'blur(0px)'}}
          transition={{duration: 0.7, delay: 0.5}}
          viewport={{once: true}}
        >
          <p className='text-justify text-md lg:text-lg'>
            I am 21 years old, taking <strong className='text-primary'>Bachelor of Science in Information Technology</strong>. 
            I specialize in web and mobile development. As a self taught programmer, i continue to hone my skills and knowledge, in-order to
            keep up with the current technology trends and best practices. My journey on tech started on my sophomore year, where i finally
            have a personal laptop that i can use, where i also install <strong className='text-primary'>Linux</strong> as my main operation system.
          </p>
          <p className='text-justify text-md lg:text-lg'>
            I was driven by passion and excitement every time i learn new things. Looking ahead, I am eager to leverage 
            my knowledge and skills in a dynamic work environment where I can contribute to impactful projects and 
            continue to grow as a developer. My goal is to work with innovative teams that push the boundaries of technology and 
            deliver cutting-edge solutions.
          </p>
        </motion.div>
      </div>
    </article>
  )
}