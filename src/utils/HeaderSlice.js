import { createSlice } from "@reduxjs/toolkit";

const HeaderSlice = createSlice({
    name: "HeaderMenu",
    initialState: {
        isMenuOpened: true
    },
    reducers: {
        onTogglingMenu: (state, action) => {
            state.isMenuOpened = !state.isMenuOpened;
        }
    }
});

export const { onTogglingMenu } = HeaderSlice.actions;
export default HeaderSlice.reducer;