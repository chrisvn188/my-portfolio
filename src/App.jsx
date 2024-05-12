import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Main from './components/Main'

function App() {
  return (
    <div className="min-h-dvh bg-color-1 text-slate-50">
      <Header />
      <Main>
        <Hero></Hero>
      </Main>
      <Footer className="text-center p-2 bg-zinc-950">
        <small>ChrisBui@{new Date().getFullYear()}</small>
      </Footer>
    </div>
  )
}

export default App
