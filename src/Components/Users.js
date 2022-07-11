import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import './Users.css'
function Users() {
  return (
    <div className='users'>
      <Navbar/>
      <div className='userContainer'>
        <div className='userrContainer'>
          <Sidebar />
        </div>
        <div className='userContainer'>
          USERS
        </div>
      </div>
    </div>
  )
}

export default Users