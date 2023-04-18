import React, { useContext } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Add, DeleteOutline, Remove } from "@material-ui/icons";
import { ShopContext } from "../context/shop-context";

const ProductContainer = styled.div`
  width: 300px;
  margin: 25px;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 400px;
`;

const Image = styled.img`
  width: 150px;
`;

const Details = styled.div`
  width: 80%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  max-width: 130px;
  margin: 0 20px;
  padding: 10px;
  background-color: #006600;
  font-size: 13px;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 300;
  transition: all 0.3s ease;
  &:hover {
    background-color: #194919;
  }
`;

const RemoveButton = styled.button``;

export const WishItem = (props) => {
  const { id, title, price, img } = props.data;
  const { addToCart, cartItems, removeFromWish } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];

  return (
    <ProductContainer>
      <ProductDetail>
        <Image src={img} />
        <Details>
          <ProductName>{title}</ProductName>
        </Details>
        <ButtonContainer>
          <Button onClick={() => addToCart(id)}>Add to cart</Button>
          <DeleteOutline onClick={() => removeFromWish(id)}></DeleteOutline>
        </ButtonContainer>
      </ProductDetail>
    </ProductContainer>
  );
};

export default WishItem;
