import { createSlice } from '@reduxjs/toolkit';



export const WeatherSlice = createSlice({
    name: 'Weather',
    initialState: {
        Weather: []

    },
    reducers: {
        getWeather: (state, action) => {
            state.Weather = action.payload;
        },


    },
});



export default WeatherSlice.reducer
