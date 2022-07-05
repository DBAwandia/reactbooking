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
import Stripe from './Components/Stripe'
import StripeComplete from './Components/StripeComplete'
import Swipers from './Components/Swipers'
import MappingObj from './Components/MappingObj'

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
            <Route path='/:hotelid' element={<ExactHotel/>} />
            <Route path='/register' element={<Registration/>} />
            <Route path='/bed' element={<Bed/>} />\
            <Route path='/stripe' element={<Stripe />} />
            <Route path='/completed' element={<StripeComplete/>} />
            <Route path='/swiper' element={<Slider/>} />
            <Route path='/room' element={<MappingObj/>} />
            <Route path='/sliper' element={<Swipers/>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;



