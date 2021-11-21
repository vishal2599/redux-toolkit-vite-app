// DUCKS pattern
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface counterState{
    value: number
}

const initialState : counterState = {
    value: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        // state can be updated directly due to the use of immer
        incremented(state) {
            state.value++;
        },
        amountAdded(state, action:PayloadAction<number>){
            state.value += action.payload;
        }
        // decrement
        // reset
    }
});

export const { incremented, amountAdded } = counterSlice.actions;
export default counterSlice.reducer;