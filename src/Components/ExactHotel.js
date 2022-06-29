import React, { useState,useEffect,useContext } from 'react'
import Navbar from './Navbar'
import './ExactHotel.css'
import { LocationCity} from '@mui/icons-material'
import{ LoginContext }from "../Context/LoginContext"
import ShdowImage from './ShdowImage'
import useFetch from '../Hooks/useFetch'
import {CircularProgress } from '@mui/material'
import {useNavigate, useParams, useLocation} from 'react-router-dom'
import { SearchContext } from '../Context/SearchContext'
import Room from './Room'
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
  }]
function ExactHotel() {
const [ level, setLevel ] =useState(0)
const [openApp, setOpenApp ] = useState(false)
useEffect(()=>{
  const timer = setInterval(()=>{
      setLevel((newTimer)=> newTimer >= 100 ? 0 : newTimer + 10)
  },500)

  return ()=>{
    clearInterval(timer)
  }
},[])
const { user } =useContext(LoginContext)
const location = useLocation()
// const params = useParams()
const navigate = useNavigate()
const path = location.pathname
const id = path.split("/")[2]
// const {data}=useFetch(`http://localhost:5000/hotel/hotel/${params.hotelid}`)
// const {data}=useFetch(`http://localhost:5000/hotel/hotel/${id}`)

const[openImage, setOpenImage ] = useState(false)
// const datas = Object.entries(data)
console.log(id)
const handleReserve =() =>{
  if(user){
    setOpenApp(!openApp)
  }
  else{
    navigate("/login")
  }
}
const { options,dispatch } = useContext(SearchContext)
// console.log(data)
// const MILLI_SEC_PER_DAY = 1000 * 60 * 60 * 24 ;
// function dayDifference( date1 , date2){
//   const timeDiff = Math.abs(date2.getTime() - date1.getTime())
//   const diffDays = Math.ceil(timeDiff / MILLI_SEC_PER_DAY)
//   return diffDays
// }
// const days = dayDifference(date[0].endDate, date[0].startDate)
   return (
    <div className='ExactHotel'>
      <div className='headNavbar'>
      <Navbar/>
      </div>
     <div className='exactContainer' >
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
                  <button onClick={()=>setOpenApp(true)}>Reserve or Book Now</button>
                </div>
              </div>
              <div className='exactPhotos'>
                <div className='exactPhoto' >
                            <div className='photoContainer'>
                              <img className='imagges' onClick={()=>setOpenImage(!openImage)} src="/images/waiter.jpg" alt='' />
                            </div>
                            <b>Click the image to see more...<CircularProgress value={level} sx={{ width: 20, height: 20, marginLeft: 15}}/></b>
                         
                        </div>
               
              </div> 
             {openImage && <div className='shdowImage'>
                <ShdowImage  setOpenImage={setOpenImage} />
              </div>}
              <div className='exactFooter'>

                <div className='fFoooter' >
                      <div className='footerHeader'>
                        <h1> HOTEL</h1>
                      <p>
                   Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renais
                      </p>
                    </div>
                    <div className='footerPayment'>
                      <div className='paraglaph'>
                      <h1 className='paraglaphs'>Perfect for a 9-Night sleep</h1>
                      <p>Keep pushing, you will find obstacles on the way but never give up!!!!!boy</p>
                      </div>
                      <div className='h2Pay'>
                        <h2> 8989</h2><p>(9 Nights)</p>
                      </div>
                      <button className='foooterButton' onClick={handleReserve}>Reserve or Book Now</button>
                    </div>
                    
                  </div> 
                  {openApp && <div className='opensRoom'>
                    <Room setOpenApp={setOpenApp} hotelID={id}/>
              </div>}
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default ExactHotel