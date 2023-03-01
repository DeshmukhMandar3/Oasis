import React from "react";
import {
  Box,
  Text,
  Flex,
  CircularProgress,
  CircularProgressLabel,
  Slider,
  SliderTrack,
  SliderFilledTrack,
} from "@chakra-ui/react";
import Star from "../StarRating/StarRating";

const Ratings = ({ Product }) => {
  return (
    <Box className="prod-bottom">
      <Text className="head">Rating & Reviews</Text>
      <Box className="rating">
        <Flex className="circular">
          <Box>
            <CircularProgress
              value={Product && Product[0].rating * 20}
              color="rgb(255,140,78)"
              size="120"
              marginBottom={"10px"}
              thickness="8px"
            >
              {" "}
              <CircularProgressLabel color="rgb(255,140,78)" fontSize={"35px"}>
                {Product && Product[0].rating}
              </CircularProgressLabel>{" "}
            </CircularProgress>
            <Box paddingLeft={"10px"}>
              <Star rating={Product && Product[0].rating} />
            </Box>
          </Box>
          <Box w="40%">
            <Flex color="green">
              5{" "}
              <Slider
                isReadOnly="true"
                defaultValue={20}
                colorScheme="green"
                marginLeft={"12px"}
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
              </Slider>
            </Flex>
            <Flex color="green">
              4{" "}
              <Slider
                isReadOnly="true"
                defaultValue={30}
                colorScheme="green"
                marginLeft={"12px"}
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
              </Slider>
            </Flex>
            <Flex color="green">
              3{" "}
              <Slider
                isReadOnly="true"
                defaultValue={70}
                colorScheme="green"
                marginLeft={"12px"}
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
              </Slider>
            </Flex>

            <Flex color="red">
              2{" "}
              <Slider
                isReadOnly="true"
                defaultValue={30}
                colorScheme="red"
                marginLeft={"12px"}
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
              </Slider>
            </Flex>
            <Flex color="red">
              1{" "}
              <Slider
                isReadOnly="true"
                defaultValue={10}
                colorScheme="red"
                marginLeft={"12px"}
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
              </Slider>
            </Flex>
          </Box>
        </Flex>
        <Text fontSize={"20px"} margin={"12px"} color="gray">
          1334 Ratings & 114 Reviews
        </Text>
      </Box>
    </Box>
  );
};

export default Ratings;
