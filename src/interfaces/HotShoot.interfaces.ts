import { ProductDataInterface } from './Product.interfaces';

export interface HotShootDataInterface {
    productData: ProductDataInterface;
    discount: number;
    date: number;
    isMorning: boolean;
}
