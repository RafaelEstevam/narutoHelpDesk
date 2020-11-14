import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import * as V from '../styles/variables';

const urlImg = process.env.REACT_APP_API + '/file/downloadFile/';

const TalkImage = styled('img')`
    margin-top: 15px;
    width: 100%;
`

const TalkDetails = styled('p')`
    margin: 0px;
    font-size: 10px;
`

const TalkComponent = styled('div')`
    background-color: ${ props => props.clientType ? V.draculaLight : V.draculaBootstrapPrimary };
    padding: 15px;
    border-radius: 3px;
    margin-bottom: 15px;
    color: ${V.whiteColor};
    margin-right: ${ props => props.clientType ? '50px' : '0px' } ;
    margin-left: ${ props => !props.clientType ? '50px' : '0px' } ;
`

function Talk({content, date, hour, userId, talkUserId, image}){

    console.log(urlImg);

    const isClientTalk = userId == talkUserId ? false : true;

    return(

        <TalkComponent clientType={isClientTalk}>
            <TalkDetails>
                {date} - {hour}
            </TalkDetails>
            {content}
            {image && image != '' && <TalkImage src={urlImg + image} />}
        </TalkComponent>
    )
}

export default Talk;