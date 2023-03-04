import { Box,        SimpleGrid, Text, VStack } from '@chakra-ui/react'
import Gototop from "../topscroller/Gototop";
import React from 'react'
import "./Footer1.css"
const Footer1 = () => {

  return (
    <>
   <Box backgroundColor="#f7f7f7" color="#6c757d"fontSize="15px" className="CompleteFooter" >
    <hr style={{width:"90%",margin:"auto",color:"black",height:"1px",backgroundColor:"black"}} />
    <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 4 }}  spacing={8}>
        <VStack>
            <ul>
                <li className='headElememt' >Shopper Central</li>
                <li>Easy Returns & Replacement</li>
                <li>Sign In/Register</li>  
                <li>Our Policies</li>
                <li>CluesBucks</li>
                <li>Payment Options</li>
                <li>ShopClues Surety</li>
                <li>FAQs (Help)</li>
                <li>Service Centers</li>                        
                <li>User Agreement</li> 
                <li>Refer & Earn</li>
            </ul>
        </VStack>
        <VStack>
            <ul>
                <li className='headElememt' >Merchant Central</li>
                <li>Merchant Panel</li>
                <li>How To Sell</li>
                <li>Commission Structure</li>
                <li>Fullfillment Policy</li>
                <li>Policies & Rules</li>
                <li>User Agreement</li>
                <li>Testimonials</li>
                <li>Seller Summit</li>
                <li>Merchant Blog</li>
                <li>Developer Resources</li>
                
            </ul>
        </VStack>
        <VStack>
            <ul>
                <li className='headElememt' >About Us</li>
                <li>History</li>
                <li>Band of Trust</li>
                <li>Brand Guidelines</li>
                <li>TV Commercials</li>
                <li>In the News</li>
                <li>Awards</li>
                <li>Careers</li>
                <li>Blog</li>
                
            </ul>
        </VStack>
        <VStack>
            <ul>
                <li className='headElememt' >Contact Us</li>
                <li>Merchant Support</li>
                <li>Bulk Orders</li>
                <li>Press</li>
            </ul>
        </VStack>
        </SimpleGrid>
        <hr style={{width:"85%",margin:"auto"}} />
        
        <SimpleGrid gap={100} columns={{ base: 1, sm: 1, md: 2, lg: 2 }} id='Footer-bottom' >

            <VStack style={{alignItems:"flex-start"}} >
            <Text size='md' style={{color:"black",marginTop:"30px"}} colorScheme='black'>FIND A STORE</Text>
               <input type="text" id='storeInput' placeholder='Store name, location, or ZIP code' style={{fontSize:"16px", padding:"10px",border:"2px solid black" }} />
               <img src="https://user-images.githubusercontent.com/107903370/220611200-7c4d128e-cc8b-4a06-8423-1d6027a2b386.png" alt="connect-withus" />
                
            </VStack>
            <VStack style={{alignItems:"flex-start"}}>
            <Text size='sm' style={{color:"black",marginTop:"30px"}} colorScheme='black'>SIGN UP FOR SAVINGS,NEWS AND UPDATES</Text>
               <input id="emailInput" type="text" placeholder='Email Address' style={{fontSize:"16px", padding:"10px",border:"2px solid black"}} />
               <Text style={{fontSize:"12px",textAlign:"left"}} >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Nihil distinctio assumenda nesciunt, eveniet vel totam <br/> aut, a perferendis sint mollitia. 
               </Text>

            </VStack>
        </SimpleGrid>
   </Box>
   <Gototop/>
   </>
  )
}

export default Footer1