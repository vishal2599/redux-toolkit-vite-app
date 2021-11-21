import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counter-slice';
import { dogsApiSlice } from "../features/dogs/dogs-api-slice";

export const store = configureStore({
    // redux has combineReducers which is done by configureStore automatically
    reducer: {
        counter: counterReducer,
        [dogsApiSlice.reducerPath]: dogsApiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(dogsApiSlice.middleware);
    }
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType< typeof store.getState >;