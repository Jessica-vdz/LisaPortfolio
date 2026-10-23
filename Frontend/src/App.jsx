import { useState } from 'react'
import './App.css'
import { Home } from './views/home/home'
import { SecondView } from './views/2nd/main'
import { End } from './views/footer/footer';
import { Menu, X } from 'lucide-react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  function openMenu() {
    if (menuOpen == false) {
      setMenuOpen(true);
    } else {
      setMenuOpen(false)
    }
  }

  function Navbar() {
    return (
      <nav className="navbar">
        <HamburgerMenu />
        <button onClick={() => openMenu()} className="navbarButton">
          {menuOpen ? <X/> : <Menu/>}
        </button>
      </nav>
    )
  }

  function HamburgerMenu() {
    if (menuOpen == true) {
      return (
        <div className="navbarContent">
          <a href="#home" className="navbarItem">Home</a>
          <a href="#aboutMe" className="navbarItem">About Me</a>
          <a href="#3dProjects" className="navbarItem">3D Art</a>
          <a href="#schilderijen" className="navbarItem">Schilderijen</a>
          <a href="#2dProjects" className="navbarItem">2D Art</a>
          <a href="#contact" className="navbarItem">Contact</a>
        </div>
      )
    }
  }

  return (
    <>
      <Navbar />
      <header id='home'>
        <Home />
      </header>
      <main>
        <SecondView />
      </main>
      <footer id='contact'>
        <End />
      </footer>
    </>
  )
}

export default App
