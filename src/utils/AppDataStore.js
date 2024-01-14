import { configureStore } from "@reduxjs/toolkit";
import HeaderReducer from "./HeaderSlice";
import VideoReducer from "./VideoSlice";
import CacheReducer from "./CacheSlice";
import LiveChatReducer from "./LiveChatSlice"
import CommentsSlice from "./CommentsSlice";
import GenerateIdSlice from "./GenerateId"

const AppDataStore = configureStore({
    reducer: {
        header: HeaderReducer,
        video: VideoReducer,
        cache: CacheReducer,
        liveChat: LiveChatReducer,
        comments: CommentsSlice,
        generateId: GenerateIdSlice
    }
});

export default AppDataStore;