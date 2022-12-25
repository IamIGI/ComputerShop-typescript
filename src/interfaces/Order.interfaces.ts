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
    products: {
        name: string;
        prevImg: string;
        price: number;
        priceBeforeDiscount: number;
        isDiscount: boolean;
        quantity: number;
        _id: string;
    }[];
    __v: number;
}
