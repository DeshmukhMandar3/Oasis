import React from "react";
import { Flex, Text } from "@chakra-ui/react";

const ItemsAvailable = () => {
  return (
    <Flex alignItems={"center"}>
      <Flex className="item-av">
        <span class="material-symbols-outlined">where_to_vote</span>
        <Text>
          Item is available at <span style={{ color: "black" }}>421503</span>
        </Text>
      </Flex>
      <Text className="change">Change</Text>
    </Flex>
  );
};

export default ItemsAvailable;
