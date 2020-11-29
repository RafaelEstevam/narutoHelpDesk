import React from 'react';
import styled from 'styled-components';
import * as V from '../styles/variables';
import Task from './Task.component.jsx';

export const TaskListCard = styled('div')`
        background-color: ${V.draculaLight};
        border-radius: 3px;
        padding: 10px 15px;
        max-height: 840px;
        height: 600px;
        overflow-y: auto;
        overflow-x: hidden;
    `

export const TaskListCardTitle = styled('h3')`
    font-size: 20px;
    color: ${V.whiteColor}
`

export const TaskListFilterWrapper = styled('div')`
    padding: 15px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const TaskListFilterButtons = styled('button')`
    border: 0px solid transparent;
    border-radius: 3px;
    // margin: 10px;
    padding: 5px 10px;
    font-size: 12px;
    font-weight: bold;
    color: ${V.whiteColor};

    &.danger{
        background-color: ${V.draculaDanger};
    }

    &.success{
        background-color: ${V.draculaSuccess};
    }

    &.warning{
        background-color: ${V.draculaWarning};
    }

    &.primary{
        background-color: ${V.draculaPrimary};
    }

    &.dark{
        background-color: ${V.draculaDark};
    }

`

export function TaskList({tasks, title, handleOnClick}){

    return (
        <TaskListCard>
            <div>
                <TaskListCardTitle>{title}</TaskListCardTitle>
                <TaskListFilterWrapper>
                    <TaskListFilterButtons className="dark" onClick={() => handleOnClick('todos')}><i class="fa fa-list"></i> Todos</TaskListFilterButtons>
                    <TaskListFilterButtons className="primary" onClick={() => handleOnClick('aberto')}><i class="fa fa-bullhorn" ></i> Aberto</TaskListFilterButtons>
                    <TaskListFilterButtons className="success" onClick={() => handleOnClick('finalizado')}><i class="fa fa-check" ></i> Finalizado</TaskListFilterButtons>
                    <TaskListFilterButtons className="warning" onClick={() => handleOnClick('em-atendimento')}><i class="fa fa-spinner" ></i> Em andamento</TaskListFilterButtons>
                    <TaskListFilterButtons className="danger" onClick={() => handleOnClick('bloqueado')}><i class="fa fa-close" ></i> Bloqueado</TaskListFilterButtons>
                </TaskListFilterWrapper>
                {tasks.length > 0 && tasks.map((item) =>{
                    return (
                        <Task task={item} />
                    )
                })}
            </div>
        </TaskListCard>
    )
}

// export TaskList;