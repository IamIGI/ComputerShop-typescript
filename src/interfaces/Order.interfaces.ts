import { BasketItemsInterface } from 'features/basket/basketInterfaces';
import { ProductPrevDataInterface } from './Product.interfaces';
import { RecipientFormDataInterface, RecipientTemplateSchema } from './RecipientTemplates.interfaces';

interface TransactionInfoInterface {
    recipientDetails: RecipientTemplateSchema;
    date: string;
    deliveryMethod: string;
    isDiscount?: boolean;
    paymentMethod: string;
    price: number;
}
export interface OrderDataInterface {
    transactionInfo: TransactionInfoInterface;
    _id: string;
    status: number;
    products: ProductPrevDataInterface[];
    __v: number;
}

export interface OrderHistoryInterface {
    transactionInfo: TransactionInfoInterface;
    _id: string;
    status: number;
    products: {
        name: string;
        prevImg: string;
        price: number;
        priceBeforeDiscount: number;
        isDiscount: boolean;
        quantity: number;
        _id: string;
    }[];

    __v: 0;
}

export interface DeliveryOptionsInterface {
    deliveryMan: boolean;
    atTheSalon: boolean;
    locker: boolean;
}

export interface PaymentOptionsInterface {
    online: boolean;
    card: boolean;
    cash: boolean;
    uponReceipt: boolean;
    installment: boolean;
}

export interface OrderTemplateDocumentInterface {
    status: number; //all orders have to start from "In realization" status // for now
    products: BasketItemsInterface[];
    transactionInfo: TransactionInfoInterface;
    user: string;
    usedPromoCode: { isUsed: boolean; code: string };
}
