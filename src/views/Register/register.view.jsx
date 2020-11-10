  
import React, { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';
import { Col, Row, Form, Button, Container } from 'react-bootstrap';
import { Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import * as S from "./styled";

import SelectPlanButton from '../../components/SelectPlanBtn.component';
import Space from '../../components/Space.component';
import FormTitle from '../../components/FormTitle.component';
import Application from '../../components/ApplicationName.component';
import {FullHeightWrapper, CenterWrapper} from '../../components/Wrappers.component';

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
    const [listPlan, setListPlan] = useState([]);

    useEffect(() => {
        async function getTasks() {
            try {
                const { data } = await api.get("/plano/listar/");
                setListPlan(data);
            } catch (error) {
                // alert("Ocorreu um erro ao buscar os items");
            }
        }
        getTasks();
    }, []);

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
            empresa: newBusinessData.idEmpresa,
            status: true,
            setor: 0,
        }

        api.post('/usuario', userData).then((response) => {
            console.log(response);
            // history.push('/');
        });
    }
    return(
            <Container fluid style={{backgroundColor: V.draculaPrimary}}>
                
                <Row>
                    <Col md="6">
                        <FullHeightWrapper style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <Application color={V.whiteColor} titleSize={'60px'} labelSize={'30px'} />
                        </FullHeightWrapper>
                    </Col>
                    <Col md="6">
                        <FullHeightWrapper style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <Form onSubmit={handleSubmit} style={{width: '50%'}}>
                                <Tabs>
                                    <TabList style={{display: 'flex', justifyContent: 'center',  border: '0px solid transparent'}}>
                                        <S.STab><i className="fa fa-user-circle-o" title="Dados do usuário"></i><small>Dados do usuário</small></S.STab>
                                        <S.STab><i className="fa fa-bank" title="Dados da empresa"></i><small>Dados da empresa</small></S.STab>
                                        <S.STab><i className="fa fa-handshake-o" title="Dados da empresa"></i><small>Plano</small></S.STab>
                                    </TabList>
                                    <TabPanel>
                                        <Row className="mt-4">
                                            <Col md="12">
                                                <Form.Group controlId="formBasicEmail">
                                                    <Form.Control placeholder="Nome" required value={name} onChange={e => setName(e.target.value)} />
                                                </Form.Group>
                                            </Col>
                                            <Col md="12">
                                                <Form.Group controlId="formBasicEmail">
                                                    <Form.Control placeholder="Sobrenome" required value={lastName} onChange={e => setLastName(e.target.value)} />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="6">
                                                <Form.Group controlId="formBasicEmail">
                                                    <Form.Control type="email" required placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
                                                </Form.Group>
                                            </Col>
                                            <Col md="6">
                                                <Form.Group controlId="formBasicPassword">
                                                    <Form.Control type="password" required placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </TabPanel>
                                    <TabPanel>
                                        <Row className="mt-4">
                                            <Col md="12">
                                                <Form.Group controlId="formBasicEmail">
                                                    <Form.Control placeholder="CNPJ" required value={doc} onChange={e => setDoc(e.target.value)} />
                                                </Form.Group>
                                            </Col>
                                            <Col md="12">
                                                <Form.Group controlId="formBasicEmail">
                                                    <Form.Control placeholder="Nome da empresa" required value={businessName} onChange={e => setBusinessName(e.target.value)} />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </TabPanel>
                                    <TabPanel>
                                        <Row className="mt-4">
                                            {listPlan && listPlan.length > 0 &&
                                                listPlan.map((item) => {

                                                    console.log(item);

                                                    return(
                                                        <Col md="4">
                                                            <SelectPlanButton
                                                                icon={item.idPlano == 1 ? StartIcon : item.idPlano == 2 ? ProIcon : BusinessIcon}
                                                                value={item.valor}
                                                                title={item.nome}
                                                                onClick={() => handleSetPlan(item.idPlano)}
                                                                active={plan == item.idPlano ? 'active' : ''}
                                                                number={item.quantidadeChamadoMes}
                                                            />
                                                        </Col>
                                                    )
                                                })
                                            }
                                        </Row>
                                    </TabPanel>
                                </Tabs>
                                <Row className="mt-4">
                                    <Col md="12">
                                        <button className="btn btn-primary btn-block">Cadastre-se</button>
                                        <button className="btn btn-outline-dark btn-block">Fazer login</button>
                                    </Col>
                                </Row>
                            </Form>
                        </FullHeightWrapper>
                    </Col>
                </Row>
            </Container>
    )
}

export default LoginView;