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
        closeMenu: (state) => {
            state.isMenuOpened = false;
        }
    }
});

export const { onTogglingMenu, closeMenu } = HeaderSlice.actions;
export default HeaderSlice.reducer;