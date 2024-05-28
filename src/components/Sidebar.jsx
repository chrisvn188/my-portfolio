/* eslint-disable react/prop-types */
import { IoClose } from 'react-icons/io5'
import { NavigationContext } from '../App'
import { useContext } from 'react'
import SocialLinks from './SocialLinks'

const Sidebar = ({ navLinks }) => {
  const { closeSidebar, handleClickNavLink } = useContext(NavigationContext)

  return (
    <aside className="fixed top-0 left-0 w-full h-dvh bg-zinc-900 grid place-items-center">
      <div className="w-full flex flex-col items-center gap-16">
        <ul className="flex flex-col gap-4 w-full">
          {navLinks.map((navLink) => (
            <li key={navLink.id}>
              <a
                className="p-8 block hover:bg-indigo-600 capitalize tracking-wider font-semibold border-b border-t border-zinc-800 transition-colors text-center"
                href={navLink.href}
                onClick={handleClickNavLink}
                data-section={navLink.href}>
                {navLink.title}
              </a>
            </li>
          ))}
        </ul>
        <SocialLinks />
      </div>
      <button
        className="absolute top-4 right-4"
        onClick={closeSidebar}
        aria-label="close mobile nav">
        <IoClose className="text-3xl" />
      </button>
    </aside>
  )
}

export default Sidebar
