import { configureStore } from "@reduxjs/toolkit";
import HeaderReducer from "./HeaderSlice";
import VideoReducer from "./VideoSlice";
import CacheReducer from "./CacheSlice";

const AppDataStore = configureStore({
    reducer: {
        header: HeaderReducer,
        video: VideoReducer,
        cache: CacheReducer
    }
});

export default AppDataStore;