import { createAction } from '@reduxjs/toolkit';

export const AddTask = createAction('TaskTodo/AddTask', (task) => {
    return {
        payload: {
            task,
        }
    }
});
export const DeleteTask = createAction('TaskTodo/DeleteTask', (id) => {
    return {
        payload: {
            id,
        }
    }
});
