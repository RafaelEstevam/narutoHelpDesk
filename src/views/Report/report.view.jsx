  
import React, { useEffect, useState } from 'react';
import DefaultWrapper from '../../components/DefaultWrapper.component';
import { ChildContentWrapper } from '../../components/Wrappers.component';

function TicketView(){

    const renderContent = () =>{
        return (
            <ChildContentWrapper>
                <h1>Profile</h1>
            </ChildContentWrapper>
        )
    }

    return(
        <DefaultWrapper content={renderContent()}></DefaultWrapper>
    )
}

export default TicketView;