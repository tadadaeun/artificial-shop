import {
  createBrowserRouter,
  //createRoutesFromElements,
  RouterProvider,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

import React from "react";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import WishList from "./pages/WishList";
import { ShopContextProvider } from "./context/shop-context";
import ProductPage from "./pages/ProductPage";
import IntroPage from "./pages/IntroPage";

import TrackingProvider from "./components/Amplitude";
import Finish from "./pages/Finish";

const router = createBrowserRouter([
  { path: "/", element: <IntroPage /> },
  { path: "/home", element: <Home /> },
  { path: "/product", element: <ProductPage /> },
  { path: "/product/:id", element: <ProductPage /> },
  { path: "/cart", element: <Cart /> },
  { path: "/wishlist", element: <WishList /> },
]);

function App({ Component, pageProps }) {
  return (
    <ShopContextProvider>
      <BrowserRouter>
        <TrackingProvider>
          <Routes>
            <Route path='/' element={<IntroPage />} />
            <Route path='/home' element={<Home />} />
            <Route path='/product' element={<ProductPage />} />
            <Route path='/product/:id' element={<ProductPage />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/wishlist' element={<WishList />} />
            <Route path='/finish' element={<Finish />} />
          </Routes>
        </TrackingProvider>
      </BrowserRouter>
    </ShopContextProvider>
  );
}

export default App;

//test text