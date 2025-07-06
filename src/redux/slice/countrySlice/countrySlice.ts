import { baseApi } from "../../baseApi/baseApi";

export const countrySlice = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllMobile: builder.query({
      query: () => "/objects",
    }),

    getAllCountry: builder.query({
      query: () => "",
      providesTags: ["country"],
    }),
  }),
});

export const { useGetAllMobileQuery, useGetAllCountryQuery } = countrySlice;
