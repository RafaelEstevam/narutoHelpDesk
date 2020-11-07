  
import React, { useEffect, useState, useContext } from 'react';
import { Row, Col } from 'react-bootstrap';

import DefaultWrapper from '../../components/DefaultWrapper.component';
import { ChildContentWrapper } from '../../components/Wrappers.component';

import TaskList from '../../components/TaskList.component.jsx';
import Calendar from '../../components/Calendar.component';
import ViewTitle from '../../components/ViewTitle.component';
import LineChartComponent from '../../components/LineChartComponent.component';
import TaskDoing from '../../components/TaskDoing.component';

import * as V from '../../styles/variables';

import api from '../../services/api.service';
import userContext from '../../services/useContext.service';



function DashboardView(){

    const currentlyUser = useContext(userContext);

    const data = [
        {name: 'Segunda', reais: 200, horas: 4, chamados: 1},
        {name: 'Terça', reais: 100, horas: 2, chamados: 2},
        {name: 'Quarta', reais: 50, horas: 1, chamados: 1},
        {name: 'Quinta', reais: 300, horas: 6, chamados: 1},
        {name: 'Sexta', reais: 400, horas: 8, chamados: 4},
        {name: 'Sábado', reais: 100, horas: 2, chamados: 2},
        {name: 'Domingo', reais: 0, horas: 0, chamados: 0},
    ];

    const [tickets, setTickets] = useState('');

    useEffect(() => {
        async function getTasks() {
            try {
                const { data } = await api.get("/tickets/");
                setTickets(data);
            } catch (error) {
                // alert("Ocorreu um erro ao buscar os items");
            }
        }
        getTasks();
    }, []);


    const renderContent = () =>{

        return (
            <ChildContentWrapper>
                <ViewTitle title="Admin Dashboard" />
                {/* <Row>
                    <Col md="12">
                        <Row>
                            <Col md="4">
                                <LineChartComponent
                                    data={data}
                                    dataKey={'horas'}
                                    title={"Horas trabalhadas"}
                                    stroke={V.draculaPrimary}
                                ></LineChartComponent>
                            </Col>
                            <Col md="4">
                                <LineChartComponent
                                    data={data}
                                    dataKey={'chamados'}
                                    title={"Nº de chamados"}
                                    stroke={V.draculaLightPurple}
                                ></LineChartComponent>
                            </Col>
                            <Col md="4">
                                <LineChartComponent
                                    data={data}
                                    dataKey={'reais'}
                                    title={'Ganhos'}
                                    stroke={V.draculaLight}
                                ></LineChartComponent>
                            </Col>
                        </Row>
                        <Calendar title={"Calendário de entregas"} events={tickets}/>
                    </Col>
                    <Col md="3">
                        <TaskList title={'Tarefas recentes'} tasks={tickets} />
                    </Col>
                </Row> */}

                <Row>
                    <Col md="4">
                        <LineChartComponent
                            data={data}
                            dataKey={'horas'}
                            title={"Horas trabalhadas"}
                            stroke={V.draculaPrimary}
                        ></LineChartComponent>
                    </Col>
                    <Col md="4">
                        <LineChartComponent
                            data={data}
                            dataKey={'chamados'}
                            title={"Nº de chamados"}
                            stroke={V.draculaLightPurple}
                        ></LineChartComponent>
                    </Col>
                    <Col md="4">
                        <LineChartComponent
                            data={data}
                            dataKey={'reais'}
                            title={'Ganhos'}
                            stroke={V.draculaLight}
                        ></LineChartComponent>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                        <Calendar title={"Calendário de entregas"} events={tickets}/>
                    </Col>
                    <Col md="6">
                        <TaskList title={'Tarefas recentes'} tasks={tickets} />
                    </Col>
                </Row>
            </ChildContentWrapper>
        )
    }

    return(
        <DefaultWrapper content={renderContent()}></DefaultWrapper>
    )
}

export default DashboardView;
