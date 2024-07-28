import { useEffect, useState } from 'react'
import './Navigation.css'

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

  return (
    <header id='header-container'>
      <p>bangueco()</p>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <p>Download CV</p>
    </header>
  )
}

export default Navigation