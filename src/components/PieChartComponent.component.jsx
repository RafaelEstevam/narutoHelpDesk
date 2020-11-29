import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import {ResponsiveContainer, PieChart, Pie, Sector, Cell} from 'recharts';
import ChartHeaderComponent from './ChartsHeader.component';
import ChartWrapperComponent from './ChartsWrapper.component';
import {TaskListFilterButtons, TaskListFilterWrapper} from './TaskList.component'
import * as V from '../styles/variables';

const COLORS = [ V.draculaSuccess, V.draculaDanger, V.draculaPrimary, V.draculaWarning ];
  
const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
    cx, cy, midAngle, innerRadius, outerRadius, percent, index,
}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
    </text>
    );
};

function PieColor (status){
    switch(status){
        case "Aberto":
            return V.draculaPrimary;
            break;
        case "Iniciado":
            return V.draculaWarning
            break;
        case "Cancelado":
            return V.draculaDanger
            break;
        case "Finalizado":
            return V.draculaSuccess
            break;
    }
}

function PieChartComponent({title, stroke, dataKe, data}){

    const renderContent = () =>{
        return(
            <div>
                <ChartHeaderComponent title={title} color={V.whiteColor} />
                <div style={{ width: '100%', height: 480}}>
                    <ResponsiveContainer>
                        <PieChart width={400} height={200} data={data}>
                            {data && data.length > 0 &&
                                <Pie
                                    data={data}
                                    cx={170}
                                    cy={240}
                                    labelLine={false}
                                    label={renderCustomizedLabel}
                                    outerRadius={100}
                                    fill="#8884d8"
                                    dataKey="chamados"
                                    paddingAngle={10}
                                    innerRadius={60}
                                    stroke={V.draculaLight}
                                >
                                    {
                                        // data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                                        data.map((entry, index) => {

                                            console.log(entry);


                                            return(<Cell key={`cell-${index}`} fill={PieColor(entry.name)} />)
                                        })
                                    }
                                </Pie>
                            }
                        </PieChart>
                    </ResponsiveContainer>
                    
                </div>
                <Row>
                    <Col md='12'>
                        <TaskListFilterWrapper>
                            <TaskListFilterButtons className="primary" > Aberto</TaskListFilterButtons>
                            <TaskListFilterButtons className="success" > Finalizado</TaskListFilterButtons>
                            <TaskListFilterButtons className="warning" > Em andamento</TaskListFilterButtons>
                            <TaskListFilterButtons className="danger" > Bloqueado</TaskListFilterButtons>
                        </TaskListFilterWrapper>
                    </Col>
                </Row>
            </div>
        )
    }

    return(
        <ChartWrapperComponent bgcolor={stroke} content={renderContent()}></ChartWrapperComponent>
    )
}

export default PieChartComponent;