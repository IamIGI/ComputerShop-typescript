export interface DlaczegoMyInterface {
    title: string;
    content: string[];
    extras: { title: string; description: string }[];
}

export interface GdzieMnieZnajdzieszInterface {
    title: string;
    content: { href: string; image: string; description: string }[];
}

export interface MojaUczelniaInterface {
    image: string;
    title: string;
    content: string[];
}

export interface OAutorzeStronyInterface {
    title: string;
    content: string[];
    extras: {
        image: string;
        name: string;
        libraries: string[];
        score: number;
    }[];
}

export interface OnasInterface {
    title: string;
    content: string[];
    extras: { numbers: number; description: string }[];
}

export interface AboutUsDataInterface {
    description: [
        OnasInterface,
        DlaczegoMyInterface,
        OAutorzeStronyInterface,
        GdzieMnieZnajdzieszInterface,
        MojaUczelniaInterface
    ];
    lastUpdate: string;
    pageName: string;
    _id: string;
}
