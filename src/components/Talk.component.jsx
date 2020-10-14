import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import * as V from '../styles/variables';

function Talk({content, date, hour, userId, clientId, image}){

    const isClientTalk = userId == clientId ? true : false;

    const TalkComponent = styled('div')`
        background-color: ${ isClientTalk ? V.draculaLight : V.draculaBootstrapPrimary };
        padding: 15px;
        border-radius: 3px;
        margin-bottom: 15px;
        color: ${V.whiteColor};
        margin-right: ${ isClientTalk ? '50px' : '0px' } ;
        margin-left: ${ !isClientTalk ? '50px' : '0px' } ;
    `

    const TalkImage = styled('img')`
        margin-top: 15px;
        width: 100%;
    `

    const TalkDetails = styled('p')`
        margin: 0px;
        font-size: 10px;
    `

    return(

        <TalkComponent>
            <TalkDetails>
                {date} - {hour}
            </TalkDetails>
            {content}
            {image && image != '' && <TalkImage src={image} />}
        </TalkComponent>
    )
}

export default Talk;