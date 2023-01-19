import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Star from "../StarRating/StarRating";
import "./ProductCard.css";

const ProductCard = ({ card }) => {
  const [dis, setDis] = React.useState(false);
  return (
    <Flex className="card_wrapper" display={dis ? "none" : "block"}>
      <Box className="wishlist">
        <span class="material-symbols-rounded">favorite</span>
      </Box>
      <Box className="image_box">
        <Image
          className="image"
          src={card.image[0]}
          onError={(event) => setDis(true)}
        />
      </Box>
      <Box className="made_in_india_box">
        <Image
          className="made_in_india"
          src="https://images.shopclues.com/images/ui/madeinindia.png"
        />
      </Box>
      <Box className="title">{card.product_name}</Box>
      <Flex className="pricing">
        <Text className="discounted_price">₹{card.discounted_price}</Text>
        <Text
          className="mrp"
          display={
            card.discounted_price === card.retail_price ? "none" : "block"
          }
        >
          ₹{card.retail_price}
        </Text>
        <Text
          display={
            card.discounted_price === card.retail_price ? "none" : "block"
          }
          className="discount"
        >
          {(
            ((card.retail_price - card.discounted_price) / card.retail_price) *
            100
          ).toFixed(2) + " %"}
          Off
        </Text>
      </Flex>
      <Box className="star_rating">{<Star rating={card.rating} />}</Box>
      <Box
        className="free_shipping"
        display={card.discounted_price > 500 ? "block" : "none"}
      >
        <Text display={"flex"}>
          <Box>
            <span class="material-symbols-sharp" style={{ fontSize: "19px" }}>
              local_shipping
            </span>
          </Box>
          {" Free Shipping"}
        </Text>
      </Box>
    </Flex>
  );
};

export default ProductCard;
