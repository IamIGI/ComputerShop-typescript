import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { toast } from 'react-hot-toast';
import { BasketItemsInterface, InitialStateInterface } from './basketInterfaces';

const basketItems: BasketItemsInterface[] =
    JSON.parse(localStorage.getItem('basketItems') || '') === null
        ? []
        : JSON.parse(localStorage.getItem('basketItems') || '');

const initialState: InitialStateInterface = {
    data: basketItems,
    priceToPay: 0,
};

const notifyAddProduct = () =>
    toast.success('Produkt dodany do koszyka', {
        icon: '💻',
        duration: 2000,
    });

const notifyDeleteProduct = () =>
    toast.success('Produkt usunięty z koszyka', {
        icon: '🗑️',
        duration: 2000,
    });

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addProductToBasket(state, action) {
            const { product, quantity } = action.payload;

            const {
                special_offer: { mode: isDiscount, price: discountValue },
                price,
            } = product;
            let q = Number(quantity);

            const isFound = state.data.some((item, index) => {
                if (item._id === product._id) {
                    item.quantity += q;
                    return true;
                }
                return false;
            });

            if (!isFound) {
                notifyAddProduct();
                state.data.push({
                    prevImg: product.prevImg,
                    _id: product._id,
                    quantity: q,
                    name: product.name,
                    brand: product.brand,
                    price: product.price,
                    isDiscount,
                    priceBeforeDiscount: isDiscount ? price + discountValue : price,
                });
            }
        },
        replaceBasket(state, action) {
            state.data = action.payload;
        },
        removeBasket(state) {
            state.data = [];
        },
        deleteProduct(state, action) {
            const { id } = action.payload;
            if (state.data.length === 1) {
                state.data = [];
                state.priceToPay = 0;
            } else {
                state.data = state.data.filter((product) => product._id !== id);
            }
            notifyDeleteProduct();
        },
        updatePriceToPay(state) {
            let bill = 0;
            if (state.data.length === 0) state.priceToPay = 0;
            state.data.map((product) => (bill += product.price * product.quantity));

            const formatBill = Number(bill.toFixed(2));
            state.priceToPay = formatBill;
        },
    },
});

export const getBasket = (state: RootState) => state.basket.data;
export const getPriceToPay = (state: RootState) => state.basket.priceToPay;

export const { addProductToBasket, replaceBasket, deleteProduct, removeBasket, updatePriceToPay } = basketSlice.actions;

export default basketSlice.reducer;
