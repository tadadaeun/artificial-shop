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

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 300;
`;

const Desc = styled.p`
  margin: 20px 0;
`;

const Price = styled.span`
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
  width: 300px;
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

const ProductPage = () => {
  const { pathname } = useLocation();

  const splits = pathname.split("/");

  const prodId = Number(splits[splits.length - 1]);

  const { id, title, price, detailImages } = PRODUCTS[prodId - 1];

  const { addToCart, cartItems, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);
  const cartItemAmount = cartItems[id];

  const navigate = useNavigate();

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ProductImage detailImages={detailImages} />
        <InfoContainer>
          <Title>{title}</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab porro
            autem quod, necessitatibus omnis officia soluta dolor adipisci sequi
            sed debitis commodi libero dolores totam fugit tempore incidunt,
            culpa quibusdam.
          </Desc>
          <Price>${price}</Price>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => removeFromCart(id)} />
              <ProductAmount
                value={cartItems[id]}
                onChange={(e) =>
                  updateCartItemCount(Number(e.target.value), id)
                }
              ></ProductAmount>
              <Add onClick={() => addToCart(id)} />
            </AmountContainer>
            <Button onClick={() => navigate("/cart")}>
              Check out in my cart
            </Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default ProductPage;
