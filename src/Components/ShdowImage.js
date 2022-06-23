import React from 'react'
import "./ShadowImage.css"
import {CancelOutlined} from '@mui/icons-material'
import { Swiper,SwiperSlide } from 'swiper/react/swiper-react'
import { Pagination, Navigation, Autoplay,Scrollbar } from 'swiper'
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import 'swiper/modules/navigation/navigation.min.css'
import 'swiper/modules/autoplay/autoplay.min.css'
import 'swiper/modules/scrollbar/scrollbar.min.css'


function ShdowImage({photos}) {
  return (
    <Swiper
        modules={[Pagination,Navigation,Autoplay,Scrollbar]}
        pagination={{clickable: true}}
        navigation
        loop
        spaceBetween={20}
        // slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
    >
    <div className='imageShadow'>
     <CancelOutlined className='hadoowIcon'/>
         <div className='imageShadows'>
         {photos.map((item,i)=>{
                  return  <div className='shadoImage' key={i}>
                                <div className='contentImage'>
                                    {/* <SwiperSlide className='shadowSlider'> */}
                                        <img  className='shadoImagges' src={item.imge} alt='' />
                                    {/* </SwiperSlide> */}

                                </div>

                 </div>
                })}
         </div>      
    </div>
    </Swiper>
  )
}

export default ShdowImage