import React from 'react'
import './Produce.css'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
function Products() {
  return (
    <div className='products'>
       <Navbar/>
      <div className='productContainer'>
        <div className='producttContainer'>
          <Sidebar />
        </div>
        <div className='productContainer'>
          Products
        </div>
      </div>
    </div>
  )
}

export default Products