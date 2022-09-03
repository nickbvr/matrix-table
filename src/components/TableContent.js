import { TableCell, TableRow } from '@mui/material';
import { getPercentageValue } from '../utils';

const TableContent = ({
    matrix,
    handleRemoveRow,
    handleIncrementAmount,
    getNearestNumbers,
    setNearestValues,
    activeRow,
    nearestValues,
    rowSum,
    setActiveRow,
}) => {
    return (
        <>
            {matrix.map((row, rowIdx) => (
                <TableRow key={rowIdx}>
                    <TableCell
                        onClick={() => handleRemoveRow(rowIdx)}
                        className='tableCellButton'
                        sx={{ backgroundColor: 'gray' }}
                        align='center'>
                        Delete
                    </TableCell>
                    {row.map((obj) => (
                        <TableCell
                            key={obj.id}
                            onClick={() => handleIncrementAmount(rowIdx, obj)}
                            onMouseEnter={() => getNearestNumbers(obj.amount)}
                            onMouseLeave={() => setNearestValues([])}
                            padding='none'
                            align='center'
                            className='tableCellValue'
                            sx={{
                                backgroundColor: nearestValues.includes(obj.amount) && 'tomato',
                                backgroundImage:
                                    rowIdx === activeRow &&
                                    `linear-gradient(0, red ${getPercentageValue(
                                        obj,
                                        rowSum[rowIdx],
                                    )}, white ${getPercentageValue(obj, rowSum[rowIdx])})`,
                            }}>
                            {rowIdx === activeRow
                                ? getPercentageValue(obj, rowSum[rowIdx])
                                : obj.amount}
                        </TableCell>
                    ))}
                    <TableCell
                        className='tableCellSum'
                        onMouseEnter={() => setActiveRow(rowIdx)}
                        onMouseLeave={() => setActiveRow('')}>
                        {rowSum[rowIdx]}
                    </TableCell>
                </TableRow>
            ))}
        </>
    );
};

export default TableContent;
