import React, { createContext, useState } from "react";
import { PRODUCTS } from "../data";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const getDefaultWish = () => {
  let wish = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    wish[i] = 0;
  }
  return wish;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [wishItems, setWishItems] = useState(getDefaultWish());

  const getTotalCartPrice = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += Number((cartItems[item] * itemInfo.price).toFixed(2));
      }
    }
    return totalAmount;
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item];
      }
    }
    return totalAmount;
  };

  const getTotalWishAmount = () => {
    let totalWishAmount = 0;
    for (const item in wishItems) {
      if (wishItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalWishAmount += wishItems[item];
      }
    }
    return totalWishAmount;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeCartItem = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: 0 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const addToWish = (itemId) => {
    setWishItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromWish = (itemId) => {
    setWishItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateWishItemCount = (newAmount, itemId) => {
    setWishItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    removeCartItem,
    updateCartItemCount,
    getTotalCartPrice,
    getTotalCartAmount,
    wishItems,
    addToWish,
    removeFromWish,
    setWishItems,
    getTotalWishAmount,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
