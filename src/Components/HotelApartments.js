import React, { useState } from 'react'
import useFetch from '../Hooks/useFetch'
import './HotelApartment.css'
// const photos =[
//     {
//         image:"/images/drinks.jpg",
//         title: "Hotel",
//         desc: "20 Hotels"

//     },
//     {
//         image: "/images/waiter.jpg",
//         title: "Food Drinks",
//         desc: "20 Hotels"
//     },
//     {
//         image: "/images/red.webp",
//         title: "Accomodation",
//         desc: "20 Hotels"
//     }
// ]


function HotelApartments() {
    const [show,setShow] = useState(false)
    const hansleShow =()=>{
        setShow(!show)
    }
    const {data,loading} = useFetch("http://localhost:5000/hotel/countByName")
    console.log(data)

  return (
    <div className='hApartment'>
            <div className='himageContainer'>
                {data.map((photo,i)=>(
                  <div key={i}>
                            <div className='imagess'>
                                <img className='images' src='' alt='' />
                            </div>
                            <div className='hDescriptiion'>
                                <h1>{photo.title}</h1>
                                <p>{photo.count} {photo.name}</p>
                            </div>
                   </div>
                ))}
                
        </div>

   </div>
  )
}

export default HotelApartments