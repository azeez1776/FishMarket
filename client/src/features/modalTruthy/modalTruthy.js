import { createSlice } from '@reduxjs/toolkit'

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

export const { showModal } = modalTruthy.actions
export default modalTruthy.reducer;