  
import React, { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';
import { ChildContentWrapper } from '../../components/Wrappers.component';

import DefaultWrapper from '../../components/DefaultWrapper.component';
import DataTable from 'react-data-table-component';
import ViewTitle from '../../components/ViewTitle.component';

import api from '../../services/api.service';

function UserView(){

    const [dataTable, setDataTable] = useState('');
    const history = useHistory();

    function handleTableClick (id){
        const path = `/users/${id}`;
        history.push(path);
    }

    useEffect(() => {
        async function getTicket() {
            try {
                const { data } = await api.get("/users/");
                setDataTable(data);
                
            } catch (error) {
                alert("Ocorreu um erro ao buscar os items");
            }
        }
        getTicket();
    }, []);

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
            name: 'User type',
            selector: 'userType',
            sortable: true,
            right: true,
        },
        {
            cell: (row) => <button class="btn btn-outline-primary btn-sm" onClick={() => handleTableClick(row.id)} key={row.id}>Edit</button>,
            ignoreRowClick: false,
            allowOverflow: true,
            button: true,
        },
    ];

    const renderContent = () =>{
        return (
            <ChildContentWrapper>
                <ViewTitle title="Usuários" />
                <DataTable
                    title="Users"
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

export default UserView;