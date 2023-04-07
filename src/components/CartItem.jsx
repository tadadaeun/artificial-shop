import React, { useContext } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Add, Remove } from "@material-ui/icons";
import { ShopContext } from "../context/shop-context";

const ProductContainer = styled.div`
  border-bottom: 0.5px solid lightgray;
  padding: 20px;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
  margin-top: 20px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  margin-left: 200px;
`;

const ProductAmount = styled.input`
  font-size: 24px;
  margin: 5px;
  width: 70px;
  text-align: center;
  ${mobile({ margin: "5px 15px" })}
`;

const SaveButton = styled.button`
  width: 170px;
  padding: 10px;
  margin: 0 20px;
  background-color: #b1b1b1;
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: 600;
  &:hover {
    background-color: #006600;
  }
`;

const DeleteButton = styled.button`
  width: 170px;
  padding: 10px;
  margin: 0 20px;
  background-color: #b1b1b1;
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: 600;
  &:hover {
    background-color: #5e5d5d;
  }
`;

const ProductNut = styled.div``;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

export const CartItem = (props) => {
  const { id, title, price, img, nut } = props.data;
  const {
    cartItems,
    addToCart,
    removeFromCart,
    removeCartItem,
    updateCartItemCount,
    addToWish,
  } = useContext(ShopContext);

  return (
    <ProductContainer>
      <ProductDetail>
        <Image src={img} />
        <Details>
          <ProductName>
            <b>{title}</b>
          </ProductName>
          <ProductNut>{nut}</ProductNut>
          <ProductPrice>$ {price}</ProductPrice>
        </Details>
      </ProductDetail>
      <PriceDetail>
        <ProductAmountContainer>
          <Remove onClick={() => removeFromCart(id)} />
          <ProductAmount
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          ></ProductAmount>
          <Add onClick={() => addToCart(id)} />
          <SaveButton
            onClick={() => {
              removeCartItem(id);
              addToWish(id);
            }}
          >
            Save it for later
          </SaveButton>
          <DeleteButton
            onClick={() => {
              removeCartItem(id);
            }}
          >
            Delete from cart
          </DeleteButton>
        </ProductAmountContainer>
      </PriceDetail>
    </ProductContainer>
  );
};
