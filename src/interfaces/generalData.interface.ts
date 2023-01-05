export interface ContactInfoInterface {
    telephone: string;
    openTime: {
        normal: string;
        weekend: string;
    };
    email: string;
}

export interface DeliveryPricesInterface {
    deliveryMan: number;
    atTheSalon: number;
    locker: number;
}
