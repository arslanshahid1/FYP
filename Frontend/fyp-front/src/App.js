import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Menu from './components/Menu'
import Footer from './components/Footer'
import Packages from './components/Packages'
import Contact from './components/Contact'
import Booking from './components/Booking'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <Router>
        <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/packages" element={<Packages/>}/>
          <Route path="/contact" element={<Contact/>}/>        
          <Route path="/booking" element={<Booking/>}/>        
        </Routes>
        <Footer/>
    </div>
      </Router>
  )
}

export default App
