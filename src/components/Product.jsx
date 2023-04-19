import { Favorite, FavoriteBorderOutlined } from "@material-ui/icons";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ShopContext } from "../context/shop-context";
import useAmplitude from "../hooks/use-amplitude";

const Container = styled.div`
  flex: 1;
  margin: 50px 25px 5px 25px;
  min-width: 280px;
  max-width: 280px;
  height: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-bottom: 1px solid #c5c5c5;
  border-right: 1px solid #c5c5c5;
`;

const ProductContainer = styled.div`
  cursor: pointer;
`;

const Image = styled.img`
  max-height: 300px;
  width: 100%;
  object-fit: contain;
  z-index: 2;
`;

const Info = styled.div``;

const Title = styled.div`
  height: 45px;
  font-weight: 500;
  margin: 20px 10px 5px 10px;
`;

const Nut = styled.img`
  width: 100px;
  margin-left: -3px;
`;

const Price = styled.div`
  color: #232323;
  margin: 0 5px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin: 10px 20px 10px 10px;
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
  transition: all 0.3s ease;
  &:hover {
    background-color: #194919;
  }
`;

const Icon = styled.div`
  margin: 10px 20px 10px 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const Product = (props) => {
  const { id, title, price, img, nut } = props.data;
  const { addToCart, cartItems, wishItems, addToWish } =
    useContext(ShopContext);
  const navigate = useNavigate();
  const selected = wishItems[id];
  const cartItemAmount = cartItems[id];

  const { sendLog } = useAmplitude({
    product_id: id,
    product_name: title,
    page_name: "product_detail_page",
  });

  return (
    <Container>
      <ProductContainer
        onClick={() => {
          navigate("/product/" + id);
          sendLog("product_click", {
            label: `Clicked on Product ${title}`,
          });
        }}
        onMouseOver={() => {
          sendLog("product_hover", {
            label: `Hovered on Product ${title}`,
          });
        }}
      >
        <Image src={img} />
        <Info>
          <Title>{title}</Title>
          {process.env.REACT_APP_NUTRITION_SCORE === "SHOW" && (
            <Nut src={nut}></Nut>
          )}
          <Price>${price}</Price>
        </Info>
      </ProductContainer>
      <ButtonContainer>
        <Icon>
          {selected > 0 ? (
            <Favorite />
          ) : (
            <FavoriteBorderOutlined
              onClick={() => {
                sendLog("add_wishlist_button_click", {
                  label: `Clicked the button to add ${title} to the Wishlist `,
                });
                addToWish(id);
              }}
            />
          )}
        </Icon>
        <Button
          onClick={() => {
            sendLog("add_cart_button_click", {
              label: `Clicked the button to add ${title} to the Cart `,
            });
            addToCart(id);
          }}
        >
          Add to cart {cartItemAmount > 0 && <> ({cartItemAmount}) </>}
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default Product;
