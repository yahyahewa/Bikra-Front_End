import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: fetchBaseQuery({
    baseUrl: "http://localhost:3000/",
  }),
  tagTypes: ["non_refresh"],
  endpoints: () => ({}),
});
