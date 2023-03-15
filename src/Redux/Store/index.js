import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../Reducer/index';
import CakeReducer from '../Reducer/Cake/index';
import WeatherReducer from '../Reducer/Weather/index';

export default configureStore({
    reducer: {
        counter: counterReducer,
        Cake: CakeReducer,
        Weather: WeatherReducer,
    },
});
