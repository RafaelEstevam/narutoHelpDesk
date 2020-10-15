import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import * as V from '../styles/variables';

function Input({placeholder, type, onChange, value, readonly}){
    
    const InputComponent = styled('input')`
        background-color: ${readonly == 'readonly' ? V.draculaWhite : ''};
    `
    return(
        <input Component className="form-control mb-3" readOnly={readonly} placeholder={placeholder} value={value} onChange={onChange} type={type} />
    )
}

export default Input;