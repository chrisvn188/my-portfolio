import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Main from './components/Main'
import Projects from './components/Projects'

function App() {
  return (
    <div className="min-h-dvh bg-color-1 text-slate-50">
      <Header />
      <Main>
        <Hero />
        <div>
          <img
            src="./src/assets/divider.svg"
            alt=""
            className="select-none w-full"
          />
        </div>
        <Projects />
      </Main>
      <Footer className="text-center p-4 bg-color-1">
        <small>ChrisBui@{new Date().getFullYear()}</small>
      </Footer>
    </div>
  )
}

export default App
