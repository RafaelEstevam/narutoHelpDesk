import React from 'react';
import styled from 'styled-components';
import * as V from '../styles/variables';

function Header(){

    const Header = styled('div')`
        padding: 0px 15px;
        height: 60px;
        background: ${V.mainColor};
        display: flex;
        justify-content: space-between;
        align-items: center;
    `; 

    return (
        <Header>
            
            <div style={{display: 'flex'}}>
                <p class="pr-3 text-white">Nome do usuário</p>
                <button class="btn btn-warning"><i class="fa fa-user"></i></button>
            </div>

            <div style={{display: 'flex'}}>
                <input class="form-control" />
            </div>
            
        </Header>
    )
}

export default Header;