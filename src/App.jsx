import Header from './components/Header'
import Hero from './components/Hero'
import Main from './components/Main'

function App() {
  return (
    <div className="min-h-dvh bg-color-1 text-slate-50">
      <Header />
      <Main>
        <Hero />
      </Main>
    </div>
  )
}

export default App
