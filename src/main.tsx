import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import HomeRoute from "./routes/home";
import AboutRoute from "./routes/about";
import AddRoute from "./routes/add";
import ProductsRoute, { loader as productsLoader } from "./routes/products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeRoute />,
  },
  {
    path: "/about",
    element: <AboutRoute />,
  },
  {
    path: "/add",
    element: <AddRoute />,
  },
  {
    path: "/products",
    element: <ProductsRoute />,
    loader: productsLoader,
  },
  // {
  //   path: "/products/:productId",
  //   element: <ProductIdRoute />,
  //   loader: productIdLoader,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
