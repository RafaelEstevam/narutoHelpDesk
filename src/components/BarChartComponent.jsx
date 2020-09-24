import React from 'react';
import {Bar, BarChart} from 'recharts';

function BarChartComponent({data}){
    return(
        <BarChart width={150} height={40} data={data}>
            <Bar dataKey="uv" fill="#8884d8" />
        </BarChart>
    )
}

export default BarChartComponent;