import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Task from './Task.component';
import * as V from '../styles/variables';
import api from '../services/api.service';
import {useHistory} from 'react-router-dom';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {ListCardView} from './Calendar.component';

const Column = styled('div')`
    height: 800px;
    overflow-y: auto;
    overflow-x: hidden;
    width: 100%;
    background-color: ${V.draculaLight};
    border-radius: 3px;
    padding: 15px;
`

const ColumnHeader = styled('div')`
    display: flex;
    // justify-content: center;
    padding: 10px 0px;

    h2{
        font-size: 18px;
        font-weight: 100;
        color: ${V.whiteColor};
    }
    
`

function ColumnTask({userId, title, status}){

    const [taskList, setTaskList] = useState('');
    const history = useHistory();

    function handleEventClick (e){
        const ticketId = e;
        const path = `/tickets/${ticketId}`;
        history.push(path);
    }

    useEffect(() => {
        async function getTasks() {
            try {
                const { data } = await api.get(`/chamado/listar/${status}/${userId}/` );
                setTaskList(data);
            } catch (error) {
                toast.error("Não foi possível carregar os chamados.", {position: "top-center"});
            }
        }
        getTasks();
    }, []);

    return(

        <Column>
            <ColumnHeader>
                <h2>{title}</h2>
            </ColumnHeader>
            {
                taskList.length > 0 && taskList.map((item) =>{
                    return (
                        <ListCardView task={item} onClick={() => handleEventClick(item.idChamado)}/>
                    )
                })
            }
        </Column>
        
    )
}

export default ColumnTask;