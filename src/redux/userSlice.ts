import { createSlice} from "@reduxjs/toolkit";

type UserState = {
    userId: number | null;
};

const initialState: UserState = {
    userId: localStorage.getItem('userId') ? Number(localStorage.getItem('userId')) : null
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserId: (state, action) => {
            console.log(state.userId)
            state.userId = action.payload;
        },
        deleteList: (state, action) => {
            if (state.userId === action.payload) {
                state.userId = action.payload;
                localStorage.removeItem('userId');
            }
        }

    },
});

export const { setUserId,deleteList } = userSlice.actions;
export default userSlice.reducer;
