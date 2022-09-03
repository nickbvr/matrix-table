import { Button, TextField } from '@mui/material';

const CreateTable = ({ inputValues, handleChangeValues, handleCreateTable }) => {
    return (
        <div className='createTableWrapper'>
            <TextField
                value={inputValues.rows}
                onChange={handleChangeValues}
                onKeyPress={(e) =>
                    inputValues.rows &&
                    inputValues.columns &&
                    e.key === 'Enter' &&
                    handleCreateTable()
                }
                name='rows'
                label='rows'
                size='small'
            />
            <TextField
                value={inputValues.columns}
                onChange={handleChangeValues}
                onKeyPress={(e) =>
                    inputValues.rows &&
                    inputValues.columns &&
                    e.key === 'Enter' &&
                    handleCreateTable()
                }
                name='columns'
                label='columns'
                size='small'
            />
            <Button
                disabled={!(inputValues.rows && inputValues.columns)}
                onClick={handleCreateTable}
                variant='contained'
                color='primary'
                size='medium'>
                Create
            </Button>
        </div>
    );
};

export default CreateTable;
