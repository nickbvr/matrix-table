import { TableRow } from '@mui/material';
import { getPercentageValue } from '../../utils';
import { AmountCell, DeleteCell, SumCell } from './MatrixTable.styles';

const MatrixTable = ({
    matrix,
    onRemove,
    onIncrement,
    onHover,
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
                    <DeleteCell onClick={() => onRemove(rowIdx)}>Delete</DeleteCell>
                    {row.map(({ id, amount }) => (
                        <AmountCell
                            key={id}
                            onClick={() => onIncrement(rowIdx, id)}
                            onMouseEnter={() => onHover(amount)}
                            onMouseLeave={() => setNearestValues([])}
                            sx={{
                                backgroundColor: nearestValues.includes(amount) && 'red',
                                backgroundImage:
                                    rowIdx === activeRow &&
                                    `linear-gradient(0, red ${getPercentageValue(
                                        amount,
                                        rowSum[rowIdx],
                                    )}, white ${getPercentageValue(amount, rowSum[rowIdx])})`,
                            }}>
                            {rowIdx === activeRow
                                ? getPercentageValue(amount, rowSum[rowIdx])
                                : amount}
                        </AmountCell>
                    ))}
                    <SumCell
                        onMouseEnter={() => setActiveRow(rowIdx)}
                        onMouseLeave={() => setActiveRow('')}>
                        {rowSum[rowIdx]}
                    </SumCell>
                </TableRow>
            ))}
        </>
    );
};

export default MatrixTable;
