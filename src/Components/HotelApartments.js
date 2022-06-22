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

import { Swiper,SwiperSlide} from "swiper/react/swiper-react"
import { Pagination,Autoplay,Navigation} from "swiper"
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import 'swiper/modules/autoplay/autoplay.min.css'
import 'swiper/modules/navigation/navigation.min.css'


function HotelApartments() {
    const [show,setShow] = useState(false)
    const handleShow =()=>{
        setShow(!show)
    }
    const {data,loading} = useFetch("http://localhost:5000/hotel/countByName")
    console.log(data)

  return (
    <Swiper
    className=' .imgSlder'
    modules={[Pagination,Autoplay,Navigation]}
    navigation
    pagination={{clickable: false}}
    loop
    spaceBetween={20}
    slidesPerView={3}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
    autoplay={{
      delay: 3000,
      pauseOnMouseEnter: false,
      disableOnInteraction: false
    }}
  >
    <div className='hApartment'>
   
            <div className='himageContainer'>
 
          
                   {data.map((photo,i)=>{
                 
                      return  <div key={i}>
                      
                       
                          
                   <SwiperSlide className='imgSlder' >
                      <div className='imagess'> 
                                 <img className='images' src='https://imgv3.fotor.com/images/homepage-feature-card/Fotor-AI-photo-enhancement-tool.jpg' alt='' />
                                <p style={{opacity: "0.1",background:"transparent"}}>'</p>
                                <p style={{opacity: "0.1",background:"transparent"}}>'</p>
                                <p style={{opacity: "0.1",background:"transparent"}}>'</p>

                          </div> 
                          <div className='hDescriptiion'>
                                 <h1>{photo.name}</h1>
                                 <p>{photo.count} {photo.name}</p>
                             </div>
                  </SwiperSlide>
                 
                      </div>
                       
                  })}

                             
                            
 
                    </div>

        </div>


   </Swiper>
  

  )
}

export default HotelApartments