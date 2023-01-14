import { CommentInterface } from './Comments.interfaces';
import { OrderedProductData } from './Order.interfaces';

export interface newCommentsInterface {
    product: OrderedProductData;
    orderDate: string;
}

export interface GetAccountOpinionsInterface {
    message: string;
    commentsData: UserAccountComments[];
    sumOfLikes: number;
    commentsCount: number;
    newComments: newCommentsInterface[];
}

export interface UserAccountComments {
    _id: string;
    productId: string;
    comment: CommentInterface[];
}

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
