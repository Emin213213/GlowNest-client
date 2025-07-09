import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    thema: "light",
};

const themaSlice = createSlice({
    name: "thema",
    initialState,
    reducers: {
        selectThema: (state) => {
            state.thema = state.thema === "gray" ? "light" : "gray";
        },
    },
});

export const { selectThema } = themaSlice.actions;
export default themaSlice.reducer;
