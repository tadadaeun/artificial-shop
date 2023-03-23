import { PRODUCTS } from "../data";
import styled from "styled-components";
import Product from "./Product";
import { useEffect, useState } from "react";
import axios from "axios";

const Container = styled.div`
  margin: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Test = styled.div`
  height: 10px;
  width: 60px;
  background-color: black;
`;

const Products = ({ cat, filters, sort }) => {
  return (
    <Container>
      {PRODUCTS.map((product) => (
        <Product data={product} key={product.id} />
      ))}
    </Container>
  );
};

export default Products;
