import React from 'react';
import {ToolBarWrapper, FlexWrapper, ContentWrapper} from './Wrappers'
import Header from './Header'

function DefaultWrapper ({content}){
    return(
        <FlexWrapper>
            <ToolBarWrapper style={{width: '60px'}}>
                <ul>
                    <li><a href="#">1</a></li>
                    <li><a href="#">1</a></li>
                    <li><a href="#">1</a></li>
                    <li><a href="#">1</a></li>
                </ul>
            </ToolBarWrapper>
            <ContentWrapper>
                <Header />
                {content}
            </ContentWrapper>
        </FlexWrapper>
    )
} 

export default DefaultWrapper;