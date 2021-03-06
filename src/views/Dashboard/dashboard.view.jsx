  
import React, { useEffect, useState, useContext } from 'react';
import { Row, Col } from 'react-bootstrap';
import socketIOClient from "socket.io-client";

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
import base from '../../services/base.service';


function DashboardView(){

    const currentlyUser = useContext(userContext);
    const [tickets, setTickets] = useState('');
    const [calendarTickets, setCalendarTickets] = useState('');
    const [chartData, setChartData] = useState('');
    const [lineData, setLineData] = useState('');
    const [pieData, setPieData] = useState('');

    const [all, setAll] = useState(0);

    useEffect(() => {
        getTasks('', true, true);
        getLineChart();
        getPieChart();
    }, [all]);

    const handleChatOn = (e) =>{

        const socket = socketIOClient(`${base}/chat`);
        socket.on("FromAPI", data => {
            console.log(data);
        });
      
        return () => socket.disconnect(); 
    }

    const handleChatOff = (e) =>{
        console.log("TODO offline");
    }

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
            const { data } = status ? await api.get(`/chamado/listar/status/${status}/`) : await api.get(`/chamado/listar/`) ;
            
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

    function handleLoadCalendar (status){
        if(status == ''){
            setAll(all + 1);
        }else{
            getTasks(status, true, false);
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

                        <div>
                            <button onClick={handleChatOn}>Ficar online</button>
                            <button onClick={handleChatOff}>Ficar offline</button>
                        </div>

                        <LineChartComponent
                            data={lineData}
                            dataKey={'chamados'}
                            title={"Nº de chamados"}
                            stroke={V.draculaLightPurple}
                            showFlag={true}
                        ></LineChartComponent>

                        <PieChartComponent
                            data={pieData}
                            title={"% de Atendimento"}
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
