import { useEffect, useState } from 'react'
import './Navigation.css'
import { RxHamburgerMenu } from "react-icons/rx";
import Sidebar from './Sidebar';

function Navigation() {

  const [scrolled, setScrolled] = useState<number>(0)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrolled(window.scrollY)
    })
  }, [])

  useEffect(() => {
    const headerContainer = document.querySelector('#header-wrapper')

    if (scrolled > 20) {
      headerContainer?.classList.add('header-scrolled')
    } else {
      headerContainer?.classList.remove('header-scrolled')
    }
  }, [scrolled])

  const toggleMenu = () => {
    const headerMenu = document.querySelector('#sidebar')

    if (headerMenu && !headerMenu.classList.contains('header-active')) {
      headerMenu.classList.toggle('hidden')
      headerMenu.classList.toggle('sidebar-active')
    } else {
      headerMenu?.classList.toggle('hidden')
      headerMenu?.classList.toggle('sidebar-active')
    }
  }

  return (
    <header id='header-wrapper'>
      <div id="header-container">
        <p>bangueco()</p>
        <nav>
          <a href="#">ABOUT</a>
          <a href="#">PROJECTS</a>
          <a href="#">CONTACT</a>
        </nav>
        <RxHamburgerMenu id='hamburger-menu' onClick={toggleMenu} color='white' size={30} />
      </div>
      <Sidebar />
    </header>
  )
}

export default Navigation