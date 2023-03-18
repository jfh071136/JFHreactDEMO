import { createSlice } from '@reduxjs/toolkit';
import { AddTask, DeleteTask, StoreTask } from '../../Action/TaskTodo';

const initialState = {
    tasks: [],
    error: null,
};

const TaskTodoSlice = createSlice({
    name: 'TaskTodo',
    initialState,
    reducers: {
        StoreTask: (state, action) => {    //不用異步處理，可以寫在這
            state.tasks = action.payload.task
        },
    },
    extraReducers: (builder) => { //reducer裡異步action的處理
        builder
            .addCase(AddTask.fulfilled, (state, action) => {  //fulfilled，如果要使用的話，Action需要先定義異步操作createAsyncThunk 

                state.tasks.push(action.payload);   //如果要畫面也跟著渲染的話，也要同時改變react裡面的陣列
            })
            .addCase(AddTask.rejected, (state, action) => { //rejected，Action中異步操作請求失敗時執行
                state.error = action.payload;
            })
            .addCase(DeleteTask.fulfilled, (state, action) => {
                state.tasks = state.tasks.filter((item) => {
                    return item.id != action.payload.id
                })
            })
            .addCase(DeleteTask.rejected, (state, action) => {
                state.error = action.payload;
            })
            .addCase(StoreTask, (state, action) => {
                state.tasks.push(action.payload.task);
            });
    },
});



export default TaskTodoSlice.reducer
