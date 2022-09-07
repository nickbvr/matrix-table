import { createSlice } from '@reduxjs/toolkit';
import { getNewAverageValues, getNewRowSum } from '../utils';

const initialState = {
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
        setMatrix: (state, action) => {
            state.matrix = action.payload;
        },
        setRowSum: (state, action) => {
            state.rowSum = action.payload;
        },
        setAverageValues: (state, action) => {
            state.averageValues = action.payload;
        },
        setNearestValues: (state, action) => {
            state.nearestValues = action.payload;
        },
        setActiveRow: (state, action) => {
            state.activeRow = action.payload;
        },
        updateState: (state, action) => {
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
