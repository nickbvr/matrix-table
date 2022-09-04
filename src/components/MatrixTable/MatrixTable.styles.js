import styled from 'styled-components';
import { Table, TableCell, TableRow } from '@mui/material';

export const StyledTable = styled(Table)`
    && {
        width: fit-content;
        display: flex;
        background-color: #ececec;
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
        border-radius: 10px;
    }
`;

export const StyledTableBody = styled(Table)`
    && {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 15px;
    }
`;

export const StyledRow = styled(TableRow)`
    && {
        display: flex;
        align-items: center;
        gap: 10px;
    }
`;

export const DeleteCell = styled(TableCell)`
    && {
        width: 50px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
        border-radius: 8px;
        border-bottom: 0;
        transition: 0.1s;
        cursor: pointer;

        &:hover {
            svg {
                fill: #1976d2;
            }
        }
    }
`;

export const AmountCell = styled(TableCell)`
    && {
        width: 50px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
        border-radius: 8px;
        border-bottom: 0;
        transition: 0.3s;
        cursor: pointer;

        &:hover {
            border: 2px solid #1976d2;
        }
    }
`;

export const SumCell = styled(TableCell)`
    && {
        width: 50px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #ececec;
        box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
        border-radius: 8px;
        border-bottom: 0;
    }
`;
