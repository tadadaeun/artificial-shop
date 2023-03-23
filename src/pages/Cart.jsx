import { useContext } from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import { PRODUCTS } from "../data";
import { mobile } from "../responsive";
import { CartItem } from "../components/CartItem";
import { ShopContext } from "../context/shop-context";
import { useNavigate } from "react-router-dom";
import WishListSuggestion from "../components/WishListSuggestion";

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
  width: 100%;
  border: 1px solid gray;
  border-radius: 6px;
  margin: 30px 0;
`;

const WhishListItems = styled.div`
  display: flex;
  padding: 20px;
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
  height: 50vh;
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

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopTexts>
            <TopText>Shopping Bag({totalAmount})</TopText>
            <TopText onClick={() => navigate("/WishList")}>
              Your Wishlist ({totalWishAmount})
            </TopText>
          </TopTexts>
        </Top>
        <Bottom>
          <ProductContainer>
            {totalPrice > 0 ? (
              <Info>
                <Product>
                  {PRODUCTS.map((product) => {
                    if (cartItems[product.id] && cartItems[product.id] !== 0) {
                      return <CartItem data={product} key={product.id} />;
                    }
                  })}
                </Product>
                <Hr />
              </Info>
            ) : (
              <h1>Your cart is empty! </h1>
            )}
            <WhishListContainer>
              <WhishListItems>
                <div>Saved for later</div>
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
            <SummaryItem type='total'>
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {totalPrice}</SummaryItemPrice>
            </SummaryItem>
            <CheckOutButton>CHECKOUT NOW</CheckOutButton>
            <ContinueButton onClick={() => navigate("/")}>
              Continue Shopping
            </ContinueButton>
          </Summary>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Cart;
