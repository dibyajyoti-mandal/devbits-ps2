import { createSlice, current } from "@reduxjs/toolkit"


const initialState = {
    currentCourse: null,
    loading: false,
    error: false,
};


export const courseSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {
        fetchStart: (state) => {
            state.loading = true;
        },
        fetchSuccess: (state, action) => {
            state.loading = false;
            state.currentCourse = action.payload;
        },
        fetchFailure: (state) => {
            state.loading = false;
            state.error = true;
        }
    },
})


export const { fetchStart, fetchSuccess, fetchFailure } = courseSlice.actions;

export default courseSlice.reducer;