  
import React, { useEffect, useState } from 'react';
import { Col, Row, Form, Button, Container } from 'react-bootstrap';
import * as S from "./styled";

import { BetweenWrapper } from '../../components/Wrappers.component';
import {ShadowCard} from '../../components/Cards.component';
import SelectPlanButton from '../../components/SelectPlanBtn.component';

import {loginValidation} from '../../validations/validations';
import * as V from "../../styles/variables";

import StartIcon from '../../assets/001-startup.svg';
import ProIcon from '../../assets/002-checklist.svg';
import BusinessIcon from '../../assets/003-bank.svg';

import api from '../../services/api.service';

function LoginView(){

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [doc, setDoc] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async e =>{
        e.preventDefault();

        const loginData = { email, password }
        console.log(loginData);

        await loginValidation.isValid(loginData).then( valid =>{
            try{
                const logedUser = api.post('/sessions');
            }catch(err){
                console.log(err);
            }
        })

    }

    return(
        <S.DivFullHeight style={{backgroundColor: V.draculaPrimary}}>
            <Container fluid>
                <Row>
                    <S.ColFullHeight md="12">
                        <ShadowCard>
                            <Form onSubmit={handleSubmit}>
                                <Row>
                                    <Col md="12">
                                        <div className="d-flex justify-content-center">
                                            <div className="text-center">
                                                <span>Bem-vindo ao </span>
                                                <h3 className="font-weight-bold"> Naruto Help Desk</h3>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                
                                <Row>
                                    <Col md="12">
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Control placeholder="Nome" value={name} onChange={e => setName(e.target.value)} />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md="6">
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Control placeholder="Sobrenome" value={lastName} onChange={e => setLastName(e.target.value)} />
                                        </Form.Group>
                                    </Col>
                                    <Col md="6">
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Control placeholder="CPF/CNPJ" value={doc} onChange={e => setDoc(e.target.value)} />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                
                                <Row>
                                    <Col md="12">
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md="12">
                                        <div className="d-flex justify-content-center">
                                            <div className="text-center">
                                                <h5 className="font-weight-bold"> Selecione um plano</h5>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md="4">
                                        <SelectPlanButton icon={StartIcon} title={'Start'} number={5} />
                                    </Col>
                                    <Col md="4">
                                        <SelectPlanButton icon={ProIcon} title={'Pro'} number={8} />
                                    </Col>
                                    <Col md="4">
                                        <SelectPlanButton icon={BusinessIcon} title={'Business'} number={10} />
                                    </Col>
                                </Row>
                                    
                                <Row>
                                    <Col md="12">
                                        <BetweenWrapper>
                                            <Button variant="primary" type="submit">Cadastre-se</Button>
                                            <button className="btn btn-outline-dark">Fazer login</button>
                                        </BetweenWrapper>
                                    </Col>
                                </Row>
                            </Form>
                        </ShadowCard>
                    </S.ColFullHeight>
                </Row>
            </Container>
        </S.DivFullHeight>
    )
}

export default LoginView;