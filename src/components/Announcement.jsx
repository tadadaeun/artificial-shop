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
`;

const Announcement = () => {
  return (
    <div>
      <Container></Container>
    </div>
  );
};

export default Announcement;
