import React, { useState } from "react";
import "react-medium-image-zoom/dist/styles.css";
import { GlassMagnifier } from "react-image-magnifiers";
import styled from "styled-components";

const ImgContainer = styled.div`
  flex: 0.8;
  display: flex;
`;

const ImgPreContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImgPre = styled.img`
  width: 100px;
  border: 1px solid gray;
  margin: 5px;
  cursor: pointer;
`;

const Image = styled.div`
  width: 70%;
  max-width: 450px;
  min-width: 300px;
  height: auto;
  object-fit: contain;
`;

const ProductImage = ({ detailImages = [], onClick }) => {
  const [selectedIdx, setSelectedIdx] = useState(0);

  return (
    <ImgContainer>
      <ImgPreContainer>
        {detailImages.map((detailImg, index) => (
          <ImgPre
            onClick={() => {
              onClick(index);
              setSelectedIdx(index);
            }}
            src={detailImg}></ImgPre>
        ))}
      </ImgPreContainer>
      <Image>
        <GlassMagnifier
          imageSrc={detailImages[selectedIdx]}
          square="false"
          magnifierSize="30%"
        />
      </Image>
    </ImgContainer>
  );
};

export default ProductImage;
