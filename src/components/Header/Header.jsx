import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return(
    <>
      <header className="fixed top-0 min-w-full p-3 z-[1100] bg-zinc-900">
        <div className="md:flex md:items-center md:justify-between relative">
          <div className="icon text-green-300 text-3xl p-3 self-start">bangueco()</div>
          <div className="md:hidden absolute right-0 top-3">
            <button
              onClick={toggleMenu}
              className="text-gray-50 focus:outline-none focus:text-green-400"
            >
              <RxHamburgerMenu size={30} />
            </button>
          </div>
          <nav className={`md:flex md:items-center md:w-auto text-center ${isOpen ? 'block' : 'hidden'}`}>
            <ul className="flex flex-col md:flex-row md:items-center md:gap-3">
              <li>
                <a className="text-xl text-gray-50 p-3 hover:border-b-2 hover:border-green-300 transition duration-500 hover:text-green-300" href="#">Home</a>
              </li>
              <li>
                <a className="text-xl text-gray-50 p-3 hover:border-kb-2 hover:border-green-300 transition duration-500 hover:text-green-300" href="#">About</a>
              </li>
              <li>
                <a className="text-xl text-gray-50 p-3 hover:border-b-2 hover:border-green-300 transition duration-500 hover:text-green-300" href="#">Projects</a>
              </li>
              <li>
                <a className="text-xl text-gray-50 p-3 hover:border-b-2 hover:border-green-300 transition duration-500 hover:text-green-300" href="#">Services</a>
              </li>
              <li>
                <a className="text-xl text-gray-50 p-3 hover:border-b-2 hover:border-green-300 transition duration-500 hover:text-green-300" href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header