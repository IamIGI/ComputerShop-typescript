import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { ArticleApiResponse, InitialState } from 'interfaces/Articles.interfaces';
import articlesApi from '../../api/articles';

const initialState: InitialState = {
    data: [],
    status: 'idle',
    error: null,
    articleByIdStatus: 'idle',
};

export const fetchArticles = createAsyncThunk(
    'articles/fetchArticles',
    async (articleType: string): Promise<ArticleApiResponse[]> => {
        const response = await articlesApi.getAllArticles(articleType);
        return response;
    }
);

export const fetchArticleById = createAsyncThunk('articles/fetchArticleById', async (articleId: string) => {
    const response = await articlesApi.getArticleById(articleId);
    return [response];
});

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
            .addCase(fetchArticles.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(fetchArticleById.pending, (state) => {
                state.articleByIdStatus = 'loading';
            })
            .addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<ArticleApiResponse[]>) => {
                state.articleByIdStatus = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchArticleById.rejected, (state, action) => {
                state.articleByIdStatus = 'failed';
                state.error = action.error.message;
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
export const getArticlesByIdStatus = (state: RootState) => state.articles.articleByIdStatus;

export default articlesSlice.reducer;
