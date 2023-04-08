import React from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import ProductsList from "../components/ProductsList";
import Footer from "../components/Footer";

const Container = styled.div``;

const Home = () => {
  const userId = sessionStorage.getItem("userId");

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
