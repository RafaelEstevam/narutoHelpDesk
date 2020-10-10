  
import React, { useEffect, useState } from 'react';
import DefaultWrapper from '../../components/DefaultWrapper.component';
import { ChildContentWrapper } from '../../components/Wrappers.component';
import DataTable from 'react-data-table-component';
import ViewTitle from '../../components/ViewTitle.component';


function TicketsView(){

    const handleClick = (id) =>{
        console.log('clicked ' + id);
    }


    const renderContent = () =>{
        return (
            <ChildContentWrapper>
                <ViewTitle title="Admin Dashboard" />
            </ChildContentWrapper>
        )
    }

    return(
        <DefaultWrapper content={renderContent()}></DefaultWrapper>
    )
}

export default TicketsView;