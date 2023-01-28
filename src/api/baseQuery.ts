import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';
import { BASE_URL } from 'data/URL';

const baseQuery = fetchBaseQuery({
    baseUrl: BASE_URL,
});

export const basicApi = createApi({
    baseQuery: baseQuery,
    tagTypes: ['AccountOpinions', 'test'],
    endpoints: (builder) => ({}),
});
