import {
  createBrowserRouter,
  //createRoutesFromElements,
  RouterProvider,
  //Route
} from "react-router-dom";

import React from "react";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import WishList from "./pages/WishList";
import { ShopContextProvider } from "./context/shop-context";
import ProductPage from "./pages/ProductPage";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/product", element: <ProductPage /> },
  { path: "/product/:id", element: <ProductPage /> },
  { path: "/cart", element: <Cart /> },
  { path: "/wishlist", element: <WishList /> },
]);

function App() {
  return (
    <ShopContextProvider>
      <RouterProvider router={router} />
    </ShopContextProvider>
  );
}

export default App;
