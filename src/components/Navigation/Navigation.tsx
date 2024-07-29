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
    const headerContainer = document.querySelector('#header-container')

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
    <header id='header-container'>
      <nav>
        <p>bangueco()</p>
        <ul id='header-menu'>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <RxHamburgerMenu onClick={toggleMenu} size={30} color='white' />
      </nav>
      <Sidebar />
    </header>
  )
}

export default Navigation