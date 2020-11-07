  
import React, { useEffect, useState, useContext } from 'react';
import { Col, Row, Form, Button, Container } from 'react-bootstrap';
import {useHistory} from 'react-router-dom';

import {BetweenWrapper} from '../../components/Wrappers.component';
import * as S from "./styled";
import {loginValidation} from '../../validations/validations';
import * as V from "../../styles/variables";


import mainImage from '../../assets/undraw_Done_checking_re_6vyx.svg'

import userContext from '../../services/useContext.service';
import api from '../../services/api.service';
import {auth} from '../../services/auth.service';

function LoginView(){

    const currentlyUser = useContext(userContext);

    const [email, setEmail] = useState('');
    const [senha, setPassword] = useState('');
    const history = useHistory();

    const handleSubmit = async e =>{
        e.preventDefault();
        const loginData = { email, senha };
        const formData = await loginValidation.isValid(loginData).then( valid =>{
            return valid
        });

        if(formData){
            try {
                const loggedUser = await api.post('/login', loginData);
                currentlyUser.handleSetUserData(loggedUser.data);

                if(loggedUser.data.tipoUsuario == 1 || loggedUser.data.tipoUsuario == 2){
                    history.push('/dashboard');
                }else{
                    history.push('/client-dashboard');
                }

            }catch(err){
                alert('Não foi possível fazer o login.');
            }
        }
    }

    return(
        <S.DivFullHeight >
            <Container fluid>
                <Row>
                    <S.ColFullHeight md="4">
                        <div className="p-3" style={{width: '100%', maxWidth: '400px'}}>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Control type="password" placeholder="Senha" value={senha} onChange={e => setPassword(e.target.value)} />
                                </Form.Group>
                                <BetweenWrapper>
                                    <Button variant="primary" type="submit">Login</Button>
                                    <a className="btn btn-outline-dark">Sign Up</a>
                                </BetweenWrapper>
                            </Form>
                        </div>
                    </S.ColFullHeight>

                    <S.ColFullHeight md="8" style={{background: V.draculaPrimary}}>
                        <Row style={{justifyContent: 'center'}}>
                            <Col md="9">
                                <img src={mainImage} className="img-fluid" />
                            </Col>
                        </Row>
                    </S.ColFullHeight>
                    
                </Row>
            </Container>
        </S.DivFullHeight>
    )
}

export default LoginView;