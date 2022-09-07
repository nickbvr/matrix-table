import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, TextField } from '@mui/material';
import { updateState } from '../../store/matrixSlice';
import { getNewMatrixTable } from '../../utils';
import { VALUE_REGEX_CHANGE } from '../../constants';
import { FormWrapper } from './CreateForm.styles';

const CreateForm = () => {
    const [values, setValues] = useState({ rows: '', columns: '' });
    const { rows, columns } = values;
    const dispatch = useDispatch();

    const handleChange = (e) => {
        let value = e.target.value;
        if (value === '' || VALUE_REGEX_CHANGE.test(value)) {
            setValues({ ...values, [e.target.name]: value });
        }
    };

    const handleSubmit = () => {
        setValues({ rows: '', columns: '' });
        const initialMatrix = getNewMatrixTable(values);
        dispatch(updateState(initialMatrix));
    };

    const handleKeySubmit = (e) => rows && columns && e.key === 'Enter' && handleSubmit();

    return (
        <FormWrapper>
            <TextField
                name='rows'
                label='rows'
                autoFocus
                value={rows}
                onChange={handleChange}
                onKeyDown={handleKeySubmit}
            />
            <TextField
                name='columns'
                label='columns'
                value={columns}
                onChange={handleChange}
                onKeyDown={handleKeySubmit}
            />
            <Button variant='contained' disabled={!(rows && columns)} onClick={handleSubmit}>
                Create
            </Button>
        </FormWrapper>
    );
};

export default CreateForm;
