import { v4 as getUniqueId } from 'uuid';

const getNewCell = () => {
    return {
        id: getUniqueId(),
        amount: Math.floor(Math.random() * (999 - 100 + 1) + 100),
    };
};

export const getNewMatrixTable = ({ rows, columns }) => {
    let newArr = [];
    for (let i = 0; i < rows; i++) {
        newArr[i] = [];
        for (let j = 0; j < columns; j++) {
            newArr[i][j] = getNewCell();
        }
    }
    return newArr;
};

export const getNewMatrixRow = (matrix) => {
    let newRow = [];
    matrix.map((row) => row.map((_, objIdx) => (newRow[objIdx] = getNewCell())));
    return newRow;
};

export const getNewRowSum = (matrix) => {
    return matrix.map((row) => row.reduce((acc, { amount }) => acc + amount, 0));
};

export const getNewAverageValues = (matrix) => {
    return matrix.reduce(
        (acc, row) =>
            row.map(({ amount }, objIdx) =>
                Math.round((acc[objIdx] = (acc[objIdx] || 0) + amount / matrix.length)),
            ),
        [],
    );
};

export const getPercentageValue = (amount, sum) => {
    return ((amount / sum) * 100).toFixed(1) + '%';
};

export const getNearestNumbers = (matrix, amount) => {
    const elems = [];
    matrix.map((row) => row.map(({ amount }) => elems.push(amount)));
    const left = Math.max(...elems.filter((el) => el < amount));
    const right = Math.min(...elems.filter((el) => el > amount));
    return [left, right];
};
