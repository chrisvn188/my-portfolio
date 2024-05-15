/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useRef, useState } from 'react'
import { navLinks } from '../constants'
import { Hamburger, XIcon } from './icons'
import Button from './Button'
import Logo from './Logo'

const Header = () => {
  const [isMenuClosed, setIsMenuClosed] = useState(true)

  const navRef = useRef(null)

  const handleToggleMenu = () => {
    setIsMenuClosed(!isMenuClosed)
  }

  const handleCLickMobileLinks = () => {
    setIsMenuClosed(true)
  }

  return (
    <header
      id="header"
      className="flex justify-between items-center bg-color-1/50 backdrop-blur-sm z-50 py-8 px-20">
      <a className="flex items-center" href="/">
        <Logo className="h-12 w-12" />
      </a>

      <nav className="hidden md:block">
        <ul className="flex gap-8">
          {navLinks.map((item) => (
            <li key={item.id}>
              <a
                className="capitalize text-base tracking-wide font-semibold text-slate-300 hover:text-slate-50 transition-all"
                href={item.href}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <Button className="md:hidden" isIcon onClick={handleToggleMenu}>
        {isMenuClosed ? <Hamburger /> : <XIcon />}
      </Button>

      {!isMenuClosed && (
        <nav
          className="absolute top-full right-0"
          aria-label="Mobile"
          ref={navRef}>
          <ul className="flex flex-col gap-4 bg-zinc-800/50 p-8 rounded-bl-3xl border-b border-l border-zinc-700/30 backdrop-blur-md">
            {navLinks.map((item) => (
              <li key={item.id}>
                <a
                  className="uppercase text-sm font-bold hover:underline"
                  onClick={handleCLickMobileLinks}
                  href={item.href}>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      <div className="hidden">
        <button className="toggle-mode">Toggle</button>
        <button>Let&apos;s talk</button>
      </div>
    </header>
  )
}

export default Header
