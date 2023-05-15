import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  liked: [],
  data: [],
};

const appStoreSlice = createSlice({
  name: "appStore",
  initialState,
  reducers: {
    addToLiked: (state, action) => {
      const likedItem = state.data.find((item) => item._id === action.payload);
      if (likedItem) {
        state.liked.push(likedItem);
        state.data = state.data.filter((item) => item._id !== action.payload);
      }
    },
    removeFromLiked: (state, action) => {
      const unlikedItem = state.liked.find(
        (item) => item._id === action.payload
      );

      if (unlikedItem) {
        state.data.push(unlikedItem);
        state.liked = state.liked.filter((item) => item._id !== action.payload);
      }
    },
    updateData: (state, action) => {
      state.data = action.payload;
    },
    addToData: (state, action) => {
      state.data.push(action.payload);
    },
    initialiseData: (state, action) => {
      const data = action?.payload;
      if (data) {
        for (let i = 0; i < data.length; i++) {
          const obj = data[i];
          console.log(obj?.metadata?.liked);
          if (obj?.metadata?.liked) {
            state.liked.push(obj);
          } else {
            state.data.push(obj);
          }
        }
      }
    },
  },
});

export const {
  addToLiked,
  removeFromLiked,
  updateData,
  addToData,
  initialiseData,
} = appStoreSlice.actions;
export default appStoreSlice.reducer;
