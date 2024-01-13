import { createSlice } from "@reduxjs/toolkit";

const VideoSlice = createSlice({
    name: "Video",
    initialState: {
        info: {},
        allVideos: []
    },
    reducers: {
        addAllVideos: (state, action) => {
            state.allVideos.length = 0;
            action.payload.map((video) => state.allVideos.push(video));
        },
        addVideoInfo: (state, action) => {
            state.info = action.payload;
        },
        deleteVideoInfo: (state) => {
            state.info = {}
        }
    }
});

export const { addAllVideos, addVideoInfo, deleteVideoInfo } = VideoSlice.actions;
export default VideoSlice.reducer;