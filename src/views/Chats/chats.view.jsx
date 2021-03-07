  
import React, { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';
import socketIOClient from "socket.io-client";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import DefaultWrapper from '../../components/DefaultWrapper.component';
import { ChildContentWrapper } from '../../components/Wrappers.component';
import DataTable from 'react-data-table-component';
import ViewTitle from '../../components/ViewTitle.component';
import Space from '../../components/Space.component';
import {reformatDate} from '../../services/date.service';

import {getStorageLogin} from '../../services/auth.service';
import {convertTask} from '../../services/task.service';

import api from '../../services/api.service';
import base from '../../services/base.service';

import styled from 'styled-components';
import * as V from '../../styles/variables';

const NewTaskButton = styled('a')`
    padding: 5px 10px;
    background: ${V.draculaPrimary};
    color: ${V.whiteColor};
    border: 0px solid transparent;
    border-radius: 3px;
    text-decoration: none;
    cursor: pointer;
    opacity: 0.5;
    :hover{
        text-decoration: none;
        color: ${V.whiteColor};
        opacity: 1;
    }
`

function TicketsView(){

    const [dataTable, setDataTable] = useState('');
    
    const history = useHistory();
    const {userType, userId} = getStorageLogin();
    const isClient = userType == 3 ? true : false;
    const [userName, setUserName] = useState('Rafael');

    // console.log(socket);
        
    

    function handleTableClick (id){
        const path = `/tickets/${id}`;
        history.push(path);
    }

    useEffect(() => {
        
        const socket = socketIOClient(`${base}`);

        socket.on("AdminIsOn", (data) =>{
            setDataTable(data);
        })

        return () => socket.disconnect();
    }, []);

    function setDateTicket(date){
        return reformatDate(date);
    }

    const columns = [
        
        {
            name: 'Chat Id',
            selector: 'id',
            sortable: true,
        },
        {
            name: 'Nome',
            selector: 'nome',
            sortable: true,
        },
        {
            name: 'Assunto',
            selector: 'assunto',
            sortable: true,
            right: true,
        },
        {
            name: 'Status',
            selector: 'status',
            sortable: true,
            right: true,
        },
    ];

    const renderContent = () =>{
        return (
            <ChildContentWrapper>
                <ViewTitle title="Conversas" />
                
                <DataTable
                    title="Conversas"
                    columns={columns}
                    data={dataTable}
                    keyField={'id'}
                    highlightOnHover
                    pagination
                    theme={'dark'}
                />
            </ChildContentWrapper>
        )
    }

    return(
        <DefaultWrapper content={renderContent()}></DefaultWrapper>
    )
}

export default TicketsView;