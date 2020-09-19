  
import React, { useEffect, useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { ShadowCard } from '../../components/Cards'
import { BetweenWrapper } from '../../components/Wrappers';
import * as S from "./styled";
import {loginSchema} from '../../validations/login.validation';

import api from '../../services/api';

function LoginView(){

    const handleSubmit = async e =>{
        e.preventDefault();

        let loginData = {
            email: 'teste@teset.com',
            password: '2323233'
        }

        loginSchema.isValid(loginData).then( valid =>{
            try{
                const logedUser = api.post('/sessions');
            }catch(err){
                console.log(err);
            }
        })

    }

    return(
        <S.DivFullHeight style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Row>
                <Col>
                    <ShadowCard className="p-3" style={{width: '500px', minHeight: '400px'}}>
                        <ShadowCard.Title className="text-center">Escolha um tipo de usuário</ShadowCard.Title>
                        <BetweenWrapper>
                            <div>teste</div>
                            <div>1234</div>
                        </BetweenWrapper>
                        <div>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </ShadowCard>
                </Col>
            </Row>
        </S.DivFullHeight>
    )
}

export default LoginView;