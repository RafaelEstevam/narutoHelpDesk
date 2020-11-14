  
import React, { useEffect, useState, useContext} from 'react';
import { useParams } from 'react-router-dom';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Col, Row, Form, Button, Container } from 'react-bootstrap';
import { ChildContentWrapper, FormWrapper, CardWrapper } from '../../components/Wrappers.component';

import DefaultWrapper from '../../components/DefaultWrapper.component';
import ViewTitle from '../../components/ViewTitle.component';
import FormTitle from '../../components/FormTitle.component';
import Input from '../../components/Input.component';

import api from '../../services/api.service';

function ProfileView(){

    const [userId, setUserId] = useState(useParams().id);
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userType, setUserType] = useState('');
    const [businessName, setBusinessName] = useState('');
    const [plan, setPlan] = useState('');
    const [doc, setDoc] = useState('');
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

            } catch (error) {
                toast.error("Não foi possível carregar o usuário.", {position: "top-center"});
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