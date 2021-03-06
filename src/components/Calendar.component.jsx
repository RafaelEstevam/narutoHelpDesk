import React from 'react';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import localePtBr from '@fullcalendar/core/locales/pt-br';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import listPlugin from '@fullcalendar/list';

import * as V from '../styles/variables';

import {convertTaskList, convertTask} from '../services/task.service';
import {reformatDate} from '../services/date.service'

export const CalendarCard = styled('div')`
    background-color: ${V.draculaLight};
    border-radius: 3px;
    height: 830px;
    overflow-y: hidden;
    overflow-x: hidden;
    max-height: 830px;

    .fc-toolbar-title, .fc-theme-bootstrap a:not([href]){
        color: ${V.whiteColor};
    }

`

export const CalendarTitle = styled('h3')`
    color: ${V.whiteColor};
    // font-weight: 100;
    font-size: 24px;
`

export const CalendarHeader = styled('div')`
    padding: 15px;
    background: ${V.draculaDark};
    display: flex;
    align-items: center;
    justify-content: space-between;

`

export const CalendarWrapper = styled('div')`
    padding: 15px;
    a{
        border: 0px;
    }

    table{
        border: 0px solid transparent;
    }
    th, td{
        border: 5px solid transparent;    
        border-color:  ${V.draculaLight};
        // background-color: ${V.draculaDark};
    }

    .fc-daygrid-day-frame{
        background-color: ${V.draculaDark};
        border-radius: 3px;
        padding: 10px;
    }

    .fc-day-today{
        .fc-daygrid-day-frame{
            border: 3px solid ${V.draculaDanger};
        }
    }
`

export const CardCalendar = styled('div')`

    white-space: break-spaces;
    padding: 10px;
    // background: ${V.draculaDark};
    transition: linear all 0.2s;
    margin-bottom: 10px;

    // display: flex;
    cursor: pointer;
    // justify-content: space-between;
    // align-items: start;
    // padding: 10px 15px;
    border-right: 6px solid transparent;
    border-right-color: ${props=> props.TaskItemAlert};
    border-left: 6px solid transparent;
    border-left-color: ${props=> props.TaskItemStatus};
    border-radius: 3px;
    // margin-bottom: 10px;
    background: ${props=> props.TaskItemStatus};

    h4{
        font-size: 16px;
        margin: 0px;
    }

    p, i{
        display: none;
        margin: 0px;
    }

    p{
        margin-top: 10px;
    }

    :hover{
        p, i{
            display: block;
        }
    }

`

export const CardCalendar2 = styled(CardCalendar)`{
    p, i{
        display: block;
        margin: 0px;
    }
}`

export const SimpleCardCalendar = styled('div')`

    white-space: break-spaces;
    padding: 5px;
    cursor: pointer;
    border-right: 6px solid transparent;
    border-right-color: ${props=> props.TaskItemAlert};
    border-left: 6px solid transparent;
    border-left-color: ${props=> props.TaskItemStatus};
    border-radius: 3px;
    background: ${props=> props.TaskItemStatus};

    h4{
        font-size: 14px;
        margin: 0px;
        font-weight: normal;
    }

`

export const CardCalendarItem = styled('p')`
    border: 1px solid ${V.whiteColor};
    border-radius: 100px;
    // background-color: ${V.draculaDark};
    padding: 3px 10px;
    color: ${V.whiteColor};
    text-align: center;
    font-size: 12px;
    margin: 0px;
`

export const CardCalendarWrapper = styled('div')`
    p{
        margin: 10px 0px;
    }
`

export const CardCalendarWrapper2 = styled(CardCalendarWrapper)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const CalendarFilter = styled('div')`
    display: flex;
    align-items: center;
    justyfy-content: start;

    p{
        color: ${V.whiteColor};
        margin: 0px;
    }
`

export const CalendarFilterItem = styled('div')`

    color: ${V.whiteColor};
    border-radius: 1000px;
    font-size: 5px;
    width: 20px;
    margin: 0px 5px;
    height: 20px;
    cursor: pointer;

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
        background-color: ${V.draculaLight};
    }

`
export const CardCalendarHeader = styled('div')`
    color: ${V.whiteColor}
`

export const ListCardView = ({task, onClick}) => {

    const TaskItemStatus = task.statusNome == 'Finalizado' ? V.draculaSuccess : task.statusNome == 'Bloqueado / Cancelado' ? V.draculaDanger : task.statusNome == 'Iniciado' ? V.draculaWarning : V.draculaPrimary;
    return (
      <CardCalendar2 TaskItemStatus={TaskItemStatus} onClick={onClick}>
            <CardCalendarHeader>
                <h4>{task.titulo}</h4>
                <span style={{marginTop: '10px', marginBottom: '10px', display:'block'}}>{task.descricao}</span>
            </CardCalendarHeader>
            <CardCalendarWrapper2>
                <CardCalendarItem>Abertura: {reformatDate(task.dataInicio)}</CardCalendarItem>
                {
                    task.dataTermino &&
                    <CardCalendarItem>Prazo: {reformatDate(task.dataTermino)}</CardCalendarItem>
                }
            </CardCalendarWrapper2>
      </CardCalendar2>
    )
}

export const renderEventContent = (eventInfo) => {
    const TaskItemStatus = eventInfo.event.extendedProps.status == 'Finalizado' ? V.draculaSuccess : eventInfo.event.extendedProps.status == 'Bloqueado / Cancelado' ? V.draculaDanger : eventInfo.event.extendedProps.status == 'Iniciado' ? V.draculaWarning : V.draculaPrimary;
    return (
      <CardCalendar TaskItemStatus={TaskItemStatus} >
            <CardCalendarHeader>
                <h4>{eventInfo.event.title}</h4>
            </CardCalendarHeader>
            <CardCalendarWrapper>
                <CardCalendarItem>{eventInfo.event.extendedProps.clientName}</CardCalendarItem>
            </CardCalendarWrapper>
      </CardCalendar>
    )
}

export const renderSimpleContent = (eventInfo) => {
    const TaskItemStatus = eventInfo.event.extendedProps.status == 'Finalizado' ? V.draculaSuccess : eventInfo.event.extendedProps.status == 'Bloqueado / Cancelado' ? V.draculaDanger : eventInfo.event.extendedProps.status == 'Iniciado' ? V.draculaWarning : V.draculaPrimary;
    return (
        <SimpleCardCalendar TaskItemStatus={TaskItemStatus} >
            <h4>{eventInfo.event.title}</h4>
        </SimpleCardCalendar>
    )
}

export function Calendar({events, title, simple, handleOnClick}){

    const history = useHistory();

    function handleEventClick (e){
        const ticketId = e.event._def.publicId;
        const path = `/tickets/${ticketId}`;
        history.push(path);
    }

    if(events){
        events = convertTaskList(events);
    }

    return(

        <CalendarCard>
            <CalendarHeader>
                <CalendarTitle>{title}</CalendarTitle>
                <CalendarFilter>
                    <p>Filtar chamados por: </p>
                    <CalendarFilterItem title="Todos" className="dark" onClick={() => handleOnClick('')}></CalendarFilterItem>
                    <CalendarFilterItem title="Aberto" className="primary" onClick={() => handleOnClick('1')}></CalendarFilterItem>
                    <CalendarFilterItem title="Finalizado" className="success" onClick={() => handleOnClick('3')}></CalendarFilterItem>
                    <CalendarFilterItem title="Em andamento" className="warning" onClick={() => handleOnClick('2')}></CalendarFilterItem>
                    <CalendarFilterItem title="Bloqueado" className="danger" onClick={() => handleOnClick('4')}></CalendarFilterItem>
                </CalendarFilter>
            </CalendarHeader>
            <CalendarWrapper>
                <FullCalendar
                    plugins={[ dayGridPlugin, interactionPlugin, listPlugin, timeGridPlugin, bootstrapPlugin ]}
                    initialView="dayGridMonth"
                    
                    headerToolbar={{
                        left: 'prev,next today',
                        center: 'title',
                        // right: 'dayGridMonth,timeGridWeek,timeGridDay'
                        right: 'dayGridMonth'
                    }}

                    events={events}
                    themeSystem={'bootstrap'}
                    eventClick={e => handleEventClick(e)}
                    locale={localePtBr}
                    eventContent={simple ? renderSimpleContent : renderEventContent}
                />
            </CalendarWrapper>
        </CalendarCard>
    )
}
