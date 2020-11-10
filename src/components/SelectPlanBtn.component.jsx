import React from 'react';
import styled from 'styled-components';
import * as V from '../styles/variables';

const SelectPlanBtn = styled('div')`
    border: 0px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: 3px solid ${V.whiteColor};
    border-radius: 5px;
    cursor: pointer;
    padding: 10px;
    margin-bottom: 15px;
    color: ${V.whiteColor};
    img{
        filter: invert(1);
    }

    :hover, &&.active{
        border-color: ${V.draculaLightPurple};
        transition: linear all 0.2s;
        background: ${V.whiteColor};
        color: ${V.draculaLightPurple};
        img{
            filter: invert(0);
        }
    }

    h2{
        font-size: 20px;
        text-transform: uppercase;
    }

    p{
        font-size: 12px;
    }

    img{
        width: 60px;
        padding: 20px 0px;
    }
`

function SelectPlanButton({icon, title, number, onClick, active}){
    return(
        <SelectPlanBtn onClick={onClick} className={active}>
            <img src={icon} />
            <h2>{title}</h2>
            <h3>{number}</h3>
            <p>Chamados <br/> simultâneos</p>
        </SelectPlanBtn>
    )
}

export default SelectPlanButton;