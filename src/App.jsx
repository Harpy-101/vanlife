import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home' 
import About from './pages/About'
import Vans from './pages/Vans/Vans'
import VanDetail from './pages/Vans/VanDetail'
import Layout from './components/Layout'
import HostLayout from './pages/Host/HostLayout'
import Dashboard from './pages/Host/Dashboard'
import Income from './pages/Host/Income'
import Reviews from './pages/Host/Reviews'
import HostVans from './pages/Host/HostVans'
import HostVansDetalis from './pages/Host/HostVansDetalis'
import HostVansPhotos from './pages/Host/HostVansPhotos'
import HostVansPricing from './pages/Host/HostVansPricing'
import HostVansInfo from './pages/Host/HostVansInfo'
import NotFound from './pages/NotFound'
import Login from './pages/Login'
import AuthRequired from './components/AuthRequired'

import "./server"

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}/>
          <Route path="about" element={<About />}/>
          <Route path="vans" element={<Vans />}/>
          <Route path="vans/:id" element={<VanDetail />}/>
          <Route path="login" element={<Login />}/>

          <Route element={<AuthRequired />}>
            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />}/>
              <Route path="income" element={<Income />}/>
              <Route path="reviews" element={<Reviews />}/>
              <Route path="vans" element={<HostVans />}/>
              <Route path="vans/:id" element={<HostVansDetalis />}>
                <Route index element={<HostVansInfo />}/>
                <Route path="pricing" element={<HostVansPricing/>}/>
                <Route path="photos" element={<HostVansPhotos/>}/>
              </Route>
            </Route>
          </Route>
          <Route path="*" element={<NotFound />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
