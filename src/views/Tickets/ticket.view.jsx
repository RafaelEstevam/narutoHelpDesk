import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useParams, useHistory, Redirect, Link } from 'react-router-dom';
import { Row, Col, Form } from 'react-bootstrap';
import { ChildContentWrapper, FormWrapper, CardWrapper } from '../../components/Wrappers.component';

import api from '../../services/api.service';
import {getStorageLogin} from '../../services/auth.service';
import {getCurrentDate, getDateTime} from '../../services/date.service';
import {millisecondsToDateDefault} from '../../services/date.service';

import {ticketValidation} from '../../validations/validations';

import DefaultWrapper from '../../components/DefaultWrapper.component';
import ViewTitle from '../../components/ViewTitle.component';
import FormTitle from '../../components/FormTitle.component';
import Input from '../../components/Input.component';
import Textarea from '../../components/Textarea.component';
import Talk from '../../components/Talk.component';

import * as V from '../../styles/variables';

function TicketView(){

    const history = useHistory();

    const [userId, setUserId] = useState(0);
    const [ticketId, setTicketId] = useState(useParams().id);
    const [clientId, setClientId] = useState('');
    const [categotyId, setCategoryId] = useState('');
    const [status, setStatus] = useState('');
    const [title, setTitle] = useState('');
    const [created_at, setCreatedAt] = useState('');
    const [finished_at, setFinishedAt] = useState('');
    const [description, setDescription] = useState('');
    const [talkHistory, setTalkHistory] = useState('');
    const [talkText, setTalkText] = useState('');
    const [listCategory, setListCategory] = useState([]);
    const [clientReadyOnly, setClientReadyOnly] = useState(true)
    const [managerReadyOnly, setManagerReadyOnly] = useState(true)
    const [taskReadyOnly, setTaskReadyOnly] = useState(true)

    useEffect(() => {

        const {businessId, userType} = getStorageLogin();
        setClientId(businessId);
        setCreatedAt(getCurrentDate('-'));
        getCategory();

        const clientOnly = userType != 3 ? setClientReadyOnly(false) : setClientReadyOnly(true);
        const managerOnly = userType == 1 ? setManagerReadyOnly(true) : setManagerReadyOnly(false);
        const ticketOnly = ticketId || userType != 3 ? setTaskReadyOnly(false) : setTaskReadyOnly(true);

        if(ticketId){
            getTicket();
            getTalkTicket();
        }
        
    }, []);

    async function getCategory() {
        try {
            const {data} = await api.get("/setor/listar/");
            setListCategory(data);
        } catch (error) {
            // alert("Ocorreu um erro ao buscar os items");
        }
    }


    async function getTicket() {
        try {

            const { data } = await api.get("/chamado/id/" + ticketId);
            
            setClientId(data.idChamado);
            setCategoryId(data.setor);
            setStatus(data.status);
            setTitle(data.titulo);
            setCreatedAt(millisecondsToDateDefault(data.dataInicio));
            setDescription(data.descricao);

        } catch (error) {
            // alert("Ocorreu um erro ao buscar os items");
        }
    }

    async function getTalkTicket(){
        try {
            const { data } = await api.get("/tickets/" + ticketId + "/talk");
            setTalkHistory(data.talkHistory)

        } catch (error) {
            // alert("Ocorreu um erro ao buscar os items");
        }
    }

    const handleSubmit = async e =>{
        e.preventDefault();

        const ticketData = {
            atendente: 0,
            cliente: clientId,
            dataInicio: getDateTime(),
            dataTermino: finished_at,
            descricao: description,
            setor: categotyId,
            status: status,
            titulo: title
        }

        await ticketValidation.isValid(ticketData).then( valid =>{
            if(valid){
                try{
                    api.post('/chamado/', ticketData).then((response) => {
                        console.log(response);
                    });
                }catch(err){
                    // alert("Tente novamente");
                }
            }
        });
    }

    const handleChatSubmit = async e =>{
        e.preventDefault();
    }

    const renderContent = () =>{
        return (
            <ChildContentWrapper>
                <ViewTitle title={'Ticket [' + ticketId + '] - ' + title } />
                <Row>
                    <Col md='8'>
                        <FormWrapper>
                            <form onSubmit={handleSubmit}>
                                <FormTitle title="Dados" />

                                <Row>
                                    <Col md='6'>
                                        <Input placeholder="Título do ticket" value={title} readonly={ticketId} onChange={e => setTitle(e.target.value)} />
                                    </Col>
                                    <Col md='6'>
                                        <select className="form-control" value={categotyId} disabled={taskReadyOnly} onChange={e => setCategoryId(e.target.value)}>
                                        <option value="">Selecione o status</option>
                                            {listCategory && listCategory.length > 0 && 
                                                listCategory.map((item)=>{
                                                    return(
                                                        <option value={item.idSetor}>{item.nome}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </Col>
                                </Row>

                                <Row>
                                    {/* <Col md='3'>
                                        <Input placeholder="Cliente" value={clientId} onChange={e => setClientId(e.target.value)} />
                                    </Col> */}
                                    <Col md='6'>
                                        <select className="form-control" value={status} disabled={clientReadyOnly} onChange={e => setStatus(e.target.value)}>
                                            <option value="">Selecione uma categoria</option>
                                            <option value="1">Aberto</option>
                                            <option value="2">Em atendimento</option>
                                            <option value="3">Finalizado</option>
                                            <option value="4">Bloqueado</option>
                                        </select>
                                    </Col>
                                    <Col md='3'>
                                        <Input placeholder="Data de abertura" type={'date'} value={created_at} readonly={true} onChange={e => setCreatedAt(e.target.value)} />
                                    </Col>
                                    <Col md='3'>
                                        <Input placeholder="Data de conclusão" type={'date'} value={finished_at} readonly={clientReadyOnly} onChange={e => setFinishedAt(e.target.value)} />
                                    </Col>
                                </Row>
                                
                                <FormTitle title="Detalhes do ticket" />
                                <Row>
                                    <Col md='12'>
                                        <Textarea placeholder="Detalhes do ticket" height={400} readonly={ticketId} value={description} onChange={e => setDescription(e.target.value)} />
                                    </Col>
                                </Row>

                                {
                                    !ticketId &&
                                    <Row>
                                        <Col md='12'>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <button className="btn btn-primary">Salvar ticket</button>
                                            </div>
                                        </Col>
                                    </Row>
                                }
                                
                            </form>
                        </FormWrapper>
                    </Col>
                    <Col md='4'>
                        <FormWrapper>
                            <form onSubmit={handleChatSubmit}>
                                <FormTitle title="Chat do ticket" />
                                <Row>
                                    <Col md='12'>
                                        <div className="chatWrapper mb-3" style={{backgroundColor: V.draculaDark, height: '500px', maxHeight: '500px', overflowY: 'auto', borderRadius: '3px'}}>
                                            <div className="chat" style={{backgroundColor: V.draculaDark, height: 'auto', borderRadius: '3px', padding: '15px'}}>
                                                {talkHistory && talkHistory.length > 0 && 
                                                    talkHistory.map((item) => {
                                                        return (
                                                            <Talk content={item.content} date={item.date} hour={item.hourtelient} userId={userId} talkUserId={item.userId} image={item.image} />
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md='12'>
                                        <Textarea placeholder="Texto" height={130} value={talkText} onChange={e => setTalkText(e.target.value)} />
                                    </Col>
                                    <Col md='12'>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <input type='file' />
                                            <button className="btn btn-outline-primary">Mensagem <i className="fa fa-comments-o"></i></button>
                                        </div>
                                    </Col>
                                </Row>
                            </form>
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