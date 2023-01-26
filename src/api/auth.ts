import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setCredentials, logOut } from 'features/auth/authSlice';
import { BASE_URL } from 'data/URL';
import { RootState } from 'app/store';

const baseQuery = fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: 'include', //send back http secure cookie
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.accessToken;
        if (token) {
            headers.set('authorization', `Bearer ${token}`);
        }
        return headers;
    },
});

//@ts-ignore
const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);
    if (result?.error !== undefined && 'originalStatus' in result?.error! && result?.error?.originalStatus === 403) {
        console.log('sending refresh token');
        //send refresh token to get new access token
        const refreshResult = await baseQuery('/refresh', api, extraOptions);
        console.log(refreshResult);
        if (refreshResult?.data) {
            const userName = api.getState().auth.userName;
            //store the new token
            api.dispatch(setCredentials({ ...refreshResult.data, userName }));
            //retry the original query with new access token
            result = await baseQuery(args, api, extraOptions);
        } else {
            api.dispatch(logOut());
        }
    }
    return result;
};

export const authApi = createApi({
    baseQuery: baseQueryWithReauth,
    endpoints: (builder) => ({}),
});
