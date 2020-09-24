import React from 'react';
import styled from 'styled-components';
import * as V from '../styles/variables';

import MenuItem from './MenuItem';


function MainMenu(){

    const MainMenu = styled('ul')`
        list-style: none;
        padding: 0px;
    `

    return(
        <MainMenu>
            <MenuItem key={1} icon={'fa fa-search'} label={'Dashboard'} link={'/dashboard'} />
            <MenuItem key={4} icon={'fa fa-search'} label={'Users'} link={'/users'} />
            <MenuItem key={5} icon={'fa fa-search'} label={'Profile'} link={'/profile'} />
        </MainMenu>
    )
}

export default MainMenu;