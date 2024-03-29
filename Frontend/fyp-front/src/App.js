import React from 'react';
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
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import Admin from './components/Admin';
import SingleBookingDetails from './components/SingleBookingDetails';
import NotFound from './components/NotFound';
import UserProfile from './components/UserProfile';
import AdminBookings from './components/AdminBookings';
import AdminContactUs from './components/AdminContactUs';

function App() {
  const user = useSelector(selectUser);

  return (
    <Router>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={user ? <Admin /> : <Login />} />
        <Route
          path='/admin-bookings'
          element={user ? <AdminBookings /> : <Login />}
        />
        <Route
          path='/admin-messages'
          element={user ? <AdminContactUs /> : <Login />}
        />
        <Route path='/about' element={<About />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/packages' element={<Packages />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/booking' element={user ? <Booking /> : <Login />}></Route>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/profile' element={user ? <UserProfile /> : <Login />} />
        <Route
          path='/singlebookingdetails'
          element={<SingleBookingDetails />}
        />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
