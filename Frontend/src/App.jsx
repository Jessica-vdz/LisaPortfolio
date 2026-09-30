import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { Home } from './views/home/home'
import { SecondView } from './views/2nd/main'

function App() {
  return (
    <>
      <Home/>
      <SecondView/>
    </>
  )
}

export default App
