import { api } from "./api";

const items = api.injectEndpoints({
  endpoints: (builder) => ({
    getItems: builder.query({
      query: () => "items",
      providesTags: ["non_refresh"],
    }),
    getorder: builder.query({
      query: () => "order",
      providesTags: ["non_refresh"],
    }),
    getSingleItem: builder.query({
      query: (id) => `items?id=${id}`,
      providesTags: ["non_refresh"],
    }),
    addToCart: builder.mutation({
      query: (ItemData) => ({
        url: "order",
        method: "POST",
        body: ItemData,
      }),
      invalidatesTags: ["non_refresh"],
    }),
    removeOrder: builder.mutation({
      query: ({ id }) => ({
        url: `order/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["non_refresh"],
    }),
    checkout: builder.mutation({
      query: (data) => ({
        url: `order/${data.id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["non_refresh"],
    }),
  }),
});
export const {
  useGetItemsQuery,
  useGetSingleItemQuery,
  useAddToCartMutation,
  useGetorderQuery,
  useRemoveOrderMutation,
  useCheckoutMutation,
} = items;
