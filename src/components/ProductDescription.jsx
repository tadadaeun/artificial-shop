import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { PRODUCTS } from "../data";

const Container = styled.div``;

const DescriptionContainer = styled.div`
  width: 90vw;
  height: 500px;
  border: 1px solid gray;
  border-radius: 10px;
  margin: 0 50px;
`;

const DescriptionOptions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  border-bottom: 1px solid gray;
`;

const OptionLeftSelected = styled.div`
  width: 100%;
  height: 15px;
  background-color: #9d9d9d;
`;

const OptionLeft = styled.div`
  border-right: 1px solid gray;
  flex: 1;
  text-align: center;
  &:hover ${OptionLeftSelected}, &:focus ${OptionLeftSelected} {
    background-color: #343434;
  }
`;

const OptionDescription = styled.div`
  padding: 20px;
  &:focus {
    background-color: #f1f1f1;
  }
`;

const OptionRightSelected = styled.div`
  width: 100%;
  height: 15px;
  background-color: #9d9d9d;
`;

const OptionRight = styled.div`
  flex: 1;
  text-align: center;
  &:hover ${OptionRightSelected}, &:focus ${OptionRightSelected} {
    background-color: #343434;
  }
`;

const OptionNutrition = styled.div`
  padding: 20px;
  &:focus {
    background-color: #f1f1f1;
  }
`;

const TextContainer = styled.div``;

const TextDescription = styled.div``;

const TextNutrition = styled.img``;

const RecommendingContainer = styled.div``;
const ImageContainer = styled.div``;
const Image = styled.img``;

const ProductDescription = () => {
  const { pathname } = useLocation();

  const splits = pathname.split("/");

  const prodId = Number(splits[splits.length - 1]);

  const {
    des,
    nutriImage,
    recommendingImage1,
    recommendingImage2,
    recommendingImage3,
    recommendingImage4,
  } = PRODUCTS[prodId - 1];

  const [selected, setSelected] = useState(true);
  const selectHandler = () => {
    setSelected((isSelected) => !isSelected);
  };

  return (
    <Container>
      <DescriptionContainer>
        <DescriptionOptions>
          <OptionLeft>
            <OptionLeftSelected
              style={{ backgroundColor: selected ? "#9d9d9d" : "#006600" }}
            ></OptionLeftSelected>
            <OptionDescription
              onClick={selectHandler}
              style={{ backgroundColor: selected ? "#f1f1f1" : "white" }}
            >
              Description
            </OptionDescription>
          </OptionLeft>
          <OptionRight>
            <OptionRightSelected
              style={{ backgroundColor: selected ? "#006600" : "#9d9d9d" }}
            ></OptionRightSelected>
            <OptionNutrition
              onClick={selectHandler}
              style={{ backgroundColor: selected ? "white" : "#f1f1f1" }}
            >
              Nutrition
            </OptionNutrition>
          </OptionRight>
        </DescriptionOptions>
        <TextContainer>
          <TextDescription style={{ display: selected ? "none" : "block" }}>
            {des}
          </TextDescription>
          <TextNutrition
            src={nutriImage}
            style={{ display: selected ? "block" : "none" }}
          ></TextNutrition>
        </TextContainer>
      </DescriptionContainer>
      <RecommendingContainer>
        <ImageContainer>
          <Image src={recommendingImage1}></Image>
          <Image src={recommendingImage2}></Image>
          <Image src={recommendingImage3}></Image>
          <Image src={recommendingImage4}></Image>
        </ImageContainer>
      </RecommendingContainer>
    </Container>
  );
};

export default ProductDescription;
