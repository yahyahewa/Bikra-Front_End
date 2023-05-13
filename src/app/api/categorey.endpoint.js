import { api } from "./api";

const categorey = api.injectEndpoints({
  endpoints: (builder) => ({
    getCategorey: builder.query({
      query: () => `category`,
      providesTags: ["non_refresh"],
    }),
    // add categorey
    addCategorey: builder.mutation({
      query: (data) => ({
        url: `/category/`,
        method: "POST",
        body: data,
        invalidatesTags: ["non_refresh"],
      }),
    }),
  }),
});

export const { useGetCategoreyQuery, useAddCategoreyMutation } = categorey;
