import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import articlesReducer from 'features/articles/articlesSlice';
import productsReducer from 'features/products/productsSlice';
import basketReducer from 'features/basket/basketSlice';
import commentsReducer from 'features/comments/commentsSlice';
import accountReducer from 'features/account/accountSlice';
import authReducer from 'features/auth/authSlice';
import { authApi } from 'api/auth';
import { listenerMiddleware } from './middleware';

// let middleware = [listenerMiddleware.middleware, (middlewareFunction: any) => middlewareFunction().concat(authApi.middleware)]

export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        auth: authReducer,
        articles: articlesReducer,
        products: productsReducer,
        basket: basketReducer,
        comments: commentsReducer,
        account: accountReducer,
    },

    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware().concat(authApi.middleware),
        listenerMiddleware.middleware,
    ],

    devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
