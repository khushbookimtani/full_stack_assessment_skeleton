// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3030/user/' }),
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => `/find-all`,
    }),
    getUsersByHome: builder.query({
      query: (homeId) => `/find-by-home/${homeId}`,
    }),   
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllUsersQuery, useGetUsersByHomeQuery } = userApi