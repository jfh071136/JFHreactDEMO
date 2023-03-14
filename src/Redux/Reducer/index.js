import { createSlice } from '@reduxjs/toolkit';



export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
        CakeNumber: 100,
    },
    reducers: {
        increment: (state, action) => {
            state.value += action.payload;
        },
        decrement: (state, action) => {
            state.value -= action.payload;
        },
        AddCake: (state, action) => {
            state.CakeNumber += action.payload;
        },
        ZeroCake: (state, action) => {
            state.CakeNumber = 100;
        },

    },
});



export default counterSlice.reducer
