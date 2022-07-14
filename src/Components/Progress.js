import React from 'react'
import './Progress.css'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
function Progress() {
    const percentage = 67;
  return (
    <div className='progress'>
        <CircularProgressbar    value={percentage}
                                className='circularProgress'
                                strokeWidth={4}
                                text={`${percentage}%`} />
        <p>Sales made Today</p>
        <span>$4567</span>
    </div>
  )
}

export default Progress