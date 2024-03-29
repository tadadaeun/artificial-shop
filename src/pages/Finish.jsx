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

const HighlightText = styled.div`
  font-weight: 600;
  font-size: 1.6rem;
  color: red;
  margin: 10px;
`;

const Finish = () => {
  return (
    <>
      <DecoBar />
      <Container>
        <Text>
          We have successfully finished the second step of the whole process.<br />
          Please enter the following number in the textbox located below this window in the main survey.<br />
          </Text>
          <HighlightText>12345<br /><br />
          </HighlightText>
          <Text>Then click the button [->] on the bottow right corner of the window to proceed to the next page.

          {/* Please go back to the main survey and continue. <br />
          After answering a few more questions, we will offer you a validation
          code. */}
            <br /><br />

            {/* <button style={{
                backgroundColor: "#006600",
                padding: "10px 20px",
                border: "none",
            }}>
                <a href="https://neoma.eu.qualtrics.com/jfe/form/SV_4NnatcJ0gw6Zue2" target="_blank" style={{
                    color: "white",
                }}>Go back to the survey</a>
            </button>

            <br /><br />
            Your ID: {sessionStorage.getItem("userId")} */}
        </Text>
      </Container>
    </>
  );
};

export default Finish;
