  
import React, { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';
import { Col, Row, Form, Button, Container } from 'react-bootstrap';
import * as S from "./styled";

import {ShadowCard} from '../../components/Cards.component';
import SelectPlanButton from '../../components/SelectPlanBtn.component';
import Space from '../../components/Space.component';
import FormTitle from '../../components/FormTitle.component';
import Application from '../../components/ApplicationName.component';

import {registerValidation} from '../../validations/validations';
import * as V from "../../styles/variables";

import StartIcon from '../../assets/001-startup.svg';
import ProIcon from '../../assets/002-checklist.svg';
import BusinessIcon from '../../assets/003-bank.svg';

import api from '../../services/api.service';

function LoginView(){

    const history = useHistory();

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [businessName, setBusinessName] = useState('');
    const [plan, setPlan] = useState('');
    const [userType, setUserType] = useState(3);
    const [doc, setDoc] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSetPlan = (plan) =>{
        setPlan(plan);
    }

    const handleSubmit = async e =>{
        e.preventDefault();

        const registerData = {
            empresa: businessName,
            cnpj: doc,
            plano: plan,
            nome: name,
            sobrenome: lastName,
            email: email,
            senha: password,
            tipoUsuario: userType
        }

        const businessData = {
            nome: businessName,
            cnpj: doc,
            plano: plan,
            status: true
        }

        await registerValidation.isValid(registerData).then( valid =>{

            if(valid){
                try{
                    api.post('/empresa', businessData).then((response) => {
                        handleUserSubmit(response.data);
                    });
                }catch(err){
                    alert("Tente novamente");
                }
            }
        });
    }

    const handleUserSubmit = async (newBusinessData) => {

        const userData = {
            nome: name,
            sobrenome: lastName,
            email: email,
            senha: password,
            tipoUsuario: userType,
            empresa: newBusinessData.id,
            status: true,
            setor: 0,
        }

        api.post('/usuario', userData).then((response) => {
            // console.log(response);
            history.push('/');
        });
    }
    return(
            <Container fluid style={{backgroundColor: V.draculaPrimary}}>
                <Row>
                    <S.ColFullHeight md="12">
                        <ShadowCard>
                            <Form onSubmit={handleSubmit}>
                                <Application />

                                <Space height={'40px'}/>
                                
                                <Row>
                                    <Col md="4">
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Control placeholder="Nome" value={name} onChange={e => setName(e.target.value)} />
                                        </Form.Group>
                                    </Col>
                                    <Col md="8">
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Control placeholder="Sobrenome" value={lastName} onChange={e => setLastName(e.target.value)} />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <FormTitle title="Dados da empresa" color="#000" align="center"/>

                                <Row>
                                    <Col md="4">
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Control placeholder="CNPJ" value={doc} onChange={e => setDoc(e.target.value)} />
                                        </Form.Group>
                                    </Col>
                                    <Col md="8">
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Control placeholder="Nome da empresa" value={businessName} onChange={e => setBusinessName(e.target.value)} />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <FormTitle title="Dados de acesso" color="#000" align="center"/>
                                
                                <Row>
                                    <Col md="6">
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
                                        </Form.Group>
                                    </Col>
                                    <Col md="6">
                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Space height={'40px'}/>

                                <Row>
                                    <Col md="12">
                                        <div className="d-flex justify-content-center">
                                            <div className="text-center">
                                                <h5 className="font-weight-bold"> Selecione um plano</h5>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>

                                <Space height={'20px'}/>

                                <Row>
                                    <Col md="4">
                                        <SelectPlanButton icon={StartIcon} title={'Start'} onClick={() => handleSetPlan(1)} active={plan == 1 ? 'active' : ''} number={5} />
                                    </Col>
                                    <Col md="4">
                                        <SelectPlanButton icon={ProIcon} title={'Pro'} onClick={() => handleSetPlan(2)} active={plan == 2 ? 'active' : ''} number={10} />
                                    </Col>
                                    <Col md="4">
                                        <SelectPlanButton icon={BusinessIcon} title={'Business'} onClick={() => handleSetPlan(3)} active={plan == 3 ? 'active' : ''} number={15} />
                                    </Col>
                                </Row>

                                <Space height={'40px'}/>
                                    
                                <Row>
                                    <Col md="12" className="d-flex justify-content-between">
                                        <button className="btn btn-primary">Cadastre-se</button>
                                        <button className="btn btn-outline-dark">Fazer login</button>
                                    </Col>
                                </Row>
                            </Form>
                        </ShadowCard>
                    </S.ColFullHeight>
                </Row>
            </Container>
    )
}

export default LoginView;