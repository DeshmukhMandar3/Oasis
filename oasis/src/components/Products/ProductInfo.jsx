import React from "react";
import { Flex, Box, Text, Badge } from "@chakra-ui/react";
import Star from "../StarRating/StarRating";

const ProductInfo = ({ Product }) => {
  console.log(Product);
  return (
    <Flex flexDirection={{ base: "column", md: "row", lg: "row" }}>
      <Box
        width={{ base: "100%", md: "58%", lg: "58%" }}
        className="prod-name-sold"
      >
        <Text fontSize={"18px"}>{Product && Product[0].product_name}</Text>
        <Text className="pid">Product Id : {Product && Product[0].pid}</Text>
        <Flex alignItems={"center"}>
          <Text color={"rgb(254,145,76)"} marginRight="5px">
            {Product && Product[0].rating}
          </Text>
          <Star rating={Product && Product[0].rating} />
          <Text margin={"0px 5px"}>|</Text>
          <Text fontSize={"14px"} color="rgb(36, 163, 181)">
            114 Reviews
          </Text>
        </Flex>
        <Flex className="costing">
          <Text className="price">
            ₹{Product && Product[0].discounted_price}
          </Text>
          <Text className="mrp">
            MRP : ₹{Product && Product[0].retail_price}
          </Text>
          <Text className="discount">
            {Product && Product[0].discount.toFixed(2)}% Off
          </Text>
        </Flex>
        <Text className="taxes">Inclusive all of taxes</Text>
      </Box>
      <Box width="38%" className="prod-name-sold">
        <Text className="sold">SOLD BY:</Text>
        <Text className="seller">Prijam</Text>
        <Text className="location">Bhuj,Gujarat</Text>
        <Text className="star">
          3.4{" "}
          <span
            class="material-symbols-outlined"
            style={{
              color: "RGB(255,140,78)",
              fontSize: "16px",
            }}
          >
            star
          </span>
        </Text>
        <Text className="visit">visit seller</Text>
        <Badge
          variant="outline"
          colorScheme="green"
          className="top-rated-merchant"
        >
          Top Rated Merchant
        </Badge>
      </Box>
    </Flex>
  );
};

export default ProductInfo;
