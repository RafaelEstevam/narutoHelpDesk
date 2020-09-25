  
import React, { useEffect, useState } from 'react';
import DefaultWrapper from '../../components/DefaultWrapper.component';
import { ChildContentWrapper } from '../../components/Wrappers.component';
import DataTable from 'react-data-table-component';

function TicketsView(){

    const handleClick = (id) =>{
        console.log('clicked ' + id);
    }

    const columns = [
        
        {
            name: 'Ticket Id',
            selector: 'ticket_id',
            sortable: true,
        },
        {
            name: 'Name',
            selector: 'name',
            sortable: true,
        },
        {
            name: 'Email',
            selector: 'email',
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
            cell: (row) => <button class="btn btn-outline-danger btn-sm" onClick={() => handleClick(row.id)} key={row.id}>Delete</button>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },
    ];

    const data = [
        {ticket_id: 'INC00901', id: 1, name: 'Rafael', email: 'rafael@eestevam.com', created_at: '20/06/1992'},
        {ticket_id: 'INC00901', id: 2, name: 'Estevam', email: 'rafael@eestevam.com', created_at: '20/06/1992'},
        {ticket_id: 'INC00901', id: 3, name: 'de', email: 'rafael@eestevam.com', created_at: '20/06/1992'},
        {ticket_id: 'INC00901', id: 4, name: 'Oliveira', email: 'rafael@eestevam.com', created_at: '20/06/1991'},
        {ticket_id: 'INC00901', id: 5, name: 'Oliveira', email: 'rafael@eestevam.com', created_at: '20/06/1992'},
        {ticket_id: 'INC00901', id: 6, name: 'Oliveira', email: 'rafael@eestevam.com', created_at: '20/06/1992'},
        {ticket_id: 'INC00901', id: 7, name: 'Oliveira', email: 'rafael@eestevam.com', created_at: '20/06/1992'},
        {ticket_id: 'INC00901', id: 8, name: 'Oliveira', email: 'rafael@eestevam.com', created_at: '20/06/1992'},
        {ticket_id: 'INC00901', id: 9, name: 'Oliveira', email: 'rafael@eestevam.com', created_at: '20/06/1992'},
        {ticket_id: 'INC00901', id: 11, name: 'Oliveira', email: 'rafael@eestevam.com', created_at: '20/06/1992'},
        {ticket_id: 'INC00901', id: 22, name: 'Oliveira', email: 'rafael@eestevam.com', created_at: '20/06/1992'},
        {ticket_id: 'INC00901', id: 33, name: 'Oliveira', email: 'rafael@eestevam.com', created_at: '20/06/1992'},
        {ticket_id: 'INC00901', id: 44, name: 'Oliveira', email: 'rafael@eestevam.com', created_at: '20/06/1992'},
        {ticket_id: 'INC00901', id: 55, name: 'Oliveira', email: 'rafael@eestevam.com', created_at: '20/06/1992'},
        {ticket_id: 'INC00901', id: 66, name: 'Oliveira', email: 'rafael@eestevam.com', created_at: '20/06/1992'},
        {ticket_id: 'INC00901', id: 77, name: 'Oliveira', email: 'rafael@eestevam.com', created_at: '20/06/1992'},
        {ticket_id: 'INC00901', id: 88, name: 'Oliveira', email: 'rafael@eestevam.com', created_at: '20/06/1992'},
        {ticket_id: 'INC00901', id: 99, name: 'Oliveira', email: 'rafael@eestevam.com', created_at: '20/06/1992'},
        {ticket_id: 'INC00901', id: 111, name: 'Oliveira', email: 'rafael@eestevam.com', created_at: '20/06/1992'},
        {ticket_id: 'INC00901', id: 222, name: 'Oliveira', email: 'rafael@eestevam.com', created_at: '20/06/1992'},
        {ticket_id: 'INC00901', id: 333, name: 'Oliveira', email: 'rafael@eestevam.com', created_at: '20/06/1992'},
        {ticket_id: 'INC00901', id: 444, name: 'Oliveira', email: 'rafael@eestevam.com', created_at: '20/06/1992'},
        {ticket_id: 'INC00901', id: 555, name: 'Oliveira', email: 'rafael@eestevam.com', created_at: '20/06/1992'},
    ];

    const renderContent = () =>{
        return (
            <ChildContentWrapper>
                <DataTable
                    title="Tickets"
                    columns={columns}
                    data={data}
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