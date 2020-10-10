  
import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import DefaultWrapper from '../../components/DefaultWrapper.component';
import { ChildContentWrapper, FormWrapper } from '../../components/Wrappers.component';
import ViewTitle from '../../components/ViewTitle.component';
import FormTitle from '../../components/FormTitle.component';

function TicketView(){

    const renderContent = () =>{
        return (
            <ChildContentWrapper>
                <ViewTitle title="Profile" />
                <Row>
                    <Col md='9'>
                        <FormWrapper>
                            <form>
                                <FormTitle title="Dados" />
                                <Row>
                                    <Col md='6'>
                                        <input className="form-control" />
                                    </Col>
                                    <Col md='3'>
                                        <input className="form-control" />
                                    </Col>
                                    <Col md='3'>
                                        <input className="form-control" />
                                    </Col>
                                </Row>
                                <FormTitle title="Endereço" />
                                <Row>
                                    <Col md='12'>
                                        <input className="form-control" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md='9'>
                                        <input className="form-control" />
                                    </Col>
                                    <Col md='3'>
                                        <input className="form-control" />
                                    </Col>
                                </Row>
                                <FormTitle title="Acesso" />
                                <Row>
                                    <Col md='6'>
                                        <input className="form-control" />
                                    </Col>
                                    <Col md='3'>
                                        <input className="form-control" />
                                    </Col>
                                    <Col md='3'>
                                        <input className="form-control" />
                                    </Col>
                                </Row>
                                <hr/>
                                <Row>
                                    <Col md='12'>
                                        <button className="btn btn-primary">Salvar</button>
                                    </Col>
                                </Row>
                            </form>
                        </FormWrapper>
                    </Col>
                    <Col md='3'>
                        <FormWrapper>
                            adfasdf
                        </FormWrapper>
                    </Col>
                </Row>
                
            </ChildContentWrapper>
        )
    }

    return(
        <DefaultWrapper content={renderContent()}></DefaultWrapper>
    )
}

export default TicketView;