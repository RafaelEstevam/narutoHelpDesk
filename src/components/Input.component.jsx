import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import * as V from '../styles/variables';

const InputComponent = styled('input')`
    &[readonly]{
        background-color: ${V.draculaWhite};
    }
`

function Input({placeholder, type, onChange, value, readonly, required}){
    return(
        <InputComponent className="form-control mb-3" required={required} readOnly={readonly} placeholder={placeholder} value={value} onChange={onChange} type={type} />
    )
}

export default Input;