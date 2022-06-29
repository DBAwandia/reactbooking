import { Cancel } from '@mui/icons-material'
import React, { useContext, useState } from 'react'
import './Roo.css'
import useFetch from '../Hooks/useFetch'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { SearchContext } from '../Context/SearchContext'
function Room({setOpenApp,hotelID}) {
    const [selectedRooms, setSelectedRooms] = useState([])
    const {data, loading, error } = useFetch(`http://localhost:5000/hotel/room/${hotelID}`)
    const {date} = useContext(SearchContext)
    const handleSelect = (e) =>{
        const checked = e.target.checked
        const value = e.target.value
        setSelectedRooms( checked?[...selectedRooms, value]:selectedRooms.filter((item)=> item !== value))
    }
    const getDatesInRange = ( startDate, endDate) =>{
        const start = new Date(startDate)
        const end = new Date(endDate)
        const dates = new Date(start.getTime())
        const date = []

        while( dates <= end ){
            date.push(new Date(dates).getTime())
            dates.setDate(dates.getDate() + 1)
        }

        return date;
    }
    const alldates = getDatesInRange(date[0].startDate, date[0].endDate)

    const isAvailable = (roomNumbers) =>{
        const isFound = roomNumbers.unavailableDates.some((dates)=>(
            alldates.includes(new Date(dates).getTime())
        ))
        return !isFound
    }
    const navigate = useNavigate()

    const handleClick = async () =>{
        try{
            await Promise.all(
                selectedRooms.map((roomID) =>{
                    const res = axios.put(`http://localhost:5000/room/${roomID}`,{date: alldates})
                })
            )
            //navigate to payment
            navigate("/")
        }catch(err){}
    }
  return (
    <div className="room">
        <div className="roomContainer">
            <Cancel onClick={()=>setOpenApp(false)} sx={{ width: 30, height: 30, color: "red"}} className='cancelX' />
            <div className='roomObject'>
             <b>Select yours:</b>
                <div className='rrContainer'>
                    <div className='subrContainer'>
                        <h1>King Box</h1>
                        <p>King size bed, 1 bathroom , balcony</p>
                        <p>Max people: 2</p>
                        <h2>500</h2>
                    </div>
                    <div className='checkboxContaiber'>
                        <div className='subBox'>
                            <p>201</p>
                            <input type='checkbox'  />
                        </div>
                        <div className='subBox'>
                            <p>202</p>
                            <input type='checkbox' onChange={handleSelect} value={roomNumber._id}/>
                        </div>
                    </div>
                </div>
                <button className='rNutton' onClick={handleClick}>Reserve now</button>
            </div>
        </div>
    </div>
  )
}

export default Room