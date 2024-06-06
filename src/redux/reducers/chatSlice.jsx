// import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//     messages: [],
//     prompt: "",
// }


// export const chatSlice = createSlice({
//     name: 'chat',
//     initialState,
//     reducers: {
//         setPrompt: (state, action) => {
//             state.prompt = action.payload
//         },
//         setMessages: (state, action) => {
//             state.messages = action.payload
//         },
//         addMessage: (state, action) => {
//             state.messages = [
//                 ...state.messages,
//                 action.payload,
//             ]
//         },
//     },
// })

// export const {
//     setPrompt,
//     setMessages,
//     addMessage,
// } = chatSlice.actions

// export const selectPrompt = (state) => state.chat.prompt
// export const selectMessages = (state) => state.chat.messages
// export default chatSlice.reducer


import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    messages: [],
    prompt: "",
    agentID: null,
    loading: false,
    error: null,
};

// Thunk to fetch the agent ID
export const fetchAgentID = createAsyncThunk(
    'chat/fetchAgentID',
    async () => {
        const response = await axios.get('http://127.0.0.1:8080/start');
        console.log("respone",response)
        return response.data.thread_id;
    }
);

// Thunk to send a message
export const sendMessage = createAsyncThunk(
    'chat/sendMessage',
    async ({ agentID, message }, { getState }) => {
        const { messages } = getState().chat;
        const response = await axios.post('http://127.0.0.1:8080/chat', {
            agentID,
            message,
            messages,
        });
        return response.data;
    }
);

export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        setPrompt: (state, action) => {
            state.prompt = action.payload;
        },
        addMessage: (state, action) => {
            state.messages = [...state.messages, action.payload];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAgentID.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAgentID.fulfilled, (state, action) => {
                console.log("Fulfilled action payload:", action.payload); // Log the payload
                state.loading = false;
                state.agentID = action.payload;
                state.messages.push({
                    role: 'system',
                    content: 'Hello! How can I assist you today?',
                });
            })
            .addCase(fetchAgentID.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(sendMessage.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(sendMessage.fulfilled, (state, action) => {
                state.loading = false;
                state.messages.push(...action.payload.data);
            })
            .addCase(sendMessage.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { setPrompt, addMessage } = chatSlice.actions;

export const selectPrompt = (state) => state.chat.prompt;
export const selectMessages = (state) => state.chat.messages;
export const selectAgentID = (state) => state.chat.agentID;
export const selectLoading = (state) => state.chat.loading;

export default chatSlice.reducer;
