import React from 'react'
import './Roo.css'
function Room() {
  return (
    <div className="room">
        <div className="roomContainer">
            <div className='roomObject'>
                <b>Select your rooms:</b>
             
                <div className='rContainer'>
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
                            <input type='checkbox'  />
                        </div>
                    </div>
                    
                </div>
                <div className='rContainer'>
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
                            <input type='checkbox'  />
                        </div>
                    </div>
                    
                </div>
                <div className='rContainer'>
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
                            <input type='checkbox'  />
                        </div>
                    </div>
                    
                </div>
                <button className='rNutton'>Reserve now</button>
            </div>
        </div>
    </div>
  )
}

export default Room