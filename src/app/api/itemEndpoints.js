import { api } from "./api";

const items = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllItems: builder.query({
      query: () => "/items",
      providesTags: ["non_refrsh"],
    }),
  }),
});

export const { useGetAllItemsQuery } = items;
