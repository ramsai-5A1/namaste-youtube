import { createSlice } from "@reduxjs/toolkit";

const LiveChatSlice = createSlice({
    name: "liveChat",
    initialState: {
        messages: []
    },
    reducers: {
        addDataToSlice: (state, action) => {
            state.messages.push(action.payload);
        },
        removeExcessDataFromSlice: (state) => {
            if (state.messages.length > 5) {
                state.messages = state.messages.slice(1);
            }
        }
    }
});


export const { addDataToSlice, removeExcessDataFromSlice } = LiveChatSlice.actions;
export default LiveChatSlice.reducer;