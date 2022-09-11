import { FC } from 'react';
import { useAppSelector } from './hooks';
import { CreateForm, MatrixTable } from './components';
import { AppWrapper } from './App.styles';

const App: FC = () => {
    const { matrix } = useAppSelector(({ matrix }) => matrix);

    return (
        <AppWrapper>{!matrix.length ? <CreateForm /> : <MatrixTable matrix={matrix} />}</AppWrapper>
    );
};

export default App;
