
import { configureStore } from '@reduxjs/toolkit'
import chatSlice from "./reducers/chatSlice";

export const store = configureStore({
    reducer: {
        chat: chatSlice    },
})

