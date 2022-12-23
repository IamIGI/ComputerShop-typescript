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
    screen_diagonal: object;
    resolution: object;
    graphics_card: object;
    communication: object[];
    ports: object[];
    battery_capacity: object;
    color: object;
    operating_system: object;
    additional_information: object[];
    height: object;
    width: object;
    depth: object;
    weigth: object;
    supplied_accessories: object;
    guarantees: object;
    producent_code: object;
    Xigi_code: object;
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
