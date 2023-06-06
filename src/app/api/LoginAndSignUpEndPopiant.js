import { api } from "./api";
const userAccount = api.injectEndpoints({
  endpoints: (builder) => ({
    Login: builder.mutation({
      query: (data) => ({
        url: `api/users/login`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["non_refresh"],
    }),
    SignUp: builder.mutation({
      query: (data) => ({
        url: `api/users/signup`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["non_refresh"],
    }),
    getUserData: builder.query({
      query: (token) => ({
        url: `api/users/profile`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    // retrive user information with token
    getUserInformation: builder.query({
      query: () => ({
        url: `api/users/login`,
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
