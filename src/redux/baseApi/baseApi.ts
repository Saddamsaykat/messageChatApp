// redux/api/baseApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../baseUrl/baseUrl";
// import { baseUrl } from "../baseUrl/baseUrl";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://restcountries.com/v3.1/all?fields=name,flags" }),
  tagTypes: ["country"],
  endpoints: () => ({}),
});