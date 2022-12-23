import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import articlesApi from '../../api/articles';
import { ArticleApiResponse, InitialState } from './articleInterfaces';

const initialState: InitialState = {
    data: [],
    status: 'idle',
    error: null,
};

export const fetchArticles = createAsyncThunk(
    'articles/fetchArticles',
    async (articleType: string): Promise<ArticleApiResponse[]> => {
        const response = await articlesApi.getAllArticles(articleType);
        return response;
    }
);

export const fetchArticlesForHomePage = createAsyncThunk(
    'articles/homepage',
    async (): Promise<ArticleApiResponse[]> => {
        const response = await articlesApi.getArticlesForHomePage();
        return response;
    }
);

const articlesSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchArticles.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchArticles.fulfilled, (state, action: PayloadAction<ArticleApiResponse[]>) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchArticles.rejected, (state, action: PayloadAction<any>) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(fetchArticlesForHomePage.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchArticlesForHomePage.fulfilled, (state, action: PayloadAction<ArticleApiResponse[]>) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchArticlesForHomePage.rejected, (state, action: PayloadAction<any>) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

export const selectAllArticles = (state: RootState) => state.articles.data;
export const getArticlesStatus = (state: RootState) => state.articles.status;
export const getArticlesErrors = (state: RootState) => state.articles.error;
export const getArticleById = (state: RootState, articleId: string) =>
    state.articles.data.find((article) => article._id === articleId);

export default articlesSlice.reducer;
