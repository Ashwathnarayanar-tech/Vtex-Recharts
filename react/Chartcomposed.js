import React from 'react'
import { ComposedChart, Line,Bar,Legend, CartesianGrid, XAxis, YAxis, Tooltip,Area,ResponsiveContainer } from 'recharts';
const Chartcomposed = (props) =>{
return(
  <React.Fragment>
<ResponsiveContainer width={props.width} height={props.height}>
<ComposedChart  data={props.data}>
  <XAxis dataKey={props.horizontalDataKey} />
  <YAxis />
  <Tooltip />
  <Legend />
  <CartesianGrid strokeDasharray={props.gridStrokeDasharray} />
   {props.composedGraphArray.map((item,i)=>{
    return(
      <React.Fragment key={i}>
      <Area type={item.areaType} dataKey={item.areaDataKey} fill={item.areaFill} stroke={item.areaStroke} />
      <Bar dataKey={item.barDataKey} barSize={item.barSize} fill={item.barFill} />
      <Line type={item.lineType} dataKey={item.lineDataKey} stroke={item.lineStroke} />
      </React.Fragment>
    )
   })}
</ComposedChart>
</ResponsiveContainer>
</React.Fragment>
  );

}
export default Chartcomposed
