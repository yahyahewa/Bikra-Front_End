import { api } from "./api";
const userAccount = api.injectEndpoints({
  endpoints: (builder) => ({
    Login: builder.mutation({
      query: (data) => ({
        url: `users/login`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["non_refresh"],
    }),
    SignUp: builder.mutation({
      query: (data) => ({
        url: `users/signup`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["non_refresh"],
    }),
    getUserData: builder.query({
      query: (token) => ({
        url: `users/profile`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    // retrive user information with token
    getUserInformation: builder.query({
      query: () => ({
        url: `users/login`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user_token")}`,
        },
        providesTags: ["non_refresh"],
      }),
    }),
  }),
});

export const {
  useGetUserInformationQuery,
  useLoginMutation,
  useGetUserDataQuery,
  useSignUpMutation,
} = userAccount;
