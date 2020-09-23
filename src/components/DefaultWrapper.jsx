import React from 'react';
import {ToolBarWrapper, FlexWrapper, ContentWrapper} from './Wrappers';

import Header from './Header';
import MainMenu from './MainMenu';

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