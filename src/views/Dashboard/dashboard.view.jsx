  
import React from 'react';

import DefaultWrapper from '../../components/DefaultWrapper.component';
import { ChildContentWrapper } from '../../components/Wrappers.component';
import { Row, Col } from 'react-bootstrap';
import * as V from '../../styles/variables';
import Task from '../../components/Task.component.jsx';
import Calendar from '../../components/Calendar.component';
import BarChartComponent from '../../components/BarChartComponent.component';

function DashboardView(){

    const data = [
        {name: 'Segunda', reais: 200, horas: 4, chamados: 1},
        {name: 'Terça', reais: 100, horas: 2, chamados: 2,},
        {name: 'Quarta', reais: 50, horas: 1, chamados: 1,},
        {name: 'Quinta', reais: 300, horas: 6, chamados: 1,},
        {name: 'Sexta', reais: 400, horas: 8, chamados: 4,},
        {name: 'Sábado', reais: 100, horas: 2, chamados: 2,},
        {name: 'Domingo', reais: 0, horas: 0, chamados: 0,},
    ];

    const tasks = [
        {id: 3, title: 'ticket 1', description: 'Tarefa x', date: '2020-09-05', url: '/tickets/3', status: 'done'},
        {id: 4, title: 'ticket 2', description: 'Tarefa x', date: '2020-09-10', url: '/tickets/4', status: 'blocked'},
        {id: 5, title: 'ticket 2', description: 'Tarefa x', date: '2020-09-10', url: '/tickets/4', status: 'in-progress'},
        {id: 6, title: 'ticket 2', description: 'Tarefa x', date: '2020-09-10', url: '/tickets/4', status: 'to-do'},
    ]

    const renderContent = () =>{
        return (
            <ChildContentWrapper>
                <Row>
                    <Col md="12 d-flex justify-content-between align-items-center">
                        <h1>Manager <span class="font-weight-light">Dashboard</span></h1>
                        <p> 20 de outubro de 2019 </p>
                    </Col>
                </Row>
                <Row>
                    <Col md="9">
                        <Row>
                            <Col md="4">
                                <BarChartComponent
                                    data={data}
                                    title={"Horas trabalhadas"}
                                    bgColor={V.bgLightPurple2}
                                    fill={'rgba(0,0,0,0.1)'}
                                    dataKey={'horas'}
                                ></BarChartComponent>
                            </Col>
                            <Col md="4">
                                <BarChartComponent
                                    data={data}
                                    title={"Nº de chamados"}
                                    bgColor={V.lightOrange}
                                    fill={'rgba(0,0,0,0.1)'}
                                    dataKey={'chamados'}
                                ></BarChartComponent>
                            </Col>
                            <Col md="4">
                                <BarChartComponent
                                    data={data}
                                    title={"Ganhos (R$)"}
                                    bgColor={V.lightGreen}
                                    fill={'rgba(0,0,0,0.1)'}
                                    dataKey={'reais'}
                                ></BarChartComponent>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="12">
                                <div className="card">
                                    <div class="card-body">
                                        <h5 className="card-title">Calendário de entregas</h5>
                                        <Calendar events={tasks} />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col md="3">
                        <div className="card">
                            <div class="card-body">
                                <h5 className="card-title">Tarefas recentes</h5>

                                {tasks.map((item) =>{
                                    return (
                                        <Task task={item} />
                                    )
                                })}

                            </div>
                        </div>
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
