import React from 'react';
import styled from 'styled-components';
import MenuItem from './MenuItem.component';

const MainMenuComponent = styled('ul')`
    list-style: none;
    padding: 0px;
`

function MainMenu(){

    return(
        <MainMenuComponent>
            <MenuItem key={1} icon={'fa fa-dashboard'} label={'Dashboard'} link={'/dashboard'} />
            <MenuItem key={2} icon={'fa fa-dashboard'} label={'Client Dashboard'} link={'/client-dashboard'} />
            <MenuItem key={3} icon={'fa fa-tasks'} label={'Tickets'} link={'/tickets'} />
            <MenuItem key={4} icon={'fa fa-tag'} label={'Tickets Categories'} link={'/tickets-categories'} />
            <MenuItem key={5} icon={'fa fa-users'} label={'Users'} link={'/users'} />
        </MainMenuComponent>
    )
}

export default MainMenu;