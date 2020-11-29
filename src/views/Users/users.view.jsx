  
import React, { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
                const { data } = await api.get("/usuario/listar/");
                setDataTable(data);
                
            } catch (error) {
                toast.error("Não foi possível carregar a lista.", {position: "top-center"});
            }
        }
        getTicket();
    }, []);

    function setUserType(tipoUsuario){
        return tipoUsuario == 1 ? 'Administrador' : tipoUsuario == 2 ? 'Funcionário' : 'Cliente';
    }

    const columns = [
        {
            name: 'Name',
            selector: 'nome',
            sortable: true,
        },
        {
            name: 'Email',
            selector: 'email',
            sortable: true,
            right: true,
        },
        {
            name: 'Tipo de usuário',
            selector: 'tipoUsuario',
            sortable: true,
            right: true,
            cell: (row) =>  setUserType(row.tipoUsuario)
        },
        {
            cell: (row) => <button class="btn btn-outline-primary btn-sm" onClick={() => handleTableClick(row.idUsuario)} key={row.idUsuario}>Edit</button>,
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
                    theme={'dark'}
                />
            </ChildContentWrapper>
        )
    }

    return(
        <DefaultWrapper content={renderContent()}></DefaultWrapper>
    )
}

export default UserView;