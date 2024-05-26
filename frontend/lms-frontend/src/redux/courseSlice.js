import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    currentUser: null,
    loading: false,
    error: false,
};


export const courseSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {
        loginStart: (state) => {
            state.loading = true;
        },
        loginSuccess: (state, action) => {
            state.loading = false;
            state.currentUser = action.payload;
        },
        loginFailure: (state) => {
            state.loading = false;
            state.error = true;
        },
        logout: (state) => {
            state.currentUser = null;
            state.loading = false;
            state.error = false;
        },
    },
})


export const { loginStart, loginSuccess, loginFailure, logout } = courseSlice.actions;

export default courseSlice.reducer;