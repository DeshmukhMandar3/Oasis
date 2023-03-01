import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";

const Returns = () => {
  return (
    <Box className="Returns">
      <Flex>
        <span class="material-symbols-outlined">published_with_changes</span>{" "}
        <Text marginLeft={"5px"}>Easy Returns & Replacement</Text>
      </Flex>
      <Flex>
        <span class="material-symbols-outlined">credit_card</span>
        <Text marginLeft={"5px"}>
          Payment Options:(Credit Card, Debit Card, Net Banking, Wallets, COD)
        </Text>
      </Flex>
    </Box>
  );
};

export default Returns;
