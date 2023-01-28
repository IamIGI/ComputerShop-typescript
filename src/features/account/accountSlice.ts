import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { GetAccountOpinionsInterface } from 'interfaces/Account.interfaces';
import { InitialState } from './accountInterface';
import axios from 'api/axios';
import { Root } from 'react-dom/client';

/**IMPORTANT ---- SLICE WILL BE USED AFTER AUTHORIZATION REBUILD TO REDUX --------- DO NOT DELETE */

const initialState: InitialState = {
    accountComments: {
        status: 'idle',
        data: { message: 'User comments', commentsData: [], sumOfLikes: 0, commentsCount: 0, newComments: [] },
        error: undefined,
        commentByIdStatus: 'idle',
        refreshComments: false,
    },
};

export const fetchAccountOpinions = createAsyncThunk(
    'user/comments',
    async (fetchData: { userId: string; pageNr: number }, { getState }): Promise<GetAccountOpinionsInterface> => {
        const state = getState() as RootState;
        const response = await axios.post('user/comments', fetchData, {
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${state.auth?.accessToken}` },
            withCredentials: true,
        });
        return response.data;
    }
);

const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        refreshAccountComments(state) {
            state.accountComments.refreshComments = !state.accountComments.refreshComments;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchAccountOpinions.pending, (state) => {
                state.accountComments.status = 'loading';
            })
            .addCase(fetchAccountOpinions.fulfilled, (state, action: PayloadAction<GetAccountOpinionsInterface>) => {
                state.accountComments.status = 'succeeded';
                state.accountComments.data = action.payload;
            })
            .addCase(fetchAccountOpinions.rejected, (state, action) => {
                state.accountComments.status = 'failed';
                state.accountComments.error = action.error.message;
            });
    },
});

export const { refreshAccountComments } = accountSlice.actions;

export const getUserComments = (state: RootState) => state.account.accountComments.data;
export const accountOpinionsRefresh = (state: RootState) => state.account.accountComments.refreshComments;
export const getUserCommentsStatus = (state: RootState) => state.account.accountComments.status;
export const getUserCommentsError = (state: RootState) => state.account.accountComments.error;

export default accountSlice.reducer;
