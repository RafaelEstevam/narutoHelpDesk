  
import React, { useEffect, useState, PureComponent } from 'react';
import { BarChart, Bar} from 'recharts';

import DefaultWrapper from '../../components/DefaultWrapper';
import { ChildContentWrapper } from '../../components/Wrappers';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";
import localePtBr from "@fullcalendar/core/locales/pt-br";

function DashboardView(){

    const data = [
        {
          name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
        },
        {
          name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
        },
        {
          name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
        },
        {
          name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
        },
        {
          name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
        },
        {
          name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
        },
        {
          name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
        },
    ];

    const events= [
        {title: 'ticket 1', date: '2020-09-05'},
        {title: 'ticket 2', date: '2020-09-10'}
    ];

    const handleDateClick = (arg) => { // bind with an arrow function
        console.log(arg);
    }

    function handleEventClick (e){
        console.log(e)
        // let path = `/tickets/1`;
        // let history = useHistory();
        // history.push(path);
    }
        
    const renderContent = () =>{
        return (
            <ChildContentWrapper>
                <BarChart width={150} height={40} data={data}>
                    <Bar dataKey="uv" fill="#8884d8" />
                </BarChart>

                <FullCalendar
                    plugins={[ dayGridPlugin, interactionPlugin ]}
                    initialView="dayGridMonth"
                    events={events}
                    eventClick={e => handleEventClick(e)}
                    locale={localePtBr}
                />

            </ChildContentWrapper>
        )
    }

    return(
        <DefaultWrapper content={renderContent()}></DefaultWrapper>
    )
}

export default DashboardView;
