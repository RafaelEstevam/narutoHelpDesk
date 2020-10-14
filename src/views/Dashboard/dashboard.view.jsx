  
import React from 'react';

import DefaultWrapper from '../../components/DefaultWrapper.component';
import { ChildContentWrapper } from '../../components/Wrappers.component';
import { Row, Col } from 'react-bootstrap';
import * as V from '../../styles/variables';
import TaskList from '../../components/TaskList.component.jsx';
import Calendar from '../../components/Calendar.component';
import ViewTitle from '../../components/ViewTitle.component';
import LineChartComponent from '../../components/LineChartComponent.component';
import TaskDoing from '../../components/TaskDoing.component';

function DashboardView(){

    const data = [
        {name: 'Segunda', reais: 200, horas: 4, chamados: 1},
        {name: 'Terça', reais: 100, horas: 2, chamados: 2},
        {name: 'Quarta', reais: 50, horas: 1, chamados: 1},
        {name: 'Quinta', reais: 300, horas: 6, chamados: 1},
        {name: 'Sexta', reais: 400, horas: 8, chamados: 4},
        {name: 'Sábado', reais: 100, horas: 2, chamados: 2},
        {name: 'Domingo', reais: 0, horas: 0, chamados: 0},
    ];

    const tasks = [
        {id: 3, title: 'ticket 1', description: 'Tarefa x', clientName: 'Cliente teste', clientId: '1', scheduleAlert: null, deliveryDate: '2020-09-05' , date: '2020-09-05', startDate: '2020-09-05', url: '/tickets/3', status: 'done'},
        {id: 3, title: 'ticket 1', description: 'Tarefa x', clientName: 'Cliente teste', clientId: '3', scheduleAlert: true, deliveryDate: '2020-09-05' , date: '2020-09-05', startDate: '2020-09-05', url: '/tickets/3', status: 'done'},
        {id: 3, title: 'ticket 1', description: 'Tarefa x', clientName: 'Cliente teste', clientId: '3', scheduleAlert: null, deliveryDate: '2020-09-05' , date: '2020-09-05', startDate: '2020-09-05', url: '/tickets/3', status: 'done'},
        {id: 4, title: 'ticket 2', description: 'Tarefa x', clientName: 'Cliente teste', clientId: '1', scheduleAlert: true, deliveryDate: '2020-09-05' , date: '2020-09-10', startDate: '2020-09-05', url: '/tickets/4', status: 'blocked'},
        {id: 5, title: 'ticket 2', description: 'Tarefa x', clientName: 'Cliente teste', clientId: '3', scheduleAlert: true, deliveryDate: '2020-09-05' , date: '2020-09-10', startDate: '2020-09-05', url: '/tickets/4', status: 'in-progress'},
        {id: 6, title: 'ticket 2', description: 'Tarefa x', clientName: 'Cliente teste', clientId: '2', scheduleAlert: null, deliveryDate: '2020-09-05' , date: '2020-09-10', startDate: '2020-09-05', url: '/tickets/4', status: 'to-do'},
        {id: 6, title: 'ticket 2', description: 'Tarefa x', clientName: 'Cliente teste', clientId: '2', scheduleAlert: null, deliveryDate: '2020-09-05' , date: '2020-09-10', startDate: '2020-09-05', url: '/tickets/4', status: 'to-do'},
    ]

    const renderContent = () =>{
        return (
            <ChildContentWrapper>
                <ViewTitle title="Admin Dashboard" />
                <Row>
                    <Col md="3">
                        {/* <TaskDoing task={tasks[0]}></TaskDoing> */}
                        <LineChartComponent
                            data={data}
                            dataKey={'horas'}
                            title={"Horas trabalhadas"}
                            stroke={V.draculaPrimary}
                        ></LineChartComponent>
                        <LineChartComponent
                            data={data}
                            dataKey={'chamados'}
                            title={"Nº de chamados"}
                            stroke={V.draculaInfo}
                        ></LineChartComponent>
                        <LineChartComponent
                            data={data}
                            dataKey={'reais'}
                            title={'Ganhos'}
                            stroke={V.draculaSuccess}
                        ></LineChartComponent>
                    </Col>
                    <Col md="6">
                        <Calendar title={"Calendário de entregas"} events={tasks}/>
                    </Col>
                    <Col md="3">
                        <TaskList title={'Tarefas recentes'} tasks={tasks} />
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
