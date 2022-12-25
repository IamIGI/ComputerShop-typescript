import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import ProductsApi from 'api/products';
import { getProduct } from 'api/products';
import { RootState } from 'app/store';
import { FiltersDropDownListInterface } from 'interfaces/GLOBAL.interfaces';
import { InitialStateInterface, ProductDataInterface } from 'interfaces/Product.interfaces';

import { filterInit } from './productsFilters';

const initialState: InitialStateInterface = {
    data: [],
    status: 'idle',
    error: null,
    filters: filterInit,
    productById: {},
    productById_status: 'idle',
    addedCommentFlag: false,
    mayLikeProducts: [],
    mayLikeStatus: 'idle',
    refreshProducts: false,
};

export const fetchProducts = createAsyncThunk('products/all', async (arg, { getState }) => {
    const state = getState() as RootState;
    const response = await ProductsApi.post('/all', state.products.filters);
    return response.data;
});

//for now fetch all products
export const fetchMayLikeItems = createAsyncThunk('products/mayLikeItems', async () => {
    const response = await ProductsApi.post('/all', filterInit);
    return response.data;
});

export const fetchProductById = createAsyncThunk('product/code', async (code: string) => {
    const response = await getProduct(code);
    return response;
});

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        handleFilters(
            state,
            action: PayloadAction<{ name: string; value: string | boolean | FiltersDropDownListInterface[] }>
        ) {
            const { name, value } = action.payload;
            switch (name) {
                case 'searchTerm':
                    state.filters.searchTerm = value as string;
                    break;
                case 'discounts':
                    state.filters.filters.discounts = !value;
                    break;
                case 'producers':
                    state.filters.filters.producers = [];

                    for (let i = 0; i < (value as FiltersDropDownListInterface[]).length; i++) {
                        if ((value as FiltersDropDownListInterface[])[i].checked)
                            state.filters.filters.producers.push((value as FiltersDropDownListInterface[])[i].value);
                    }
                    break;
                case 'processors':
                    state.filters.filters.processors = [];
                    for (let i = 0; i < (value as FiltersDropDownListInterface[]).length; i++) {
                        if ((value as FiltersDropDownListInterface[])[i].checked)
                            state.filters.filters.processors.push((value as FiltersDropDownListInterface[])[i].value);
                    }
                    break;
                case 'ram.min':
                    if (typeof value === 'string') {
                        if (!isNaN(Number(value))) state.filters.filters.ram.min = value;
                    }

                    break;
                case 'ram.max':
                    if (typeof value === 'string') {
                        if (!isNaN(Number(value))) state.filters.filters.ram.max = value;
                    }
                    break;
                case 'disk.min':
                    if (typeof value === 'string') {
                        if (!isNaN(Number(value))) state.filters.filters.disk.min = value;
                    }
                    break;
                case 'disk.max':
                    if (typeof value === 'string') {
                        if (!isNaN(Number(value))) state.filters.filters.disk.max = value;
                    }
                    break;
                case 'sortBy':
                    for (let i = 0; i < (value as FiltersDropDownListInterface[]).length; i++) {
                        if ((value as FiltersDropDownListInterface[])[i].checked)
                            state.filters.sortBy = (value as FiltersDropDownListInterface[])[i].value;
                    }
                    break;
                default:
                    console.log(`Bad key name: ${name}`);
                    break;
            }
        },
        clearFilters(state) {
            state.filters = filterInit;
        },
        handleAddedComment(state, action: PayloadAction<boolean>) {
            state.addedCommentFlag = action.payload;
        },
        handleRefreshProducts(state) {
            state.refreshProducts = !state.refreshProducts;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<ProductDataInterface[]>) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message as string;
            })
            .addCase(fetchProductById.pending, (state, action) => {
                state.productById_status = 'loading';
            })
            .addCase(fetchProductById.fulfilled, (state, action: PayloadAction<ProductDataInterface>) => {
                state.productById_status = 'succeeded';
                state.productById = action.payload;
            })
            .addCase(fetchProductById.rejected, (state, action) => {
                state.productById_status = 'failed';
                state.error = action.error.message as string;
            })
            .addCase(fetchMayLikeItems.pending, (state) => {
                state.mayLikeStatus = 'loading';
            })
            .addCase(fetchMayLikeItems.fulfilled, (state, action: PayloadAction<ProductDataInterface[]>) => {
                state.mayLikeStatus = 'succeeded';
                state.mayLikeProducts = action.payload;
            })
            .addCase(fetchMayLikeItems.rejected, (state, action) => {
                state.mayLikeStatus = 'failed';
                state.error = action.error.message as string;
            });
    },
});

export const getAllProducts = (state: RootState) => state.products.data;
export const getProductsStatus = (state: RootState) => state.products.status;
export const getProductsErrors = (state: RootState) => state.products.error;
export const getProductsFilters = (state: RootState) => state.products.filters;

export const getProductById = (state: RootState) => state.products.productById;
export const getProductByIdStatus = (state: RootState) => state.products.productById_status;
export const getProductAddCommentFlag = (state: RootState) => state.products.addedCommentFlag;

export const getMayLikeProducts = (state: RootState) => state.products.mayLikeProducts;
export const getMayLikeProductsStatus = (state: RootState) => state.products.mayLikeStatus;

export const getRefreshProduct = (state: RootState) => state.products.refreshProducts;

export const { clearFilters, handleFilters, handleAddedComment, handleRefreshProducts } = productsSlice.actions;

export default productsSlice.reducer;
