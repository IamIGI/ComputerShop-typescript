export interface BasketItemsInterface {
    prevImg: string;
    _id: string;
    quantity: number;
    name: string;
    brand: string;
    price: number;
    isDiscount: boolean;
    priceBeforeDiscount: number;
}

export interface InitialStateInterface {
    data: BasketItemsInterface[];
    priceToPay: number;
}
