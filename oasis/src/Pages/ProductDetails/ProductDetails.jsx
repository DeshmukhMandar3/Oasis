import React from "react";
import "./ProductDetails.css";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Flex, Image, Spinner, useToast } from "@chakra-ui/react";
import { Authcontext } from "../../AllContexts/AuthContext";
import { useContext } from "react";
import {
  handleAddToCart,
  handleAddToWishlist,
} from "../../components/Products/addFunctions";
import {
  getCart,
  getDetails,
  getWishList,
} from "../../components/Products/getFunctions";
import ProductInfo from "../../components/Products/ProductInfo";
import Coupon from "../../components/Products/Coupon";
import OneMoreOffer from "../../components/Products/OneMoreOffer";
import ItemsAvailable from "../../components/Products/ItemsAvailable";
import Shipping from "../../components/Products/Shipping";
import Returns from "../../components/Products/Returns";
import ProdDetails from "../../components/Products/ProdDetails";
import Ratings from "../../components/Products/Ratings";
import BrdCrumb from "../../components/Products/BrdCrumb";

const ProductDetails = () => {
  const { id } = useParams();
  const [Product, setProduct] = React.useState(null); // Product details state management
  const [img, setImg] = React.useState(0); // Displayed image state management
  const [isLoading, setisLoading] = React.useState(false); // Loader state management
  const [cart, setCart] = React.useState([]); // const cart state management
  const [toggle, setToggle] = React.useState(false); //const state for getcart trigger
  const [wishList, setWishList] = React.useState([]); // wishlist
  //Auth context
  const userData = useContext(Authcontext);
  const { auth } = useContext(Authcontext);
  console.log(auth);

  const userMail = userData.userdata.email;

  //Getting cart data
  React.useEffect(() => {
    getWishList(setisLoading, setWishList);
    getCart(setisLoading, setCart);
  }, [toggle]);

  //Add to cart function
  const toast = useToast({
    title: `Product Added to the cart`,
    status: "success",
    isClosable: true,
    position: "top",
  });

  //Buy now function
  const navigate = useNavigate();
  async function handleBuyNow() {
    handleAddToCart(
      cart,
      Product,
      userMail,
      setisLoading,
      toast,
      setToggle,
      toggle
    );
    navigate("/cart");
  }

  React.useEffect(() => {
    getDetails(setisLoading, setProduct, id);
  }, []);
  return (
    <div className="wrapper">
      {/* Breadcrumb */}
      <BrdCrumb Product={Product} />
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
          <Flex
            className="details-top"
            flexDirection={{ base: "column", md: "row", lg: "row" }}
          >
            <Box
              className="image-box"
              width={{ base: "100%", md: "50%", lg: "50%" }}
            >
              <Box
                className="wishlist"
                onClick={() =>
                  handleAddToWishlist(
                    wishList,
                    Product,
                    userMail,
                    setToggle,
                    toggle,
                    toast
                  )
                }
              >
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
              <ProductInfo Product={Product} />
              <Coupon Product={Product} />
              <OneMoreOffer />
              <Flex className="buttons">
                <button
                  className="add"
                  onClick={() =>
                    handleAddToCart(
                      cart,
                      Product,
                      userMail,
                      setisLoading,
                      toast,
                      setToggle,
                      toggle
                    )
                  }
                >
                  ADD TO CART
                </button>
                <button className="buy" onClick={handleBuyNow}>
                  BUY NOW
                </button>
              </Flex>
              <ItemsAvailable />
              <Shipping />
              <Returns />
            </Box>
          </Flex>
          {/* Product Details */}
          <ProdDetails Product={Product} />
          <Ratings Product={Product} />{" "}
        </>
      )}
    </div>
  );
};

export default ProductDetails;
