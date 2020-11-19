import React from 'react';
import styled from 'styled-components';
import * as V from '../styles/variables';
import {reformatDate} from '../services/date.service'

const urlImg = process.env.REACT_APP_API + '/file/downloadFile/';

const TalkImage = styled('img')`
    margin-top: 15px;
    width: 100%;
    cursor: pointer;
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

function Talk({content, date, hour, userId, talkUserId, image, showImage}){

    const isClientTalk = userId == talkUserId ? false : true;

    return(

        <TalkComponent clientType={isClientTalk}>
            <TalkDetails>
                {reformatDate(date)}
            </TalkDetails>
            {content}
            {image && image != '' && <TalkImage src={urlImg + image} onClick={(e) => showImage(urlImg + image)} />}
        </TalkComponent>
    )
}

export default Talk;