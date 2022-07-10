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
import Stripes from './Components/Stripes'
import Stripe from './Components/Stripe'
import StripeComplete from './Components/StripeComplete'
import Swipers from './Components/Swipers'
import MappingObj from './Components/MappingObj'
import Payment from './Components/Payment'
// import {Elements} from '@stripe/react-stripe-js';
// import {loadStripe} from '@stripe/stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
// const promise = loadStripe('pk_test_51LHrwyBVP5viye6wD4xBD8eSEKWLQTdrIdicuDlnosQ4XSvKIUMKJqwq3fOAPa03FSJHqGBdI07jIgzEToSxoFGh00Q4WdAkbQpk_test_51LHrwyBVP5viye6wD4xBD8eSEKWLQTdrIdicuDlnosQ4XSvKIUMKJqwq3fOAPa03FSJHqGBdI07jIgzEToSxoFGh00Q4WdAkbQ');
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
            <Route path='/bed' element={<Bed/>} />
            <Route path='/stripe' element={<Stripe />} />
            <Route path='/completed' element={<StripeComplete/>} />
            <Route path='/swiper' element={<Slider/>} />
            <Route path='/room' element={<MappingObj/>} />
            <Route path='/stripes' element={<Stripes/>} />
            <Route path='/payments' element={<Payment/>} />
            <Route path='/sliper' element={<Swipers/>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;



