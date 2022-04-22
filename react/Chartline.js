import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip,Legend,ResponsiveContainer } from 'recharts';
const Chartline = (props) =>{
return(
  <React.Fragment>
<ResponsiveContainer width={props.width} height={props.height}>
<LineChart data={props.data}>
  <CartesianGrid strokeDasharray={props.gridStrokeDasharray} />
  <XAxis dataKey={props.horizontalDataKey} />
  <YAxis />
  <Tooltip />
  <Legend />
  {props.arrayofLines.map((item,i)=>{
    return(
      <Line type={item.type} key={i} stroke={item.stroke} dataKey={item.dataKey}/>
    )
   })}
</LineChart>
</ResponsiveContainer>
</React.Fragment>
  );

}
export default Chartline
