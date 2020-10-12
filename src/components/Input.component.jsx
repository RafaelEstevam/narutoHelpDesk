import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import * as V from '../styles/variables';

function Input({placeholder, type, onChange, value}){
    return(
        <input className="form-control mb-3" placeholder={placeholder} value={value} onChange={e => onChange(e.target.value)} type={type} />
    )
}

export default Input;