import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import * as V from '../styles/variables';

const InputComponent = styled('input')`
    background-color: ${props => props.readOnly == 'readonly' ? V.draculaWhite : ''};
`

function Input({placeholder, type, onChange, value, readonly}){
    
    
    return(
        <InputComponent className="form-control mb-3" readOnly={readonly} placeholder={placeholder} value={value} onChange={onChange} type={type} />
    )
}

export default Input;