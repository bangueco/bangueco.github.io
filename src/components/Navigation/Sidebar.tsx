import './Sidebar.css'
import { RxCross1 } from "react-icons/rx";

export default function Sidebar() {

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
    <div id='sidebar' className="hidden">
      <RxCross1 onClick={toggleMenu} color='white' size={30} />
      <div id="sidebar-menu">
        <a href="">About</a>
        <a href="">Projects</a>
        <a href="">Contact</a>
      </div>
    </div>
  )
}