const Header = () => {
  return(
    <>
      <header className="flex justify-between p-5 items-center">
        <div className="icon text-green-300 text-3xl p-3">bangueco()</div>
        <nav>
          <ul>
            <li className="flex gap-5 items-center">
              <a className="text-xl text-gray-50 p-3 hover:border-b-2 hover:border-green-300 transition duration-500 hover:text-green-300" href="#">Home</a>
              <a className="text-xl text-gray-50 p-3 hover:border-b-2 hover:border-green-300 transition duration-500 hover:text-green-300" href="#">About</a>
              <a className="text-xl text-gray-50 p-3 hover:border-b-2 hover:border-green-300 transition duration-500 hover:text-green-300" href="#">Projects</a>
              <a className="text-xl text-gray-50 p-3 hover:border-b-2 hover:border-green-300 transition duration-500 hover:text-green-300" href="#">Services</a>
              <a className="text-xl text-gray-50 p-3 hover:border-b-2 hover:border-green-300 transition duration-500 hover:text-green-300" href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header