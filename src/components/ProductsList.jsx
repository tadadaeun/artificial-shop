import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { PRODUCTS } from "../data";
import Products from "./Products";

const Container = styled.div``;

const ProductContainer = styled.div`
  width: 95vw;
  margin: 0 auto;
`;

const FilterContainer = styled.div`
  margin: 80px 60px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const Filter = styled.div`
  margin: 0 30px;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 500;
`;

const FilterOptions = styled.select`
  margin-left: 10px;
  padding: 10px;
`;

const FilterOption = styled.option``;

const ProductsList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[0];
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("default");

  const refinedData = PRODUCTS.filter(({ category }) => {
    if (filter === "all") return true;
    return category === filter;
  }).sort((a, b) => {
    if (sort === "lowest") return a.price - b.price;
    else if (sort === "highest") return b.price - a.price;
    else if (sort === "nutrient") {
      // TODO - 오브젝트 매핑추가!
      return b.nut > a.nut;
    }
  });

  return (
    <Container>
      <FilterContainer>
        <Filter>
          <FilterTitle>Filtered by :</FilterTitle>
          <FilterOptions
            name="filter"
            onChange={(e) => setFilter(e.target.value)}
            defaultValue="all"
          >
            <FilterOption value="all">select filter</FilterOption>
            <FilterOption>popular</FilterOption>
            <FilterOption>new</FilterOption>
            <FilterOption>good nutrient</FilterOption>
          </FilterOptions>
        </Filter>
        <Filter>
          <FilterTitle>Sort by :</FilterTitle>
          <FilterOptions
            name="sort"
            onChange={(e) => setSort(e.target.value)}
            defaultValue="default"
          >
            <FilterOption value="default">select option</FilterOption>
            <FilterOption value="lowest">lowest price</FilterOption>
            <FilterOption value="highest">highest price</FilterOption>
            <FilterOption value="nutrient">nutrient score</FilterOption>
          </FilterOptions>
        </Filter>
      </FilterContainer>
      <ProductContainer>
        <Products
          cat={cat}
          filter={filter}
          sort={sort}
          productList={refinedData}
        />
      </ProductContainer>
    </Container>
  );
};

export default ProductsList;
