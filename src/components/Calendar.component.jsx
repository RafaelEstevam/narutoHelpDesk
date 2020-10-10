import React from 'react';
import styled from 'styled-components';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import localePtBr from '@fullcalendar/core/locales/pt-br';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import listPlugin from '@fullcalendar/list';
import {useHistory} from 'react-router-dom';

import * as V from '../styles/variables';

function Calendar({events, title}){

    // const history = useHistory();

    // function handleEventClick (e){
    //     const ticketId = e.event._def.publicId;
    //     const path = `/ticked/${ticketId}`;
    //     history.push(path);
    // }

    const CalendarCard = styled('div')`
        background-color: ${V.draculaLight};
        padding: 15px;
        border-radius: 3px;
    `

    const CalendarTitle = styled('h3')`
        color: ${V.whiteColor};
        font-weight: 100;
        font-size: 24px;
    `

    return(

        <CalendarCard>
            <div class="card-body">
                <CalendarTitle>{title}</CalendarTitle>
                <FullCalendar
                    plugins={[ dayGridPlugin, interactionPlugin, listPlugin, timeGridPlugin, bootstrapPlugin ]}
                    initialView="dayGridMonth"
                    
                    headerToolbar={{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek,timeGridDay'
                    }}

                    events={events}
                    themeSystem={'bootstrap'}
                    // eventClick={e => handleEventClick(e)}
                    locale={localePtBr}
                />
            </div>
        </CalendarCard>
    )
}

export default Calendar;