import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../Reducer/index';
import CakeReducer from '../Reducer/Cake/index';
export default configureStore({
    reducer: {
        counter: counterReducer,
        Cake: CakeReducer,
    },
});
