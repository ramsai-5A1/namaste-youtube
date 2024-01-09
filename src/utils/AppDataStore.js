import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./HeaderSlice";

const AppDataStore = configureStore({
    reducer: {
        header: headerReducer
    }
});
export default AppDataStore;