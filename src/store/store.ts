import { configureStore } from '@reduxjs/toolkit';
import matrix from './matrixSlice';

const store = configureStore({
    reducer: { matrix },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
