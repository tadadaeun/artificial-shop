import React, { useState } from "react";
import "react-medium-image-zoom/dist/styles.css";
import { GlassMagnifier } from "react-image-magnifiers";
import styled from "styled-components";

const ImgContainer = styled.div`
  flex: 0.8;
  display: flex;
`;

const Image = styled.div`
  width: 90%;
  height: 70vh;
  object-fit: contain;
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

const ProductImage = ({ detailImages = [] }) => {
  const [selectedIdx, setSelectedIdx] = useState(0);

  return (
    <ImgContainer>
      <ImgPreContainer>
        {detailImages.map((detailImg, index) => (
          <ImgPre
            onClick={() => setSelectedIdx(index)}
            src={detailImg}
          ></ImgPre>
        ))}
        {/*         
        <ImgPre src="https://i.pinimg.com/originals/e2/dd/88/e2dd88046b3ccb68edbd93d33ccf5c49.png"></ImgPre>
        <ImgPre src="https://i.pinimg.com/originals/e2/dd/88/e2dd88046b3ccb68edbd93d33ccf5c49.png"></ImgPre> */}
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
