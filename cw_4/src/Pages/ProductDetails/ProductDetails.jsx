import React from "react";
import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import Star from "../../components/StarRating/StarRating";

const ProductDetails = () => {
  const { id } = useParams();
  const [Product, setProduct] = React.useState(null);
  const [img, setImg] = React.useState(0);

  React.useEffect(() => {
    async function getDetails() {
      let res = await fetch(
        `https://backend-cw-4.onrender.com/Products?id=${id}`
      );
      let data = await res.json();
      console.log(data);
      setProduct(data);
    }
    getDetails();
  }, []);

  return (
    <div className="wrapper">
      <Box className="breadcrump">
        <Breadcrumb
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>
          {Product &&
            Product[0].product_category_tree.map((ele) => {
              return (
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">{ele}</BreadcrumbLink>
                </BreadcrumbItem>
              );
            })}
        </Breadcrumb>
      </Box>
      <Flex className="details-top">
        <Box className="image-box">
          <Box className="wishlist">
            <span class="material-symbols-rounded">favorite</span>
          </Box>
          <Box class="display-img">
            <Image
              height={"300px"}
              display="block"
              margin="auto"
              src={Product && Product[0].image[img]}
            />
          </Box>
          <Flex className="img-button-wrapper">
            {Product &&
              Product[0].image.map((el, index) => {
                return (
                  <Image
                    className="img-button"
                    border={index === img ? "solid red 1px" : "none"}
                    src={el}
                    onClick={() => setImg(index)}
                  />
                );
              })}
          </Flex>
        </Box>
        <Box className="product-info">
          <Flex>
            <Box width="58%" className="prod-name-sold">
              <Text fontSize={"18px"}>
                {Product && Product[0].product_name}
              </Text>
              <Text className="pid">
                Product Id : {Product && Product[0].pid}
              </Text>
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
                  MRP : ₹{Product && Product[0].discounted_price}
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
        </Box>
      </Flex>
    </div>
  );
};

export default ProductDetails;
