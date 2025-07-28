import React, { useState, useEffect } from "react";
import amplitude from "amplitude-js";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { PRODUCTS } from "../data";
import Products from "./Products";

const Container = styled.div`
  @media (max-width: 768px) {
    margin-top: 80px;
  }
`;

const ProductContainer = styled.div`
  width: 95vw;
  margin: 0 auto;
`;

const FilterContainer = styled.div`
  margin: 80px 60px 10px 60px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const Filter = styled.div`
  margin: 0 30px;
  @media (max-width: 768px) {
    margin-top: 30px;
    margin-right: 0;
  }
`;

const FilterTitle = styled.span`
  font-size: 16px;
`;

const FilterOptions = styled.select`
  margin-left: 10px;
  padding: 10px;
  border: 0.5px solid gray;
  border-radius: 3px;
  &:active,
  &:focus {
    outline: none;
  }
`;

const FilterOption = styled.option`
  &:checked {
    background: linear-gradient(#d6d6d6, #d6d6d6);
    background-color: #d6d6d6 !important; /* for IE */
    color: #000000 !important;
  }
`;

const isNutritionScoreEnabled = process.env.REACT_APP_NUTRITION_SCORE === "SHOW";
const initialSort = isNutritionScoreEnabled
  ? (Math.random() < 0.5 ? "lowest" : "nutrient")
  : "lowest";

const ProductsList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[0];
  const [filter, setFilter] = useState("all");
  // const [sort, setSort] = useState("lowest");
  const [sort, setSort] = useState(initialSort); //변경

  // Amplitude 이벤트: nutrition_score 상태와 초기 sort 값
  useEffect(() => {
    amplitude.getInstance().logEvent(
      isNutritionScoreEnabled
        ? "nutrition_score_SHOW"
        : "nutrition_score_NOT_SHOW"
    );
    if (isNutritionScoreEnabled) {
      if (initialSort === "lowest") {
        amplitude.getInstance().logEvent("nutrition_score_SHOW_initialSort_lowest");
      } else if (initialSort === "nutrient") {
        amplitude.getInstance().logEvent("nutrition_score_SHOW_initialSort_nutrient");
      }
    }
  }, []);

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
    return 0;
  });

  return (
    <Container>
      <FilterContainer>
        {/*<Filter>
          <FilterTitle>Filtered by :</FilterTitle>
          <FilterOptions
            name="filter"
            onChange={(e) => setFilter(e.target.value)}
            defaultValue="all"
          >
            <FilterOption value="all">all products</FilterOption>
            <FilterOption>popular</FilterOption>
            <FilterOption>new</FilterOption>
            <FilterOption>good nutrient</FilterOption>
          </FilterOptions>
  </Filter>*/}
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
