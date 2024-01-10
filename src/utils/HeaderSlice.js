import { createSlice } from "@reduxjs/toolkit";

const HeaderSlice = createSlice({
    name: "HeaderMenu",
    initialState: {
        isMenuOpened: true
    },
    reducers: {
        onTogglingMenu: (state, action) => {
            state.isMenuOpened = !state.isMenuOpened;
        },
        toggleMenuWithThis: (state, action) => {
            state.isMenuOpened = action.payload;
        }
    }
});

export const { onTogglingMenu, toggleMenuWithThis } = HeaderSlice.actions;
export default HeaderSlice.reducer;