import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import * as V from '../styles/variables';

function Textarea({placeholder, onChange, value, readonly, height}){

    const TextAreaComponent = styled('textarea')`
        background-color: ${readonly == 'readonly' ? V.draculaWhite : ''};
    `

    return(
        <div>
            <TextAreaComponent 
                className="form-control mb-3"
                readOnly={readonly}
                placeholder={placeholder}
                onChange={onChange}
                style={{height: height + 'px' }}
                defaultValue={value}
            />
        </div>
    )
}

export default Textarea;