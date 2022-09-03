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
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            const newObj = {
                id: getUniqueId(),
                amount: Math.floor(Math.random() * (999 - 100 + 1) + 100),
            };
            newRow[j] = newObj;
        }
    }
    return newRow;
};

export const getNewSum = (arr) => {
    return arr.map((row) => row.reduce((acc, { amount }) => acc + amount, 0));
};

export const getNewAverageSum = (arr) => {
    return arr.reduce(
        (acc, row) =>
            row.map((obj, objIdx) =>
                Math.round((acc[objIdx] = (acc[objIdx] || 0) + obj.amount / arr.length)),
            ),
        [],
    );
};

export const getPercentageValue = ({ amount }, sum) => {
    return ((amount / sum) * 100).toFixed(1) + '%';
};
