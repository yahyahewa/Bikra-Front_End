import { api } from "./api";

const product = api.injectEndpoints({
  endpoints: (builder) => ({
    getProductOfUsers: builder.query({
      query: (id) => ({
        url: `products/user/${id}`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user_token")}`,
        },
        providesTags: ["non_refresh"],
      }),
    }),
    // order item
    orderItem: builder.mutation({
      query: (data) => ({
        url: `/orders/`,
        method: "PATCH",
        body: data,
        invalidatesTags: ["non_refresh"],
      }),
    }),
    // retrive some item for home page
    getSomeItemForHome: builder.query({
      query: (data) =>
        `/products?page=${data.page && data.page}&limit=${
          data.limit && data.limit
        }&search=${data.search && data.search}&category=${
          data.category && data.category
        }`,
      providesTags: ["non_refresh"],
    }),
    // retrive one item for single page
    getOneItemSinglePage: builder.query({
      query: (id) => `/products/${id}`,
      providesTags: ["non_refresh"],
    }),
    // add product
    addProduct: builder.mutation({
      query: (data) => ({
        url: `/products/`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user_token")}`,
        },
        method: "POST",
        body: data,
        invalidatesTags: ["non_refresh"],
      }),
    }),
    retriveOrder: builder.query({
      query: () => `/orders/`,
      providesTags: ["non_refresh"],
    }),
    //upload image
    uploadImage: builder.mutation({
      query: (file) => {
        const formData = new FormData();
        formData.append("photo", file[0]);
        return {
          url: `/products/upload`,
          headers: {
            Authorization: `Bearer ${localStorage.getItem("user_token")}`,
          },
          method: "POST",
          body: formData,
          invalidatesTags: ["non_refresh"],
        };
      },
    }),
  }),
});

export const {
  useGetProductOfUsersQuery,
  useGetSomeItemForHomeQuery,
  useGetOneItemSinglePageQuery,
  useOrderItemMutation,
  useRetriveOrderQuery,
  useAddProductMutation,
  useUploadImageMutation,
} = product;
