import './Hotel.css'
import React, { useState } from 'react'
import Navbar from './Navbar'
import PropertyList from './PropertyList'
import {Bounce } from 'react-reveal'
import { useLocation } from 'react-router-dom'
import useFetch from '../Hooks/useFetch'
function Hotel() {
    const location = useLocation()
    // const [date, setDate] = useState(location.state.date)
    const [ destination, setDestination] = useState(location.state.destination)
    const [options,setOptions] = useState(location.state.options)
    const { data, loading ,error,reFetch} = useFetch(`http://localhost:5000/hotel?city=${destination}`)
    const handleClick = ()=>{
        reFetch()
    }
  return (
    <div className='hotel'>
        <Navbar/>
        <div className='hotelContainer'>
            <div className='lSidebar'>
                <div className='positions'>
                    <Bounce className='bounce'>
                <div className='leftContainer'>
                    <div className='contants'>
                        <h1>Search</h1>
                        <div className='inputOption'>
                            <p className='label'>Description</p>
                                <input type='text' placeholder={destination} />
                                <p className='label'>CHECK-in-DATES</p>
                            <span>01/09/21 to 06/04/22</span>
                        </div>
                        <h2>Options</h2>
                        <div className='optionInputs'>
                            <div className='inputOptions'>
                                <b>Min price per night</b>
                                <input type='text'  className='mins'/>
                            </div>
                            <div className='inputOptions'>
                                <b>Max price per night</b>
                                <input type='text' className='nights'/>
                            </div>
                            <div className='inputOptions'>
                                <b>Rooms</b>
                                <input min={1} type='number' placeholder={options.room}  className='rnumbers'/>
                            </div>
                        </div>
                    </div>
                    <button onClick={handleClick}>Search</button>
                </div>
                </Bounce>
                </div>
            </div>
            <div className='rSidebar'>
               { loading ? "Loading" :(
                     <div className='rightContainer'>
                    {data.map((item)=>(
                        <PropertyList item={item} key={item._id} />
                    ))}
                 </div>
                )}
            </div>
        </div>

    </div>
  )
}

export default Hotel