  
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { ChildContentWrapper, FormWrapper, CardWrapper } from '../../components/Wrappers.component';

import api from '../../services/api.service';
import DefaultWrapper from '../../components/DefaultWrapper.component';
import ViewTitle from '../../components/ViewTitle.component';
import FormTitle from '../../components/FormTitle.component';
import Input from '../../components/Input.component';

function ProfileView(){

    const [userId, setUserId] = useState(useParams().id);
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
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

    // com Async Await
    useEffect(() => {
        async function getItems() {

            try {
                
                const { data } = await api.get("/profiles/" + userId);

                setName(data.name);
                setLastName(data.lastName);
                setDoc(data.doc);
                setZipCode(data.zipCode);
                setAddress(data.address);
                setNumber(data.number);
                setComplement(data.complement);
                setNeighborhood(data.neighborhood);
                setCity(data.state);
                setState(data.state);
                setEmail(data.email);
                setPassword(data.password);
                setConfirm(data.confirm);

            } catch (error) {
                alert("Ocorreu um erro ao buscar os items");
            }
        }

        getItems();
    }, []);


    const handleSubmit = async e =>{
        e.preventDefault();
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
                                        <Input placeholder="Nome" value={name} onChange={setName} />
                                    </Col>
                                    <Col md='3'>
                                        <Input placeholder="Sobrenome" value={lastName} onChange={setLastName} />
                                    </Col>
                                    <Col md='3'>
                                        <Input placeholder="CPF/CNPJ" value={doc} onChange={setDoc} />
                                    </Col>
                                </Row>
                                <FormTitle title="Endereço" />
                                <Row>
                                    <Col md='2'>
                                        <Input placeholder="CEP" value={zipCode} onChange={setZipCode} />
                                    </Col>
                                    <Col md='8'>
                                        <Input placeholder="Logradouro" value={address} onChange={setAddress} />
                                    </Col>
                                    <Col md='2'>
                                        <Input placeholder="Nº" value={number} onChange={setNumber} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md='2'>
                                        <Input placeholder="Complemento" value={complement} onChange={setComplement} />
                                    </Col>
                                    <Col md='2'>
                                        <Input placeholder="Bairro" value={neighborhood} onChange={setNeighborhood} />
                                    </Col>
                                    <Col md='6'>
                                        <Input placeholder="Cidade" value={city} onChange={setCity} />
                                    </Col>
                                    <Col md='2'>
                                        <Input placeholder="Estado" value={state} onChange={setState} />
                                    </Col>
                                </Row>
                                <FormTitle title="Acesso" />
                                <Row>
                                    <Col md='6'>
                                        <Input placeholder="Email" value={email} onChange={setEmail} />
                                    </Col>
                                    <Col md='3'>
                                        <Input placeholder="Senha" type="password" value={password} onChange={setPassword} />
                                    </Col>
                                    <Col md='3'>
                                        <Input placeholder="Confirmação" type="password" value={confirm} onChange={setConfirm} />
                                    </Col>
                                </Row>
                                <hr/>
                                <Row>
                                    <Col md='12'>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <button className="btn btn-primary">Salvar</button>
                                            <button className="btn btn-outline-danger">Apagar usuário</button>
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