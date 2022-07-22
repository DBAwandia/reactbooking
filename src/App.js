import React, {useContext, useEffect, useState} from 'react'
import {Navigate,BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homes from './Components/Homes';
import Products from './Components/Products';
import SingleContainer from './Components/SingleContainer';
import NewContainer from './Components/NewContainer';
import NewProduct from './Components/NewProduct';
import NewRoomProduct from './Components/NewRoomProduct';
import Users from './Components/Users';
import Login from './Pages/Login';
import { LoginContext } from './Context/LoginContext'
import Sales from './Components/Sales';



function App() {
  const ProtectedRoute = ({children}) =>{
    const {user} = useContext(LoginContext)
    if(!user){
      <Navigate to='/login' />
    }else{
      return children
    }
  }
  return (
    <div>
      <Router>
        <Routes>
        <Route path='/login' element={<Login/>} />
          <Route path='/' element={<ProtectedRoute><Homes/></ProtectedRoute>} />
          <Route path='/hotel' element={<ProtectedRoute><Products/></ProtectedRoute>} />
          <Route path='/room' element={<ProtectedRoute><Sales/></ProtectedRoute>} />
          <Route path='/users' element={<ProtectedRoute><Users/></ProtectedRoute>} />
          <Route path='/users/:id' element={<ProtectedRoute><SingleContainer/></ProtectedRoute>} />
          <Route path='/users/new' element={<ProtectedRoute><NewContainer/></ProtectedRoute>} />
          <Route path='/hotel/new' element={<ProtectedRoute><NewProduct/></ProtectedRoute>} />
          <Route path='/room/new' element={<ProtectedRoute><NewRoomProduct/></ProtectedRoute>} />


        </Routes>
      </Router>
    </div>
  );
}

export default App;
