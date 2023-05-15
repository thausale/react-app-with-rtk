import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

import appStoreReducer from "./appStoreSlice";
import friendApi from "./apiSlice";
import cocktailApi from "./cocktailApiSlice";

const store = configureStore({
  reducer: {
    appStore: appStoreReducer,
    [friendApi.reducerPath]: friendApi.reducer,
    [cocktailApi.reducerPath]: cocktailApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(friendApi.middleware, cocktailApi.middleware), // include the friendApi middleware

  devTools: true,
});
setupListeners(store.dispatch);
export default store;
