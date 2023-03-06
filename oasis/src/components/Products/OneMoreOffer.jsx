import React from "react";
import { Flex, Text, Box, Badge } from "@chakra-ui/react";

const OneMoreOffer = () => {
  return (
    <Box className="one-more-offer">
      <Flex className="offer-tag">
        <Text marginRight={"5px"}>1 offer Available</Text>
        <span
          style={{ fontSize: "18px", color: "rgb(36, 163, 181)" }}
          class="material-symbols-outlined"
        >
          sell
        </span>
      </Flex>
      <Flex className="MYOASIS" width={{ base: "100%", md: "50%", lg: "50%" }}>
        <Badge padding="5px" colorScheme="green" variant={"outline"}>
          MYOASIS
        </Badge>
        <Text fontSize={"14px"}>
          Get Extra 10 Percent off on Prepaid Orders
        </Text>
      </Flex>
    </Box>
  );
};

export default OneMoreOffer;
