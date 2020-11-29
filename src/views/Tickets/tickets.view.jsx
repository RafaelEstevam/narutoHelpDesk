  
import React, { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';

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
    const {userType} = getStorageLogin();
    const isClient = userType == 3 ? true : false;

    function handleTableClick (id){
        const path = `/tickets/${id}`;
        history.push(path);
    }

    useEffect(() => {
        async function getTicket() {
            try {
                const { data } = await api.get("/chamado/listar/");
                setDataTable(data);
            } catch (error) {
                toast.error("Não foi possível carregar a lista.", {position: "top-center"});
            }
        }
        getTicket();
    }, []);

    function setDateTicket(date){
        return reformatDate(date);
    }

    const columns = [
        
        {
            name: 'Ticket Id',
            selector: 'idChamado',
            sortable: true,
        },
        {
            name: 'Título',
            selector: 'titulo',
            sortable: true,
        },
        {
            name: 'Descrição',
            selector: 'descricao',
            sortable: true,
            right: true,
        },
        {
            name: 'Cliente',
            selector: 'empresa.nome',
            sortable: true,
            right: true,
        },
        {
            name: 'Status',
            selector: 'status',
            sortable: true,
            right: true,
            cell: (row) =>  convertTask(row.status)
        },
        {
            name: 'Data de criação',
            selector: 'dataInicio',
            sortable: true,
            right: true,
            cell: (row) =>  setDateTicket(row.dataInicio)
        },
        {
            name: 'Prazo',
            selector: 'dataTermino',
            sortable: true,
            right: true,
            cell: (row) =>  setDateTicket(row.dataTermino)
        },
        {
            cell: (row) => <button class="btn btn-outline-primary btn-sm" onClick={() => handleTableClick(row.idChamado)} key={row.idChamado}>Visualizar</button>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },
    ];

    function handleNewTicket(){
        history.push('/tickets/new');
        // return (<Link to="/tickets/new'" />teste</Link>)
    }

    const renderContent = () =>{
        return (
            <ChildContentWrapper>
                <ViewTitle title="Chamados" />
                {isClient && 
                    <div>
                        <NewTaskButton onClick={() => handleNewTicket()}>Novo chamado <i className="fa fa-tasks"></i></NewTaskButton>
                        <Space height={'40px'} />
                    </div>
                }
                
                <DataTable
                    title="Chamados"
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