import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddRounded, DeleteOutlineRounded } from '@mui/icons-material';
import { setActiveRow, setNearestValues, updateState } from '../../store/matrixSlice';
import { getNearestNumbers, getNewMatrixRow, getPercentageValue } from '../../utils';
import {
    StyledTable,
    StyledTableBody,
    StyledRow,
    AmountCell,
    DeleteCell,
    SumCell,
    AddCell,
    AverageValueCell,
} from './MatrixTable.styles';

const MatrixTable = memo(({ matrix }) => {
    const { activeRow, rowSum, nearestValues, averageValues } = useSelector(({ matrix }) => matrix);
    const dispatch = useDispatch();

    const handleIncrement = (idx, cellId) => {
        const newMatrix = matrix.map((row) =>
            row.map((obj) =>
                obj.id === cellId
                    ? { ...obj, amount: obj.amount < 999 ? obj.amount + 1 : obj.amount }
                    : obj,
            ),
        );
        const value = newMatrix[idx].find(({ id }) => id === cellId).amount;
        dispatch(setNearestValues(getNearestNumbers(newMatrix, value)));
        dispatch(updateState(newMatrix));
    };

    const handleRemove = (idx) => {
        const newMatrix = matrix.filter((_, i) => i !== idx);
        dispatch(updateState(newMatrix));
    };

    const handleAdd = () => {
        const newMatrix = [...matrix, getNewMatrixRow(matrix)];
        dispatch(updateState(newMatrix));
    };

    const handleHover = (amount) => {
        dispatch(setNearestValues(getNearestNumbers(matrix, amount)));
    };

    return (
        <StyledTable>
            <StyledTableBody>
                {matrix.map((row, rowIdx) => (
                    <StyledRow key={rowIdx}>
                        <DeleteCell onClick={() => handleRemove(rowIdx)}>
                            <DeleteOutlineRounded />
                        </DeleteCell>
                        {row.map(({ id, amount }) => (
                            <AmountCell
                                key={id}
                                onClick={() => handleIncrement(rowIdx, id)}
                                onMouseEnter={() => handleHover(amount)}
                                onMouseLeave={() => dispatch(setNearestValues([]))}
                                sx={{
                                    backgroundColor: nearestValues.includes(amount)
                                        ? '#1976d2'
                                        : 'white',
                                    color: nearestValues.includes(amount) ? 'white' : 'black',
                                    backgroundImage:
                                        rowIdx === activeRow &&
                                        `linear-gradient(0, #1976d2 ${getPercentageValue(
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
                            onMouseEnter={() => dispatch(setActiveRow(rowIdx))}
                            onMouseLeave={() => dispatch(setActiveRow(''))}>
                            {rowSum[rowIdx]}
                        </SumCell>
                    </StyledRow>
                ))}
                <StyledRow>
                    <AddCell onClick={handleAdd}>
                        <AddRounded />
                    </AddCell>
                    {averageValues.map((el, elIdx) => (
                        <AverageValueCell key={elIdx}>{el}</AverageValueCell>
                    ))}
                </StyledRow>
            </StyledTableBody>
        </StyledTable>
    );
});

export default MatrixTable;
