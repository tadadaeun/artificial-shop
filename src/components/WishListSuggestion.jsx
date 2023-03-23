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

export const WishItem = (props) => {
  const { id, title, price, img } = props.data;
  const { wishItems, removeFromWish, addToCart, cartItems } =
    useContext(ShopContext);
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
      </ProductDetail>
    </ProductContainer>
  );
};

export default WishItem;
