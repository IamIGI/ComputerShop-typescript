export interface DlaczegoMyInterface {
    description: {
        title: string;
        content: string[];
        extras: { title: string; description: string }[];
    };
}

export interface GdzieMnieZnajdzieszInterface {
    description: {
        title: string;
        content: { href: string; image: string; description: string }[];
    };
}

export interface MojaUczelniaInterface {
    description: {
        image: string;
        title: string;
        content: string[];
    };
}

export interface OAutorzeStronyInterface {
    description: {
        title: string;
        content: string[];
        extras: {
            image: string;
            name: string;
            libraries: string[];
            score: number;
        }[];
    };
}

export interface OnasInterface {
    description: {
        title: string;
        content: string[];
        extras: { numbers: number; description: string }[];
    };
}
