import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PRODUCTS } from "../data";
import ReactGA from "react-ga4";

const Container = styled.div``;

const DescriptionContainer = styled.div`
  width: 80vw;
  height: 500px;
  border: 0.5px solid lightgray;
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

const RecommendingContainer = styled.div`
  width: 80vw;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  margin: 30px 50px;
  padding: 20px;
`;

const RecommendingText = styled.div`
  font-weight: 300;
  font-size: 1.3rem;
  margin-bottom: 30px;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 250px;
`;

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

  const onDescriptionClick = () => {
    ReactGA.event({
      category: "Product",
      action: "description_click",
      label: `Clicked Description of Product ${prodId}`,
      value: prodId,
    });
  };

  const onDescriptionHover = () => {
    ReactGA.event({
      category: "Product",
      action: "description_hover",
      label: `Hovered Description of Product ${prodId}`,
      value: prodId,
    });
  };

  const onNutritionClick = () => {
    ReactGA.event({
      category: "Product",
      action: "nutrition_info_click",
      label: `Clicked Nutrition information of Product ${prodId}`,
      value: prodId,
    });
  };

  const onNutritionHover = () => {
    ReactGA.event({
      category: "Product",
      action: "nutrition_info_hover",
      label: `Hovered Nutrition information of Product ${prodId}`,
      value: prodId,
    });
  };

  const selectHandler = () => {
    setSelected((isSelected) => !isSelected);
  };

  const navigate = useNavigate();

  return (
    <Container>
      <DescriptionContainer>
        <DescriptionOptions>
          <OptionLeft>
            <OptionLeftSelected
              style={{ backgroundColor: selected ? "#9d9d9d" : "#006600" }}
            ></OptionLeftSelected>
            <OptionDescription
              onClick={() => {
                onDescriptionClick();
                selectHandler();
              }}
              style={{ backgroundColor: selected ? "#f1f1f1" : "white" }}>
              Description
            </OptionDescription>
          </OptionLeft>
          <OptionRight>
            <OptionRightSelected
              style={{ backgroundColor: selected ? "#006600" : "#9d9d9d" }}
            ></OptionRightSelected>
            <OptionNutrition
              onClick={() => {
                onNutritionClick();
                selectHandler();
              }}
              style={{ backgroundColor: selected ? "white" : "#f1f1f1" }}>
              Nutrition
            </OptionNutrition>
          </OptionRight>
        </DescriptionOptions>
        <TextContainer>
          <TextDescription
            onMouseOver={onDescriptionHover}
            style={{ display: selected ? "none" : "block" }}>
            {des}
          </TextDescription>
          <TextNutrition
            src={nutriImage}
            onMouseOver={onNutritionHover}
            style={{ display: selected ? "block" : "none" }}></TextNutrition>
        </TextContainer>
      </DescriptionContainer>
      <RecommendingContainer>
        <RecommendingText>Recommendations for you</RecommendingText>
        <ImageContainer>
          <Image
            src={recommendingImage1}
            onClick={() => navigate("/product/2")}
          ></Image>
          <Image src={recommendingImage2}></Image>
          <Image src={recommendingImage3}></Image>
          <Image src={recommendingImage4}></Image>
        </ImageContainer>
      </RecommendingContainer>
    </Container>
  );
};

export default ProductDescription;
