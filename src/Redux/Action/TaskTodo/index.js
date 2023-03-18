import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const AddTask = createAsyncThunk(    //定義異步操作createAsyncThunk，自動生成對應的 action types，
    'TaskTodo/AddTask',

    async (task, { rejectWithValue }) => {  //rejectWithValue是失敗的回傳值
        try {
            const response = await axios.post(`http://localhost:3002/TaskData`, task);
            return response.data;   //記得action返回的資料一定要是物件!!才能傳給reducer

        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }

);
export const DeleteTask = createAsyncThunk(
    'TaskTodo/DeleteTask',
    async (id, { rejectWithValue }) => { // id 作为参数传递

        try {
            const response = await axios.delete(`http://localhost:3002/TaskData/${id}`);
            return { id }; //Delete沒有返回參數，記得要返回id    
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const StoreTask = createAction('TaskTodo/StoreTask', (task) => {
    return {
        payload: {
            task,
        }
    }
});