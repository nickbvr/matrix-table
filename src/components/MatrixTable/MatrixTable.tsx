import { FC, useCallback, memo } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Tooltip } from '@mui/material';
import { AddRounded, DeleteOutlineRounded, ClearRounded } from '@mui/icons-material';
import {
    setActiveRow,
    setNearestValues,
    updateState,
    setMatrix,
    MatrixCell,
} from '../../store/matrixSlice';
import {
    getIncrementedMatrix,
    getNearestNumbers,
    getNewMatrixRow,
    getPercentageValue,
} from '../../utils';
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

interface MatrixTableProps {
    matrix: MatrixCell[][];
}

const MatrixTable: FC<MatrixTableProps> = memo(({ matrix }) => {
    const { activeRow, rowSum, nearestValues, averageValues } = useAppSelector(
        ({ matrix }) => matrix,
    );
    const dispatch = useAppDispatch();

    const handleIncrement = useCallback(
        (idx: number, cellId: string) => () => {
            const newMatrix: MatrixCell[][] = getIncrementedMatrix(matrix, cellId);
            const foundCell = newMatrix[idx].find(({ id }) => id === cellId);
            foundCell && dispatch(setNearestValues(getNearestNumbers(newMatrix, foundCell.amount)));
            dispatch(updateState(newMatrix));
        },
        [matrix, dispatch],
    );

    const handleHover = useCallback(
        (amount: number) => () => {
            dispatch(setNearestValues(getNearestNumbers(matrix, amount)));
        },
        [matrix, dispatch],
    );

    const handleRemove = useCallback(
        (idx: number) => () => {
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
                                    nearest={Boolean(nearestValues.includes(amount))}
                                    isactive={Boolean(String(rowIdx) === activeRow)}
                                    percent={getPercentageValue(amount, rowSum[rowIdx])}>
                                    {String(rowIdx) === activeRow
                                        ? getPercentageValue(amount, rowSum[rowIdx])
                                        : amount}
                                </AmountCell>
                            ))}
                            <SumCell
                                onMouseEnter={() => dispatch(setActiveRow(String(rowIdx)))}
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
