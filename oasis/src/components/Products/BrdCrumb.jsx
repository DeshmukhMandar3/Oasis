import React from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@chakra-ui/icons";

const BrdCrumb = ({ Product }) => {
  return (
    <Box className="breadcrump">
      <Breadcrumb
        spacing="8px"
        separator={<ChevronRightIcon color="gray.500" />}
        sx={{ ol: { display: "flex", flexWrap: "wrap" } }}
      >
        <BreadcrumbItem>
          <BreadcrumbLink href="#">
            <Link to="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {Product &&
          Product[0].product_category_tree.map((ele) => {
            return (
              <BreadcrumbItem>
                <BreadcrumbLink href="#">
                  <Link to={`/AllProducts/${ele}`}>{ele}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            );
          })}
      </Breadcrumb>
    </Box>
  );
};

export default BrdCrumb;
