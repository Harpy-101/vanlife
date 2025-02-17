import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home' 
import About from './pages/About'
import Vans from './pages/Vans'

import "./server"


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/vans" element={<Vans />}/>
      </Routes>
    </>
  )
}

export default App
