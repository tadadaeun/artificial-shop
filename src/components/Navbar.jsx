import { Link } from "react-router-dom";

import {
  Search,
  ShoppingCartOutlined,
  FavoriteBorderOutlined,
} from "@material-ui/icons";
import Badge from "@mui/material/Badge";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { ShopContext } from "../context/shop-context";
import logo from "../images/logo1.png";

const Container = styled.div`
  height: 70px;
  width: 100vw;
  top: 0px;
  position: sticky;
  z-index: 10;
  background-color: white;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.1);
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 0.5;
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 35px;
  margin: 0 30px;
`;

const Center = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Menu = styled.div`
  font-size: 16px;
  margin-right: 15px;
  text-decoration: none;
  color: black;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  width: 50%;
  background-color: #f2f2f2;
  border-radius: 7px;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  background-color: #f2f2f2;
  color: #595959;
  &:focus {
    outline: none !important;
  }
`;

const Right = styled.div`
  flex: 0.5;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 30px;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const Navbar = () => {
  const { getTotalCartAmount, getTotalWishAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const totalWishAmount = getTotalWishAmount();

  const [query, setQuery] = useState();

  const search = (data) => {
    return data.filter((item) => item.title.toLowerCase().includes(query));
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Link
            to="/home"
            style={{ textDecoration: "none", cursor: "pointer" }}
          >
            <Logo src={logo}></Logo>
          </Link>
        </Left>
        <Center>
          <Link to="/home" style={{ textDecoration: "none" }}>
            <Menu>Products</Menu>
          </Link>
          <Menu>Categories</Menu>
          <Menu>Deal</Menu>
          <Menu>What's New</Menu>
          <SearchContainer>
            <Input
              placeholder="Search"
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Center>
        <Right>
          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={totalAmount} color="success">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
