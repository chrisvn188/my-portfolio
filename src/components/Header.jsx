/* eslint-disable react/prop-types */
import Logo from './Logo'
import PageWidth from './utils/PageWidth'
import { navLinks } from '../constants'
import { useContext } from 'react'
import { NavigationContext } from '../App'
import { FaBars } from 'react-icons/fa'
import SocialLinks from './SocialLinks'

const Header = () => {
  const { handleClickNavLink, openSidebar } = useContext(NavigationContext)

  return (
    <header
      id="header"
      className="border-b border-zinc-50/10 h-20 flex items-center justify-stretch">
      <PageWidth className="w-full">
        <div className="flex justify-between items-center p-4 [ md:px-16 ]">
          <Logo className="h-5 fill-current text-zinc-50" />
          <DesktopNav onClickNavLink={handleClickNavLink} />
          <div className="hidden md:block">
            <SocialLinks />
          </div>
          <OpenMobileMenuButton onMenuButtonClick={openSidebar} />
        </div>
      </PageWidth>
    </header>
  )
}

function DesktopNav({ onClickNavLink }) {
  return (
    <nav className="hidden md:block">
      <ul className="flex gap-8">
        {navLinks.map((navLink) => (
          <li key={navLink.id}>
            <a
              className="text-zinc-400 hover:text-zinc-50 transition-colors capitalize"
              href={navLink.href}
              data-section={navLink.href}
              onClick={onClickNavLink}>
              {navLink.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function OpenMobileMenuButton({ onMenuButtonClick }) {
  return (
    <button
      className="c-icon-button md:hidden"
      onClick={onMenuButtonClick}
      aria-label="open mobile nav">
      <FaBars className="text-xl" />
    </button>
  )
}

export default Header
