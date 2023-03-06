import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Box, Image, Text, useToast } from "@chakra-ui/react";
import HomeData1 from "../homePage/homedata/HomeData1.json";
import HomeData2 from "../homePage/homedata/HomeData2.json";
import HomeData3 from "../homePage/homedata/HomeData3.json";
import HomeData4 from "../homePage/homedata/HomeData4.json";
import HomeData5 from "../homePage/homedata/HomeData5.json";
import HomeData6 from "../homePage/homedata/HomeData6.json";
import HomeData7 from "../homePage/homedata/HomeData7.json";
import HomeData8 from "../homePage/homedata/HomeData8.json";
import HomeData9 from "../homePage/homedata/HomeData9.json";
import Carousel2 from "./SliderAlt";

const Home1 = () => {
  const toast = useToast();

  React.useEffect(() => {
    toast({
      title: "Allow Insecure Content",
      description:
        "To see all Products in the website, Kindly allow INSECURE CONTENT from your browser setting (Site Settings)",
      status: "warning",
      isClosable: true,
      duration: 150000,
      position: "top",
    });
  }, []);

  return (
    //home page 1st craousel
    <Box>
      <Box style={{ backgroundColor: "#24a3b5", marginTop: "20px" }}>
        <Text style={{ color: "white", padding: "3px 0px" }}>
          Free Shipping on Orders of $30 or More
        </Text>
      </Box>
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        autoPlay
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Box className="carouselImage">
          <img
            src="https://cdn.shopclues.com/images/banners/2023/Jan/20/HB2_Blockbuster_Web_SYM_20Jan23.jpg"
            alt="first"
          />
        </Box>
        <Box className="carouselImage">
          <img
            src="https://cdn.shopclues.com/images/banners/2023/Jan/19/HB1_Refurb_Web_SYM_19Jan23.jpg"
            alt="first"
          />
        </Box>
        <Box className="carouselImage">
          <img
            src="https://cdn.shopclues.com/images/banners/2023/Jan/20/HB3_Prebuzz_Web_SYM_20Jan23.jpg"
            alt="first"
          />
        </Box>
        <Box className="carouselImage">
          <img
            _hover={{ cursor: "pointer" }}
            src="https://cdn.shopclues.com/images/banners/2023/Jan/19/JMAX_HB2_Web_Riya_19Jan22.jpg"
            alt="first"
          />
        </Box>
      </Carousel>

      {/* deals of the day craousel */}
      <Carousel2 data={HomeData1} title={"Deals of the Day"} />

      {/* Trending Fashion Zone craousel */}
      <Carousel2 data={HomeData2} title={"Trending Fashion Zone"} />

      {/* Brand Store craousel */}
      <Carousel2 data={HomeData3} title={"Brand Store"} />

      {/* Daily Essentials craousel */}
      <Carousel2 data={HomeData4} title={"Daily Essentials"} />

      {/* Branded Deals craousel */}
      <Carousel2 data={HomeData5} title={"Branded Deals"} />

      {/* Festive Specials craousel */}
      <Carousel2 data={HomeData6} title={"Festive Specials"} />

      {/* Your Gadgets Store craousel */}
      <Carousel2 data={HomeData7} title={"Your Gadgets Store"} />

      {/* Prime Mall craousel */}
      <Carousel2 data={HomeData8} title={"Prime Mall"} />

      {/* Sports & Health craousel */}
      <Carousel2 data={HomeData9} title={"Sports & Health"} />
    </Box>
  );
};

export default Home1;
