import styled from 'styled-components';
import * as V from '../styles/variables.jsx';

const CenterWrapper = styled('div')`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const FullHeightWrapper = styled('div')`
    height: 100vh;
`

const ContentWrapper = styled('div')`
    overflow: hidden;
    height: 100vh;
    flex: 100%;
    
`

const MainContentWrapper = styled('div')`
    background-color: ${V.draculaInverse};
`

const ChildContentWrapper = styled('div')`
    overflow-y: auto;
    height: 100vh;
    padding: 15px 15px 75px;
`

const FlexWrapper = styled('div')`
    display: flex;
    align-items: start;
`

const MainWrapper = styled('div')`
    max-width: ${V.mainWrapperSize};
    margin: 0 auto;
`
const BetweenWrapper = styled('div')`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const ToolBarWrapper = styled(FullHeightWrapper)`
    background : ${V.draculaDark};
    width: 300px;

    @media(max-width: ${V.viewSm}){
        display: none;
    }
`

export {
    MainWrapper,
    CenterWrapper,
    BetweenWrapper,
    FullHeightWrapper,
    FlexWrapper,
    ContentWrapper,
    ChildContentWrapper,
    ToolBarWrapper,
    MainContentWrapper
};