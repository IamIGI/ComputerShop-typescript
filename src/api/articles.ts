import axios from 'axios';
import { BASE_URL } from 'data/URL';

const articlesApi = axios.create({
    baseURL: `${BASE_URL}/articles/`,
    headers: { 'Content-Type': 'application/json' }, //changed from 'header'
});

const getAllArticles = async (type: string) => {
    try {
        const response = await articlesApi.get(`/all/${type}`);
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

const getArticlesForHomePage = async () => {
    try {
        const response = await articlesApi.get('homepage');
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

const getArticleById = async (id: string) => {
    try {
        const response = await articlesApi.get(`/${id}`);
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

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAllArticles, getArticleById, getArticlesForHomePage };
