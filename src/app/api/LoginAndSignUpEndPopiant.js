import { api } from "./api";

const userAccount = api.injectEndpoints({
  endpoints: (builder) => ({
    Login: builder.mutation({
      query: (data) => ({
        url: `auth/login`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["non_refresh"],
    }),
    SignUp: builder.mutation({
      query: (data) => ({
        url: `auth/signup`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["non_refresh"],
    }),
  }),
});

export const { useLoginMutation, useSignUpMutation } = userAccount;
