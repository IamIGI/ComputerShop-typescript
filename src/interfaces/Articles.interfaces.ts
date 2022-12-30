interface ArticleDescriptionContent {
    p: string;
}

export interface ArticleDescription {
    image?: string;
    title: string;
    content: ArticleDescriptionContent[];
}

export interface ArticleApiResponse {
    _id: string;
    type: string;
    author: string;
    createdAt: string;
    prevImage: string;
    title: string;
    prevDescription: string;
    description: ArticleDescription[];
    updatedAt: string;
}

export type RequestState = 'idle' | 'loading' | 'succeeded' | 'failed';

export interface InitialState {
    data: ArticleApiResponse[];
    status: RequestState;
    articleByIdStatus: RequestState;
    error: undefined | string | null; // ?
}
