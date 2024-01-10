import { USERS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => {
        console.log("Request Data:", data, USERS_URL); // Log the data being sent to the server
        return {
          url: `${USERS_URL}/auth`,
          method: 'POST',
          body: data,
        };
      },
    }),
    register: builder.mutation({
      query: (data) => {
        console.log("Request Data:", data, USERS_URL); // Log the data being sent to the server
        return {
          url: `${USERS_URL}`,
          method: 'POST',
          body: data,
        };
      },
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: "POST",
      }),
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation, useRegisterMutation } =
  usersApiSlice;
