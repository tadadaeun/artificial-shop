import { Link } from "react-router-dom";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import Badge from "@mui/material/Badge";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { ShopContext } from "../context/shop-context";
import ReactGA from "react-ga4";

const Container = styled.div`
  height: 65px;
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
  flex: 0.3;
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 30px;
  margin: 0 20px;
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
  margin-right: 20px;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const Navbar = ({ id }) => {
  const { getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const [query, setQuery] = useState();

  const search = (data) => {
    return data.filter((item) => item.title.toLowerCase().includes(query));
  };

  const onBadgeIconClick = () => {
    if (id) {
      ReactGA.event({
        category: "Product",
        action: "go_to_cart_click",
        label: `Clicked Go to cart button on the Product ${id} detail page`,
        value: id,
      });
    }
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Link
            to="/home"
            style={{ textDecoration: "none", cursor: "pointer" }}
          >
            <Logo src="../images/logo1.png"></Logo>
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
          <Link to="/cart" onClick={onBadgeIconClick}>
            <MenuItem>
              <Badge badgeContent={totalAmount} color="success">
                <ShoppingCartOutlined style={{ fill: "black" }} />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
