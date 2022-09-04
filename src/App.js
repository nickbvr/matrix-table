import { useState } from 'react';
import { TableBody } from '@mui/material';
import AverageValueRow from './components/AverageValueRow';
import MatrixTable from './components/MatrixTable';
import CreateForm from './components/CreateForm';
import {
    getNearestNumbers,
    getNewAverageSum,
    getNewMatrixArray,
    getNewMatrixRow,
    getNewSum,
} from './utils';
import { VALUE_REGEX_CHANGE } from './constants';
import { TableWrapper } from './App.styles';

const App = () => {
    const [inputValues, setInputValues] = useState({ rows: '', columns: '' });
    const [matrix, setMatrix] = useState([]);
    const [rowSum, setRowSum] = useState([]);
    const [columnAverage, setColumnAverage] = useState([]);
    const [nearestValues, setNearestValues] = useState([]);
    const [activeRow, setActiveRow] = useState('');

    const handleChangeValues = (e) => {
        let value = e.target.value;
        if (value === '' || VALUE_REGEX_CHANGE.test(value)) {
            setInputValues({ ...inputValues, [e.target.name]: value });
        }
    };

    const handleCreateTable = () => {
        setInputValues({ rows: '', columns: '' });
        const initialMatrix = getNewMatrixArray(inputValues);
        setRowSum(getNewSum(initialMatrix));
        setColumnAverage(getNewAverageSum(initialMatrix));
        setMatrix(initialMatrix);
    };

    const handleIncrementAmount = (idx, elemId) => {
        const foundElem = matrix[idx].find(({ id }) => id === elemId);
        foundElem.amount += 1;
        handleHoverAmount(foundElem.amount);
        setRowSum(getNewSum(matrix));
        setColumnAverage(getNewAverageSum(matrix));
        setMatrix([...matrix]);
    };

    const handleRemoveRow = (idx) => {
        const newMatrix = matrix.filter((_, i) => i !== idx);
        setMatrix(newMatrix);
        setRowSum(getNewSum(newMatrix));
        setColumnAverage(getNewAverageSum(newMatrix));
    };

    const handleAddRow = () => {
        const newMatrix = [...matrix, getNewMatrixRow(matrix)];
        setMatrix(newMatrix);
        setRowSum(getNewSum(newMatrix));
        setColumnAverage(getNewAverageSum(newMatrix));
    };

    const handleHoverAmount = (num) => {
        setNearestValues(getNearestNumbers(matrix, num));
    };

    return (
        <div>
            {!matrix.length ? (
                <CreateForm
                    values={inputValues}
                    onChange={handleChangeValues}
                    onSubmit={handleCreateTable}
                />
            ) : (
                <TableWrapper>
                    <TableBody>
                        <MatrixTable
                            matrix={matrix}
                            activeRow={activeRow}
                            nearestValues={nearestValues}
                            rowSum={rowSum}
                            onRemove={handleRemoveRow}
                            onIncrement={handleIncrementAmount}
                            onHover={handleHoverAmount}
                            setNearestValues={setNearestValues}
                            setActiveRow={setActiveRow}
                        />
                        <AverageValueRow values={columnAverage} onAdd={handleAddRow} />
                    </TableBody>
                </TableWrapper>
            )}
        </div>
    );
};

export default App;
