import { v4 as getUniqueId } from 'uuid';

export const getNewMatrixArray = ({ rows, columns }) => {
    let newArr = [];
    for (let i = 0; i < rows; i++) {
        newArr[i] = [];
        for (let j = 0; j < columns; j++) {
            const newObj = {
                id: getUniqueId(),
                amount: Math.floor(Math.random() * (999 - 100 + 1) + 100),
            };
            newArr[i][j] = newObj;
        }
    }
    return newArr;
};

export const getNewMatrixRow = (arr) => {
    let newRow = [];
    arr.map((row) =>
        row.map(
            (_, objIdx) =>
                (newRow[objIdx] = {
                    id: getUniqueId(),
                    amount: Math.floor(Math.random() * (999 - 100 + 1) + 100),
                }),
        ),
    );
    return newRow;
};

export const getNewSum = (arr) => {
    return arr.map((row) => row.reduce((acc, { amount }) => acc + amount, 0));
};

export const getNewAverageSum = (arr) => {
    return arr.reduce(
        (acc, row) =>
            row.map(({ amount }, objIdx) =>
                Math.round((acc[objIdx] = (acc[objIdx] || 0) + amount / arr.length)),
            ),
        [],
    );
};

export const getPercentageValue = (amount, sum) => {
    return ((amount / sum) * 100).toFixed(1) + '%';
};

export const getNearestNumbers = (arr, value) => {
    const elems = [];
    arr.map((row) => row.map(({ amount }) => elems.push(amount)));
    const left = Math.max(...elems.filter((el) => el < value));
    const right = Math.min(...elems.filter((el) => el > value));
    return [left, right];
};
