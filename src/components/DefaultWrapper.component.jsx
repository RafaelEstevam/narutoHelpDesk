import React from 'react';
import {ToolBarWrapper, FlexWrapper, ContentWrapper} from './Wrappers.component';

import Header from './Header.component';
import MainMenu from './MainMenu.component';

function DefaultWrapper ({content}){

    return(
        <FlexWrapper>
            <ToolBarWrapper>
                <MainMenu />
            </ToolBarWrapper>
            <ContentWrapper>
                <Header />
                {content}
            </ContentWrapper>
        </FlexWrapper>
    )
} 

export default DefaultWrapper;