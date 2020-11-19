import React from 'react';
// import {useHistory, Redirect, Link} from 'react-router-dom';
import styled from 'styled-components';
import * as V from '../styles/variables';

const ImgZoom = styled('div')`
    position: absolute;
    width: 100%;
    height: 100vh;
    background-color: ${V.draculaDarkTransparent};
    display: flex;
    justify-content: center;
    top: 0px;
    left: 0px;
    padding-top: 50px;

    ${props => props && props.src ? 'display: flex' : 'display: none'};
`

const ImgZoomWrapper = styled('div')`
    width: 100%;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;

    img{
        width: 100%;
        height: auto;
    }
`

const ImgButton = styled('button')`
    height: 80px;
    width: 80px;
    display: block;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
    border-radius: 1000px;
    border: 0px solid transparent;
    color: ${V.draculaDark};
`

function ImgTalk({src, handleClose}){

    return (
        <ImgZoom src={src}>
            <ImgZoomWrapper>
                <ImgButton onClick={(e) => handleClose()}><i className="fa fa-close"></i></ImgButton>
                <img src={src} />
            </ImgZoomWrapper>
        </ImgZoom>
    )
}

export default ImgTalk;