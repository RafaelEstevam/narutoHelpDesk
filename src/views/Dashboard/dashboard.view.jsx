  
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
    const [tickets, setTickets] = useState('');
    const [calendarTickets, setCalendarTickets] = useState('');
    const [chartData, setChartData] = useState('');
    const [lineData, setLineData] = useState('');
    const [pieData, setPieData] = useState('');

    const [all, setAll] = useState(0);

    useEffect(() => {
        getDataDashboard();
        getTasks('', true, true);
        getLineChart();
        getPieChart();
    }, [all]);

    async function getLineChart(){
        try {
            const { data } = await api.get(`/relatorio/qtd_chamado_dia_semana/`);
            setLineData(data);

        } catch (error) {
            toast.error("Não foi possível carregar o dashboard", {position: "top-center"});
        }
    }

    async function getPieChart(){
        try {
            const { data } = await api.get(`/relatorio/qtd_status_chamado_dia_semana/`);
            setPieData(data);

        } catch (error) {
            toast.error("Não foi possível carregar o dashboard", {position: "top-center"});
        }
    }

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
                <Row>
                    <Col md="9">
                        <Calendar title={"Calendário de entregas"} events={calendarTickets} handleOnClick={handleLoadCalendar} simple={false}/>
                    </Col>
                    
                    <Col md="3">
                        <LineChartComponent
                            data={lineData}
                            dataKey={'chamados'}
                            title={"Nº de chamados"}
                            stroke={V.draculaLightPurple}
                        ></LineChartComponent>

                        <PieChartComponent
                            data={pieData}
                            title={"Atendimento"}
                            stroke={V.draculaLight}
                        ></PieChartComponent>

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
