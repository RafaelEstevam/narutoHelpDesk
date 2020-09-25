  
import React, { useEffect, useState } from 'react';
import DefaultWrapper from '../../components/DefaultWrapper.component';
import { ChildContentWrapper } from '../../components/Wrappers.component';
import DataTable from 'react-data-table-component';

function TicketsView(){

    const handleClick = (id) =>{
        console.log('clicked ' + id);
    }


    const renderContent = () =>{
        return (
            <ChildContentWrapper>
                <h1>Ticket Category</h1>
            </ChildContentWrapper>
        )
    }

    return(
        <DefaultWrapper content={renderContent()}></DefaultWrapper>
    )
}

export default TicketsView;