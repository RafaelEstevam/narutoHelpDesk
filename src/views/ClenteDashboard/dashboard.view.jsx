  
import React, {useState, useEffect} from 'react';
import socketIOClient from "socket.io-client";

import DefaultWrapper from '../../components/DefaultWrapper.component';
import { ChildContentWrapper } from '../../components/Wrappers.component';
import { Row, Col } from 'react-bootstrap';
import * as V from '../../styles/variables';
import ViewTitle from '../../components/ViewTitle.component';
import ColumnTask from '../../components/ColumnTask.component';
import {getStorageLogin} from '../../services/auth.service';

import base from '../../services/base.service';


function DashboardView(){

    const {userId, userType} = getStorageLogin();
    const [userName, setUserName] = useState('Rafael');
    const [subject, setSubject] = useState('Teste');
    const [status, setChatStatus] = useState('aguardando');
    const [chatId, setChatId] = useState('');
    const [io, setIo] = useState('');

    const handleChatSubmit = (e) =>{

        e.preventDefault();

        const socket = socketIOClient(`${base}`);

        socket.emit("ChatList", {userName, subject, status});
        setChatId(socket.id);
        setIo(socket);


        // console.log("teste");

        return () => socket.disconnect();
    }

    const handleChatCancel = () =>{
        io.emit("ChatCancel", {chatId});
        io.on("disconnect");
        
        return () => io.disconnect();
    }

    const renderContent = () =>{
        return (
            <ChildContentWrapper>
                <ViewTitle title="Dashboard" />
                <Row>
                    <Col md='3'><ColumnTask title={'Aberto'} status={'1'} userId={userId}/></Col>
                    <Col md='3'><ColumnTask title={'Iniciado'} status={'2'} userId={userId}/></Col>
                    <Col md='3'><ColumnTask title={'Bloqueado'} status={'4'} userId={userId}/></Col>
                    <Col md='3'><ColumnTask title={'Finalizado'} status={'3'} userId={userId}/></Col>
                </Row>
            </ChildContentWrapper>
        )
    }

    return(
        // <DefaultWrapper content={renderContent()}></DefaultWrapper>
        <div>
            <form onSubmit={handleChatSubmit}>
                <input name="name" value={userName} onChange={(e) => setUserName(e.target.value)}/>
                <input name="subject" value={subject} onChange={(e) => setSubject(e.target.value)}/>
                <button type="submit">Enviar</button>
                <button type="button" onClick={handleChatCancel}>Cancelar</button>
            </form>
        </div>
    )
}

export default DashboardView;
