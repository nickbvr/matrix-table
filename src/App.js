import { useSelector } from 'react-redux';
import { CreateForm, MatrixTable } from './components';
import { AppWrapper } from './App.styles';

const App = () => {
    const { matrix } = useSelector(({ matrix }) => matrix);

    return (
        <AppWrapper>{!matrix.length ? <CreateForm /> : <MatrixTable matrix={matrix} />}</AppWrapper>
    );
};

export default App;
