import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_ENDPOINT = '/comments';
const BASE_URL = 'https://65882b2e90fa4d3dabf98aaa.mockapi.io/';

export const commentApi = createApi({
  reducerPath: 'comments',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ['Comments'],
  endpoints: builder => ({
    getComments: builder.query({
      query: () => ({ url: API_ENDPOINT }),
      providesTags: ['Comments'],
    }),
  }),
});

export const { useGetCommentsQuery } = commentApi;
