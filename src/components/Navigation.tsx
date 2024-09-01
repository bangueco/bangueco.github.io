"use client"

import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { useEffect, useState } from "react";
import {AnimatePresence, motion} from 'framer-motion'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [scrolled, setScrolled] = useState<number>(0)
  const [isMounted, setIsMounted] = useState<boolean>(false)

  const toggleMenu = () => {
    return setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY);
    };
  
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  useEffect(() => setIsMounted(true), [])

  if (isMounted) {
    return (
      <>
        <header className={`flex justify-between p-5 items-center fixed w-full top-0 z-20 
            ${(scrolled > 80 || window.scrollY > 80) 
            ? 'bg-lighter-light dark:bg-lighter-dark backdrop-blur-md shadow-lg' 
            : 'bg-light dark:bg-dark'}
          `}>
          <div>
            <Link href="/" className="text-2xl hover:text-primary">
              &lt;bangueco/&gt;
            </Link>
          </div>
          <nav>
            {
              isOpen
              ? <RxCross1 onClick={toggleMenu} className="md:hidden hover:cursor-pointer" size={30} />
              : <RxHamburgerMenu onClick={toggleMenu} className="md:hidden hover:cursor-pointer" size={30}  />
            }
            <ul className="hidden md:flex md:gap-4 justify-center text-xl">
              <li>
                <Link href="#hero">Home</Link>
              </li>
              <li>
                <Link href="#about">About</Link>
              </li>
              <li>
                <Link href="#projects">Projects</Link>
              </li>
              <li>
                <ThemeSwitcher />
              </li>
            </ul>
          </nav>
        </header>
        <AnimatePresence>
          {
            isOpen && (
              <div className="fixed w-full z-10">
                <motion.div
                  initial={{y: -200}}
                  animate={{y: 70}}
                  exit={{y: -200}}
                  transition={{duration: 0.5}}
                  className="md:hidden absolute w-full left-0 text-center bg-slate-100 dark:bg-stone-900 backdrop-blur-lg z-10"
                >
                  <ul className="text-xl flex flex-col gap-3">
                    <li className="p-2">
                      <Link href="#hero">Home</Link>
                    </li>
                    <li className="p-2">
                      <Link href="#about">About</Link>
                    </li>
                    <li className="p-2">
                      <Link href="#projects">Projects</Link>
                    </li>
                    <li className="p-2">
                      <ThemeSwitcher />
                    </li>
                  </ul>
                </motion.div>
              </div>
            )
          }
        </AnimatePresence>
      </>
    )
  } else {
    return (
      <>
      </>
    )
  }

}