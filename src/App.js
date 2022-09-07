import { CreateForm, MatrixTable } from './components';
import { useSelector } from 'react-redux';
import { AppWrapper } from './Global.styles';

const App = () => {
    const { matrix } = useSelector(({ matrix }) => matrix);

    return (
        <AppWrapper>{!matrix.length ? <CreateForm /> : <MatrixTable matrix={matrix} />}</AppWrapper>
    );
};

export default App;
