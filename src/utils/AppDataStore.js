import { configureStore } from "@reduxjs/toolkit";
import HeaderReducer from "./HeaderSlice";
import VideoReducer from "./VideoSlice";
import CacheReducer from "./CacheSlice";
import LiveChatReducer from "./LiveChatSlice"

const AppDataStore = configureStore({
    reducer: {
        header: HeaderReducer,
        video: VideoReducer,
        cache: CacheReducer,
        liveChat: LiveChatReducer
    }
});

export default AppDataStore;