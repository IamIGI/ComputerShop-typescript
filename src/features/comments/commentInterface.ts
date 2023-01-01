import { RequestState } from 'interfaces/Articles.interfaces';
import { AverageScoreData, CommentsResponseInterface } from 'interfaces/Comments.interfaces';

export interface FilterInitInterface {
    productId: string;
    filters: { rating: number; confirmed: boolean };
    sortBy: string;
}

export interface InitialStateInterface {
    data: CommentsResponseInterface | {}; //{comments: [], images: [], length: 1. length_AllComments: 1}
    averageScore: { data: AverageScoreData | {}; status: RequestState };
    status: RequestState;
    error: null | string;
    filters: FilterInitInterface;
    images: {
        isOpenGallery: [boolean];
        chosenImageIndex: number;
    };
    refreshComments: boolean;
}
