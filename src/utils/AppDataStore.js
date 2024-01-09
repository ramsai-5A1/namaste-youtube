import { configureStore } from "@reduxjs/toolkit";
import HeaderReducer from "./HeaderSlice";

const AppDataStore = configureStore({
    reducer: {
        header: HeaderReducer
    }
});

export default AppDataStore;