import { CreateForm, MatrixTable } from './components';
import { useSelector } from 'react-redux';

const App = () => {
    const { matrix } = useSelector(({ matrix }) => matrix);

    return <>{!matrix.length ? <CreateForm /> : <MatrixTable matrix={matrix} />}</>;
};

export default App;
