import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { store } from './store';
import theme, { GlobalStyles } from './styles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <App />
        </ThemeProvider>
    </Provider>,
);
