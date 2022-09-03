import { useState, useEffect } from 'react';
import { Table, TableBody } from '@mui/material';
import AverageSumRow from './components/AverageSumRow';
import TableContent from './components/TableContent';
import { getNewAverageSum, getNewMatrixArray, getNewMatrixRow, getNewSum } from './utils';
import { VALUE_REGEX_CHANGE } from './constants';
import CreateTable from './components/CreateTable';

const App = () => {
    const [inputValues, setInputValues] = useState({ rows: '', columns: '' });
    const [matrix, setMatrix] = useState([]);
    const [rowSum, setRowSum] = useState([]);
    const [columnAverage, setColumnAverage] = useState([]);
    const [nearestValues, setNearestValues] = useState([]);
    const [activeRow, setActiveRow] = useState('');

    useEffect(() => {
        setRowSum(getNewSum(matrix));
        setColumnAverage(getNewAverageSum(matrix));
    }, [matrix]);

    const handleChangeValues = (e) => {
        let value = e.target.value;
        if (value === '' || VALUE_REGEX_CHANGE.test(value)) {
            setInputValues({ ...inputValues, [e.target.name]: value });
        }
    };

    const handleCreateTable = () => {
        setInputValues({ rows: '', columns: '' });
        setMatrix(getNewMatrixArray(inputValues));
    };

    const handleIncrementAmount = (idx, { id, amount }) => {
        matrix[idx].find((obj) => obj.id === id).amount = amount += 1;
        setMatrix([...matrix]);
    };

    const handleRemoveRow = (idx) => {
        setMatrix(matrix.filter((_, i) => i !== idx));
    };

    const handleAddRow = () => {
        setMatrix([...matrix, getNewMatrixRow(matrix)]);
    };

    const getNearestNumbers = (num) => {
        const elems = [];
        matrix.map((row) => row.map((obj) => elems.push(obj.amount)));
        const left = Math.max(...elems.filter((el) => el < num));
        const right = Math.min(...elems.filter((el) => el > num));
        setNearestValues([left, right]);
    };

    return (
        <div>
            {!matrix.length ? (
                <CreateTable
                    inputValues={inputValues}
                    handleChangeValues={handleChangeValues}
                    handleCreateTable={handleCreateTable}
                />
            ) : (
                <Table sx={{ width: 'fit-content' }}>
                    <TableBody>
                        <TableContent
                            matrix={matrix}
                            activeRow={activeRow}
                            nearestValues={nearestValues}
                            rowSum={rowSum}
                            handleRemoveRow={handleRemoveRow}
                            handleIncrementAmount={handleIncrementAmount}
                            getNearestNumbers={getNearestNumbers}
                            setNearestValues={setNearestValues}
                            setActiveRow={setActiveRow}
                        />
                        <AverageSumRow columnAverage={columnAverage} handleAddRow={handleAddRow} />
                    </TableBody>
                </Table>
            )}
        </div>
    );
};

export default App;
