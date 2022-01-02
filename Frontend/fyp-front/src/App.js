import React, { useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Packages from './components/Packages';
import Contact from './components/Contact';
import Booking from './components/Booking';
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [user, setLoginUser] = useState({});
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/packages' element={<Packages />} />
        <Route path='/contact' element={<Contact />} />

        {/* {user._id && <Route path='/booking' element={<Booking setLoginUser={setLoginUser} />} />}
        !user._id && <Route path='/booking' element={<Login setLoginUser={setLoginUser} />} /> */}

        <Route path='/booking' element={<Booking />} />
        <Route path='/login' element={<Login setLoginUser={setLoginUser} />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
