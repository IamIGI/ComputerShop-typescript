import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { AuthInterface } from 'interfaces/Auth.interfaces';

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
            const { accessToken, email, id, roles, userName } = action.payload;
            state.accessToken = accessToken;
            state.email = email;
            state.id = id;
            state.roles = roles;
            state.userName = userName;
        },
        logOut: (state) => {
            state.accessToken = null;
            state.email = null;
            state.id = null;
            state.roles = null;
            state.userName = null;
        },
        changeUserName: (state, action) => {
            state.userName = action.payload.userName;
        },
    },
});

export const { setCredentials, logOut, changeUserName } = authSlice.actions;

export default authSlice.reducer;

export const selectAuth = (state: RootState) => state.auth;
export const selectCurrentUser = (state: RootState) => state.auth.userName;
export const selectCurrentToken = (state: RootState) => state.auth.accessToken;
