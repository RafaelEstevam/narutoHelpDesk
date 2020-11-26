  
import React from 'react';

import DefaultWrapper from '../../components/DefaultWrapper.component';
import { ChildContentWrapper } from '../../components/Wrappers.component';
import { Row, Col } from 'react-bootstrap';
import * as V from '../../styles/variables';
import ViewTitle from '../../components/ViewTitle.component';
import ColumnTask from '../../components/ColumnTask.component';
import {getStorageLogin} from '../../services/auth.service';


function DashboardView(){

    const {userId, userType} = getStorageLogin();

    const renderContent = () =>{
        return (
            <ChildContentWrapper>
                <ViewTitle title="Dashboard" />
                <Row>
                    <Col md='3'><ColumnTask title={'To Do'} status={'1'} userId={userId}/></Col>
                    <Col md='3'><ColumnTask title={'In progress'} status={'2'} userId={userId}/></Col>
                    <Col md='3'><ColumnTask title={'Blocked'} status={'4'} userId={userId}/></Col>
                    <Col md='3'><ColumnTask title={'Done'} status={'3'} userId={userId}/></Col>
                </Row>
            </ChildContentWrapper>
        )
    }

    return(
        <DefaultWrapper content={renderContent()}></DefaultWrapper>
    )
}

export default DashboardView;
