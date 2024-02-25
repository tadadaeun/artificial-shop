import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import amplitude from "amplitude-js";
import Announcement from "../components/Announcement";

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 768px) {
    margin: 30px;
    height: auto;
    display: none;
  }
`;

const DecoBar = styled.div`
  height: 25px;
  background-color: #006600;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 100px;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 10;
  }
`;

const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -50px;
  }
`;

const MobileText = styled.div`
  text-align: center;
  font-size: 1rem;
  font-weight: 300;
  width: 70vw;
  line-height: 1.8;
`;

const Text = styled.div`
  text-align: center;
  font-size: 1rem;
  font-weight: 300;
  width: 70vw;
  line-height: 1.8;
  @media (max-width: 768px) {
    margin-top: 30px;
    width: 90vw;
  }
`;

const Form = styled.form`
  margin: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LabelContainer = styled.div``;

const Label = styled.label``;

const Input = styled.input`
  &:active,
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  margin-top: 30px;
  padding: 0.5rem 1rem;
  width: 300px;
  padding: 15px;
  background-color: #006600;
  color: white;
  border: none;
  border-radius: 5px;
`;

const HighlightText = styled.div`
  font-weight: 300;
  font-size: 1.2rem;
  color: red;
  margin: 10px;
`;

const IntroPage = () => {
  const [userId, setUserId] = React.useState("");
  const navigate = useNavigate();

  function handleUserIdChange(event) {
    setUserId(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (userId.length === 0) {
      alert("Please enter a user ID");
    } else {
      amplitude.getInstance().setUserId(userId);
      sessionStorage.setItem("userId", userId);
      navigate("/home");
    }
  }

  return (
    <>
      <Backdrop>
        <MobileText>
          This survey is optimized for desktop devices. To participate in the
          survey, please access it through a desktop.
        </MobileText>
      </Backdrop>
      <DecoBar />
      <Container>
        <Text>
          Welcome to our hypothetical grocery shopping task!<br></br>
          <br></br>
          We are conducting a study to understand how consumers shop for
          groceries online, and we would love for you to participate. In this
          task, we want you to choose the cold breakfast cereal that you are
          most interested in purchasing.<br></br>
          <br></br>
          We have designed the online grocery shopping webpage to simulate a
          real-life shopping experience as closely as possible, so please feel
          free to explore all of its features! You can add items to your wishlist 
          and view products in detail to make the most informed decision.
          <br></br>
          <br></br>
          Once you have found the cold breakfast cereal that you want to
          purchase the most, please add the item to your cart. 
          <br></br>
          <br></br>
          </Text>
          <HighlightText>
          Also, please make sure to go to 
          your cart and click the "CHECKOUT NOW" button to complete your shopping task.
          <br></br>
          <br></br>      
          </HighlightText>
          <Text>    
          We want you to enjoy the experience and have fun while helping us with
          our research.
        </Text>
        <Form onSubmit={handleSubmit}>
          <LabelContainer>
            <Label htmlFor="user-id">User ID:</Label>
            <Input
              type="text"
              id="user-id"
              value={userId}
              onChange={handleUserIdChange}
            />
          </LabelContainer>
          <Button type="submit">Submit & Go to shop</Button>
        </Form>
      </Container>
    </>
  );
};

export default IntroPage;
