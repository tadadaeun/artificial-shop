import React from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import ProductsList from "../components/ProductsList";
import Footer from "../components/Footer";

const Container = styled.div`
  overflow: hidden;
`;

const Home = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <ProductsList />
      <Footer />
    </Container>
  );
};

export default Home;
