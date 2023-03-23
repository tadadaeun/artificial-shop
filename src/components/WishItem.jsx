import React, { useContext } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { ShopContext } from "../context/shop-context";

const ProductContainer = styled.div``;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
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
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.input`
  font-size: 24px;
  margin: 5px;
  width: 70px;
  text-align: center;
  ${mobile({ margin: "5px 15px" })}
`;

const RemoveBtn = styled.button``;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Button = styled.div`
  padding: 10px;
  background-color: #006600;
  font-size: 13px;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 300;
  &:hover {
    background-color: #194919;
  }
`;

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
      <PriceDetail>
        <ProductAmountContainer>
          <RemoveBtn onClick={() => removeFromWish(id)}>
            Remove from wishlist
          </RemoveBtn>
          <Button onClick={() => addToCart(id)}>Add to cart</Button>
        </ProductAmountContainer>
        <ProductPrice>$ {price}</ProductPrice>
      </PriceDetail>
    </ProductContainer>
  );
};

export default WishItem;
