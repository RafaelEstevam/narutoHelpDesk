  
import React, { useEffect, useState } from 'react';
import DefaultWrapper from '../../components/DefaultWrapper.component';
import { ChildContentWrapper } from '../../components/Wrappers.component';
import ViewTitle from '../../components/ViewTitle.component';


function TicketView(){

    const renderContent = () =>{
        return (
            <ChildContentWrapper>
                <ViewTitle title="Ticket" />
            </ChildContentWrapper>
        )
    }

    return(
        <DefaultWrapper content={renderContent()}></DefaultWrapper>
    )
}

export default TicketView;