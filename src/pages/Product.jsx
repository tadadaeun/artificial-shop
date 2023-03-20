import { Add, Remove } from "@material-ui/icons";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import ProductImage from "../components/ProductImage";
import { PRODUCTS } from "../data";

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

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 2px solid #006600;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`;

const Button = styled.button`
  padding: 15px;
  background-color: #006600;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 500;
  margin-top: 50px;
  &:hover {
    background-color: #194919;
  }
`;

const Product = () => {
  const { pathname } = useLocation();

  const splits = pathname.split("/");

  const prodId = Number(splits[splits.length - 1]);

  const { title, price, detailImages } = PRODUCTS[prodId - 1];

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
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default Product;
