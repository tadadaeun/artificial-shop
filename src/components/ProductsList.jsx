import React from "react";
import styled from "styled-components";
import Products from "./Products";

const Container = styled.div``;

const ProductContainer = styled.div`
  width: 95vw;
  margin: 0 auto;
`;

const FilterContainer = styled.div`
  margin: 80px 60px;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 500;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 10px;
`;

const FilterSizeOption = styled.option``;

const ProductsList = () => {
  return (
    <Container>
      <FilterContainer>
        <Filter>
          <FilterTitle>Sort by :</FilterTitle>
          <FilterSize>
            <FilterSizeOption>popular</FilterSizeOption>
            <FilterSizeOption>newest</FilterSizeOption>
            <FilterSizeOption>similar</FilterSizeOption>
          </FilterSize>
        </Filter>
      </FilterContainer>
      <ProductContainer>
        <Products />
      </ProductContainer>
    </Container>
  );
};

export default ProductsList;
