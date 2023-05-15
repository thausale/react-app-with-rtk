import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cocktailApi = createApi({
  reducerPath: "cocktail",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.thecocktaildb.com/api/json/v1/1/",
  }),
  fetchOnReconnect: true,
  fetchOnFocus: true,

  endpoints: (builder) => ({
    getCocktailByIngredient: builder.query({
      query: (ingredient) => `filter.php?i=${ingredient}`,
      transformResponse: (data) => {
        const drinks = data?.drinks;
        return drinks ? drinks : [];
      },
    }),
  }),
});

export const { useGetCocktailByIngredientQuery, getCocktailByIngredient } =
  cocktailApi;
export default cocktailApi;
