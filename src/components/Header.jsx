/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useRef, useState } from 'react'
import { navLinks } from '../constants'
import { Hamburger, XIcon } from './icons'
import Button from './Button'
import Logo from './Logo'
import PageWidth from './utils/PageWidth'

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
    <header id="header">
      <PageWidth>
        <div className="flex justify-between items-center px-4 py-8 [ md:py-8 md:px-16 ]">
          <a className="flex items-center" href="/">
            <Logo className="h-10" />
          </a>
          <nav className="hidden md:block">
            <ul className="flex gap-8">
              {navLinks.map((item) => (
                <li key={item.id}>
                  <a
                    className="capitalize text-base tracking-wide font-semibold text-slate-300 hover:text-slate-50"
                    href={item.href}>
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <Button
            className="md:hidden hover:bg-indigo-950 hover:rounded-full"
            isIcon
            onClick={handleToggleMenu}>
            {isMenuClosed ? (
              <Hamburger className="w-8 h-8" />
            ) : (
              <XIcon className="w-8 h-8" />
            )}
          </Button>
          {!isMenuClosed && (
            <nav
              className="fixed top-0 right-0 w-full h-full"
              aria-label="Mobile Nav"
              ref={navRef}>
              <ul className="flex flex-col gap-4 bg-zinc-800/50 px-4 py-12 rounded-bl-3xl border-b border-l border-zinc-700/30 backdrop-blur-md">
                {navLinks.map((item) => (
                  <li key={item.id}>
                    <a
                      className="uppercase text-md text-center font-bold block p-4 active:bg-white active:text-black active:rounded-full"
                      onClick={handleCLickMobileLinks}
                      href={item.href}>
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </PageWidth>
    </header>
  )
}

export default Header
