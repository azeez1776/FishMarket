import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
        truthy: false
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        showModal: (state) => {
            state.truthy = !state.truthy
        }

    }
}
)

export const { increment, showModal } = counterSlice.actions;
export default counterSlice.reducer;