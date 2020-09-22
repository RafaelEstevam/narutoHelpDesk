import React from 'react';
import {ToolBarWrapper, FlexWrapper, ContentWrapper} from './Wrappers';

import Header from './Header';
import MainMenu from './MainMenu';

function DefaultWrapper ({content}){

    const menuItems = [
        {id:1, label:'Dashboard', link:'/#', icon:'fa fa-search', parentId: null},
        {id:2, label:'Tickets', link:'/#', icon:'fa fa-search', parentId: null},
        {id:3, label:'Clients', link:'/#', icon:'fa fa-search', parentId: null},
        {id:4, label:'Users', link:'/#', icon:'fa fa-search', parentId: null},
    ];

    return(
        <FlexWrapper>
            <ToolBarWrapper>
                <MainMenu items={menuItems} />
            </ToolBarWrapper>
            <ContentWrapper>
                <Header />
                {content}
            </ContentWrapper>
        </FlexWrapper>
    )
} 

export default DefaultWrapper;