import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PRODUCTS } from "../data";
import useAmplitude from "../hooks/use-amplitude";

const Container = styled.div``;

const DescriptionContainer = styled.div`
  width: 80vw;
  height: auto;
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

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextDescription = styled.div`
  margin: 50px 0;
  width: 75%;
  text-align: left;
`;

const TextNutrition = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NutriImage = styled.img`
  max-height: 600px;
  margin: 50px 0;
`;

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
  justify-content: space-between;
  margin: 0 10px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Detail = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 180px;
`;

const Title = styled.div`
  width: 80%;
`;

const options = {
  DESCRIPTION: "description",
  NUTRITION: "nutrition",
};

const ProductDescription = () => {
  const { pathname } = useLocation();

  const splits = pathname.split("/");

  const prodId = Number(splits[splits.length - 1]);

  const {
    id,
    des,
    nutriImage,
    recommendingImage1,
    recommendingImage2,
    recommendingImage3,
    recommendingImage4,
  } = PRODUCTS[prodId - 1];

  const [selected, setSelected] = useState(options.DESCRIPTION);

  const descriptionSelected = React.useMemo(
    () => selected === options.DESCRIPTION,
    [selected]
  );

  const nutritionSelected = React.useMemo(
    () => selected === options.NUTRITION,
    [selected]
  );

  const { sendLog } = useAmplitude({
    product_id: prodId,
    page_name: "product_detail_page",
  });

  const onDescriptionClick = () => {
    sendLog("description_click", {
      label: `Clicked Description of Product ${prodId}`,
    });
  };

  const onDescriptionHover = () => {
    sendLog("description_hover", {
      label: `Hovered Description of Product ${prodId}`,
    });
  };

  const onNutritionClick = () => {
    sendLog("nutrition_info_click", {
      label: `Clicked Nutrition information of Product ${prodId}`,
    });
  };

  const onNutritionHover = () => {
    sendLog("nutrition_info_hover", {
      label: `Hovered Nutrition information of Product ${prodId}`,
    });
  };

  const onRecommendProductClick = () => {
    sendLog("recommend_product_click", {
      label: `Clicked Recommend Product in Product ${prodId} Detail Page`,
    });
  };

  const selectHandler = (value) => {
    setSelected(value);
  };

  const navigate = useNavigate();

  return (
    <Container>
      <DescriptionContainer>
        <DescriptionOptions>
          <OptionLeft>
            <OptionLeftSelected
              style={{
                backgroundColor: descriptionSelected ? "#006600" : "#9d9d9d",
              }}
            ></OptionLeftSelected>
            <OptionDescription
              onClick={() => {
                onDescriptionClick();
                selectHandler(options.DESCRIPTION);
              }}
              style={{
                backgroundColor: descriptionSelected ? "white" : "#f1f1f1",
              }}
            >
              Description
            </OptionDescription>
          </OptionLeft>
          <OptionRight>
            <OptionRightSelected
              style={{
                backgroundColor: nutritionSelected ? "#006600" : "#9d9d9d",
              }}
            ></OptionRightSelected>
            <OptionNutrition
              onClick={() => {
                onNutritionClick();
                selectHandler(options.NUTRITION);
              }}
              style={{
                backgroundColor: nutritionSelected ? "white" : "#f1f1f1",
              }}
            >
              Nutrition
            </OptionNutrition>
          </OptionRight>
        </DescriptionOptions>
        <TextContainer>
          <TextDescription
            onMouseOver={onDescriptionHover}
            style={{ display: descriptionSelected ? "block" : "none" }}
          >
            {des}
          </TextDescription>
          <TextNutrition
            onMouseOver={onNutritionHover}
            style={{
              display: nutritionSelected ? "block" : "none",
            }}
          >
            <NutriImage src={nutriImage}></NutriImage>
          </TextNutrition>
        </TextContainer>
      </DescriptionContainer>
      <RecommendingContainer>
        <RecommendingText>Featured Products</RecommendingText>
        <ImageContainer>
          <Detail>
            <Image
              src={recommendingImage1}
              onClick={() => {
                navigate("/product/1");
              }}
            ></Image>
            <Title>Post Shredded Wheat Big Biscuit Whole Grain Cereal</Title>
          </Detail>
          <Detail>
            <Image
              src={recommendingImage2}
              onClick={() => {
                navigate("/product/2");
              }}
            ></Image>
            <Title>Kellogg's Frosted Mini-Wheats Cereal</Title>
          </Detail>
          <Detail>
            <Image
              src={recommendingImage3}
              onClick={() => {
                navigate("/product/3");
              }}
            ></Image>
            <Title>Kashi Go, Breakfast Cereal, Original</Title>
          </Detail>
          <Detail>
            <Image
              src={recommendingImage4}
              onClick={() => {
                navigate("/product/4");
              }}
            ></Image>
            <Title>Kellogg's All-Bran Original Cold Breakfast Cereal</Title>
          </Detail>
        </ImageContainer>
      </RecommendingContainer>
    </Container>
  );
};

export default ProductDescription;
