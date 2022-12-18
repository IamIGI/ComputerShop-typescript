import axios from 'axios';
import { BASE_URL } from 'data/URL';

interface getAllComments {
    productId: string;
    filters: {
        rating: number;
        confirmed: boolean;
    };
    sortBy: string;
}

interface addLike {
    productId: string;
    commentId: string;
    userId: string;
    likes: {
        up: boolean;
    };
}

const commentApi = axios.create({
    baseURL: `${BASE_URL}/comments/`,
    headers: { 'Content-Type': 'application/json' },
});

export const getAllCommentsAPI = async (data: getAllComments) => {
    try {
        const response = await commentApi.post(`/get`, data);
        return response.data;
    } catch (err) {
        if (axios.isAxiosError(err)) {
            if (err.response) {
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);
            } else {
                console.log(`error: ${err.message}`);
            }
        } else {
            throw new Error('different error than axios');
        }
    }
};

export const getProductAverageScore = async (productId: string) => {
    try {
        const response = await commentApi.get(`/averageScore/${productId}`);
        return response.data;
    } catch (err) {
        if (axios.isAxiosError(err)) {
            if (err.response) {
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);
            } else {
                console.log(`error: ${err.message}`);
            }
        } else {
            throw new Error('different error than axios');
        }
    }
};
//you sending FormData
export const sendCommentAPI = async (data: object) => {
    try {
        const response = await commentApi.post('/add', data);
        return response.data;
    } catch (err) {
        if (axios.isAxiosError(err)) {
            if (err.response) {
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);
            } else {
                console.log(`error: ${err.message}`);
            }
        } else {
            throw new Error('different error than axios');
        }
    }
};

export const addLike = async (data: addLike) => {
    try {
        const response = await commentApi.post('/like', data);
        return response.data;
    } catch (err) {
        if (axios.isAxiosError(err)) {
            if (err.response) {
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);
            } else {
                console.log(`error: ${err.message}`);
            }
        } else {
            throw new Error('different error than axios');
        }
    }
};
