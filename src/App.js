import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homes from './Components/Homes';
import Products from './Components/Products';
import Users from './Components/Users';
import Login from './Pages/Login';



function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Homes/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/users' element={<Users/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
