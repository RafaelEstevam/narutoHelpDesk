import styled from 'styled-components';

const CenterWrapper = styled('div')`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const MainWrapper = styled('div')`
    max-width: 1200px;
    margin: 0 auto;
`

const BetweenWrapper = styled('div')`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export {MainWrapper, CenterWrapper, BetweenWrapper};