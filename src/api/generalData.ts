import axios from 'axios';
import { BASE_URL } from 'data/URL';
const generalDataApi = axios.create({
    baseURL: `${BASE_URL}/generaldatas/`,
    headers: { 'Content-Type': 'application/json' }, //changed from 'header'
});

export const getGeneralDatas = async (type: string) => {
    try {
        const response = await generalDataApi.get(`/get/${type}`);
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
