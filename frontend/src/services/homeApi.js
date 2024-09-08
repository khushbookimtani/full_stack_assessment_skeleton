// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const homeApi = createApi({
  reducerPath: 'homeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3030/home/' }),
  endpoints: (builder) => ({
    getAllHomesByUser: builder.query({
      query: ({ userId, page = 1 }) => `/find-by-user/${userId}?page=${page}`,
    }),
    updateUsers: builder.mutation({
      query: ({ homeId, userIds }) => ({
        url: `/update-users`,
        method: 'PUT',
        body: { homeId, userIds },
      }),
    }),    
  }),
})

export const { useGetAllHomesByUserQuery, useUpdateUsersMutation } = homeApi
