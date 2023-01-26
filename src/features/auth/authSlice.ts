import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { AuthInterface } from 'context/AuthProvider';

const initialState: AuthInterface = {
    accessToken: null,
    email: null,
    id: null,
    roles: null,
    userName: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            console.log(action.payload);
            const { accessToken, email, id, roles, userName } = action.payload;
            state.accessToken = accessToken;
            state.email = email;
            state.id = id;
            state.roles = roles;
            state.userName = userName;
        },
        logOut: (state) => {
            console.log('logOut');
            state.accessToken = null;
            state.email = null;
            state.id = null;
            state.roles = null;
            state.userName = null;
        },
    },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectAuth = (state: RootState) => state.auth;
export const selectCurrentUser = (state: RootState) => state.auth.userName;
export const selectCurrentToken = (state: RootState) => state.auth.accessToken;
