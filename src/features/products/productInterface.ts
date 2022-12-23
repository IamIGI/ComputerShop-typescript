import { RequestState } from 'features/articles/articleInterfaces';
import { ProductDataInterface } from 'interfaces/product.interfaces';

export interface FiltersDropDownListInterface {
    label: string;
    value: string;
    checked: boolean;
}

export interface FilterInitInterface {
    searchTerm: string;
    filters: {
        discounts: boolean;
        producers: string[];
        processors: string[];
        ram: {
            min: string;
            max: string;
        };
        disk: {
            min: string;
            max: string;
        };
    };
    sortBy: string;
}

export interface InitialStateInterface {
    data: ProductDataInterface[];
    status: RequestState;
    error: null | string;
    filters: FilterInitInterface;
    productById: ProductDataInterface | {};
    productById_status: RequestState;
    addedCommentFlag: boolean;
    mayLikeProducts: ProductDataInterface[];
    mayLikeStatus: RequestState;
    refreshProducts: boolean;
}
