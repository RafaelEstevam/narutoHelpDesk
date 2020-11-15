import React from 'react';
import styled from 'styled-components';
import * as V from '../styles/variables';
import { Row, Col } from 'react-bootstrap';
import Date from './Date.component';
import {getCurrentDateDefault} from '../services/date.service'

const Title = styled('h2')`
    font-size: 24px;
    color: ${V.whiteColor};
    padding: 20px 0px;
    margin-bottom: 15px;
    font-weight: 100;
`

function ViewTitle({title}){

    const date = getCurrentDateDefault();

    return(
        <Row>
            <Col md="12 d-flex justify-content-between align-items-center">
                <Title>{title}</Title>
                <Date date={date} />
            </Col>
        </Row>
    )
}

export default ViewTitle;