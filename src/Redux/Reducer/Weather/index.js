import { createSlice } from '@reduxjs/toolkit';



export const WeatherSlice = createSlice({
    name: 'Weather',
    initialState: {
        Weather: [],
        City: {}

    },
    reducers: {
        getWeather: (state, action) => {
            state.Weather = action.payload;
        },
        getCity: (state, action) => {
            if (state.Weather.find((item) => item.name.toLowerCase() == action.payload.toLowerCase()) != undefined) {
                state.City = state.Weather.find((item) => item.name.toLowerCase() == action.payload.toLowerCase())
            }

        },


    },
});



export default WeatherSlice.reducer
