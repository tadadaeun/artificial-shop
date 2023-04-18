import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 50px 0;
  padding-bottom: 70px;
`;

const Text = styled.div`
  height: 30px;
  width: 85vw;
  font-size: 0.8rem;
  font-weight: 100;
  text-align: center;
  margin: 0 auto;
`;

const Footer = () => {
  return (
    <Container>
      <Text>
        We are conducting a study to understand how consumers shop for groceries
        online, and we would love for you to participate. In this task, we want
        you to choose the cold breakfast cereal that you are most interested in
        purchasing.<br></br>
        We have designed the online grocery shopping webpage to simulate a
        real-life shopping experience as closely as possible, so please feel
        free to explore all of its features! You can add items to your wish list
        and view products in detail to make the most informed decision.<br></br>
        Once you have found the cold breakfast cereal that you want to purchase
        the most, please add the item to your cart and check out. We want you to
        enjoy the experience and have fun while helping us with our research.
      </Text>
    </Container>
  );
};

export default Footer;
