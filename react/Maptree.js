import React from 'react';
import {Treemap,ResponsiveContainer} from 'recharts';
const Maptree = (props) => {
  return(
    <ResponsiveContainer width={props.width} height={props.height}>
    <Treemap
    data={props.data}
    dataKey={props.dataKey}
    ratio={props.ratio}
    stroke={props.stroke}
    fill={props.fill}
  />
  </ResponsiveContainer>
  )
}
export default Maptree
