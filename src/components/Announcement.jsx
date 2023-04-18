import styled from "styled-components";

const Container = styled.div`
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

const Announcement = () => {
  return (
    <div>
      <Container></Container>
    </div>
  );
};

export default Announcement;
