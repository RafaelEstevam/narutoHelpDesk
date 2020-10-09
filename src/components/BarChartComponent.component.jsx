import React from 'react';
import styled from 'styled-components';
import {Bar, BarChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import * as V from '../styles/variables';

function BarChartComponent({data, title, bgColor, fill, dataKey}){

    const BarChartStyle = styled('div')`
        display: block;
        background-color: ${bgColor};
        border-radius: 3px;
        padding: 10px;
        margin-bottom: 30px;

        @media(max-width: ${V.viewMd}){
            margin-bottom: 15px;
        }
    `

    const BarChartHeader = styled('div')`
        display: flex;
        justify-content: space-between;
        align-items: center;
    `

    const BarChartTitle = styled('h3')`
        color: ${V.whiteColor};
        font-weight: 100;
        font-size: 20px;
    `

    const BarChartBtnContext = styled('button')`
        border: 0px;
        background: transparent;
        border-radius: 1000px;
        color: ${V.whiteColor};
        padding:5px 10px;
        :hover{
            background-color: rgba(0,0,0,0.2);
        }
    `

    const BarChartTools = styled('div')`
        display: flex;
        align-items: center;
        small{
            color: ${V.whiteColor};
            margin-right: 10px;
        }
    `
    
    const BarChartToolTipWrapper = styled('div')`
        background-color: ${V.whiteColor};
        padding: 10px;
        max-width: 100px;
    `

    const CustomTooltip = ({ active, payload, label }) => {
        if (active) {
          return (
            <BarChartToolTipWrapper>
              <p className="label">{`${payload[0].payload.name} : ${payload[0].value}`}</p>
            </BarChartToolTipWrapper>
          );
        }
        return null;
    };

    return(
        <BarChartStyle>
            <BarChartHeader>
                <BarChartTitle>{title}</BarChartTitle>
                <BarChartTools>
                    <small>Semanal</small>
                    <BarChartBtnContext><i class="fa fa-bars"></i></BarChartBtnContext>
                </BarChartTools>
            </BarChartHeader>
            <div style={{ width: '100%', height: 150 }}>
                <ResponsiveContainer>
                    <BarChart data={data}>
                        <Bar dataKey={dataKey} fill={fill} />
                        <Legend fill={'#000'}/>
                        <Tooltip content={<CustomTooltip />}/>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </BarChartStyle>
        
    )
}

export default BarChartComponent;