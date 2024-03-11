import { RxHamburgerMenu } from "react-icons/rx"
import { useState } from "react"

const Header = () => {

  const [isOpen, setIsOpen] = useState(false)

  return(
    <>
      <header className="relative bg-zinc-700">
        <div className="p-2 text-xl text-green-300">bangueco()</div>
        <ul className={`flex justify-center flex-col items-center gap-2 absolute bg-zinc-500
          z-[-1] p-2 w-full ${isOpen ? 'top-11 opacity-100' : 'top-[-490px]'} opacity-0 transition-all duration-500 ease-in-out`}>
          <li>
            <a href="#home">
              Home
            </a>
          </li>
          <li>
            <a href="#about">
              About
            </a>
          </li>
          <li>
            <a href="#projects">
              Projects
            </a>
          </li>
        </ul>
        <RxHamburgerMenu 
          onClick={() => setIsOpen(!isOpen)} 
          className="absolute top-3 right-3 text-gray-100" 
          size={25} 
        />
      </header>
    </>
  )
}

export default Header