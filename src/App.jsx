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
import { ShopContextProvider } from "./context/shop-context";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/product", element: <Product /> },
  { path: "/product/:id", element: <Product /> },
  { path: "/cart", element: <Cart /> },
  { path: "/cart2", element: <Cart /> },
]);

function App() {
  return (
    <ShopContextProvider>
      <RouterProvider router={router} />
    </ShopContextProvider>
  );
}

export default App;
