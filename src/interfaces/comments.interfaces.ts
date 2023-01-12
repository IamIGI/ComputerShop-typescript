export interface CommentInterface {
    _id: string;
    userId: string;
    userName: string;
    date: string;
    confirmed: boolean;
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
    usersWhoLiked: { userId: string; likeUp: boolean; _id: string }[] | [];
    length?: number;
}

export interface CommentsResponseInterface {
    comments: CommentInterface[] | {};
    images: string[];
    length: number;
    length_AllComments: number;
}

export interface AverageScoreData {
    averageScore_Stars: number;
    averageScore_View: number;
    eachScore: { number: number; percentage: number }[];
    numberOfComments?: number;
}
