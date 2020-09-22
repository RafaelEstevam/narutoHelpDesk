import React from 'react';
import styled from 'styled-components';
import * as V from '../styles/variables';

function MenuItem({icon, label, link}){

    const ItemMenu = styled('li')`
        display: block;

        a{
            padding: 15px 15px;
            display: block;
            text-decoration: none;
            color: ${V.whiteColor};
            transition: all linear 0.2s;
            opacity: 0.5;
            border-left: 3px solid transparent;

            i{
                padding-right: 20px;
            }

            :hover{
                background: rgba(0,0,0,0.2);
                opacity: 1;
                border-left-color: ${V.borderHoverColor};
            }
        }

    `

    return(
        <ItemMenu><a href={link}> <i className={icon}></i> {label}</a></ItemMenu>
    )
}

export default MenuItem;