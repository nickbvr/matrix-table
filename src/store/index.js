import { configureStore } from '@reduxjs/toolkit';
import matrix from './matrixSlice';

export const store = configureStore({
    reducer: { matrix },
});
