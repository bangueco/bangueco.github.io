import './App.css'
import '../src/components/Contents/contents.css'

import Navigation from './components/Navigation/Navigation'
import Welcome from './components/Contents/Welcome'
import About from './components/Contents/About'
import Projects from './components/Contents/Projects'

function App() {

  return (
    <>
      <Navigation />
      <div id='contents'>
        <Welcome />
        <About />
        <Projects />
      </div>
    </>
  )
}

export default App
