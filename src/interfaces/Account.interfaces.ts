export interface AccountEntitlementsInterface {
    shopRules: boolean;
    email: boolean;
    sms: boolean;
    phone: boolean;
    adjustedOffers: boolean;
}

export interface AccountInterface {
    Enlistments: AccountEntitlementsInterface;
    roles: { User?: number; Editor?: number; Admin?: number };
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    hashedPassword: string;
    refreshToken: string;
    __v?: number;
    userOrders: [string][];
    commentedProducts: string[];
    userComments: string[];
    recipientTemplates: {
        name: string;
        street: string;
        zipCode: string;
        place: string;
        email: string;
        phone: string;
        _id: string;
    }[];
    usedPromoCodes: { code: string; date: string; _id: string }[];
}
