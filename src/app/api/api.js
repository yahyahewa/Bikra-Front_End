import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    // baseUrl: "http://localhost:3000/",
    baseUrl: "/data/db.json",
  }),
  tagTypes: ["non_refresh"],
  endpoints: () => ({}),
});
