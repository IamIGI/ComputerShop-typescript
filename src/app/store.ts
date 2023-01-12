import { configureStore } from '@reduxjs/toolkit';
import articlesReducer from 'features/articles/articlesSlice';
import productsReducer from 'features/products/productsSlice';
import basketReducer from 'features/basket/basketSlice';
import commentsReducer from 'features/comments/commentsSlice';
import accountReducer from 'features/account/accountSlice';
import { listenerMiddleware } from './middleware';

export const store = configureStore({
    reducer: {
        articles: articlesReducer,
        products: productsReducer,
        basket: basketReducer,
        comments: commentsReducer,
        account: accountReducer,
    },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), listenerMiddleware.middleware],
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
