import { PRODUCTS } from "../data";
import styled from "styled-components";
import Product from "./Product";

const Container = styled.div`
  margin: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = () => {
  return (
    <Container>
      {PRODUCTS.map((product) => (
        <Product data={product} key={product.id} />
      ))}
    </Container>
  );
};

export default Products;
