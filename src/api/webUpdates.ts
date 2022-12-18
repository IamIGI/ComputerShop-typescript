import axios from 'axios';
import { BASE_URL } from 'data/URL';

const webUpdatesApi = axios.create({
    baseURL: `${BASE_URL}/webUpdates/`,
    headers: { 'Content-Type': 'application/json' },
});

export const getWebUpdates = async () => {
    try {
        const response = await webUpdatesApi.get('/get');
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
