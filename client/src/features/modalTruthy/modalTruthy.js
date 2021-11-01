import { createSlice } from '@reduxjs/toolkit'
import counterSlice from '../counter/counterSlice'

export const modalTruthy = createSlice({
    name: 'truthy',
    initialState: {
        truthy: false
    },
    reducers: {
        showModal: (state) => {
            state.truthy = !state.truthy
        }
    }
})

export const { showModal } = counterSlice.actions
export default modalTruthy.reducer;