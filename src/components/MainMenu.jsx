import React from 'react';
import styled from 'styled-components';
import * as V from '../styles/variables';

import MenuItem from './MenuItem';


function MainMenu({items}){

    const MainMenu = styled('ul')`
        list-style: none;
        padding: 0px;
    `

    return(
        <MainMenu>
            {items.map((item) => {
                return( <MenuItem key={item.id} icon={item.icon} label={item.label} link={item.link} /> ); 
            })}
        </MainMenu>
    )
}

export default MainMenu;