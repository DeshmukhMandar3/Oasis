import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";

const Shipping = () => {
  return (
    <Box className="shipping">
      <Flex>
        <span
          class="material-symbols-outlined"
          style={{ color: "rgb(22, 112, 124)" }}
        >
          check
        </span>
        <Text>Free Shipping</Text>
      </Flex>
      <Flex>
        <span
          class="material-symbols-outlined"
          style={{ color: "rgb(22, 112, 124)" }}
        >
          check
        </span>
        <Text>COD available</Text>
      </Flex>
    </Box>
  );
};

export default Shipping;
