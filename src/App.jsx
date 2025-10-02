import { useState } from 'react'
import './App.css'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import LandingBody from './components/landingbody/landingbody'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CostumersSection } from './components/custommers/CostumersSection'
import { IntroSection } from './components/custommers/IntroSection'
import Prueba from './components/vistaprueba/prueba' // Import con mayúscula

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <>
          <Header/>
          <LandingBody/>
          <Footer/>
          </>
        }>
        </Route>

        <Route path='/customers' element={
          <>
          <Header/>
          <IntroSection/>
          <CostumersSection/>          
          <Footer/>
          </>
        }>
        </Route>

        <Route path='/prueba' element={
          <>
          <Prueba/> 
          </>
        }>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App