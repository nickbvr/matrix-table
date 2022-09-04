import styled, { createGlobalStyle } from 'styled-components';
import { Table } from '@mui/material';

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        user-select: none;
    }
`;

export const TableWrapper = styled(Table)`
    && {
        width: fit-content;
    }
`;
