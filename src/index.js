import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyles } from './App.styles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <GlobalStyles />
        <App />
    </StrictMode>,
);
