import React from 'react';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components';
import * as V from '../styles/variables';
import { removeStorageLogin } from '../services/auth.service';

function Header(){

    const history = useHistory();
    
    const HeaderComponent = styled('div')`
        padding: 0px 15px;
        height: 60px;
        background: ${V.draculaLight};
        display: flex;
        justify-content: flex-end;
        align-items: center;
    `;

    const HeaderButton = styled('button')`
        border-radius: 100px;
        padding: 5px 10px;
        background: ${V.draculaPrimary};
        color: ${V.whiteColor};
        border: 0px solid transparent;
    `

    function handleLogout(){
        removeStorageLogin();
        history.push('/');
    }

    return (
        <HeaderComponent>
            <HeaderButton onClick={() => handleLogout()}><i class="fa fa-power-off"></i></HeaderButton>
        </HeaderComponent>
    )
}

export default Header;