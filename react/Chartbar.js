import React from 'react';
import { BarChart,Bar,CartesianGrid, XAxis, YAxis, Tooltip,Legend,ResponsiveContainer } from 'recharts';
const Chartbar = (props) => {

  return(
<ResponsiveContainer width={props.width} height={props.height}>
    <BarChart data={props.data}>
    <CartesianGrid strokeDasharray={props.gridStrokeDasharray} />
    <XAxis dataKey={props.horizontalDataKey} />
    <YAxis />
    <Tooltip />
    <Legend />
{props.arrayofBars.map((item,i)=>{
  return(
    <Bar dataKey={item.dataKey} fill={item.fill} key={i}/>
  )
})}
  </BarChart>
  </ResponsiveContainer>
  )
}
export default Chartbar
