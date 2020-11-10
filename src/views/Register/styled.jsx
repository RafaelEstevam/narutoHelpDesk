import styled from 'styled-components';
import {Row, Col} from 'react-bootstrap';
import {Tab} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import * as V from '../../styles/variables';

export const DivFullHeight = styled('div')`
    height: 100vh;
`

export const RowFullHeight = styled(Row)`
    height: 100vh;
`

export const ColFullHeight = styled(Col)`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const STab = styled(Tab)`
    border: 0px solid transparent;
    list-style: none;
    padding: 20px;
    font-size: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &.react-tabs__tab--selected{
        color: ${V.whiteColor};
        background: transparent;
        border: 1px solid ${V.whiteColor};
        border-radius: 3px;
    }

    small{
        margin-top: 15px;
        text-align: center;
        font-size: 12px;
    }

`
