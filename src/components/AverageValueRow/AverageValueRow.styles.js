import styled from 'styled-components';
import { TableCell } from '@mui/material';

export const AddRowCell = styled(TableCell)`
    && {
        background-color: darkgray;
        text-align: center;
        cursor: pointer;
    }
`;

export const AverageValueCell = styled(TableCell)`
    && {
        background-color: lightgrey;
        text-align: center;
        border: 1px solid rgba(224, 224, 224, 1);
    }
`;
