import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5173/items",
  }),
  tagTypes: ["non_refresh"],
  endpoints: () => ({}),
});
