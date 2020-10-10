import React from 'react';
import styled from 'styled-components';
import {LineChart, Line, ResponsiveContainer} from 'recharts';
import * as V from '../styles/variables';

function ChartsWrapper({content, bgcolor}){

    const ChartWrapper = styled('div')`
        display: block;
        border: 3px solid ${bgcolor};
        background-color: ${V.draculaLight};
        border-radius: 3px;
        padding: 10px;
        margin-bottom: 30px;

        @media(max-width: ${V.viewMd}){
            margin-bottom: 15px;
        }
    `

    return(
        <ChartWrapper>
            {content}
        </ChartWrapper>
    )
}

export default ChartsWrapper;