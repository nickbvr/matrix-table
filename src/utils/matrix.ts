import { v4 as getUniqueId } from 'uuid';
import { MatrixCell } from './../store/matrixSlice';

const getNewCell = () => {
    return {
        id: getUniqueId(),
        amount: Math.floor(Math.random() * (999 - 100 + 1) + 100),
    };
};

export const getNewMatrixTable = ({ rows, columns }: { rows: string; columns: string }) => {
    let newArr: MatrixCell[][] = [];
    for (let i = 0; i < +rows; i++) {
        newArr[i] = [];
        for (let j = 0; j < +columns; j++) {
            newArr[i][j] = getNewCell();
        }
    }
    return newArr;
};

export const getNewMatrixRow = (matrix: MatrixCell[][]) => {
    let newRow: MatrixCell[] = [];
    matrix.map((row) => row.map((_, objIdx) => (newRow[objIdx] = getNewCell())));
    return newRow;
};

export const getNewRowSum = (matrix: MatrixCell[][]) => {
    return matrix.map((row) => row.reduce((acc, { amount }) => acc + amount, 0));
};

export const getNewAverageValues = (matrix: MatrixCell[][]) => {
    return matrix.reduce(
        (acc: { [x: number]: number }, row: { amount: number }[]) =>
            row.map(({ amount }, objIdx) =>
                Math.round((acc[objIdx] = (acc[objIdx] || 0) + amount / matrix.length)),
            ),
        [],
    );
};

export const getPercentageValue = (amount: number, sum: number) => {
    return ((amount / sum) * 100).toFixed(1) + '%';
};

export const getNearestNumbers = (matrix: MatrixCell[][], amount: number) => {
    const elems: number[] = [];
    matrix.map((row) => row.map(({ amount }) => elems.push(amount)));
    const left = Math.max(...elems.filter((el) => el < amount));
    const right = Math.min(...elems.filter((el) => el > amount));
    return [left, right];
};

export const getIncrementedMatrix = (matrix: MatrixCell[][], cellId: string) => {
    return matrix.map((row) =>
        row.map((obj) =>
            obj.id === cellId
                ? { ...obj, amount: obj.amount < 999 ? obj.amount + 1 : obj.amount }
                : obj,
        ),
    );
};
