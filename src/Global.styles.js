import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        user-select: none;
    }
`;

export const AppWrapper = styled.div`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;
