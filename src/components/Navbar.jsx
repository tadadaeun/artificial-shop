import { Link } from "react-router-dom";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import Badge from "@mui/material/Badge";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import { ShopContext } from "../context/shop-context";
import useAmplitude from "../hooks/use-amplitude";

const Container = styled.div`
  height: 65px;
  width: 100vw;
  top: 0px;
  position: sticky;
  z-index: 10;
  background-color: white;
  @media (max-width: 768px) {
    width: 100%;
    height: 65px;
    margin: 0;
    position: fixed;
    top: 25px;
  }
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.1);
`;

const Left = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 30px;
  margin: 0 20px;
  @media (max-width: 768px) {
    width: 25px;
    margin: 2px 7px;
  }
`;

const Center = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    display: none;
  }
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
  justify-content: flex-end;
  margin-right: 20px;
  @media (max-width: 768px) {
    margin-right: 10px;
  }
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

  const { sendLog } = useAmplitude({
    product_id: id,
    page_name: "product_detail_page",
  });

  const onBadgeIconClick = () => {
    if (id) {
      sendLog("go_to_cart_click", {
        label: `Clicked Go to cart button on the Product ${id} detail page`,
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
