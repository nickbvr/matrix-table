import styled from 'styled-components';
import { TableCell } from '@mui/material';

export const DeleteCell = styled(TableCell)`
    && {
        background-color: gray;
        text-align: center;
        cursor: pointer;
    }
`;

export const AmountCell = styled(TableCell)`
    && {
        border: 1px solid rgba(224, 224, 224, 1);
        cursor: pointer;
        padding: 0;
        text-align: center;

        &:hover {
            background-color: lightgray;
        }
    }
`;

export const SumCell = styled(TableCell)`
    && {
        border: 1px solid rgba(224, 224, 224, 1);
        background-color: lightgrey;
        text-align: center;
    }
`;
