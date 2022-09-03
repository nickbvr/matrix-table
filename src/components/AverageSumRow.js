import { TableCell, TableRow } from '@mui/material';

const AverageSumRow = ({ handleAddRow, columnAverage }) => {
    return (
        <TableRow>
            <TableCell
                onClick={handleAddRow}
                align='center'
                className='tableCellButton'
                style={{ backgroundColor: 'darkgray' }}>
                Add row
            </TableCell>
            {columnAverage.map((el, elIdx) => (
                <TableCell className='tableCellSum' key={elIdx}>
                    {el}
                </TableCell>
            ))}
        </TableRow>
    );
};

export default AverageSumRow;
