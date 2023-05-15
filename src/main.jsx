import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FriendsList from "./view/FriendsList.jsx";
import CocktailApp from "./view/CocktailApp.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FriendsList />,
  },
  {
    path: "/cocktails",
    element: <CocktailApp />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
