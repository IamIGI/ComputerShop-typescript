import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { getAllCommentsAPI, getProductAverageScore } from 'api/comments';
import { RootState } from 'app/store.js';
import { ratingOptions } from 'components/molecules/CommentFilters/CommentFilters.logic.js';
import { RequestState } from 'interfaces/Articles.interfaces.js';
import { AverageScoreData, CommentsResponseInterface } from 'interfaces/Comments.interfaces.js';
import { ProductDataInterface } from 'interfaces/Product.interfaces.js';
import { ACTIONS as ACTIONS_COMMENT_FILTERS } from './commentFiltersActions.js';
import { FilterInitInterface, InitialStateInterface } from './commentInterface.js';

const filterInit: FilterInitInterface = {
    productId: '629d359fd1cd32ed85648fbd',
    filters: { rating: 0, confirmed: false },
    sortBy: 'date',
};

const initialState: InitialStateInterface = {
    data: {}, //{comments: [], images: [], length: 1. length_AllComments: 1}
    averageScore: { data: {}, status: 'idle' },
    status: 'idle',
    error: null,
    filters: filterInit,
    filterRatingOptions: ratingOptions,
    images: {
        isOpenGallery: [false],
        chosenImageIndex: 0,
    },
    refreshComments: false,
};

export const fetchComments = createAsyncThunk('comments/productId', async (arg, { getState }) => {
    const state = getState() as RootState;
    let commentsFilters = state.comments.filters;
    const updatedCommentsFilters = {
        ...commentsFilters,
        productId: (state.products.productById as ProductDataInterface)._id,
    };
    const response = await getAllCommentsAPI(updatedCommentsFilters);
    return response;
});

export const fetchAverageScore = createAsyncThunk('comments/averageScore', async (arg, { getState }) => {
    const response = await getProductAverageScore(
        ((getState() as RootState).products.productById as ProductDataInterface)._id
    );
    return response;
});

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        handleFilters(state, action) {
            const { name, value } = action.payload;

            switch (name) {
                case ACTIONS_COMMENT_FILTERS.PRODUCT_ID:
                    state.filters.productId = value;
                    break;
                case ACTIONS_COMMENT_FILTERS.RATING:
                    for (let i = 0; i < value.length; i++) {
                        if (value[i].checked) {
                            state.filterRatingOptions = value;
                            state.filters.filters.rating = value[i].value;
                        }
                    }
                    break;
                case ACTIONS_COMMENT_FILTERS.CONFIRMED:
                    state.filters.filters.confirmed = value;
                    break;
                case ACTIONS_COMMENT_FILTERS.SORT_BY:
                    for (let i = 0; i < value.length; i++) {
                        if (value[i].checked) state.filters.sortBy = value[i].value;
                    }
                    break;
                default:
                    console.log(`Bad key name: ${name}k`);
                    break;
            }
        },
        clearFilters(state) {
            state.filters = filterInit;
        },
        handleChooseImage(state, action) {
            state.images.chosenImageIndex = action.payload;
            state.images.isOpenGallery = [true];
        },
        closeGallery(state) {
            state.images.isOpenGallery = [false];
        },
        refreshComments(state) {
            state.refreshComments = !state.refreshComments;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchComments.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchComments.fulfilled, (state, action: PayloadAction<CommentsResponseInterface>) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchComments.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message as string;
            })
            .addCase(fetchAverageScore.pending, (state) => {
                state.averageScore.status = 'loading';
            })
            .addCase(
                fetchAverageScore.fulfilled,
                (state, action: PayloadAction<{ data: AverageScoreData | {}; status: RequestState }>) => {
                    state.averageScore.status = 'succeeded';
                    state.averageScore.data = action.payload;
                }
            )
            .addCase(fetchAverageScore.rejected, (state, action) => {
                state.averageScore.status = 'failed';
                state.error = action.error.message as string;
            });
    },
});

export const getAllCommentsData = (state: RootState) => state.comments.data;
export const getCommentsStatus = (state: RootState) => state.comments.status;
export const getCommentsErrors = (state: RootState) => state.comments.error;
export const getNumberOfCommentsWithoutFilters = (state: RootState) =>
    (state.comments.data as CommentsResponseInterface).length_AllComments;

export const getCommentsFilters = (state: RootState) => state.comments.filters;
export const getCommentsFiltersIsConfirmed = (state: RootState) => state.comments.filters.filters.confirmed;
export const getCommentsFiltersRating = (state: RootState) => state.comments.filterRatingOptions;

export const getAverageScore = (state: RootState) => state.comments.averageScore.data;
export const getAverageScoreStatus = (state: RootState) => state.comments.averageScore.status;

export const isOpenGalleryStatus = (state: RootState) => state.comments.images.isOpenGallery;
export const chosenImageIndex = (state: RootState) => state.comments.images.chosenImageIndex;

export const isRefreshComments = (state: RootState) => state.comments.refreshComments;

export const { handleFilters, clearFilters, handleChooseImage, closeGallery, refreshComments } = commentsSlice.actions;

export default commentsSlice.reducer;
