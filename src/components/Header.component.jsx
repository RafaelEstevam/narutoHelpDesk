import React, { useEffect, useState, useContext} from 'react';
import {useHistory, Redirect, Link} from 'react-router-dom';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styled from 'styled-components';
import * as V from '../styles/variables';
import { removeStorageLogin, getStorageLogin } from '../services/auth.service';

import api from '../services/api.service';


const HeaderComponent = styled('div')`
    padding: 0px 15px;
    height: 60px;
    background: ${V.draculaLight};
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const HeaderButton = styled('button')`
    border-radius: 100px;
    padding: 5px 10px;
    background: ${V.draculaPrimary};
    color: ${V.whiteColor};
    border: 0px solid transparent;
`

const NewTaskButton = styled('a')`
    padding: 5px 10px;
    background: ${V.draculaPrimary};
    color: ${V.whiteColor};
    border: 0px solid transparent;
    border-radius: 3px;
    text-decoration: none;
    cursor: pointer;
    opacity: 0.5;
    :hover{
        text-decoration: none;
        color: ${V.whiteColor};
        opacity: 1;
    }
`

const TotalTickets = styled('p')`
    border: 2px solid ${V.draculaDanger};
    color: ${V.whiteColor};
    border-radius: 100px;
    padding: 0px 10px;
    cursor: help;

    span{
        font-size: 12px;
        display: none;
    }

    :hover{
        span{
            display: inline;
        }
    }
    
` 

function Header(){

    const history = useHistory();
    const {userType, userId} = getStorageLogin();
    const [totalTickets, setTotalTickets] = useState('');
    const isClient = userType == 3 ? true : false;

    useEffect(() => {
        if(isClient){
            getTotalTickets();
        }
        
    }, []);

    async function getTotalTickets(){
        try {
            await api.get(`/chamado/qtd_chamado/empresa/${userId}/`).then((response) => {
                const {data} = response;
                setTotalTickets(data.qtd);
            });

        } catch (error) {
            toast.error("Não foi possível carregar total de chamados", {position: "top-center"});
        }
    }

    function handleNewTicket(){
        history.push('/tickets/new');
    }

    function handleLogout(){
        removeStorageLogin();
        history.push('/');
    }

    return (
        <div>
            {   
                !isClient &&
                <HeaderComponent className="justify-content-end">
                    <HeaderButton onClick={() => handleLogout()}><i className="fa fa-power-off"></i></HeaderButton>
                </HeaderComponent>
            }
            
            {   
                isClient &&
                <HeaderComponent className="justify-content-between align-items-center">
                    <TotalTickets style={{color: V.whiteColor}} className="m-0">Chamados abertos: {totalTickets} <span> | Total de chamados abertos no mês vigente. </span></TotalTickets>
                    <HeaderButton onClick={() => handleLogout()}><i className="fa fa-power-off"></i></HeaderButton>
                </HeaderComponent>
            }
        </div>
    )
}

export default Header;