import { createSlice } from '@reduxjs/toolkit';



export const TaskTodoSlice = createSlice({
    name: 'TaskTodo',
    initialState: {
        value: [],

    },
    reducers: {
        AddTask: (state, action) => {
            const { value } = state
            const { task } = action.payload

            value.push(task);
        },
        DeleteTask: (state, action) => {


            state.value = state.value.filter((item) => {
                return item.id != action.payload.id
            })

        },

    },
});



export default TaskTodoSlice.reducer
