import { Button, TextField } from '@mui/material';
import { FormWrapper } from './CreateForm.styles';

const CreateForm = ({ values, onChange, onSubmit }) => {
    const { rows, columns } = values;

    return (
        <FormWrapper>
            <TextField
                value={rows}
                onChange={onChange}
                onKeyDown={(e) => rows && columns && e.key === 'Enter' && onSubmit()}
                name='rows'
                label='rows'
                autoFocus
            />
            <TextField
                value={columns}
                onChange={onChange}
                onKeyDown={(e) => rows && columns && e.key === 'Enter' && onSubmit()}
                name='columns'
                label='columns'
            />
            <Button onClick={onSubmit} disabled={!(rows && columns)} variant='contained'>
                Create
            </Button>
        </FormWrapper>
    );
};

export default CreateForm;
