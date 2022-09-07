import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddRounded, DeleteOutlineRounded, ClearRounded } from '@mui/icons-material';
import { setActiveRow, setNearestValues, updateState, setMatrix } from '../../store/matrixSlice';
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
    ClearMatrix,
} from './MatrixTable.styles';
import { Tooltip } from '@mui/material';

const MatrixTable = memo(({ matrix }) => {
    const { activeRow, rowSum, nearestValues, averageValues } = useSelector(({ matrix }) => matrix);
    const dispatch = useDispatch();

    const handleIncrement = useCallback(
        (idx, cellId) => () => {
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
        },
        [matrix, dispatch],
    );

    const handleHover = useCallback(
        (amount) => () => {
            dispatch(setNearestValues(getNearestNumbers(matrix, amount)));
        },
        [matrix, dispatch],
    );

    const handleRemove = useCallback(
        (idx) => () => {
            const newMatrix = matrix.filter((_, i) => i !== idx);
            dispatch(updateState(newMatrix));
        },
        [matrix, dispatch],
    );

    const handleAdd = () => {
        const newMatrix = [...matrix, getNewMatrixRow(matrix)];
        dispatch(updateState(newMatrix));
    };

    return (
        <>
            <StyledTable>
                <StyledTableBody>
                    {matrix.map((row, rowIdx) => (
                        <StyledRow key={row[0].id}>
                            <DeleteCell onClick={handleRemove(rowIdx)}>
                                <DeleteOutlineRounded />
                            </DeleteCell>
                            {row.map(({ id, amount }) => (
                                <AmountCell
                                    key={id}
                                    onClick={handleIncrement(rowIdx, id)}
                                    onMouseEnter={handleHover(amount)}
                                    onMouseLeave={() => dispatch(setNearestValues([]))}
                                    nearest={+nearestValues.includes(amount)}
                                    isactive={+(rowIdx === activeRow)}
                                    percent={getPercentageValue(amount, rowSum[rowIdx])}>
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
            <Tooltip title='Clear matrix' placement='right'>
                <ClearMatrix onClick={() => dispatch(setMatrix([]))}>
                    <ClearRounded />
                </ClearMatrix>
            </Tooltip>
        </>
    );
});

export default MatrixTable;
