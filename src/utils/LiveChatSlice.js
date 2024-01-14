import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "./constants";

const LiveChatSlice = createSlice({
    name: "liveChat",
    initialState: {
        messages: []
    },
    reducers: {
        addDataToSlice: (state, action) => {
            state.messages.splice(OFFSET_LIVE_CHAT,1);
            state.messages.unshift(action.payload);
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