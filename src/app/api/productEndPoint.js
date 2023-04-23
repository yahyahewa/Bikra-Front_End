import { api } from "./api";

const product = api.injectEndpoints({
  endpoints: (builder) => ({
    getItems: builder.query({
      query: () => `products/`,
      providesTags: ["non_refresh"],
    }),
    // retrive some item for home page
    getSomeItemForHome: builder.query({
      query: () => `api/products/`,
      providesTags: ["non_refresh"],
    }),
  }),
});

export const { useGetItemsQuery, useGetSomeItemForHomeQuery } = product;
