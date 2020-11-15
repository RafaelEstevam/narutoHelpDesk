  
import React, { useEffect, useState, useContext } from 'react';
import { Row, Col } from 'react-bootstrap';

import DefaultWrapper from '../../components/DefaultWrapper.component';
import { ChildContentWrapper } from '../../components/Wrappers.component';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {TaskList} from '../../components/TaskList.component.jsx';
import {Calendar} from '../../components/Calendar.component';
import ViewTitle from '../../components/ViewTitle.component';
import LineChartComponent from '../../components/LineChartComponent.component';
import PieChartComponent from '../../components/PieChartComponent.component';

import * as V from '../../styles/variables';

import api from '../../services/api.service';
import userContext from '../../services/useContext.service';
import {convertTaskNumber} from '../../services/task.service';

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
    const [calendarTickets, setCalendarTickets] = useState('');
    const [chartData, setChartData] = useState('');
    const [all, setAll] = useState(0);

    useEffect(() => {
        getDataDashboard();
        getTasks('', true, true);
    }, [all]);

    async function getTasks(status, hasCalendar, hasTask) {
        try {
            const { data } = await api.get(`/chamado/listar/${status}`);

            if(hasTask){
                setTickets(data);
            }

            if(hasCalendar){
                setCalendarTickets(data);
            }

        } catch (error) {
            toast.error("Não foi possível carregar o dashboard", {position: "top-center"});
        }
    }

    async function getDataDashboard(){
        try{
            const { data } = await api.get("/chamado/listar");
            setChartData(data);
        }catch(error){
            toast.error("Não foi possível carregar o dashboard", {position: "top-center"});
        }
    }

    function handleLoadTasks (status){
        if(status == 'todos'){
            setAll(all + 1);
        }else{
            getTasks(convertTaskNumber(status), false, true);
        }
    }

    function handleLoadCalendar (status){
        if(status == 'todos'){
            setAll(all + 1);
        }else{
            getTasks(convertTaskNumber(status), true, false);
        }
    }

    const renderContent = () =>{

        return (
            <ChildContentWrapper>
                <ViewTitle title="Admin Dashboard" />
                {/* <Row>
                    <Col md="7">
                        <TaskList title={'Tarefas recentes'} tasks={tickets} handleOnClick={handleLoadTasks} />
                    </Col>
                    <Col md="5">
                        <LineChartComponent
                            data={data}
                            dataKey={'chamados'}
                            title={"Nº de chamados"}
                            stroke={V.draculaLightPurple}
                        ></LineChartComponent>
                        <Calendar title={"Calendário de entregas"} events={calendarTickets} handleOnClick={handleLoadCalendar} simple={true}/>
                    </Col>
                </Row> */}

                <Row>
                    <Col md="9">
                        <Calendar title={"Calendário de entregas"} events={calendarTickets} handleOnClick={handleLoadCalendar} simple={false}/>
                    </Col>
                    
                    <Col md="3">
                        <LineChartComponent
                            data={data}
                            dataKey={'chamados'}
                            title={"Nº de chamados"}
                            stroke={V.draculaLightPurple}
                        ></LineChartComponent>

                        <PieChartComponent
                            data={data}
                            title={"Atendimento"}
                            stroke={V.draculaLight}
                        ></PieChartComponent>
                        
                        {/* <TaskList title={'Tarefas recentes'} tasks={tickets} handleOnClick={handleLoadTasks} /> */}

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
