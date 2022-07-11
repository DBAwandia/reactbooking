import React from 'react'
import './Analytics.css'
import { ArrowUpward, ArrowDownward } from '@mui/icons-material'
function Analytics() {
  return (
    <div className='analytics'>
      <div className='analyticContainer'>
        <div className='analyicContain'>
          <div className='analyticChart'>
            <h1>Revenue</h1>
            <div className='analyticRating'>
              <span>$2,566</span>
              <p>+11.5%</p>
              <ArrowUpward sx={{ fontSize: 25, color: "green"}} />
            </div>
            <p className='analyicDesc'>
              Compared to last Month
            </p>
          </div>
        </div>
        <div className='analyicContain'>
          <div className='analyticChart'>
            <h1>Sales</h1>
            <div className='analyticRating'>
              <span>$5,556</span>
              <p>+31.5%</p>
              <ArrowUpward  sx={{ fontSize: 25, color: "green"}}/>
            </div>
            <p className='analyicDesc'>
              Compared to last Month
            </p>
          </div>
        </div>
        <div className='analyicContain'>
          <div className='analyticChart'>
            <h1>Cost</h1>
            <div className='analyticRating'>
              <span>$8,566</span>
              <p>-23.5%</p>
              <ArrowDownward  sx={{ fontSize: 25, color: "red"}}/>
            </div>
            <p className='analyicDesc'>
              Compared to last Month
            </p>
          </div>
        </div>
      </div>
      <div className='reactCharts'>

      </div>
    </div>
  )
}

export default Analytics