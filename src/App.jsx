import Header from "./components/Header/Header"
import Home from "./components/Contents/Home"
import About from "./components/Contents/About"
import Projects from "./components/Contents/Projects"

const App = () => {
  return(
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Projects />
      </main>
    </>
  )
}

export default App