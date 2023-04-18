import React, { useState } from "react";
import "react-medium-image-zoom/dist/styles.css";
import { GlassMagnifier } from "react-image-magnifiers";
import styled from "styled-components";

const ImgContainer = styled.div`
  flex: 0.8;
  display: flex;
  height: 100%;
`;

const ImgPreContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  @media (max-width: 768px) {
    display: none;
  }
`;

const ImgPre = styled.img`
  width: 100px;
  border: 1px solid gray;
  margin: 5px;
  cursor: pointer;
`;

const Image = styled.div`
  height: 100%;
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
              onClick(index + 1 === detailImages.length);
              setSelectedIdx(index);
            }}
            src={detailImg}
          ></ImgPre>
        ))}
      </ImgPreContainer>
      <Image>
        <GlassMagnifier
          style={{
            height: "100%",
          }}
          imageSrc={detailImages[selectedIdx]}
          className="glass-magnifier"
          square="false"
          magnifierSize="40%"
        />
      </Image>
    </ImgContainer>
  );
};

export default ProductImage;
