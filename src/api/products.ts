import axios from 'axios';
import { BASE_URL } from 'data/URL';

export default axios.create({
    baseURL: `${BASE_URL}/products/`,
    headers: { 'Content-Type': 'application/json' },
});

const productApi = axios.create({
    baseURL: `${BASE_URL}/products/`,
    headers: { 'Content-Type': 'application/json' },
});

export const getProduct = async (code: string) => {
    try {
        const response = await productApi.get(`/${code}`);
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

const hotShootApi = axios.create({
    baseURL: `${BASE_URL}/hotShoot/`,
    headers: { 'Content-Type': 'application/json' },
});

export const getHotShootPromotion = async () => {
    try {
        const response = await hotShootApi.get('/get');
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
