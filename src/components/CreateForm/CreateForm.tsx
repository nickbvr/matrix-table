import { FC, useState, KeyboardEvent, ChangeEvent, memo } from 'react';
import { useAppDispatch } from '../../hooks';
import { Button, TextField } from '@mui/material';
import { updateState } from '../../store/matrixSlice';
import { getNewMatrixTable } from '../../utils';
import { VALUE_REGEX_CHANGE, KEY_CODES } from '../../constants';
import { FormWrapper } from './CreateForm.styles';

const CreateForm: FC = memo(() => {
    const [values, setValues] = useState({ rows: '', columns: '' });
    const { rows, columns } = values;
    const dispatch = useAppDispatch();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;
        if (!value.length || VALUE_REGEX_CHANGE.test(value)) {
            setValues({ ...values, [e.target.name]: value });
        }
    };

    const handleSubmit = () => {
        setValues({ rows: '', columns: '' });
        const initialMatrix = getNewMatrixTable(values);
        dispatch(updateState(initialMatrix));
    };

    const handleKeySubmit = (e: KeyboardEvent) =>
        rows && columns && e.key === KEY_CODES.enter && handleSubmit();

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
});

export default CreateForm;
