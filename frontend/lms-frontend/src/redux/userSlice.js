import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    currentUser: null,
    loading: false,
    error: false,
};


export const userSlice = createSlice({
    name: 'user',
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
        enroll:(state, action)=>{
            if(state.currentUser.others.enrolled.includes(action.payload)){
                state.currentUser.others.enrolled.splice(state.currentUser.others.enrolled.findIndex(
                    (courseId)=>courseId===action.payload
                ),
                1
            );
            }
            else{
                state.currentUser.others.enrolled.push(action.payload)
            }
        }
    },
})


export const { loginStart, loginSuccess, loginFailure, logout, enroll } = userSlice.actions;

export default userSlice.reducer;