import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getNewAverageValues, getNewRowSum } from '../utils';

export type MatrixCell = {
    id: string;
    amount: number;
};

interface MatrixState {
    matrix: MatrixCell[][];
    rowSum: number[];
    averageValues: number[];
    nearestValues: number[];
    activeRow: string;
}

const initialState: MatrixState = {
    matrix: [],
    rowSum: [],
    averageValues: [],
    nearestValues: [],
    activeRow: '',
};

export const matrixSlice = createSlice({
    name: 'matrix',
    initialState,
    reducers: {
        setMatrix: (state, action: PayloadAction<MatrixCell[][]>) => {
            state.matrix = action.payload;
        },
        setRowSum: (state, action: PayloadAction<number[]>) => {
            state.rowSum = action.payload;
        },
        setAverageValues: (state, action: PayloadAction<number[]>) => {
            state.averageValues = action.payload;
        },
        setNearestValues: (state, action: PayloadAction<number[]>) => {
            state.nearestValues = action.payload;
        },
        setActiveRow: (state, action: PayloadAction<string>) => {
            state.activeRow = action.payload;
        },
        updateState: (state, action: PayloadAction<MatrixCell[][]>) => {
            state.matrix = action.payload;
            state.rowSum = getNewRowSum(action.payload);
            state.averageValues = getNewAverageValues(action.payload);
        },
    },
});

export const {
    setMatrix,
    setRowSum,
    setAverageValues,
    setNearestValues,
    setActiveRow,
    updateState,
} = matrixSlice.actions;

export default matrixSlice.reducer;
