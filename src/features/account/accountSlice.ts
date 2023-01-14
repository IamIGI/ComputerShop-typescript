import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import useAxiosPrivate from 'hooks/useAxiosPrivate';
import { GetAccountOpinionsInterface } from 'interfaces/Account.interfaces';
import { InitialState } from './accountInterface';

/**IMPORTANT ---- SLICE WILL BE USED AFTER AUTHORIZATION REBUILD TO REDUX --------- DO NOT DELETE */

const initialState: InitialState = {
    accountComments: {
        status: 'idle',
        data: { message: 'User comments', commentsData: [], sumOfLikes: 0, commentsCount: 0, newComments: [] },
        error: null,
        commentByIdStatus: 'idle',
    },
};

export const fetchUserComments = createAsyncThunk(
    'user/comments',
    async (fetchData: { userId: string; pageNr: number }): Promise<GetAccountOpinionsInterface> => {
        console.log('fetchUserCommentsReducer-------begin---------');
        console.log(fetchData);
        const axiosPrivate = useAxiosPrivate();
        console.log(axiosPrivate);
        const { userId, pageNr } = fetchData;
        const data = { userId, pageNr };
        console.log(data);
        const response = (await axiosPrivate.post('user/comments', data)) as GetAccountOpinionsInterface;

        console.log(response);
        console.log('fetchUserCommentsReducer-------end---------');

        return response;
    }
);

const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchUserComments.pending, (state) => {
                state.accountComments.status = 'loading';
            })
            .addCase(fetchUserComments.fulfilled, (state, action: PayloadAction<GetAccountOpinionsInterface>) => {
                state.accountComments.status = 'succeeded';
                state.accountComments.data = action.payload;
            })
            .addCase(fetchUserComments.rejected, (state, action) => {
                state.accountComments.status = 'failed';
                state.accountComments.error = action.error.message;
            });
    },
});

export const getUserComments = (state: RootState) => state.account.accountComments.data;
export const getUserCommentsStatus = (state: RootState) => state.account.accountComments.status;
export const getUserCommentsError = (state: RootState) => state.account.accountComments.error;

export default accountSlice.reducer;
