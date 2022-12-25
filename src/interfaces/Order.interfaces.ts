import { ProductDataInterface, ProductPrevDataInterface } from './Product.interfaces';
import { RecipientTemplateSchema } from './RecipientTemplates.interfaces';

export interface OrderDataInterface {
    transactionInfo: {
        recipientDetails: {
            name: string;
            street: string;
            zipCode: string;
            place: string;
            email: string;
            phone: number;
        };
        date: string;
        deliveryMethod: string;
        paymentMethod: string;
        price: number;
    };
    _id: string;
    status: number;
    products: ProductPrevDataInterface[];
    __v: number;
}

export interface OrderHistoryInterface {
    transactionInfo: {
        recipientDetails: RecipientTemplateSchema;
        date: string;
        deliveryMethod: string;
        paymentMethod: string;
        price: number;
    };
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
