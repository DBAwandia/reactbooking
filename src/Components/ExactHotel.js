import React from 'react'
import Navbar from './Navbar'
import './ExactHotel.css'
import {LocationCity} from '@mui/icons-material'
function ExactHotel() {
  const photos = [
    {
    imge: "/images/drinks.jpg"
    },
    {
      imge: "/images/red.webp"
    },
    {
      imge: "/images/waiter.jpg"
    },
    {
      imge: "/images/drinks.jpg"
    },
    {
      imge: "/images/red.webp"
    },
    {
      imge: "/images/waiter.jpg"
    },
    {
      imge: "/images/drinks.jpg"
    }
]
  return (
    <div className='ExactHotel'>
      <div className='headNavbar'>
      <Navbar/>
      </div>
      <div className='exactContainer'>
          <div className='exactBody'>
            <div className='exactDisplay'>
              <div className='exactHeading'>
                <div className='headerDescription'>
                  <h1 className='header1'>Tower Street Apartments</h1>
                  <div className='headerIcons'>
                    <LocationCity className='headIcon' sx={{ color:"red",width: "30px",height:"30px",
                      fontSize: 25}}/>
                    <p>Elton St 125 New York</p>
                  </div>
                  <h2 className='header2'>Book more than $120 and stay for 1Day extra</h2>
                </div>
                <div className='headerButton'>
                  <button>Reserve or Book Now</button>
                </div>
              </div>
              <div className='exactPhotos'>
                {photos.map((item,i)=>{
                  return <div className='exactPhoto' key={i}>
                            <div className='photoContainer'>
                              <img className='imagges' src={item.imge} alt='' />
                            </div>
                        </div>
                })}
              </div> 
              <div className='exactFooter'>
                Footer
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default ExactHotel