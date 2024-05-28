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

  const handleClickNavLink = (e) => {
    e.preventDefault()
    const section = e.target.dataset.section
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      id="header"
      className="border-b border-zinc-50/10 h-20 flex items-center justify-stretch">
      <PageWidth className="w-full">
        <div className="flex justify-between items-center p-4 [ md:px-16 ]">
          <a className="flex items-center" href="/">
            <Logo className="h-5 fill-current text-zinc-50" />
          </a>
          <nav className="hidden md:block">
            <ul className="flex gap-8">
              {navLinks.map((item) => (
                <li key={item.id}>
                  <a
                    className="capitalize text-base tracking-wide font-semibold text-slate-300 hover:text-slate-50"
                    href={item.href}
                    data-section={item.href.substring(1)}
                    onClick={handleClickNavLink}>
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
              className="fixed top-0 right-0 w-full h-full z-50"
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
