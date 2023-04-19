import { PRODUCTS } from "../data";
import styled from "styled-components";
import Product from "./Product";
import { useEffect, useState } from "react";
import axios from "axios";

const Container = styled.div`
  margin: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const Products = ({ cat, filters, sort, productList = [] }) => {
  return (
    <Container>
      {productList.map((product) => (
        <Product data={product} key={product.id} />
      ))}
    </Container>
  );
};

export default Products;
