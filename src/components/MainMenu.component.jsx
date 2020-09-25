import React from 'react';
import styled from 'styled-components';
import MenuItem from './MenuItem.component';

function MainMenu(){

    const MainMenu = styled('ul')`
        list-style: none;
        padding: 0px;
    `

    return(
        <MainMenu>
            <MenuItem key={1} icon={'fa fa-search'} label={'Dashboard'} link={'/dashboard'} />
            <MenuItem key={2} icon={'fa fa-search'} label={'Tickets'} link={'/tickets'} />
            <MenuItem key={3} icon={'fa fa-search'} label={'Tickets Categories'} link={'/tickets-categories'} />
            <MenuItem key={4} icon={'fa fa-search'} label={'Users'} link={'/users'} />
            <MenuItem key={5} icon={'fa fa-search'} label={'Profile'} link={'/users/1234'} />
        </MainMenu>
    )
}

export default MainMenu;