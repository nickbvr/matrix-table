import { AddRounded } from '@mui/icons-material';
import { AddCell, AverageValueCell, StyledRow } from './AverageValueRow.styles';

const AverageValueRow = ({ values, onAdd }) => {
    return (
        <StyledRow>
            <AddCell onClick={onAdd}>
                <AddRounded />
            </AddCell>
            {values.map((el, elIdx) => (
                <AverageValueCell key={elIdx}>{el}</AverageValueCell>
            ))}
        </StyledRow>
    );
};

export default AverageValueRow;
