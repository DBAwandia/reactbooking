import React, { useContext } from 'react'
import {Button} from '@mui/material'
import Home from "./Components/Home"
import Navbar from "./Components/Navbar"
import Registration from "./Pages/Registration"
import Login from "./Pages/Login"
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Header from './Components/Header'
import Hotel from './Components/Hotel'
import ExactHotel from './Components/ExactHotel'
import { LoginContext } from './Context/LoginContext'
import Bed from './Components/Bed'
import Slider from './Components/Slider'
import Swipers from './Components/Swipers'

function App() {
  
  const {user } = useContext(LoginContext)
  return (
    <div>
      <Router>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/navbar' element={<Navbar/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='hotels' element={<Hotel/>} />
            <Route path='/hotelid' element={<ExactHotel/>} />
            <Route path='/register' element={<Registration/>} />
            <Route path='/bed' element={<Bed/>} />
            <Route path='/swiper' element={<Slider/>} />
            <Route path='/sliper' element={<Swipers/>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;



