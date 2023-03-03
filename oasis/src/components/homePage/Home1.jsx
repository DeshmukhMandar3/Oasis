import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Box, Image, Text } from '@chakra-ui/react';
import HomeData1 from "../homePage/homedata/HomeData1.json"
import Carousel2 from './SliderAlt';



const Home1 = () => {
  return (

    //home page 1st craousel
    <Box>
         <Box style={{backgroundColor:"#24a3b5",marginTop:"20px"}} >
            <Text style={{color:"white",padding:"3px 0px"}} >Free Shipping on Orders of $30 or More</Text>
        </Box>
  <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay  style={{display:"flex",justifyContent:"center"}} >
          <Box className='carouselImage' >
            <img src="https://cdn.shopclues.com/images/banners/2023/Jan/20/HB2_Blockbuster_Web_SYM_20Jan23.jpg" alt="first" />
          </Box>
          <Box className='carouselImage' >
            <img src="https://cdn.shopclues.com/images/banners/2023/Jan/19/HB1_Refurb_Web_SYM_19Jan23.jpg" alt="first" />
          </Box>
          <Box className='carouselImage' >
            <img src="https://cdn.shopclues.com/images/banners/2023/Jan/20/HB3_Prebuzz_Web_SYM_20Jan23.jpg" alt="first" />
          </Box>
          <Box className='carouselImage' >
            <img _hover={{cursor:"pointer"}} src="https://cdn.shopclues.com/images/banners/2023/Jan/19/JMAX_HB2_Web_Riya_19Jan22.jpg" alt="first" />
          </Box>
          </Carousel>
     
     {/* deals of the day craousel */}
          <Carousel2  data={HomeData1} title={"Deals of the Day"} />

 
      
    </Box>
  )
}

export default Home1