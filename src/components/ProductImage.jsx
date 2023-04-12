import React, { useState } from "react";
import "react-medium-image-zoom/dist/styles.css";
import { GlassMagnifier } from "react-image-magnifiers";
import styled from "styled-components";
import { height } from "@mui/system";

const ImgContainer = styled.div`
  flex: 0.8;
  display: flex;
  height: 100%;
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
  width: 300px;
  height: 400px;
  margin: 0 30px;
  object-fit: scale-down;
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
            src={detailImg}
          ></ImgPre>
        ))}
      </ImgPreContainer>
      <Image>
        <GlassMagnifier
          imageSrc={detailImages[selectedIdx]}
          square="false"
          magnifierSize="40%"
        />
      </Image>
    </ImgContainer>
  );
};

export default ProductImage;
