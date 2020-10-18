  
import React from 'react';

import DefaultWrapper from '../../components/DefaultWrapper.component';
import { ChildContentWrapper } from '../../components/Wrappers.component';
import { Row, Col } from 'react-bootstrap';
import * as V from '../../styles/variables';
import ViewTitle from '../../components/ViewTitle.component';
import ColumnTask from '../../components/ColumnTask.component';

function DashboardView(){

    const renderContent = () =>{
        return (
            <ChildContentWrapper>
                <ViewTitle title="Dashboard" />
                <Row>
                    <Col md='3'><ColumnTask title={'To Do'} status={'to-do'} userId={1}/></Col>
                    <Col md='3'><ColumnTask title={'In progress'} status={'in-progress'} userId={1}/></Col>
                    <Col md='3'><ColumnTask title={'Blocked'} status={'blocked'} userId={1}/></Col>
                    <Col md='3'><ColumnTask title={'Done'} status={'done'} userId={1}/></Col>
                </Row>
            </ChildContentWrapper>
        )
    }

    return(
        <DefaultWrapper content={renderContent()}></DefaultWrapper>
    )
}

export default DashboardView;
