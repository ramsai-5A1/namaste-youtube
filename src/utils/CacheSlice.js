import { createSlice } from "@reduxjs/toolkit";

const CacheSlice = createSlice({
    name: "CacheSlice",
    initialState: {
        reddis: {}
    },
    reducers: {
        addItemToCache: (state, action) => {
            if (!(action.payload[0] in state.reddis)) {
                state.reddis[action.payload[0]] = action.payload[1];
            }
        },
        // retriveItemFromCache: (state, action) => {
        //     if (state.reddis.has(action.payload.key)) {
        //         return {isPresent: true, values: state.reddis.get(action.payload.key)};
        //     }
        //     return {isPresent: false};
        // }
    }
});

export const { addItemToCache } = CacheSlice.actions;
export default CacheSlice.reducer;