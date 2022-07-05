import React,{useState,useEffect,useContext} from 'react'
import { DetailsContext } from '../Context/DetailsContext';
import Navbar from './Navbar'
import './StripeComplete.css'
function StripeComplete() {
  const {savedData,loading,error,dispatch} = useContext(DetailsContext)
console.log(savedData)
  return (
    <div className='stripeComplete'>
      <Navbar/>
      <div className='stripesContainer'>
        <div className='stripeShipping'>
         <div className='shoppingCart'>
          <h1>Review Your Order</h1>
          <h2>Shipping Address</h2>
          <p>Name:</p>
          <p>Town:</p>
          <p>Phone:</p>
          <p>Area:</p>
          <p>Province:</p>
         </div>
        <div className='paymentOPtion'>
          Card detail
        </div>
        <div className='orderStats'>
         <p> 3 room</p>
         <p style={{color: "green"}}>$6789</p>
         <p>days</p>

        </div>
        </div>
        <div className='paymentPage'>
        <div className='paymentPageContainer'>
        <div className='paymentContainer'>
            <p>Sub-total(2-days):</p>
            <h2>$56789</h2>
          </div>
          <div className='paymentInput'>
            <input type='checkbox' />
            <p>This order contains a gift</p>
          </div>
          <div className='buttonContainer'>
            <button >Proceed to checkout</button>
          </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default StripeComplete