import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";


//all product item for search

const NavInputMenu = () => {
  return (
    <>
      <Menu>
        {/* <MenuButton >
    All
  </MenuButton> */}
        <Button as={MenuButton} colorScheme="#6c757d" variant="ghost">
          All
        </Button>
        <MenuList>
          <Link to="/AllProducts/baby care">
            {" "}
            <MenuItem
              _hover={{ cursor: "pointer", textDecoration: "underline" }}
            >
              {" "}
              Baby Care
            </MenuItem>
          </Link>
          <Link to="/AllProducts/Clothing">
            {" "}
            <MenuItem
              _hover={{ cursor: "pointer", textDecoration: "underline" }}
            >
              {" "}
              Clothing
            </MenuItem>
          </Link>
          <Link to="/AllProducts/Home Cleaning">
            {" "}
            <MenuItem
              _hover={{ cursor: "pointer", textDecoration: "underline" }}
            >
              {" "}
              Home Cleaning
            </MenuItem>
          </Link>
          <Link to="/AllProducts/Automotive">
            {" "}
            <MenuItem
              _hover={{ cursor: "pointer", textDecoration: "underline" }}
            >
              {" "}
              Automative
            </MenuItem>
          </Link>
          <Link to="/AllProducts/Sports & Fitness">
            {" "}
            <MenuItem
              _hover={{ cursor: "pointer", textDecoration: "underline" }}
            >
              {" "}
              Sports & Fitness
            </MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </>
  );
};

export default NavInputMenu;
