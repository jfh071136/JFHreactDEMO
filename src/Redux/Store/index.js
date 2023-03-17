import { configureStore } from '@reduxjs/toolkit';
import counter from '../Reducer';
import Cake from '../Reducer/Cake';
import Weather from '../Reducer/Weather';
import TaskTodo from '../Reducer/TaskTodo/';

export default configureStore({
    reducer: {
        counter: counter,
        Cake: Cake,
        Weather: Weather,
        TaskTodo: TaskTodo,
    },
});
