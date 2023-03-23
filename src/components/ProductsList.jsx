import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
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
  justify-content: space-around;
`;

const Filter = styled.div`
  align-items: center;
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
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");
  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  console.log(filters);

  return (
    <Container>
      <FilterContainer>
        <Filter>
          <FilterTitle>Filtered by :</FilterTitle>
          <FilterOptions name="filter" onChange={handleFilters}>
            <FilterOption>popular</FilterOption>
            <FilterOption>new</FilterOption>
            <FilterOption>good nutrient</FilterOption>
          </FilterOptions>
        </Filter>
        <Filter>
          <FilterTitle>Sort by :</FilterTitle>
          <FilterOptions name="sort" onChange={(e) => setSort(e.target.value)}>
            <FilterOption value="lowest">lowest price</FilterOption>
            <FilterOption value="highest">highest price</FilterOption>
            <FilterOption value="newest">newest</FilterOption>
          </FilterOptions>
        </Filter>
      </FilterContainer>
      <ProductContainer>
        <Products cat={cat} filters={filters} sort={sort} />
      </ProductContainer>
    </Container>
  );
};

export default ProductsList;
