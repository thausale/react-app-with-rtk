import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const friendApi = createApi({
  reducerPath: "friend",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://david-api-git-main-thausale.vercel.app/",
  }),
  fetchOnReconnect: true,
  fetchOnFocus: true,
  endpoints: (builder) => ({
    getAll: builder.query({
      query: () => "/",
      transformResponse: (response) => response.data,
    }),

    addFriend: builder.mutation({
      query: (friend) => ({
        url: "/post",
        method: "POST",
        body: friend,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),

    addLikedMetadata: builder.mutation({
      query: (itemId) => ({
        url: `/patch/${itemId}`,
        method: "PATCH",
        body: {
          metadata: {
            liked: true,
          },
        },
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),

    removeLikedMetadata: builder.mutation({
      query: (itemId) => ({
        url: `/patch/${itemId}`,
        method: "PATCH",
        body: {
          metadata: {
            liked: false,
          },
        },
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),

    editFriend: builder.mutation({
      query: ({ itemId, ...body }) => ({
        url: `/patch/${itemId}`,
        method: "PATCH",
        body,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),

    deleteFriend: builder.mutation({
      query: (Id) => ({
        url: `/delete/${Id}`,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const {
  useGetAllQuery,
  useAddFriendMutation,
  useAddLikedMetadataMutation,
  useRemoveLikedMetadataMutation,
  useEditFriendMutation,
  useDeleteFriendMutation,
} = friendApi;
export const { addFriend } = friendApi.endpoints;
export default friendApi;
