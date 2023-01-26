import { authApi } from 'api/auth';

export const authApiSlice = authApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: '/auth',
                method: 'POST',
                body: { ...credentials },
            }),
        }),
    }),
});

export const { useLoginMutation } = authApiSlice; // useLoginMutation is automatically generated
