import { baseApi } from "../../baseApi/baseApi";

export const countrySlice = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllMobile: builder.query({
      query: () => "/objects",
    }),
  }),
});

export const { useGetAllMobileQuery } = countrySlice;