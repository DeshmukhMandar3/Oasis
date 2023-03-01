import React from "react";
import { Flex, Box, Image, Text } from "@chakra-ui/react";

const Coupon = ({ Product }) => {
  return (
    <Box className="coupon-wrapper">
      <Flex className="final-Price">
        <Box width={"7%"}>
          <Image src="https://images.shopclues.com/images/ui/super-star.png" />
        </Box>
        <Text className="getThis">
          Get this for as low as:{" "}
          <span style={{ color: "green" }}>
            {" "}
            ₹{Product && Product[0].discounted_price - 82}
          </span>
        </Text>
        <Text className="oasis-bucks">How to earn OasisBucks</Text>
      </Flex>
      <Flex className="Price-wrapper">
        <Box className="og">
          <Box className="l1">
            <Text>Original Price</Text>
          </Box>
          <Box className="l2">₹{Product && Product[0].discounted_price}</Box>
        </Box>
        <Box className="applicable">
          <Box className="m1">Applicable for All Users</Box>
          <Flex className="m2">
            <Box className="m2c">Apply cluesbucks+</Box>
            <Box className="m2c">Use Coupon MYOASIS</Box>
          </Flex>
          <Flex className="m3">
            <Box>{"( "}₹12</Box>
            <Box>+</Box>
            <Box>₹70{" )"}</Box>
          </Flex>
        </Box>
        <Box className="dp">
          <Box className="dp1">Deal Price</Box>
          <Box className="dp2">
            ₹{Product && Product[0].discounted_price - 82}
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Coupon;
