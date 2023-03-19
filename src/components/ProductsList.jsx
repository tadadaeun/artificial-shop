import React from "react";
import styled from "styled-components";
import Products from "./Products";

const Container = styled.div``;

const Sort = styled.div`
  margin-left: 60px;
  margin-top: 90px;
  font-size: 20px;
`;

const ProductContainer = styled.div`
  width: 95vw;
  margin: 0 auto;
`;

const ProductsList = () => {
  return (
    <Container>
      <Sort>Sort By:</Sort>
      <ProductContainer>
        <Products />
      </ProductContainer>
    </Container>
  );
};

export default ProductsList;
