import React from "react";
import { useNavigate } from "react-router-dom";
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
  font-size: 1rem;
  font-weight: 300;
  width: 70vw;
  line-height: 1.8;
`;

const Form = styled.form`
  margin: 30px;
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
      sessionStorage.setItem("userId", userId);
      navigate("/home");
    }
  }

  return (
    <Container>
      <Text>
        Welcome to our hypothetical grocery shopping task! We are conducting a
        study to understand how consumers shop for groceries online, and we
        would love for you to participate. In this task, we want you to choose
        the cold breakfast cereal that you are most interested in purchasing. We
        have designed the online grocery shopping webpage to simulate a
        real-life shopping experience as closely as possible, so please feel
        free to explore all of its features! You can add items to your wish list
        and view products in detail to make the most informed decision. Once you
        have found the cold breakfast cereal that you want to purchase the most,
        please add the item to your cart and check out. We want you to enjoy the
        experience and have fun while helping us with our research.
      </Text>

      <Form onSubmit={handleSubmit}>
        <LabelContainer>
          <Label htmlFor='user-id'>User ID:</Label>
          <Input
            type='text'
            id='user-id'
            value={userId}
            onChange={handleUserIdChange}
          />
        </LabelContainer>
        <Button type='submit'>Submit & Go to shop</Button>
      </Form>
    </Container>
  );
};

export default IntroPage;
