import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
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

    useEffect(() => {
        async function getItems() {

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
                setTalkHistory(data.talkHistory);

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
                <ViewTitle title={'Ticket [' + ticketId + '] - ' + title } />
                <Row>
                    <Col md='8'>
                        <FormWrapper>
                            <form onSubmit={handleSubmit}>
                                <FormTitle title="Dados" />
                                <Row>
                                    <Col md='6'>
                                        <Input placeholder="ticketId" value={ticketId} onChange={e => setTicketId(e.target.value)} />
                                    </Col>
                                    <Col md='6'>
                                        <select class="form-control" value={status} onChange={e => setStatus(e.target.value)}>
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
                                        <Input placeholder="Título do ticket" onChange={e => setTitle(e.target.value)} />
                                    </Col>
                                    <Col md='3'>
                                        <Input placeholder="Cliente" value={clientId} onChange={e => setClientId(e.target.value)} />
                                    </Col>
                                    <Col md='3'>
                                        <Input placeholder="Categoria" value={categotyId} onChange={e => setCategoryId(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md='6'>
                                        <Input placeholder="Data de abertura" type={'date'} value={created_at} onChange={e => setCreatedAt(e.target.value)} />
                                    </Col>
                                    <Col md='3'>
                                        <Input placeholder="Prazo" type={'date'} value={deadline} onChange={e => setDeadline(e.target.value)} />
                                    </Col>
                                    <Col md='3'>
                                        <Input placeholder="Data de conclusão" type={'date'} value={finished_at} onChange={e => setFinishedAt(e.target.value)} />
                                    </Col>
                                </Row>
                                <FormTitle title="Detalhes do ticket" />
                                <Row>
                                    <Col md='12'>
                                        <Textarea placeholder="Detalhes do ticket" height={400} value={description} onChange={e => setDescription(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md='12'>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <button className="btn btn-primary">Atualizar ticket</button>
                                        </div>
                                    </Col>
                                </Row>
                            </form>
                        </FormWrapper>
                    </Col>
                    <Col md='4'>
                        <FormWrapper>
                            <Row>
                                <Col md='12'>
                                    <FormTitle title="Chat do ticket" />
                                </Col>
                                <Col md='12'>
                                    <div class="chatWrapper mb-3" style={{backgroundColor: V.draculaDark, height: '500px', maxHeight: '500px', overflowY: 'auto', borderRadius: '3px'}}>
                                        <div class="chat" style={{backgroundColor: V.draculaDark, height: 'auto', borderRadius: '3px', padding: '15px'}}>
                                            {talkHistory.length > 0 && 
                                                talkHistory.map((item) => {
                                                    return (
                                                        <Talk content={item.content} date={item.date} hour={item.hourtelient} userId={userId} clentId={clientId} image={item.image} />
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
                                        <button className="btn btn-outline-primary">Enviar tratativa</button>
                                    </div>
                                </Col>
                            </Row>
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