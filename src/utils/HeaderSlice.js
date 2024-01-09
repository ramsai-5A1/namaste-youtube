import { createSlice } from "@reduxjs/toolkit";

const HeaderSlice = createSlice({
    name: "Header",
    initialState: {
        menuClicked: true
    },
    reducers: {
        toggleMenuButton: (state) => {
            state.menuClicked = !state.menuClicked;
        }
    }
});

export const { toggleMenuButton } = HeaderSlice.actions;

export default HeaderSlice.reducer;