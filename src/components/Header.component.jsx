import React from 'react';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components';
import * as V from '../styles/variables';
import { removeStorageLogin } from '../services/auth.service';

function Header(){

    const history = useHistory();
    
    const Header = styled('div')`
        padding: 0px 15px;
        height: 60px;
        background: ${V.mainColor};
        display: flex;
        justify-content: space-between;
        align-items: center;
    `;

    function handleLogout(){
        removeStorageLogin();
        history.push('/');
    }

    return (
        <Header>
            
            <div style={{display: 'flex'}}>
                <p className="pr-3 text-white">Nome do usuário</p>
                <button className="btn btn-warning"><i className="fa fa-user"></i></button>
            </div>

            <div style={{display: 'flex'}}>
                <button onClick={() => handleLogout()}> Logout </button>
            </div>
            
        </Header>
    )
}

export default Header;