import React from 'react';
import { useState } from 'react';
import { MatrixTable, CreateForm } from '../../components';
import {
    getNearestNumbers,
    getNewAverageSum,
    getNewMatrixArray,
    getNewMatrixRow,
    getNewSum,
} from '../../utils';
import { VALUE_REGEX_CHANGE } from '../../constants';

const MainPage = () => {
    const [inputValues, setInputValues] = useState({ rows: '', columns: '' });
    const [matrix, setMatrix] = useState([]);
    const [rowSum, setRowSum] = useState([]);
    const [averageValues, setAverageValues] = useState([]);
    const [nearestValues, setNearestValues] = useState([]);
    const [activeRow, setActiveRow] = useState('');

    const updateState = (newMatrix) => {
        setMatrix(newMatrix);
        setRowSum(getNewSum(newMatrix));
        setAverageValues(getNewAverageSum(newMatrix));
    };

    const handleChangeValues = (e) => {
        let value = e.target.value;
        if (value === '' || VALUE_REGEX_CHANGE.test(value)) {
            setInputValues({ ...inputValues, [e.target.name]: value });
        }
    };

    const handleCreateTable = () => {
        setInputValues({ rows: '', columns: '' });
        const initialMatrix = getNewMatrixArray(inputValues);
        updateState(initialMatrix);
    };

    const handleIncrementAmount = (rowIdx, cellId) => {
        const foundElem = matrix[rowIdx].find(({ id }) => id === cellId);
        foundElem.amount += 1;
        handleHoverAmount(foundElem.amount);
        updateState(matrix);
    };

    const handleRemoveRow = (rowIdx) => {
        const newMatrix = matrix.filter((_, i) => i !== rowIdx);
        updateState(newMatrix);
    };

    const handleAddRow = () => {
        const newMatrix = [...matrix, getNewMatrixRow(matrix)];
        updateState(newMatrix);
    };

    const handleHoverAmount = (amount) => {
        setNearestValues(getNearestNumbers(matrix, amount));
    };

    return (
        <>
            {!matrix.length ? (
                <CreateForm
                    values={inputValues}
                    onChange={handleChangeValues}
                    onSubmit={handleCreateTable}
                />
            ) : (
                <MatrixTable
                    matrix={matrix}
                    activeRow={activeRow}
                    nearestValues={nearestValues}
                    sum={rowSum}
                    values={averageValues}
                    onRemove={handleRemoveRow}
                    onIncrement={handleIncrementAmount}
                    onHover={handleHoverAmount}
                    setNearestValues={setNearestValues}
                    setActiveRow={setActiveRow}
                    onAdd={handleAddRow}
                />
            )}
        </>
    );
};

export default MainPage;
