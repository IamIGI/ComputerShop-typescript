import { RequestState } from './Articles.interfaces';

export interface ProductSpecification {
    processor: {
        description: string;
        brand: string;
        series: number;
        generation: number;
        cores: number;
        min_core_speed: number;
        max_core_speed: number;
        cache: number;
    };
    ram: {
        description: string;
        size: number;
        type: number;
        speed: number;
    };
    disk: {
        description: string;
        size: number;
        type: number;
        speed: number;
    };
    screen_diagonal: { description: string };
    resolution: { description: string; width: number; height: number };
    graphics_card: { brand: string; description: string; memory_size: number };
    communication: { com: string }[];
    ports: { port: string }[];
    battery_capacity: { description: string; capacity: number };
    color: { description: string };
    operating_system: { description: string };
    additional_information: { info: string }[];
    height: { description: string };
    width: { description: string };
    depth: { description: string };
    weigth: { description: string };
    supplied_accessories: { description: string };
    guarantees: { description: string; duration: string };
    producent_code: { description: string };
    Xigi_code: { description: string };
    numberOfOpinions: number;
    averageScore: number;
    averageStars: number;
}

export interface ProductDescription {
    image?: string;
    title: string;
    content: { p: string }[];
}

export interface ProductDataInterface {
    _id: string;
    averageScore?: number;
    averageStars?: number;
    numberOfOpinions?: number;
    code: number;
    name: string;
    price: number;
    special_offer: {
        mode: Boolean;
        price: number;
    };
    quantity: number;
    brand: string;
    prevImg: string;
    img: string[];
    prevDataProduct: {
        processor: string;
        ram: string;
        graphic_card: string[];
        screen_size: number[];
    };
    description: ProductDescription[];
    specification: ProductSpecification;
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

export interface ProductPrevDataInterface {
    name: string;
    prevImg: string;
    price: number;
    priceBeforeDiscount: number;
    isDiscount: boolean;
    quantity: number;
    _id: string;
}
