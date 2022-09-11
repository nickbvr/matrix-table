import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        user-select: none;
        font-family: 'Roboto', sans-serif;
    }
    td {
        font-size: 14px;
    }
`;
