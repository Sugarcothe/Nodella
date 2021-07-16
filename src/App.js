import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Third from './components/Third/Third'
import Fourth from './components/Fourth/Fourth'
import Fifth from './components/Fifth/Fifth'
import Sixth from './components/Sixth/Sixth'
import Seventh from './components/Seventh/Seventh'
import Footer from './components/Footer/Footer'
import Eight from './components/Eight/Eight'
import Menu from './components/Menu/Menu'
import './App.scss'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="App">
      <Navbar 
      menuOpen={menuOpen} 
      setMenuOpen={setMenuOpen}
      />
      <Menu
      menuOpen={menuOpen} 
      setMenuOpen={setMenuOpen}
      />

      <div className='sections'>  
        <Home/>
        <About/>
        <Third/>
        <Fourth/>
        <Fifth/>
        <Sixth/>
        <Seventh/>
        <Eight/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;