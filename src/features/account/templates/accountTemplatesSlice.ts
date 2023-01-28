import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'api/axios';
import { RootState } from 'app/store';
import { InitialStateAccountTemplates } from '../accountInterface';
import {
    RecipientFormDataInterface,
    RecipientTemplateInterface,
    RecipientTemplateSchema,
} from 'interfaces/RecipientTemplates.interfaces';

const initialState: InitialStateAccountTemplates = {
    status: 'idle',
    data: [],
    error: undefined,
    templateByIdStatus: 'idle',
    refresh: false,
};

export const fetchAccountTemplates = createAsyncThunk(
    'user/template/get',
    async (arg, { getState }): Promise<RecipientTemplateInterface[]> => {
        const state = getState() as RootState;
        const response = await axios.post(
            'user/template/get',
            { userId: state.auth.id },
            {
                headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${state.auth?.accessToken}` },
                withCredentials: true,
            }
        );
        return response.data;
    }
);

export const deleteAccountTemplate = createAsyncThunk(
    'user/template/delete',
    async (data: { userId: string; recipientId: string }, { getState }): Promise<void> => {
        const state = getState() as RootState;
        await axios.delete('user/template/delete', {
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${state.auth?.accessToken}` },
            data,
            withCredentials: true,
        });
    }
);

export const addAccountTemplate = createAsyncThunk(
    'user/template/add',
    async (
        data: {
            userId: string;
            recipientTemplate: RecipientTemplateSchema;
        },
        { getState }
    ): Promise<void> => {
        const state = getState() as RootState;
        await axios.post('/user/template/add', data, {
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${state.auth?.accessToken}` },
            withCredentials: true,
        });
    }
);

export const editAccountTemplate = createAsyncThunk(
    'user/template/edit',
    async (
        data: {
            userId: string;
            recipientId: string;
            recipientTemplate: RecipientFormDataInterface;
        },
        { getState }
    ): Promise<void> => {
        const state = getState() as RootState;
        await axios.post('/user/template/edit', data, {
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${state.auth?.accessToken}` },
            withCredentials: true,
        });
    }
);

const accountTemplates = createSlice({
    name: 'accountTemplates',
    initialState,
    reducers: {
        refreshAccountTemplates(state) {
            state.refresh = !state.refresh;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchAccountTemplates.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchAccountTemplates.fulfilled, (state, action: PayloadAction<RecipientTemplateInterface[]>) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchAccountTemplates.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(deleteAccountTemplate.fulfilled, (state) => {
                state.status = 'succeeded';
            })
            .addCase(addAccountTemplate.fulfilled, (state) => {
                state.status = 'succeeded';
            })
            .addCase(editAccountTemplate.fulfilled, (state) => {
                state.status = 'succeeded';
            });
    },
});

export const { refreshAccountTemplates } = accountTemplates.actions;

export const getUserTemplates = (state: RootState) => state.account.templates.data;
export const getUserTemplatesStatus = (state: RootState) => state.account.templates.status;
export const getUserTemplatesError = (state: RootState) => state.account.templates.error;

export const accountTemplatesRefresh = (state: RootState) => state.account.templates.refresh;

export default accountTemplates.reducer;
