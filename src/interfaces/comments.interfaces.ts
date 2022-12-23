export interface Comment {
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

export interface CommentsResponseInterface {
    comments: Comment[] | {};
    images: string[] | [];
    length: number;
    length_AllComments: number;
}

export interface AverageScoreData {
    averageScore_Stars: number;
    averageScore_View: number;
    eachScore: { number: number; percentage: number }[];
}
