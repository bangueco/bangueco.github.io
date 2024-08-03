import { useEffect, useState } from 'react'
import './Navigation.css'
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { AnimatePresence, motion } from "framer-motion"

function Navigation() {

  const [scrolled, setScrolled] = useState<number>(0)
  const [sidebarVisible, setSidebarVisible] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY);
    };
  
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  useEffect(() => {
    const headerContainer = document.querySelector('#header-wrapper')

    if (scrolled > 20 || window.scrollY > 20) {
      headerContainer?.classList.add('header-scrolled')
    } else {
      headerContainer?.classList.remove('header-scrolled')
    }
  }, [scrolled])

  const toggleMenu = () => {
    setSidebarVisible(!sidebarVisible)
  }

  return (
    <header id='header-wrapper'>
      <div id="header-container">
        <p>bangueco()</p>
        <nav>
          <a href="#about">ABOUT</a>
          <a href="#">PROJECTS</a>
          <a href="#">CONTACT</a>
        </nav>
        {
          !sidebarVisible 
          ? <RxHamburgerMenu id='hamburger-menu' onClick={toggleMenu} color='white' size={30} />
          : <RxCross1 onClick={toggleMenu} color='white' size={30} />
        }
        <AnimatePresence>
          {
            sidebarVisible && (
            <motion.div 
              id='sidebar'
              initial={{translateX: 200}}
              animate={{translateX: 0}}
              exit={{translateX: 200}}
              transition={{duration: 0.65}}
            >
              <motion.div 
                id="sidebar-menu"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{duration: 0.1}}
              >
                <a href="#about">About</a>
                <a href="">Projects</a>
                <a href="">Contact</a>
              </motion.div>
            </motion.div>
            )
          }
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Navigation