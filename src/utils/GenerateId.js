import { createSlice } from "@reduxjs/toolkit";

const GenerateIdSlice = createSlice({
    name: "GenerateId",
    initialState: {
        value: 1000
    },
    reducers: {
        incrementeValue: (state) => {
            state.value++;
        }
    }
});


export const { incrementeValue } = GenerateIdSlice.actions;
export default GenerateIdSlice.reducer;