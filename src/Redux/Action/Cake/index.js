import { createAction } from '@reduxjs/toolkit';

export const AddCake = createAction('Cake/AddCake', (id, quantity) => {
    return {
        payload: {
            id,
            quantity,
        }
    }
});
export const addcakeList = createAction('Cake/addcakeList', (id, quantity) => {
    return {
        payload: {
            id,
            quantity,
        }
    }
});
export const deletecakeList = createAction('Cake/deletecakeList', (id, quantity) => {
    return {
        payload: {
            id,
        }
    }
});
