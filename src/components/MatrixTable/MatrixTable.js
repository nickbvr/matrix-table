import { DeleteOutlineRounded } from '@mui/icons-material';
import { getPercentageValue } from '../../utils';
import { AverageValueRow } from '../AverageValueRow';
import {
    StyledTable,
    StyledTableBody,
    StyledRow,
    AmountCell,
    DeleteCell,
    SumCell,
} from './MatrixTable.styles';

const MatrixTable = ({
    matrix,
    onRemove,
    onIncrement,
    onHover,
    setNearestValues,
    activeRow,
    nearestValues,
    sum,
    setActiveRow,
    values,
    onAdd,
}) => {
    return (
        <StyledTable>
            <StyledTableBody>
                {matrix.map((row, rowIdx) => (
                    <StyledRow key={rowIdx}>
                        <DeleteCell onClick={() => onRemove(rowIdx)}>
                            <DeleteOutlineRounded />
                        </DeleteCell>
                        {row.map(({ id, amount }) => (
                            <AmountCell
                                key={id}
                                onClick={() => onIncrement(rowIdx, id)}
                                onMouseEnter={() => onHover(amount)}
                                onMouseLeave={() => setNearestValues([])}
                                sx={{
                                    backgroundColor: nearestValues.includes(amount)
                                        ? '#1976d2'
                                        : 'white',
                                    color: nearestValues.includes(amount) ? 'white' : 'black',
                                    backgroundImage:
                                        rowIdx === activeRow &&
                                        `linear-gradient(0, #1976d2 ${getPercentageValue(
                                            amount,
                                            sum[rowIdx],
                                        )}, white ${getPercentageValue(amount, sum[rowIdx])})`,
                                }}>
                                {rowIdx === activeRow
                                    ? getPercentageValue(amount, sum[rowIdx])
                                    : amount}
                            </AmountCell>
                        ))}
                        <SumCell
                            onMouseEnter={() => setActiveRow(rowIdx)}
                            onMouseLeave={() => setActiveRow('')}>
                            {sum[rowIdx]}
                        </SumCell>
                    </StyledRow>
                ))}
                <AverageValueRow values={values} onAdd={onAdd} />
            </StyledTableBody>
        </StyledTable>
    );
};

export default MatrixTable;
