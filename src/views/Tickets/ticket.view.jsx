import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useParams } from 'react-router-dom';
import { Row, Col, Form } from 'react-bootstrap';
import { ChildContentWrapper, FormWrapper, CardWrapper } from '../../components/Wrappers.component';

import api from '../../services/api.service';
import DefaultWrapper from '../../components/DefaultWrapper.component';
import ViewTitle from '../../components/ViewTitle.component';
import FormTitle from '../../components/FormTitle.component';
import Input from '../../components/Input.component';
import Textarea from '../../components/Textarea.component';
import Talk from '../../components/Talk.component';

import * as V from '../../styles/variables';

function TicketView(){

    const [userId, setUserId] = useState(0);
    const [ticketId, setTicketId] = useState(useParams().id);
    const [clientId, setClientId] = useState('');
    const [categotyId, setCategoryId] = useState('');
    const [status, setStatus] = useState('');
    const [title, setTitle] = useState('');
    const [created_at, setCreatedAt] = useState('');
    const [deadline, setDeadline] = useState('');
    const [finished_at, setFinishedAt] = useState('');
    const [description, setDescription] = useState('');
    const [talkHistory, setTalkHistory] = useState('');
    const [talkText, setTalkText] = useState('');
    const [readonly, setReadOnly] = useState('');

    useEffect(() => {
        async function getTicket() {
            try {
                const { data } = await api.get("/tickets/" + ticketId);
                setClientId(data.clientId);
                setCategoryId(data.categotyId);
                setStatus(data.status);
                setTitle(data.title);
                setCreatedAt(data.created_at);
                setDeadline(data.deadline);
                setFinishedAt(data.finished_at);
                setDescription(data.description);
            } catch (error) {
                alert("Ocorreu um erro ao buscar os items");
            }
        }

        async function getTalkTicket(){
            try {
                const { data } = await api.get("/tickets/" + ticketId + "/talk");
                setTalkHistory(data.talkHistory)

            } catch (error) {
                alert("Ocorreu um erro ao buscar os items");
            }
        }

        if(ticketId){
            getTicket();
            getTalkTicket();
            setReadOnly(true);
        }else{
            setTicketId(uuidv4());
        }
        
    }, []);

    const handleSubmit = async e =>{
        e.preventDefault();
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
                                        <Input placeholder="Título do ticket" readonly={readonly} value={title} onChange={e => setTitle(e.target.value)} />
                                    </Col>
                                    <Col md='3'>
                                        <Input placeholder="Categoria" readonly={readonly} value={categotyId} onChange={e => setCategoryId(e.target.value)} />
                                    </Col>
                                    <Col md='3'>
                                        <Input placeholder="Cliente" readonly={'readonly'} value={clientId} onChange={e => setClientId(e.target.value)} />
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md='6'>
                                        <Input placeholder="ticketId" readonly={'readonly'} value={ticketId} onChange={e => setTicketId(e.target.value)} />
                                    </Col>
                                    <Col md='6'>
                                        <select className="form-control" value={status} disabled={!readonly} onChange={e => setStatus(e.target.value)}>
                                            <option value="">Selecione</option>
                                            <option value="to-do">To do</option>
                                            <option value="in-progress">In progress</option>
                                            <option value="blocked">Blocked</option>
                                            <option value="done">Done</option>
                                        </select>
                                    </Col>
                                </Row>
                                
                                <Row>
                                    <Col md='6'>
                                        <Input placeholder="Data de abertura" readonly={'readonly'} type={'date'} value={created_at} onChange={e => setCreatedAt(e.target.value)} />
                                    </Col>
                                    <Col md='3'>
                                        <Input placeholder="Prazo" type={'date'} value={deadline} readonly={!readonly} onChange={e => setDeadline(e.target.value)} />
                                    </Col>
                                    <Col md='3'>
                                        <Input placeholder="Data de conclusão" type={'date'} value={finished_at} readonly={!readonly} onChange={e => setFinishedAt(e.target.value)} />
                                    </Col>
                                </Row>
                                <FormTitle title="Detalhes do ticket" />
                                <Row>
                                    <Col md='12'>
                                        <Textarea placeholder="Detalhes do ticket" readonly={readonly} height={400} value={description} onChange={e => setDescription(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md='12'>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <button className="btn btn-primary">Salvar ticket</button>
                                        </div>
                                    </Col>
                                </Row>
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