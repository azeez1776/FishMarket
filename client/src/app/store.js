import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import modalReducer from '../features/modalTruthy/modalTruthy'

export default configureStore({
    reducer: {
        counter: counterReducer,
        truthy: modalReducer
    },
})