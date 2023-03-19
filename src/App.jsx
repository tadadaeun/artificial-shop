import {
  createBrowserRouter,
  //createRoutesFromElements,
  RouterProvider,
  //Route
} from "react-router-dom";

import React from "react";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Product from "./pages/Product";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/product", element: <Product /> },
  { path: "/cart", element: <Cart /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
