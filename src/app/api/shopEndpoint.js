import { api } from "./api";

const website = api.injectEndpoints({
  endpoints: (builder) => ({
    // retrive seller acount information
    //like login ,username , configration and product ......
    retriveAccountInfo: builder.query({
      query: () => `api/websites`,
      providesTags: ["non_refresh"],
    }),
    // create account , add item and another
    createAccount: builder.mutation({
      query: (collection, data) => ({
        url: `api/${collection}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["non_refresh"],
    }),
  }),
});
export const { useRetriveAccountInfoQuery, useCreateAccountMutation } = website;

// getWebUsername: builder.query({
//   query: (username) => `websites?username=${username}`,
//   providesTags: ["non_refresh"],
// }),
