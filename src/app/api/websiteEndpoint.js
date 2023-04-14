import { api } from "./api";

const website = api.injectEndpoints({
  endpoints: (builder) => ({
    getWebInfo: builder.query({
      query: () => "websites",
      providesTags: ["non_refresh"],
    }),
    getWebUsername: builder.query({
      query: (username) => `websites?username=${username}`,
      providesTags: ["non_refresh"],
    }),
    addWebsite: builder.mutation({
      query: (WebData) => ({
        url: "websites",
        method: "POST",
        body: WebData,
      }),
      invalidatesTags: ["non_refresh"],
    }),
  }),
});
export const {
  useGetWebInfoQuery,
  useGetWebUsernameQuery,
  useAddWebsiteMutation,
} = website;
