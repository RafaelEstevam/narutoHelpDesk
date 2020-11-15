import React from 'react';
import {useHistory} from 'react-router-dom';

import styled from 'styled-components';
import * as V from '../styles/variables';

import {convertTask} from '../services/task.service';
import {reformatDate} from '../services/date.service';

const TaskItemWrapper = styled('div')`
    display: flex;
    justify-content: space-between;
    width: 100%;
`

const TaskDetails = styled('p')`
    border: 1px solid ${V.draculaLight};
    border-radius: 100px;
    background-color: ${V.draculaDark};
    padding: 3px 10px;
    color: ${V.whiteColor};
    text-align: center;
    font-size: 12px;
    margin: 0px;
`

const TaskTitle = styled('h3')`
    font-size: 16px;
    color: ${V.whiteColor};
    margin: 0px;
`

const TaskDescription = styled('p')`
    font-size: 12px;
    color: ${V.whiteColor};
    margin: 10px 0px 0px;
`

const TaskHeader = styled('div')`
`

const TaskWrapper = styled('div')`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const TaskLabel = styled('div')`
    justyfy-content: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-right: 10px;

    label{
        color: ${V.whiteColor};
        text-align: center;
        font-size: 12px;
        margin: 0px;
        margin-bottom: 10px;
    }
`

const TaskItem = styled('div')`
    display: flex;
    cursor: pointer;
    justify-content: space-between;
    align-items: start;
    padding: 10px 15px;
    border-right: 6px solid transparent;
    border-right-color: ${props=> props.TaskItemAlert};
    border-left: 6px solid transparent;
    border-left-color: ${props=> props.TaskItemStatus};
    border-radius: 3px;
    margin-bottom: 10px;
    background: ${V.draculaDark};

    :hover{
        background: ${V.draculaInverse};
    }
`

function Task({task}){

    const history = useHistory();

    function handleGoToTicketPage(task){
        history.push(`/tickets/${task.idChamado}`);
    }

    const TaskItemStatus = convertTask(task.statusId) == 'Finalizado' ? V.draculaSuccess : convertTask(task.statusId) == 'Bloqueado' ? V.draculaDanger : convertTask(task.statusId) == 'Em atendimento' ? V.draculaWarning : V.draculaPrimary;

    return (
        <TaskItem TaskItemStatus={TaskItemStatus} TaskItemAlert={TaskItemStatus} onClick={ e => handleGoToTicketPage(task)}>
            <TaskItemWrapper>
                <TaskHeader>
                    <TaskTitle>{task.titulo}</TaskTitle> 
                    <TaskDescription>{task.descricao}</TaskDescription>
                </TaskHeader>
                <TaskWrapper>
                    <TaskLabel>
                        {/* <label>Cliente</label> */}
                        <TaskDetails>{task.empresa.nome}</TaskDetails>
                    </TaskLabel>
                    <TaskLabel>
                        {/* <label>Início</label> */}
                        <TaskDetails>{reformatDate(task.dataInicio)}</TaskDetails>
                    </TaskLabel>
                </TaskWrapper>
            </TaskItemWrapper>
        </TaskItem>
    )
}

export default Task;