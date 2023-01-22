import React from "react";
import "./ProductDetails.css";
import { Link, useParams } from "react-router-dom";
import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  button,
  Flex,
  Image,
  SimpleGrid,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  CircularProgress,
  CircularProgressLabel,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  Spinner,
} from "@chakra-ui/react";
import Star from "../../components/StarRating/StarRating";
import axios from "axios";

const ProductDetails = () => {
  const { id } = useParams();
  // Product details state management
  const [Product, setProduct] = React.useState(null);
  // Displayed image state management
  const [img, setImg] = React.useState(0);
  // Loader state management
  const [isLoading, setisLoading] = React.useState(false);
  // const cart state management
  const [cart, setCart] = React.useState([]);
  //const state for getcart trigger
  const [toggle, setToggle] = React.useState(false);

  //Getting cart data
  React.useEffect(() => {
    async function getCart() {
      setisLoading(true);
      let res = await fetch("https://backend-cw-4.onrender.com/cart");
      let data = await res.json();
      setCart(data);
      setisLoading(false);
    }
    getCart();
  }, [toggle]);

  //Add to cart function
  async function handleAddToCart() {
    let count = 1;
    let id = 0;
    cart.map((el) => {
      if (el.pid === Product[0].id) {
        count = el.count + 1;
        id = el.id;
      }
    });

    if (count > 1) {
      let updated = { id, count };
      setisLoading(true);
      let res = axios.patch(
        `https://backend-cw-4.onrender.com/cart/${id}`,
        updated
      );
      console.log(res);
      setisLoading(false);
      setToggle(!toggle);
    } else {
      id = Date.now();
      let pid = Product[0].id;
      count = 1;
      let details = {
        id,
        pid,
        count,
      };
      setisLoading(true);
      let res1 = axios.post("https://backend-cw-4.onrender.com/cart", details);
      console.log(res1);
      setisLoading(false);
      setToggle(!toggle);
    }
  }

  //Buy now function
  async function handleBuyNow() {}

  React.useEffect(() => {
    async function getDetails() {
      setisLoading(true);
      let res = await fetch(
        `https://backend-cw-4.onrender.com/Products?id=${id}`
      );
      let data = await res.json();
      console.log(data);
      setProduct(data);
      setisLoading(false);
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
      {/* Loader */}
      {isLoading ? (
        <Box padding="100px">
          <Spinner
            thickness="10px"
            speed="1s"
            emptyColor="gray.200"
            color="rgb(36, 163, 181)"
            size="xl"
            padding={"100px"}
          />
        </Box>
      ) : (
        <>
          <Flex className="details-top">
            <Box className="image-box">
              <Box className="wishlist">
                <span class="material-symbols-rounded">favorite</span>
              </Box>
              <Box class="display-img">
                <Image
                  height={"400px"}
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
                    <Box className="l2">
                      ₹{Product && Product[0].discounted_price}
                    </Box>
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
                <Flex className="MYOASIS">
                  <Badge padding="5px" colorScheme="green" variant={"outline"}>
                    MYOASIS
                  </Badge>
                  <Text fontSize={"14px"}>
                    Get Extra 10 Percent off on Prepaid Orders
                  </Text>
                </Flex>
              </Box>
              <Flex className="buttons">
                <button className="add" onClick={handleAddToCart}>
                  ADD TO CART
                </button>
                <button className="buy" onClick={handleBuyNow}>
                  BUY NOW
                </button>
              </Flex>
              <Flex alignItems={"center"}>
                <Flex className="item-av">
                  <span class="material-symbols-outlined">where_to_vote</span>
                  <Text>
                    Item is available at{" "}
                    <span style={{ color: "black" }}>421503</span>
                  </Text>
                </Flex>
                <Text className="change">Change</Text>
              </Flex>
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
              <Box className="Returns">
                <Flex>
                  <span class="material-symbols-outlined">
                    published_with_changes
                  </span>{" "}
                  <Text marginLeft={"5px"}>Easy Returns & Replacement</Text>
                </Flex>
                <Flex>
                  <span class="material-symbols-outlined">credit_card</span>
                  <Text marginLeft={"5px"}>
                    Payment Options:(Credit Card, Debit Card, Net Banking,
                    Wallets, COD)
                  </Text>
                </Flex>
              </Box>
            </Box>
          </Flex>
          {/* Product Details */}
          <Box className="prod-middle">
            <Box>
              <Text className="head">Product Details</Text>
              <Text className="name">{Product && Product[0].product_name}</Text>
            </Box>
            <Box className="tabs">
              <Tabs colorScheme="cyan">
                <TabList>
                  <Tab>Product Description</Tab>
                  <Tab>Specification</Tab>
                  <Tab>Legal Information</Tab>
                </TabList>

                <TabPanels
                  textAlign={"left"}
                  padding={"15px"}
                  lineHeight={"30px"}
                >
                  <TabPanel>
                    <p>{Product && Product[0].description}</p>
                  </TabPanel>
                  <TabPanel>
                    {Product &&
                      Product &&
                      Product[0].product_specifications.product_specification.map(
                        (el) => {
                          if (el.key) {
                            return (
                              <Flex>
                                <Text width="400px">{el.key}</Text>
                                <Text margin={"0px 4px"} color="black">
                                  :
                                </Text>
                                <Text color="black">{el.value}</Text>
                              </Flex>
                            );
                          }
                        }
                      )}
                  </TabPanel>
                  <TabPanel>
                    <Flex>
                      <Text width="400px">
                        Maximum Retail Price (inclusive of all taxes)
                      </Text>
                      <Text color="black">
                        : ₹{Product && Product[0].retail_price}
                      </Text>
                    </Flex>
                    <Flex>
                      <Text width="400px">Common or Generic Name</Text>
                      <Text color="black">: -</Text>
                    </Flex>
                    <Flex>
                      <Text width="400px">Net Contents / Net Quantity</Text>
                      <Text color="black">: -</Text>
                    </Flex>
                    <Flex>
                      <Text width="400px">Manufacturer's Name and Address</Text>
                      <Text color="black">: -</Text>
                    </Flex>
                    <Flex>
                      <Text width="400px">Packer's Name and Address</Text>
                      <Text color="black">: -</Text>
                    </Flex>
                    <Flex>
                      <Text width="400px">Importer's Name and Address</Text>
                      <Text color="black">: -</Text>
                    </Flex>
                    <Flex>
                      <Text width="400px">
                        Country of Origin / Manufacture / Assembly
                      </Text>
                      <Text color="black">: India</Text>
                    </Flex>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
          </Box>
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
                    <CircularProgressLabel
                      color="rgb(255,140,78)"
                      fontSize={"35px"}
                    >
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
          </Box>{" "}
        </>
      )}
    </div>
  );
};

export default ProductDetails;
