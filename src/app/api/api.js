import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    // baseUrl: "https://bikra-backend.onrender.com/api/",
    baseUrl: "http://localhost:4000/api/",
  }),
  tagTypes: ["non_refresh"],
  endpoints: () => ({}),
});
