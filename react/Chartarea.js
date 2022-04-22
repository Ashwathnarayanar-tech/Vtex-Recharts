import React from 'react'
import { AreaChart,  CartesianGrid, XAxis, YAxis, Tooltip,Area,ResponsiveContainer } from 'recharts';
const Chartarea = (props) =>{
return(
  <React.Fragment>
<ResponsiveContainer width={props.width} height={props.height}>
<AreaChart data={props.data}>
  <defs>
  {props.areaGradients.map((item,i)=>{
    return(
      <linearGradient id={item.id} x1={item.x1} y1={item.y1} x2={item.x2} y2={item.y2} key={i}>
      <stop offset={item.offset1} stopColor={item.stopColor1} stopOpacity={item.stopOpacity1}/>
      <stop offset={item.offset2} stopColor={item.stopColor2} stopOpacity={item.stopOpacity2}/>
      </linearGradient>
    )
   })}
  </defs>
  <XAxis dataKey={props.horizontalDataKey}/>
  <YAxis />
  <CartesianGrid strokeDasharray={props.gridStrokeDasharray} />
  <Tooltip />
   {props.arrayofArea.map((item,i)=>{
    return(
      <Area type={item.type} key={i} stroke={item.stroke} dataKey={item.dataKey} fillOpacity={item.fillOpacity} fill={item.fill}/>
    )
   })}
</AreaChart>
</ResponsiveContainer>
</React.Fragment>
  );

}
export default Chartarea
