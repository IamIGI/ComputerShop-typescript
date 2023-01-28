import { configureStore } from '@reduxjs/toolkit';
import articlesReducer from 'features/articles/articlesSlice';
import productsReducer from 'features/products/productsSlice';
import basketReducer from 'features/basket/basketSlice';
import commentsReducer from 'features/comments/commentsSlice';
import authReducer from 'features/auth/authSlice';
import { authApi } from 'api/auth';
import { listenerMiddleware } from './middleware';
import accountsReducers from 'features/account/accountReducers';

export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        auth: authReducer,
        articles: articlesReducer,
        products: productsReducer,
        basket: basketReducer,
        comments: commentsReducer,
        account: accountsReducers,
    },

    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware({ serializableCheck: false }).concat(authApi.middleware),
        listenerMiddleware.middleware,
    ],

    devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
