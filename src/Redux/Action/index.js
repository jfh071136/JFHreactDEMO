import { createAction } from '@reduxjs/toolkit';

export const increment = createAction('counter/increment');
export const decrement = createAction('counter/decrement');
export const AddCake = createAction('counter/AddCake');
export const ZeroCake = createAction('counter/ZeroCake');