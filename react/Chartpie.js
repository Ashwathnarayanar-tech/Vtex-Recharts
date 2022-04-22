
import React from 'react';
import { PieChart,Pie,ResponsiveContainer} from 'recharts';
const Chartpie = (props) => {

  return(
    <ResponsiveContainer width={props.width} height={props.height}>
    <PieChart>
    {props.arrayofPie.map((item,i)=>{
  return(
    <Pie data={item.pieData} dataKey={item.dataKey} fill={item.fill} key={i} nameKey={item.nameKey} cx={item.cx} cy={item.cy}  innerRadius={item.innerRadius} outerRadius={item.outerRadius} label={item.label}/>
  )
})}
  </PieChart>

  </ResponsiveContainer>

  )
}
export default Chartpie
