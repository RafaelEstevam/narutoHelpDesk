  
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
import { setUserLogin } from '../../services/auth.service';
import { userValidation, profileValidation } from '../../validations/validations';

import * as V from '../../styles/variables';

import StartIcon from '../../assets/001-startup.svg';
import ProIcon from '../../assets/002-checklist.svg';
import BusinessIcon from '../../assets/003-bank.svg';

function ProfileView(){

    const [userId, setUserId] = useState(useParams().id);
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userType, setUserType] = useState('');
    const [businessName, setBusinessName] = useState('');
    const [businessId, setBusinessId] = useState('');
    const [plan, setPlan] = useState('');
    const [doc, setDoc] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [planTitle, setPlanTitle] = useState('');
    const [planQuantity, setPlanQuantity] = useState('');
    const [planIcon, setPlanIcon] = useState('');

    useEffect(() => {
        async function getItems() {
            try {

                await api.get("/usuario/id/" + userId).then((response) => {
                    const userData = response.data;
                    handleGetBusinessData(userData.empresa);
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

        const userData ={
            email: email,
            empresa: businessId,
            idUsuario: userId,
            nome: name,
            sobrenome: lastName,
            tipoUsuario: userType,
            senha: password,
            status: true,
            setor: 0
        }

        await userValidation.isValid(userData).then( valid =>{
            if(valid){
                try{
                    api.put('/usuario/', userData);
                    toast.success("Atualizações salvas", {position: "top-center"});
                    setUserLogin(userData.nome)
                }catch(err){
                    toast.error(err.response.data, {position: "top-center"});
                }
            }
        });

    }

    const handleGetBusinessData = async (business) => {
        const businessData = await api.get("/empresa/id/" + business);

        setBusinessName(businessData.data.nome);
        setBusinessId(businessData.data.idEmpresa);
        setDoc(businessData.data.cnpj);
        handleGetPlan(businessData.data.plano)
    }

    const handleGetPlan = async (planId) =>{
        const {data} = await api.get(`/plano/id/${planId}/`);
        setPlanTitle(data.nome);
        setPlanQuantity(data.quantidadeChamadoMes);
        data.idPlano == 1 ? setPlanIcon(StartIcon) : data.idPlano == 2 ? setPlanIcon(ProIcon) : setPlanIcon(BusinessIcon);

    }

    const renderContent = () =>{
        return (
            <ChildContentWrapper>
                <ViewTitle title="Dados do usuário" />
                <Row>
                    <Col md='9'>
                        <FormWrapper>
                            <form onSubmit={handleSubmit}>
                                <FormTitle title="Dados" />
                                <Row>
                                    <Col md='6'>
                                        <label>Nome</label>
                                        <Input placeholder="Nome" value={name} onChange={e => setName(e.target.value)} />
                                    </Col>
                                    <Col md='3'>
                                        <label>Sobrenome</label>
                                        <Input placeholder="Sobrenome" value={lastName} onChange={e => setLastName(e.target.value)} />
                                    </Col>
                                    <Col md='3'>
                                        <label>Tipo usuário</label>
                                        <Input type="hidden" placeholder="Tipo de usuário" readonly value={userType} onChange={e => setUserType(e.target.value)} />
                                        <h4 style={{color: V.whiteColor}}>{userType == 1 ? "Administrador" : "Cliente"}</h4>
                                    </Col>
                                </Row>
                                <FormTitle title="Dados da empresa" />
                                <Row>
                                    <Col md='3'>
                                        <label>Documento</label>
                                        <Input placeholder="CPF/CNPJ" readonly value={doc} onChange={e => setDoc(e.target.value)} />
                                    </Col>
                                    <Col md='9'>
                                        <label>Nome da empresa</label>
                                        <Input placeholder="Nome da empresa" value={businessName} onChange={e => setBusinessName(e.target.value)} />
                                    </Col>
                                    {/* <Col md='3'>
                                        <Input placeholder="Plano" readonly value={plan} onChange={e => setPlan(e.target.value)} />
                                    </Col> */}
                                </Row>
                                
                                <FormTitle title="Acesso" />
                                <Row>
                                    <Col md='6'>
                                        <label>Email</label>
                                        <Input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                                    </Col>
                                    <Col md='6'>
                                        <label>Senha</label>
                                        <Input placeholder="Senha" type="password" value={password} onChange={e => setPassword(e.target.value)} />
                                    </Col>
                                    
                                </Row>
                                <hr/>
                                <Row>
                                    <Col md='12'>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <button className="btn btn-primary">Salvar</button>
                                        </div>
                                    </Col>
                                </Row>
                            </form>
                        </FormWrapper>
                    </Col>
                    {
                        userType == 3 &&
                        <Col md='3'>
                            <FormWrapper>
                                <div style={{display:'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', color: V.whiteColor}}>
                                    <FormTitle title="Detalhes do plano" />
                                    <img src={planIcon} style={{width: '200px', filter:'invert(1)'}} />
                                    <h1 className="display-4 py-5">{planTitle}</h1>
                                    <h3>Nº Chamados: {planQuantity}</h3>
                                </div>
                                
                            </FormWrapper>
                        </Col>
                    }
                    
                </Row>
                
            </ChildContentWrapper>
        )
    }

    return(
        <DefaultWrapper content={renderContent()}></DefaultWrapper>
    )
}

export default ProfileView;