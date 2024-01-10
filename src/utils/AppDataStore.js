import { configureStore } from "@reduxjs/toolkit";
import HeaderReducer from "./HeaderSlice";
import VideoReducer from "./VideoSlice";

const AppDataStore = configureStore({
    reducer: {
        header: HeaderReducer,
        video: VideoReducer
    }
});

export default AppDataStore;