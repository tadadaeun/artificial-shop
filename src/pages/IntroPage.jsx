import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Text = styled.div`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 400;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  width: 300px;
  padding: 15px;
  background-color: #006600;
  color: white;
  border: none;
  border-radius: 5px;
`;

const IntroPage = () => {
  return (
    <Container>
      <Text>This shopping website is for the survey</Text>
      <Link to="/home">
        <Button>Go to shop</Button>
      </Link>
    </Container>
  );
};

export default IntroPage;
