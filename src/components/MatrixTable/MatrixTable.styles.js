import styled from 'styled-components';
import { Table, TableBody, TableCell, TableRow } from '@mui/material';

export const StyledTable = styled(Table)`
    && {
        width: fit-content;
        display: flex;
        background-color: #ececec;
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        padding: 15px;
        overflow: auto;
    }
`;

export const StyledTableBody = styled(TableBody)`
    && {
        display: flex;
        flex-direction: column;
        gap: 10px;
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
        transition: 0.1s;
        cursor: pointer;

        background-color: ${({ nearest }) => (nearest ? '#1976d2' : 'white')};
        color: ${({ nearest }) => (nearest ? 'white' : 'black')};
        background-image: ${({ isactive, percent }) =>
            isactive ? `linear-gradient(0, #1976d2 ${percent}, white ${percent})` : 'none'};

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

export const AddCell = styled(TableCell)`
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

export const AverageValueCell = styled(TableCell)`
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

export const ClearMatrix = styled.div`
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    position: fixed;
    top: 0;
    left: 0;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    margin: 15px;
    transition: 0.1s;
    cursor: pointer;

    &:hover {
        background-color: #fbfbfb;
        svg {
            fill: #1976d2;
        }
    }
`;
