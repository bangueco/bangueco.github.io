import './App.css'
import '../src/components/Contents/contents.css'

import Navigation from './components/Navigation/Navigation'
import Welcome from './components/Contents/Welcome'
import About from './components/Contents/About'

function App() {

  return (
    <>
      <Navigation />
      <div id='contents'>
        <Welcome />
        <About />
      </div>
    </>
  )
}

export default App
