import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';
import { addProductToBasket, removeBasket, deleteProduct } from 'features/basket/basketSlice';
import { RootState } from './store';

export const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
    matcher: isAnyOf(addProductToBasket, removeBasket, deleteProduct),
    effect: (action, listenerApi) => {
        localStorage.setItem('basketItems', JSON.stringify((listenerApi.getState() as RootState).basket.data));
    },
});
