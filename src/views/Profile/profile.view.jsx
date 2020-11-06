  
import React, { useEffect, useState, useContext} from 'react';
import { useParams } from 'react-router-dom';
import { Col, Row, Form, Button, Container } from 'react-bootstrap';
import { ChildContentWrapper, FormWrapper, CardWrapper } from '../../components/Wrappers.component';

import DefaultWrapper from '../../components/DefaultWrapper.component';
import ViewTitle from '../../components/ViewTitle.component';
import FormTitle from '../../components/FormTitle.component';
import Input from '../../components/Input.component';

import api from '../../services/api.service';
import {getStorageLogin} from '../../services/auth.service';

function ProfileView(){

    const [userId, setUserId] = useState(getStorageLogin().userId)
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userType, setUserType] = useState('');
    const [businessName, setBusinessName] = useState('');
    const [plan, setPlan] = useState('');
    const [doc, setDoc] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [address, setAddress] = useState('');
    const [number, setNumber] = useState('');
    const [complement, setComplement] = useState('');
    const [neighborhood, setNeighborhood] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');

    useEffect(() => {
        async function getItems() {
            try {

                await api.get("/usuario/id/" + userId).then((response) => {
                    const userData = response.data;
                    handleGetBusinessData(userData);

                    setName(userData.nome);
                    setLastName(userData.sobrenome);
                    setEmail(userData.email);
                    setUserType(userData.tipoUsuario);

                });

                
                // setPassword(userData.password);
                // setConfirm(userData.confirm);
                // setDoc(data.doc);
                // setZipCode(data.zipCode);
                // setAddress(data.address);
                // setNumber(data.number);
                // setComplement(data.complement);
                // setNeighborhood(data.neighborhood);
                // setCity(data.cicy);
                // setState(data.state);
                

            } catch (error) {
                alert("Ocorreu um erro ao buscar os items");
            }
        }

        getItems();
    }, []);


    const handleSubmit = async e =>{
        e.preventDefault();
    }

    const handleGetBusinessData = async (user) => {
        const businessData = await api.get("/empresa/id/" + user.empresa);
        setBusinessName(businessData.data.nome);
        setPlan(businessData.data.plano);
    }

    const renderContent = () =>{
        return (
            <ChildContentWrapper>
                <ViewTitle title="Profile" />
                <Row>
                    <Col md='9'>
                        <FormWrapper>
                            <form onSubmit={handleSubmit}>
                                <FormTitle title="Dados" />
                                <Row>
                                    <Col md='6'>
                                        <Input placeholder="Nome" value={name} onChange={e => setName(e.target.value)} />
                                    </Col>
                                    <Col md='3'>
                                        <Input placeholder="Sobrenome" value={lastName} onChange={e => setLastName(e.target.value)} />
                                    </Col>
                                    <Col md='3'>
                                        <Input placeholder="Tipo de usuário" readonly value={userType} onChange={e => setUserType(e.target.value)} />
                                    </Col>
                                </Row>
                                <FormTitle title="Dados da empresa" />
                                <Row>
                                    <Col md='3'>
                                        <Input placeholder="CPF/CNPJ" readonly value={doc} onChange={e => setDoc(e.target.value)} />
                                    </Col>
                                    <Col md='6'>
                                        <Input placeholder="Nome da empresa" value={businessName} onChange={e => setBusinessName(e.target.value)} />
                                    </Col>
                                    <Col md='3'>
                                        <Input placeholder="Plano" readonly value={plan} onChange={e => setPlan(e.target.value)} />
                                    </Col>
                                </Row>
                                {/* <FormTitle title="Endereço" />
                                <Row>
                                    <Col md='2'>
                                        <Input placeholder="CEP" value={zipCode} onChange={e => setZipCode(e.target.value)} />
                                    </Col>
                                    <Col md='8'>
                                        <Input placeholder="Logradouro" value={address} onChange={e => setAddress(e.target.value)} />
                                    </Col>
                                    <Col md='2'>
                                        <Input placeholder="Nº" value={number} onChange={e => setNumber(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md='2'>
                                        <Input placeholder="Complemento" value={complement} onChange={e => setComplement(e.target.value)} />
                                    </Col>
                                    <Col md='2'>
                                        <Input placeholder="Bairro" value={neighborhood} onChange={e => setNeighborhood(e.target.value)} />
                                    </Col>
                                    <Col md='6'>
                                        <Input placeholder="Cidade" value={city} onChange={e => setCity(e.target.value)} />
                                    </Col>
                                    <Col md='2'>
                                        <Input placeholder="Estado" value={state} onChange={e => setState(e.target.value)} />
                                    </Col>
                                </Row> */}
                                <FormTitle title="Acesso" />
                                <Row>
                                    <Col md='6'>
                                        <Input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                                    </Col>
                                    <Col md='3'>
                                        <Input placeholder="Senha" type="password" value={password} onChange={e => setPassword(e.target.value)} />
                                    </Col>
                                    <Col md='3'>
                                        <Input placeholder="Confirmação" type="password" value={confirm} onChange={e => setConfirm(e.target.value)} />
                                    </Col>
                                </Row>
                                <hr/>
                                <Row>
                                    <Col md='12'>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <button className="btn btn-primary">Salvar</button>
                                            <button className="btn btn-outline-danger">Voltar</button>
                                        </div>
                                    </Col>
                                </Row>
                            </form>
                        </FormWrapper>
                    </Col>
                    {/* <Col md='3'>
                        <CardWrapper>
                            adfasdf
                        </CardWrapper>
                    </Col> */}
                </Row>
                
            </ChildContentWrapper>
        )
    }

    return(
        <DefaultWrapper content={renderContent()}></DefaultWrapper>
    )
}

export default ProfileView;