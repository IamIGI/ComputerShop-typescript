import { RequestState } from 'features/articles/articleInterfaces';

export interface commentsInterface {
    likes: {
        up: number;
        down: number;
    };
    content: {
        rating: number;
        description: string;
    };
    image: {
        added: boolean;
        images: string[];
    };
    userId: string; // there could be error
    userName: string;
    date: string;
    confirmed: boolean;
    _id: string;
    usersWhoLiked: { userId: string; likeUp: boolean; _id: string }[] | [];
}

export interface commentsResponseInterface {
    comments: commentsInterface[] | {};
    images: string[] | [];
    length: number;
    length_AllComments: number;
}

export interface averageScoreData {
    averageScore_Stars: number;
    averageScore_View: number;
    eachScore: { number: number; percentage: number }[];
}

export interface filterInitInterface {
    productId: string;
    filters: { rating: number; confirmed: boolean };
    sortBy: string;
}

export interface initialStateInterface {
    data: commentsResponseInterface | {}; //{comments: [], images: [], length: 1. length_AllComments: 1}
    averageScore: { data: averageScoreData | {}; status: RequestState };
    status: RequestState;
    error: null | string;
    filters: filterInitInterface;
    images: {
        isOpenGallery: boolean[];
        chosenImageIndex: number;
    };
    refreshComments: boolean;
}
