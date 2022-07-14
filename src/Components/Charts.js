import React from 'react'
import './Charts.css'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  {
    name: 'January',
    Total: 1200
  },
    {
    name: 'February',
    Total: 1700
  }
  ,
    {
    name: 'March',
    Total: 5200
  },
  {
  name: 'April',
  Total: 78400
},
{
name: 'May',
Total: 1200
}
];
function Charts() {
  return (
    <div className='chartss'>
      <div style={{margin: "30px 140px", fontSize: 25,color: "red"}} >MONTHLY REPORT SALES  </div>
    <ResponsiveContainer width="100%" height={400}>
          <AreaChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 15,
              right: 20,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="2 3" className='cartesianGrid' />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area connectNulls type="monotone" dataKey="Total"  fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
    </div>
  )
}

export default Charts