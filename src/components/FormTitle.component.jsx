import React from 'react';
import styled from 'styled-components';
import * as V from '../styles/variables';
import { Row, Col } from 'react-bootstrap';
import Date from './Date.component';

const Title = styled('h3')`
    font-size: 20px;
    color: ${V.whiteColor};
    padding: 20px 0px;
    margin-top: 15px;
`

function FormTitle({title}){
    return(
        <Row>
            <Col md="12 d-flex justify-content-between align-items-center">
                <Title>{title}</Title>
            </Col>
        </Row>
    )
}

export default FormTitle;