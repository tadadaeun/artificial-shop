import { useContext, useState } from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import { PRODUCTS } from "../data";
import { mobile } from "../responsive";
import { CartItem } from "../components/CartItem";
import { ShopContext } from "../context/shop-context";
import { useLocation, useNavigate } from "react-router-dom";
import WishListSuggestion from "../components/WishListSuggestion";
import useAmplitude from "../hooks/use-amplitude";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopTexts = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  margin: 20px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProductContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const WhishListContainer = styled.div`
  width: 90vw;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 15px;
  margin: 20px;
`;

const WhishListTitle = styled.div`
  font-weight: 300;
  font-size: 1.6rem;
  margin: 10px;
`;

const WhishListItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
`;

const EmptyMessage = styled.div`
  font-weight: 300;
  font-size: 2rem;
  margin: 30px;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  ${mobile({ flexDirection: "column" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  width: 30vw;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 35vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const CheckOutButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #006600;
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: 600;
  &:hover {
    background-color: #194919;
  }
`;

const ContinueButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #b1b1b1;
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: 600;
  margin: 30px 0;
  &:hover {
    background-color: #006600;
  }
`;

const AlertContainer = styled.div`
  position: fixed;
  left: 25vw;
  top: 30%;
  width: 650px;
  height: 350px;
  background-color: #d0d0d0cc;
  border-radius: 10px;
  border: 0.5px solid lightgray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AlertText = styled.div`
  width: 80%;
`;

const AlertButton = styled.button`
  margin-top: 30px;
  width: 150px;
  padding: 10px;
  background-color: #006600;
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: 600;
  &:hover {
    background-color: #194919;
  }
`;

const RecommendingContainer = styled.div`
  width: 90vw;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 15px;
  margin: 20px;
`;

const RecommendingText = styled.div`
  font-weight: 300;
  font-size: 1.6rem;
  margin: 10px;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 10px;
  cursor: pointer;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Detail = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 180px;
`;

const RecommendingTitle = styled.div`
  width: 80%;
  margin-top: 15px;
`;

const Cart = (props) => {
  const { pathname } = useLocation();

  const splits = pathname.split("/");

  const prodId = Number(splits[splits.length - 1]);

  const {
    recommendingImage1,
    recommendingImage2,
    recommendingImage3,
    recommendingImage4,
  } = PRODUCTS[prodId - 1];

  const {
    wishItems,
    cartItems,
    getTotalCartPrice,
    getTotalCartAmount,
    getTotalWishAmount,
    getSelectedCartItemIds,
  } = useContext(ShopContext);
  const totalPrice = getTotalCartPrice();
  const totalAmount = getTotalCartAmount();
  const totalWishAmount = getTotalWishAmount();

  const navigate = useNavigate();

  const [alert, SetAlert] = useState(false);

  const { sendLog } = useAmplitude({
    page_name: "cart_page",
  });

  const handleCheckoutEvent = (id) => {
    sendLog("checkout button click", {
      label: `Clicked Checkout button`,
      product_id: id,
    });
  };

  const alertHandler = () => {
    const selectedItems = getSelectedCartItemIds();
    if (totalAmount === 1) {
      handleCheckoutEvent(selectedItems[0]);
      navigate("/finish");
    } else {
      SetAlert((alert) => !alert);
    }
  };

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopTexts>
            <TopText>Shopping Bag({totalAmount})</TopText>
            <TopText>Your Wishlist ({totalWishAmount})</TopText>
          </TopTexts>
        </Top>
        <Bottom>
          <ProductContainer>
            {totalPrice > 0 ? (
              <Info>
                <Product>
                  {PRODUCTS.map((product) => {
                    if (cartItems[product.id] !== 0) {
                      return <CartItem data={product} key={product.id} />;
                    }
                  })}
                </Product>
              </Info>
            ) : (
              <EmptyMessage>Your cart is empty! </EmptyMessage>
            )}
          </ProductContainer>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {totalPrice}</SummaryItemPrice>
            </SummaryItem>
            <CheckOutButton onClick={alertHandler}>CHECKOUT NOW</CheckOutButton>
            <ContinueButton onClick={() => navigate("/home")}>
              Continue Shopping
            </ContinueButton>
          </Summary>
        </Bottom>
      </Wrapper>
      <WhishListContainer>
        <WhishListTitle>Saved for later</WhishListTitle>
        <WhishListItems>
          {PRODUCTS.map((product) => {
            if (wishItems[product.id] !== 0) {
              return <WishListSuggestion data={product} key={product.id} />;
            }
          })}
        </WhishListItems>
      </WhishListContainer>
      <RecommendingContainer>
        <RecommendingText>Featured Products</RecommendingText>
        <ImageContainer>
          <Detail>
            <Image
              src={recommendingImage1}
              onClick={() => {
                navigate("/product/1");
              }}
            ></Image>
            <RecommendingTitle>
              Post Shredded Wheat Big Biscuit Whole Grain Cereal
            </RecommendingTitle>
          </Detail>
          <Detail>
            <Image
              src={recommendingImage2}
              onClick={() => {
                navigate("/product/2");
              }}
            ></Image>
            <RecommendingTitle>
              Kellogg's Frosted Mini-Wheats Cereal
            </RecommendingTitle>
          </Detail>
          <Detail>
            <Image
              src={recommendingImage3}
              onClick={() => {
                navigate("/product/3");
              }}
            ></Image>
            <RecommendingTitle>
              Kashi Go, Breakfast Cereal, Original
            </RecommendingTitle>
          </Detail>
          <Detail>
            <Image
              src={recommendingImage4}
              onClick={() => {
                navigate("/product/4");
              }}
            ></Image>
            <RecommendingTitle>
              Kellogg's All-Bran Original Cold Breakfast Cereal
            </RecommendingTitle>
          </Detail>
        </ImageContainer>
      </RecommendingContainer>
      <AlertContainer style={{ visibility: alert ? "visible" : "hidden" }}>
        <AlertText>
          Please ensure that you have only put one item in your cart. <br />
          <br /> If you have added more than one item, kindly remove the extra
          items and keep only one.
        </AlertText>
        <AlertButton onClick={alertHandler}>Go back to cart</AlertButton>
      </AlertContainer>
    </Container>
  );
};

export default Cart;
