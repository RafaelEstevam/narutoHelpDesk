import React from 'react';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components';
import * as V from '../styles/variables';
import { removeStorageLogin } from '../services/auth.service';

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

function Header(){

    const history = useHistory();
    const isClient = true;

    function handleNewTicket(){
        history.push('/tickets/new');
    }

    function handleLogout(){
        removeStorageLogin();
        history.push('/');
    }

    function handleProfile(){
        history.push(`/profile`);
    }

    return (
        <HeaderComponent>
            {isClient && 
                <NewTaskButton onClick={() => handleNewTicket()}>Novo chamado <i className="fa fa-tasks"></i></NewTaskButton>
            }
            <HeaderButton onClick={() => handleLogout()}><i className="fa fa-power-off"></i></HeaderButton>
            <HeaderButton onClick={() => handleProfile()}><i className="fa fa-user"></i></HeaderButton>
        </HeaderComponent>
    )
}

export default Header;