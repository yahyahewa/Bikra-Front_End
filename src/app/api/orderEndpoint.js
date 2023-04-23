import { api } from "./api";
// import objectToQuery from "object-to-querystring";

const order = api.injectEndpoints({
  endpoints: (builder) => ({
    getItems: builder.query({
      // query: (data) => `items?${objectToQuery(data)}`,
      query: (data) => `items`,
      providesTags: ["non_refresh"],
    }),
    // getorder: builder.query({
    //   query: () => "order",
    //   providesTags: ["non_refresh"],
    // }),
    // getSingleItem: builder.query({
    //   query: (id) => `items?id=${id}`,
    //   providesTags: ["non_refresh"],
    // }),
    // addToCart: builder.mutation({
    //   query: (ItemData) => ({
    //     url: "order",
    //     method: "POST",
    //     body: ItemData,
    //   }),
    //   invalidatesTags: ["non_refresh"],
    // }),
  }),
});
export const { useGet } = items;
