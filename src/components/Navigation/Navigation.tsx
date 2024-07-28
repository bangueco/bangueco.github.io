import { useEffect, useState } from 'react'
import './Navigation.css'

function Navigation() {

  const [scrolled, setScrolled] = useState<number>(0)

  useEffect(() => {
    const headerContainer = document.querySelector('#header-container')
    window.addEventListener('scroll', () => {
      setScrolled(window.scrollY)
    })

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
          <li><a href="#">About</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <p>Download CV</p>
    </header>
  )
}

export default Navigation