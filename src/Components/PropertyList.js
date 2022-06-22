import './ProprtyList.css'
import React from 'react'
import {Bounce } from 'react-reveal'

// const imagess = [{
//   imge: '/images/red.webp',
//   title:"Tower Street Apartments",
//   desc:"With air Condtioning",
// },
// {
//   imge: '/images/red.webp',
//   title:"Tower Street Apartments",
//   desc:"With air Condtioning",
// },{
//   imge: '/images/red.webp',
//   title:"Tower Street Apartments",
//   desc:"With air Condtioning",
// }]
function PropertyList({items,loading}) {

  return (
    <div className='propertyList'>
      <Bounce>
      {loading ?("LOADING"):(
      <div className='pContainer'>
     
         {items.map((item,i)=>{
              return <div className='pImageContainer' key={i} >
              <img src={item.photos}  />
              <div className='pDescription'>
                <h1>{item.title}</h1>
                <p>{item.distance} from center</p>
                <span>Free Airport Taxi</span>
                <p>{item.desc}</p>
                <h2>Free Cancellation</h2>
              </div>
              <div className='pRatingDesc'>
                <div className='ratingss'>
                  <h1>Excellent</h1>
                  <p className='rating'>{item.rating}</p>
                </div>
                <div className='pPrice'>
                  <h1>${item.cheapestPrice}</h1>
                  <p>Includes taxes and fees</p>
                  <button className='buttonss'>See Availability</button>
                </div>

              </div>
           </div>
           
  
         }) }
      </div>
      )}
      </Bounce>
    </div>
  )
}

export default PropertyList