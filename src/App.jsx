import { useState } from 'react'
import './App.css'
import Header from './Componants/Header'
import ParallaxHeroSection from './Componants/ParallaxHeroSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <ParallaxHeroSection/>

        
    </>
  )
}

export default App
