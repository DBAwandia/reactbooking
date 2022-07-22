import React from 'react'
import './Analytics.css'
import { ArrowUpward, ArrowDownward } from '@mui/icons-material'
import Progress from './Progress'
import Charts from './Charts'
import Tables from './Tables'
function Analytics() {
  return (
    <div className='analytics'>
      <div className='analyticContainer'>
        <div className='analyicContain'>
          <div className='analyticChart'>
            <h1>Users</h1>
            <div className='analyticRating'>
              <span>$2,566</span>
              <p>+11.5%</p>
              <ArrowUpward sx={{ fontSize: 25, color: "green"}} />
            </div>
            <p className='analyicDesc'>
              See all users
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
              See all orders
            </p>
          </div>
        </div>
        <div className='analyicContain'>
          <div className='analyticChart'>
            <h1>Earnings</h1>
            <div className='analyticRating'>
              <span>$8,566</span>
              <p>-23.5%</p>
              <ArrowDownward  sx={{ fontSize: 25, color: "red"}}/>
            </div>
            <p className='analyicDesc'>
              See all Earnings
            </p>
          </div>
        </div>
        <div className='analyicContain'>
          <div className='analyticChart'>
            <h1>My Balance</h1>
            <div className='analyticRating'>
              <span>$8,566</span>
              <p>-23.5%</p>
              <ArrowDownward  sx={{ fontSize: 25, color: "red"}}/>
            </div>
            <p className='analyicDesc'>
              See details
            </p>
          </div>
        </div>
      </div>
      <div className='reactCharts'>
        <div className='analtycsCharts'>
          <div className='progressAnalytics'>
            <Progress/>
          </div>
          <div className='chartsAnalytics'>
            <Charts title='Revenue past 6(Month(s))'/>
          </div>
        </div>
      </div>
      <div className='analyticTable'>
        <Tables />
      </div>
    </div>
  )
}

export default Analytics