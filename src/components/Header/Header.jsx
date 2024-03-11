import { RxHamburgerMenu } from "react-icons/rx"
import { useState } from "react"

const Header = () => {

  const [isOpen, setIsOpen] = useState(false)

  return(
    <>
      <header className="fixed w-full z-40 bg-zinc-700 md:flex md:justify-between md:items-center">
        <h1 className="p-3 text-2xl text-green-300 sm:text-3xl md:text-4xl md:p-5 lg:text-4xl">bangueco()</h1>
        <ul className={`flex justify-center flex-col items-center gap-3 absolute bg-zinc-700
          z-[-1] p-2 w-full ${isOpen ? 'top-12' : 'top-[-490px]'} transition-all 
          duration-500 ease-in-out md:transition-none md:bg-inherit md:p-6 md:flex-row md:static md:z-10 md:w-auto md:gap-5`}>
          <li className="p-2 md:p-0 lg:p-3">
            <a className="text-xl text-green-300 md:text-xl lg:text-2xl" href="#home">
              Home
            </a>
          </li>
          <li className="p-2 md:p-1 lg:p-3">
            <a className="text-xl text-green-300 md:text-xl lg:text-2xl" href="#about">
              About
            </a>
          </li>
          <li className="p-2 md:p-1 lg:p-3">
            <a className="text-xl text-green-300 md:text-xl lg:text-2xl" href="#projects">
              Projects
            </a>
          </li>
          <li className="p-2 md:p-1 lg:p-3">
            <a className="text-xl text-green-300 md:text-xl lg:text-2xl" href="#services">
              Services
            </a>
          </li>
          <li className="p-2 md:p-1 lg:p-3">
            <a className="text-xl text-green-300 md:text-xl lg:text-2xl" href="#contact">
              Contact
            </a>
          </li>
        </ul>
        <RxHamburgerMenu 
          onClick={() => setIsOpen(!isOpen)} 
          className="absolute top-4 right-3 text-gray-100 md:hidden hover:text-green-300 hover:cursor-pointer active:text-green-600" 
          size={25} 
        />
      </header>
    </>
  )
}

export default Header