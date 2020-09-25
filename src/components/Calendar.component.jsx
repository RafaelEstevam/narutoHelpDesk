import React from 'react';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import localePtBr from '@fullcalendar/core/locales/pt-br';
import {useHistory} from 'react-router-dom';

function Calendar({events}){

    // const history = useHistory();

    // function handleEventClick (e){
    //     const ticketId = e.event._def.publicId;
    //     const path = `/ticked/${ticketId}`;
    //     history.push(path);
    // }

    return(
        <FullCalendar
            plugins={[ dayGridPlugin, interactionPlugin ]}
            initialView="dayGridMonth"
            events={events}
            // eventClick={e => handleEventClick(e)}
            locale={localePtBr}
        />
    )
}

export default Calendar;