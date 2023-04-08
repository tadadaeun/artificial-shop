import { useContext, useState } from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import { PRODUCTS } from "../data";
import { mobile } from "../responsive";
import { CartItem } from "../components/CartItem";
import { ShopContext } from "../context/shop-context";
import { useNavigate } from "react-router-dom";
import WishListSuggestion from "../components/WishListSuggestion";
import ReactGA from "react-ga4";

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
  ${mobile({ display: "none" })}
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
  ${mobile({ flexDirection: "column" })}
`;

const ProductContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const WhishListContainer = styled.div`
  width: 70vw;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 15px;
  margin-top: 20px;
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
  background-color: #b3b1b1ab;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AlertText = styled.div`
  width: 80%;
`;

const AlertButton = styled.button``;

const Cart = () => {
  const {
    wishItems,
    cartItems,
    getTotalCartPrice,
    getTotalCartAmount,
    getTotalWishAmount,
  } = useContext(ShopContext);
  const totalPrice = getTotalCartPrice();
  const totalAmount = getTotalCartAmount();
  const totalWishAmount = getTotalWishAmount();

  const navigate = useNavigate();

  const [alert, SetAlert] = useState(false);

  // TODO: Add Selected Product Item id
  const handleCheckoutEvent = () => {
    // ReactGA.event({
    //   category: "Cart",
    //   action: "checkout button click",
    //   label: `Clicked Checkout button`,
    //   value: id,
    // });
  };

  const alertHandler = () => {
    SetAlert((alert) => !alert);
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
            <WhishListContainer>
              <WhishListTitle>Saved for later</WhishListTitle>
              <WhishListItems>
                {PRODUCTS.map((product) => {
                  if (wishItems[product.id] !== 0) {
                    return (
                      <WishListSuggestion data={product} key={product.id} />
                    );
                  }
                })}
              </WhishListItems>
            </WhishListContainer>
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
      <AlertContainer style={{ visibility: alert ? "visible" : "hidden" }}>
        <AlertText>
          Please ensure that you have only put one item in your cart. If you
          have added more than one item, kindly remove the extra items and keep
          only one.
        </AlertText>
        <AlertButton onClick={alertHandler}>Go back to cart</AlertButton>
      </AlertContainer>
    </Container>
  );
};

export default Cart;
