  
import React, { useEffect, useState } from 'react';
import DefaultWrapper from '../../components/DefaultWrapper.component';
import { ChildContentWrapper } from '../../components/Wrappers.component';
import DataTable from 'react-data-table-component';
import ViewTitle from '../../components/ViewTitle.component';

function UserView(){

    const handleClick = (id) =>{
        console.log('clicked ' + id);
    }

    const columns = [
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
            name: 'Function',
            selector: 'function',
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
        {id: 1, name: 'Rafael', email: 'rafael@eestevam.com', function: 'Admin'},
        {id: 2, name: 'Estevam', email: 'rafael@eestevam.com', function: 'Admin'},
        {id: 3, name: 'de', email: 'rafael@eestevam.com', function: 'Admin'},
        {id: 4, name: 'Oliveira', email: 'rafael@eestevam.com', function: 'Admin'},
        {id: 5, name: 'Oliveira', email: 'rafael@eestevam.com', function: 'Admin'},
        {id: 6, name: 'Oliveira', email: 'rafael@eestevam.com', function: 'Admin'},
        {id: 7, name: 'Oliveira', email: 'rafael@eestevam.com', function: 'Admin'},
        {id: 8, name: 'Oliveira', email: 'rafael@eestevam.com', function: 'Admin'},
        {id: 9, name: 'Oliveira', email: 'rafael@eestevam.com', function: 'Admin'},
        {id: 11, name: 'Oliveira', email: 'rafael@eestevam.com', function: 'Admin'},
        {id: 22, name: 'Oliveira', email: 'rafael@eestevam.com', function: 'Admin'},
        {id: 33, name: 'Oliveira', email: 'rafael@eestevam.com', function: 'Admin'},
        {id: 44, name: 'Oliveira', email: 'rafael@eestevam.com', function: 'Admin'},
        {id: 55, name: 'Oliveira', email: 'rafael@eestevam.com', function: 'Admin'},
        {id: 66, name: 'Oliveira', email: 'rafael@eestevam.com', function: 'Admin'},
        {id: 77, name: 'Oliveira', email: 'rafael@eestevam.com', function: 'Admin'},
        {id: 88, name: 'Oliveira', email: 'rafael@eestevam.com', function: 'Admin'},
        {id: 99, name: 'Oliveira', email: 'rafael@eestevam.com', function: 'Admin'},
        {id: 111, name: 'Oliveira', email: 'rafael@eestevam.com', function: 'Admin'},
        {id: 222, name: 'Oliveira', email: 'rafael@eestevam.com', function: 'Admin'},
        {id: 333, name: 'Oliveira', email: 'rafael@eestevam.com', function: 'Admin'},
        {id: 444, name: 'Oliveira', email: 'rafael@eestevam.com', function: 'Admin'},
        {id: 555, name: 'Oliveira', email: 'rafael@eestevam.com', function: 'Admin'},
    ];

    const renderContent = () =>{
        return (
            <ChildContentWrapper>
                <ViewTitle title="Usuários" />
                <DataTable
                    title="Users"
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

export default UserView;