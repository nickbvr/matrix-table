import { TableRow } from '@mui/material';
import { AddRowCell, AverageValueCell } from './AverageValueRow.styles';

const AverageValueRow = ({ values, onAdd }) => {
    return (
        <TableRow>
            <AddRowCell onClick={onAdd}>Add row</AddRowCell>
            {values.map((el, elIdx) => (
                <AverageValueCell key={elIdx}>{el}</AverageValueCell>
            ))}
        </TableRow>
    );
};

export default AverageValueRow;
