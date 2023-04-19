import React, { useEffect } from "react";
import { Add, Remove } from "@material-ui/icons";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import ProductImage from "../components/ProductImage";
import { PRODUCTS } from "../data";
import { ShopContext } from "../context/shop-context";
import { useContext } from "react";
import { mobile } from "../responsive";
import ProductDescription from "../components/ProductDescription";
import useAmplitude from "../hooks/use-amplitude";

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Top = styled.div`
  padding: 50px;
  display: flex;
  height: 70vh;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 300;
`;

const Nut = styled.img`
  width: 100px;
`;

const Price = styled.div`
  font-weight: 100;
  font-size: 40px;
`;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  cursor: pointer;
  margin-top: 50px;
`;

const ProductAmount = styled.input`
  font-size: 24px;
  margin: 5px;
  width: 70px;
  text-align: center;
  ${mobile({ margin: "5px 15px" })}
`;

const Button = styled.button`
  min-width: 200px;
  padding: 15px;
  background-color: #006600;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 500;
  margin: 50px 30px 0 30px;
  &:hover {
    background-color: #194919;
  }
`;

const Bottom = styled.div``;

const ProductPage = () => {
  const { pathname } = useLocation();

  const splits = pathname.split("/");

  const prodId = Number(splits[splits.length - 1]);

  const { id, title, price, detailImages, nut } = PRODUCTS[prodId - 1];

  const { cartItems, updateCartItemCount } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];
  const [count, setCount] = React.useState(cartItemAmount || 1);

  const navigate = useNavigate();

  const { sendLog } = useAmplitude({
    product_id: id,
    product_name: title,
    page_name: "product_detail_page",
  });

  const onImageClick = (isNutriImages) => {
    if (isNutriImages) {
      sendLog("product_nutrition_image_clicked");
    } else {
      sendLog("product_image_clicked");
    }
  };

  const onCheckoutClick = () => {
    sendLog("product_checkout_clicked", {
      label: `Clicked Checkout button on the Product ${id} detail page`,
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <Container>
      <Announcement />
      <Navbar id={id} />
      <Wrapper>
        <Top>
          <ProductImage detailImages={detailImages} onClick={onImageClick} />
          <InfoContainer>
            <Title>{title}</Title>
            {process.env.REACT_APP_NUTRITION_SCORE === "SHOW" && (
              <Nut src={nut}></Nut>
            )}
            <Price>${price}</Price>
            <AddContainer>
              <AmountContainer>
                <Remove
                  onClick={() => {
                    if (count !== 0) {
                      setCount(count - 1);
                    }
                  }}
                />
                <ProductAmount value={count} />
                <Add onClick={() => setCount(count + 1)} />
              </AmountContainer>
              <Button
                onClick={() => {
                  if (count > 0) {
                    onCheckoutClick();
                    updateCartItemCount(Number(count), id);
                  } else {
                    alert("Please select the quantity");
                  }
                }}
              >
                Check out in my cart
              </Button>
            </AddContainer>
          </InfoContainer>
        </Top>
        <Bottom>
          <ProductDescription />
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default ProductPage;
