import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ReactGA from "react-ga4";

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
  width: 60vw;
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
  const [userId, setUserId] = React.useState("");

  function handleUserIdChange(event) {
    setUserId(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    sessionStorage.setItem("userId", userId);
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

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='user-id'>User ID:</label>
          <input
            type='text'
            id='user-id'
            value={userId}
            onChange={handleUserIdChange}
          />
        </div>
        <button type='submit'>Submit</button>
      </form>

      <Link to='/home'>
        <Button>Go to shop</Button>
      </Link>
    </Container>
  );
};

document.title = "Intro";
export default IntroPage;
