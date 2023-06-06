import { api } from "./api";
// import objectToQuery from "object-to-querystring";

const order = api.injectEndpoints({
  endpoints: (builder) => ({
    getItems: builder.query({
      // query: (data) => `items?${objectToQuery(data)}`,
      query: (data) => `items`,
    }),
    addToCart: builder.mutation({
      query: (ItemData) => ({
        url: "order/",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user_token")}`,
        },
        method: "POST",
        body: ItemData,
      }),
    }),
    // retriver order items
    GetItemOrder: builder.query({
      query: (id) => ({
        url: `order/${id}`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user_token")}`,
        },
      }),
    }),
    // delete order item
    deleteOrderItem: builder.mutation({
      query: (id) => ({
        url: `api/order/${id}`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user_token")}`,
        },
        method: "DELETE",
      }),
    }),
    Checkout: builder.mutation({
      query: (data) => ({
        url: `api/order/`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user_token")}`,
        },
        method: "PATCH",
        body: data,
      }),
    }),
    // retrive order items into account
    getRetriveOrder: builder.query({
      query: (id) => ({
        url: `api/order/order/${id}`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user_token")}`,
        },
      }),
    }),
  }),
});

export const {
  useGetRetriveOrderQuery,
  useGetItemOrderQuery,
  useDeleteOrderItemMutation,
  useAddToCartMutation,
  useCheckoutMutation,
} = order;
