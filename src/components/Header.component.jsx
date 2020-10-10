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
        background: ${V.draculaLight};
        display: flex;
        justify-content: space-between;
        align-items: center;
    `;

    const HeaderButton = styled('button')`
        border: 3px solid ${V.mainLightColor};
        border-radius: 100px;
        padding: 5px 10px;
        background: ${V.bgDarkColor};
        color: ${V.whiteColor};
    `

    function handleLogout(){
        removeStorageLogin();
        history.push('/');
    }

    return (
        <Header>
            
            {/* <div style={{display: 'flex'}}>
                <p className="pr-3 text-white">Nome do usuário</p>
                <button className="btn btn-warning"><i className="fa fa-user"></i></button>
            </div> */}

            <div style={{display: 'flex'}}>
                <HeaderButton onClick={() => handleLogout()}><i class="fa fa-power-off"></i></HeaderButton>
            </div>
            
        </Header>
    )
}

export default Header;