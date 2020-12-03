import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useParams, useHistory, Redirect, Link } from 'react-router-dom';
import { Row, Col, Form } from 'react-bootstrap';
import { ChildContentWrapper, FormWrapper, CardWrapper } from '../../components/Wrappers.component';

import api from '../../services/api.service';
import {getStorageLogin} from '../../services/auth.service';
import {getCurrentDate, getDateTime, getDate} from '../../services/date.service';
import {getBase64} from '../../services/img.service';

import {ticketValidation, chatValidation} from '../../validations/validations';

import ImgTalk from '../../components/ImgTalk.component';

import DefaultWrapper from '../../components/DefaultWrapper.component';
import ViewTitle from '../../components/ViewTitle.component';
import FormTitle from '../../components/FormTitle.component';
import Input from '../../components/Input.component';
import Textarea from '../../components/Textarea.component';
import Talk from '../../components/Talk.component';

import * as V from '../../styles/variables';

function TicketView(){

    const history = useHistory();

    const [userId, setUserId] = useState(getStorageLogin().userId);
    const [currentUserType, setCurrentUserType] = useState(getStorageLogin().userType);
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
    const [clientReadyOnly, setClientReadyOnly] = useState(true);
    const [managerReadyOnly, setManagerReadyOnly] = useState(true);
    const [taskReadyOnly, setTaskReadyOnly] = useState(true);
    const [chatDate, setChatDate] = useState('');
    const [chatImage, setChatImage] = useState('');
    const [image, setImage] = useState('');

    useEffect(() => {

        const {businessId, userType} = getStorageLogin();
        getCategory();

        const clientOnly = userType != 3 ? setClientReadyOnly(false) : setClientReadyOnly(true);
        const managerOnly = userType == 1 ? setManagerReadyOnly(true) : setManagerReadyOnly(false);
        const ticketOnly = ticketId && userType == 3 ? setTaskReadyOnly(true) : setTaskReadyOnly(false);

        setChatDate(getCurrentDate('-'));

        if(ticketId){
            getTicket();
            getTalkTicket();
        }

        if(!ticketId){
            setClientId(businessId);
            setCreatedAt(getCurrentDate('-'));
        }
        
    }, []);

    async function getCategory() {
        try {
            const {data} = await api.get("/setor/listar/");
            setListCategory(data);
        } catch (error) {
            toast.error("Não foi possível carregar a lista de categorias", {position: "top-center"});
        }
    }

    async function getTicket() {
        try {

            const { data } = await api.get("/chamado/id/" + ticketId);
            
            setClientId(data.cliente);
            setCategoryId(data.setor);
            setStatus(data.status);
            setTitle(data.titulo);
            setCreatedAt(data.dataInicio);

            if(data.dataTermino){
                setFinishedAt(data.dataTermino);
            }
            
            setDescription(data.descricao);

        } catch (error) {
            toast.error("Não foi possível carregar o chamado.", {position: "top-center"});
        }
    }

    async function getTalkTicket(){
        try {
            const { data } = await api.get("/chat_chamado/listar/" + ticketId);
            setTalkHistory(data);

        } catch (error) {
            toast.error("Não foi possível carregar a conversa.", {position: "top-center"});
        }
    }

    const handleSubmit = async e =>{
        e.preventDefault();

        const currentUser = currentUserType == 1 ? userId : "";
        
        const ticketData = {
            idChamado: ticketId,
            atendente: currentUser,
            cliente: clientId,
            dataInicio: created_at,
            dataTermino: finished_at,
            descricao: description,
            setor: parseInt(categotyId),
            status: parseInt(status),
            titulo: title
        }
        
        await ticketValidation.isValid(ticketData).then( valid =>{
            if(valid){
                if(ticketId){
                    api.put('/chamado/', ticketData).then((response) =>{
                        toast.success('Atualizado com sucesso', {position: "top-center"});
                    }).catch((err) =>{
                        toast.error(err.response.data, {position: "top-center"});
                    });
                }else{
                    api.post('/chamado/', ticketData).then((response) =>{
                        toast.success('Salvo com sucesso', {position: "top-center"});
                    }).catch((err) =>{
                        toast.error(err.response.data, {position: "top-center"});
                    });
                }
            }
        });
    }

    const HandleShowImage = (imageSrc) =>{
        setImage(imageSrc);
    }

    const HandleCloseImage = () =>{
        setImage('');
    }

    const handleChatSubmit = async e =>{
        e.preventDefault();

        let imgData = '';

        if(chatImage){
            const imgFormData = new FormData();
            imgFormData.append('file', chatImage);
            imgData = await api.post('/file/upload/', imgFormData);
            imgData = imgData.data.fileName;
        }

        const chatData = {
            chamado: ticketId,
            conteudo: talkText,
            dataChat: chatDate,
            imagem: imgData,
            usuario: userId
        }

        await chatValidation.isValid(chatData).then( valid =>{
            if(valid){
                api.post('chat_chamado/', chatData).then((response) =>{
                    getTalkTicket();
                    toast.success("Mensagem enviada", {position: "top-center"});
                }).catch((err) => {
                    toast.error("Não foi possível salvar o chamado.", {position: "top-center"});
                });
            }
        });

    }

    const renderContent = () =>{
        return (
            <ChildContentWrapper>
                <ViewTitle title={'Chamado [' + ticketId + '] - ' + title } />
                <Row>
                    <Col md='8'>
                        <FormWrapper>
                            <form onSubmit={handleSubmit}>
                                <FormTitle title="Detalhes do chamado" />

                                <Row>
                                    <Col md='6'>
                                        <label>Título</label>
                                        <Input placeholder="Título do chamado" required={'required'} value={title} readonly={ticketId} onChange={e => setTitle(e.target.value)} />
                                    </Col>
                                    <Col md='6'>
                                        <label>Categoria</label>
                                        <select className="form-control" required="required" value={categotyId} disabled={taskReadyOnly} onChange={e => setCategoryId(e.target.value)}>
                                        <option value="">Selecione uma categoria</option>
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
                                    <Col md='6'>
                                        <label>Status</label>
                                        <select className="form-control" required="required" value={status} disabled={clientReadyOnly} onChange={e => setStatus(e.target.value)}>
                                            <option value="">Selecione um status</option>
                                            <option value="1">Aberto</option>
                                            <option value="2">Em andamento</option>
                                            <option value="3">Finalizado</option>
                                            <option value="4">Bloqueado</option>
                                        </select>
                                    </Col>
                                    <Col md='3'>
                                        <label>Data de abertura</label>
                                        <Input placeholder="Data de abertura" type={'date'} value={created_at} readonly={true} onChange={e => setCreatedAt(e.target.value)} />
                                    </Col>
                                    <Col md='3'>
                                        <label>Data de conclusão</label>
                                        <Input placeholder="Data de conclusão" type={'date'} value={finished_at} readonly={clientReadyOnly} onChange={e => setFinishedAt(e.target.value)} />
                                    </Col>
                                </Row>
                                
                                <FormTitle title="Detalhes do ticket" />
                                <Row>
                                    <Col md='12'>
                                        <label>Descrição</label>
                                        <Textarea required={'required'} placeholder="Detalhes do ticket" height={400} readonly={ticketId} value={description} onChange={e => setDescription(e.target.value)} />
                                    </Col>
                                </Row>

                                {
                                    !taskReadyOnly &&
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
                                        <div className="chatWrapper mb-3" style={{backgroundColor: V.draculaDark, height: '400px', maxHeight: '400px', overflowY: 'auto', borderRadius: '3px'}}>
                                            <div className="chat" style={{backgroundColor: V.draculaDark, height: 'auto', borderRadius: '3px', padding: '15px'}}>
                                                {talkHistory && talkHistory.length > 0 && 
                                                    talkHistory.map((item) => {
                                                        return (
                                                            <Talk showImage={HandleShowImage} key={item.idChatChamado} content={item.conteudo} date={item.dataChat} userId={userId} talkUserId={item.usuario} image={item.imagem} />
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md='12' className="d-none">
                                        <Input placeholder="Data" type={'date'} value={chatDate} readonly={true} onChange={e => setChatDate(e.target.value)} />
                                    </Col>
                                    <Col md='12'>
                                        <Textarea required={'required'} placeholder="Texto" height={130} value={talkText} onChange={e => setTalkText(e.target.value)} />
                                    </Col>
                                    <Col md='12'>
                                        <input type='file' accept="image/png, image/jpeg" onChange={e => setChatImage(e.target.files[0])} />
                                    </Col>
                                    <Col md='12' className="mt-3">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <button className="btn btn-outline-light btn-block">Mensagem <i className="fa fa-comments-o"></i></button>
                                        </div>
                                    </Col>
                                </Row>
                            </form>
                        </FormWrapper>
                    </Col>
                </Row>
            <ImgTalk src={image} handleClose={HandleCloseImage} />
            </ChildContentWrapper>
        )
    }

    return(
        <DefaultWrapper content={renderContent()}></DefaultWrapper>
    )
}

export default TicketView;