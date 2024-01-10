import { createSlice } from "@reduxjs/toolkit";


const VideoSlice = createSlice({
    name: "Video",
    initialState: {
        info: {}
    },
    reducers: {
        addVideoInfo: (state, action) => {
            state.info = action.payload;
        },
        deleteVideoInfo: (state) => {
            state.info = {}
        }
    }
});

export const { addVideoInfo, deleteVideoInfo } = VideoSlice.actions;
export default VideoSlice.reducer;