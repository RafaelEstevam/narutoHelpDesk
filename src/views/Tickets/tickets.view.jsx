  
import React, { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';

import DefaultWrapper from '../../components/DefaultWrapper.component';
import { ChildContentWrapper } from '../../components/Wrappers.component';
import DataTable from 'react-data-table-component';
import ViewTitle from '../../components/ViewTitle.component';

import api from '../../services/api.service';

function TicketsView(){

    const [dataTable, setDataTable] = useState('');
    const history = useHistory();

    function handleTableClick (id){
        const path = `/tickets/${id}`;
        history.push(path);
    }

    useEffect(() => {
        async function getTicket() {
            try {
                const { data } = await api.get("/tickets/");
                setDataTable(data);
                
            } catch (error) {
                alert("Ocorreu um erro ao buscar os items");
            }
        }
        getTicket();
    }, []);


    const columns = [
        
        {
            name: 'Ticket Id',
            selector: 'ticketId',
            sortable: true,
        },
        {
            name: 'Título',
            selector: 'title',
            sortable: true,
        },
        {
            name: 'Descrição',
            selector: 'description',
            sortable: true,
            right: true,
        },
        {
            name: 'Cliente',
            selector: 'clientId',
            sortable: true,
            right: true,
        },
        {
            name: 'Status',
            selector: 'status',
            sortable: true,
            right: true,
        },
        {
            name: 'Data de criação',
            selector: 'created_at',
            sortable: true,
            right: true,
        },
        {
            cell: (row) => <button class="btn btn-outline-primary btn-sm" onClick={() => handleTableClick(row.ticketId)} key={row.ticketId}>Visualizar</button>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },
    ];

    const renderContent = () =>{
        return (
            <ChildContentWrapper>
                <ViewTitle title="Tickets" />
                <DataTable
                    title="Tickets"
                    columns={columns}
                    data={dataTable}
                    keyField={'id'}
                    highlightOnHover
                    pagination
                />
            </ChildContentWrapper>
        )
    }

    return(
        <DefaultWrapper content={renderContent()}></DefaultWrapper>
    )
}

export default TicketsView;