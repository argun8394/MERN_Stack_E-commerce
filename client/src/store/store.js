import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./auth-sclice"



const store = configureStore({
    reducer  : {
        auth : authReducer
    }
})

export default store;