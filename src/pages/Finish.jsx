import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 90vh;

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

    top: 0;
    z-index: 10;
  }
`;

const Text = styled.div`
  text-align: center;
  font-size: 1rem;
  font-weight: 300;
  width: 70vw;
  line-height: 1.8;
  margin-top: -30px;
  @media (max-width: 768px) {
    margin-top: 30px;
    width: 90vw;
  }
`;

const Finish = () => {
  return (
    <>
      <DecoBar />
      <Container>
        <Text>
          We have successfully finished the second step of the whole process.
          <br />
          Please go back to the main survey and continue. <br />
          After answering a few more questions, we will offer you a validation
          code.
            <br /><br />
            Your ID: {sessionStorage.getItem("userId")}
        </Text>
      </Container>
    </>
  );
};

export default Finish;
