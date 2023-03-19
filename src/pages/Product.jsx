import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
  display: flex;
`;

const Image = styled.img`
  width: 100%;
  height: 70vh;
  object-fit: contain;
`;

const ImgPreContainer = styled.div``;

const ImgPre = styled.img`
  width: 100px;
  border: 1px solid gray;
  cursor: pointer;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  cursor: pointer;
  margin-top: 50px;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 2px solid #006600;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`;

const Button = styled.button`
  padding: 15px;
  background-color: #006600;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 500;
  margin-top: 50px;
  &:hover {
    background-color: #194919;
  }
`;

const Product = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <ImgPreContainer>
            <ImgPre src="https://i.pinimg.com/originals/e2/dd/88/e2dd88046b3ccb68edbd93d33ccf5c49.png"></ImgPre>
            <ImgPre src="https://i.pinimg.com/originals/e2/dd/88/e2dd88046b3ccb68edbd93d33ccf5c49.png"></ImgPre>
            <ImgPre src="https://i.pinimg.com/originals/e2/dd/88/e2dd88046b3ccb68edbd93d33ccf5c49.png"></ImgPre>
          </ImgPreContainer>
          <Image src="https://target.scene7.com/is/image/Target/GUEST_5d57e38b-4513-4964-81fb-c723d71713fb?wid=1323&hei=1323&fmt=pjpeg" />
        </ImgContainer>
        <InfoContainer>
          <Title>This is a Title</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab porro
            autem quod, necessitatibus omnis officia soluta dolor adipisci sequi
            sed debitis commodi libero dolores totam fugit tempore incidunt,
            culpa quibusdam.
          </Desc>
          <Price>$ 20</Price>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default Product;
