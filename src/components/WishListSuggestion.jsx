import React, { useContext } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Add, Remove } from "@material-ui/icons";
import { ShopContext } from "../context/shop-context";

const ProductContainer = styled.div``;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 150px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const Button = styled.button`
  max-width: 130px;
  margin-bottom: 40px;
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

export const WishItem = (props) => {
  const { id, title, price, img } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];

  return (
    <ProductContainer>
      <ProductDetail>
        <Image src={img} />
        <Details>
          <ProductName>
            <b>{title}</b>
          </ProductName>
        </Details>
        <Button onClick={() => addToCart(id)}>Add to cart</Button>
      </ProductDetail>
    </ProductContainer>
  );
};

export default WishItem;
