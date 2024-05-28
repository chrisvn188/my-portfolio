import { createContext, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Main from './components/Main'
import TechStack from './components/TechStack'
import Sidebar from './components/Sidebar'
import { navLinks } from './constants'

export const NavigationContext = createContext(null)

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const openSidebar = () => {
    setIsSidebarOpen(true)
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  const handleClickNavLink = (e) => {
    e.preventDefault()
    const section = e.target.dataset.section.substring(1)
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' })
    setIsSidebarOpen(false)
  }

  return (
    <NavigationContext.Provider
      value={{ isSidebarOpen, openSidebar, closeSidebar, handleClickNavLink }}>
      <div className="min-h-dvh bg-color-1 text-slate-50 relative">
        <Header />
        <Main>
          <Hero />
          <TechStack />
        </Main>
        {isSidebarOpen && <Sidebar navLinks={navLinks} />}
      </div>
    </NavigationContext.Provider>
  )
}

export default App
