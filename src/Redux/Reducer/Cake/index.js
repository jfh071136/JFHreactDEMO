import { createSlice } from '@reduxjs/toolkit';



export const CakeSlice = createSlice({
    name: 'Cake',
    initialState: {
        id: 1,
        value: 50,
        cakeList: []
    },
    reducers: {
        AddCake: (state, action) => {
            state.value = state.value + Math.floor(Math.random() * 20);
        },
        addcakeList: (state, action) => {
            let { id, quantity } = action.payload;
            id = state.id++
            state.cakeList.push({ id, quantity })
        },
        deletecakeList: (state, action) => {
            state.cakeList = state.cakeList.filter((item) => item.id !== action.payload.id * 1);
        },

    },
});

export default CakeSlice.reducer;


