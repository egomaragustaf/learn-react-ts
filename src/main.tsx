import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import HomeRoute from "./routes/home";
import AboutRoute from "./routes/about";
import ProductsRoute, { loader as productsLoader } from "./routes/products";
import ProductIdRoute, { loader as productIdLoader } from "./routes/productId";
import ProductsSearchRoute, {
  loader as productsSearchLoader,
} from "./routes/productsSearch";

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
    path: "/products",
    element: <ProductsRoute />,
    loader: productsLoader,
  },
  {
    path: "/products/:productId",
    element: <ProductIdRoute />,
    loader: productIdLoader,
  },
  {
    path: "/search",
    element: <ProductsSearchRoute />,
    loader: productsSearchLoader,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
