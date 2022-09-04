import styled from 'styled-components';
import { TableCell, TableRow } from '@mui/material';

export const StyledRow = styled(TableRow)`
    && {
        display: flex;
        align-items: center;
        gap: 10px;
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
